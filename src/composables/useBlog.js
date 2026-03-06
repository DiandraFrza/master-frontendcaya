// @format

import { ref } from "vue";
import {
  fetchArticles,
  fetchArticleBySlug,
  searchArticles,
  fetchCategories,
  fetchTags,
} from "@/api/strapi.js";
import {
  blogPosts as staticPosts,
  blogCategories as staticCategories,
  blogTags as staticTags,
  getBlogById as staticGetBlogById,
  getRelatedPosts as staticGetRelatedPosts,
  searchBlogs as staticSearchBlogs,
} from "@/data/blogData.js";

/**
 * Composable for fetching blog data from Strapi with static data fallback.
 */
export function useBlog() {
  const posts = ref([]);
  const categories = ref([]);
  const tags = ref([]);
  const loading = ref(false);
  const error = ref(null);
  const pagination = ref(null);
  const isStrapi = ref(false);

  async function loadPosts({ page = 1, pageSize = 25, category = null } = {}) {
    loading.value = true;
    error.value = null;

    try {
      // Fetch articles, categories, and tags in parallel
      const [articlesResult, cats, tgs] = await Promise.all([
        fetchArticles({ page, pageSize, category }),
        fetchCategories().catch(() => []),
        fetchTags().catch(() => []),
      ]);

      posts.value = articlesResult.articles;
      pagination.value = articlesResult.pagination;
      isStrapi.value = true;

      // Build categories with article counts
      if (cats.length > 0) {
        // Calculate total articles
        const totalArticles = articlesResult.pagination.total || posts.value.length;

        // Build category list with "Semua" at the top
        categories.value = [
          { id: "all", name: "Semua", count: totalArticles },
          ...cats.map((cat) => ({
            id: cat.slug || cat.id,
            name: cat.name,
            count: cat.count || 0,
          })),
        ];
      } else {
        // Fallback: compute counts from loaded articles
        categories.value = buildCategoriesFromPosts(posts.value);
      }

      tags.value = tgs.length > 0 ? tgs : buildTagsFromPosts(posts.value);

    } catch (e) {
      console.warn("Strapi tidak tersedia, menggunakan data statis:", e.message);
      // Add categoryName to static posts, filter by category if provided
      let filteredPosts = staticPosts;
      if (category) {
        filteredPosts = staticPosts.filter((p) => p.category === category);
      }
      posts.value = filteredPosts.map((p) => ({
        ...p,
        categoryName: staticCategories.find((c) => c.id === p.category)?.name || p.category,
      }));
      categories.value = [...staticCategories];
      tags.value = [...staticTags];
      isStrapi.value = false;
    } finally {
      loading.value = false;
    }
  }

  return { posts, categories, tags, loading, error, pagination, isStrapi, loadPosts };
}

/**
 * Build categories from posts (fallback when Strapi categories not available)
 */
function buildCategoriesFromPosts(posts) {
  const counts = {};
  posts.forEach((post) => {
    const cat = post.category || "lainnya";
    const catName = post.categoryName || cat;
    if (!counts[cat]) counts[cat] = { id: cat, name: catName, count: 0 };
    counts[cat].count++;
  });

  return [
    { id: "all", name: "Semua", count: posts.length },
    ...Object.values(counts),
  ];
}

/**
 * Build tags from posts (fallback when Strapi tags not available)
 */
function buildTagsFromPosts(posts) {
  const tagSet = new Set();
  posts.forEach((post) => {
    if (post.tags) {
      post.tags.forEach((t) => tagSet.add(t));
    }
  });
  return [...tagSet];
}

/**
 * Composable for fetching a single blog post
 */
export function useBlogDetail() {
  const post = ref(null);
  const relatedPosts = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function loadPost(idOrSlug) {
    loading.value = true;
    error.value = null;

    try {
      const article = await fetchArticleBySlug(idOrSlug);
      if (article) {
        post.value = article;
        // For related posts, try Strapi
        try {
          const result = await fetchArticles({ pageSize: 10 });
          relatedPosts.value = result.articles
            .filter((a) => a.id !== article.id && a.category === article.category)
            .slice(0, 3);

          // If no same-category posts, show any other posts
          if (relatedPosts.value.length === 0) {
            relatedPosts.value = result.articles
              .filter((a) => a.id !== article.id)
              .slice(0, 3);
          }
        } catch {
          relatedPosts.value = [];
        }
        loading.value = false;
        return;
      }
    } catch (e) {
      console.warn("Strapi tidak tersedia, menggunakan data statis:", e.message);
    }

    // Fallback to static data
    const staticPost = staticGetBlogById(idOrSlug);
    if (staticPost) {
      const catName = staticCategories.find((c) => c.id === staticPost.category)?.name || staticPost.category;
      post.value = { ...staticPost, categoryName: catName };
      relatedPosts.value = staticGetRelatedPosts(staticPost.id, staticPost.category, 3).map((p) => ({
        ...p,
        categoryName: staticCategories.find((c) => c.id === p.category)?.name || p.category,
      }));
    } else {
      post.value = null;
      error.value = "Artikel tidak ditemukan";
    }

    loading.value = false;
  }

  return { post, relatedPosts, loading, error, loadPost };
}

/**
 * Composable for blog search
 */
export function useBlogSearch() {
  const results = ref([]);
  const loading = ref(false);

  async function search(query) {
    if (!query || !query.trim()) {
      results.value = [];
      return;
    }

    loading.value = true;

    try {
      results.value = await searchArticles(query);
    } catch (e) {
      console.warn("Strapi search gagal, menggunakan data statis:", e.message);
      results.value = staticSearchBlogs(query);
    } finally {
      loading.value = false;
    }
  }

  return { results, loading, search };
}
