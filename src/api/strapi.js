// @format

const STRAPI_URL = "https://promising-gem-a8c60e1f18.strapiapp.com";
const API_URL = `${STRAPI_URL}/api`;

/**
 * Generic fetch wrapper for Strapi API
 */
async function strapiRequest(endpoint, params = {}) {
  const url = new URL(`${API_URL}${endpoint}`);

  // Add query params
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.append(key, value);
    }
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

/**
 * Convert Strapi Blocks content to HTML
 * Strapi v5 uses Blocks editor which returns JSON instead of HTML
 */
function blocksToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "";

  return blocks
    .map((block) => {
      switch (block.type) {
        case "paragraph":
          return `<p>${childrenToHtml(block.children)}</p>`;
        case "heading": {
          const level = block.level || 2;
          return `<h${level}>${childrenToHtml(block.children)}</h${level}>`;
        }
        case "list": {
          const tag = block.format === "ordered" ? "ol" : "ul";
          const items = block.children
            .map((item) => `<li>${childrenToHtml(item.children)}</li>`)
            .join("");
          return `<${tag}>${items}</${tag}>`;
        }
        case "quote":
          return `<blockquote>${childrenToHtml(block.children)}</blockquote>`;
        case "code":
          return `<pre><code>${childrenToHtml(block.children)}</code></pre>`;
        case "image":
          return `<img src="${getStrapiMediaUrl(block.image?.url)}" alt="${block.image?.alternativeText || ""}" />`;
        default:
          return childrenToHtml(block.children || []);
      }
    })
    .join("\n");
}

/**
 * Convert children nodes (inline elements) to HTML
 */
function childrenToHtml(children) {
  if (!children || !Array.isArray(children)) return "";

  return children
    .map((child) => {
      if (child.type === "text") {
        let text = child.text || "";
        if (child.bold) text = `<strong>${text}</strong>`;
        if (child.italic) text = `<em>${text}</em>`;
        if (child.underline) text = `<u>${text}</u>`;
        if (child.strikethrough) text = `<s>${text}</s>`;
        if (child.code) text = `<code>${text}</code>`;
        return text;
      }
      if (child.type === "link") {
        return `<a href="${child.url}" target="_blank" rel="noopener">${childrenToHtml(child.children)}</a>`;
      }
      if (child.type === "list-item") {
        return childrenToHtml(child.children);
      }
      return child.text || "";
    })
    .join("");
}

/**
 * Get full URL for Strapi media
 */
function getStrapiMediaUrl(url) {
  if (!url) return "/images/blog/placeholder.webp";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

/**
 * Transform Strapi article response to match existing blogData format
 * Field mapping (Strapi Indonesia → Vue frontend):
 *   judul → title
 *   ringkasan → excerpt
 *   konten → content (Blocks → HTML)
 *   gambar → image/thumbnail
 *   penulis → author
 *   unggulan → featured
 *   kategori (relasi) → category
 *   tags (relasi) → tags
 */
function transformArticle(strapiArticle) {
  const a = strapiArticle;

  // Handle kategori relation
  let categoryId = "berita";
  let categoryName = "Berita Terkini";
  if (a.kategori) {
    categoryId = a.kategori.slug || a.kategori.nama?.toLowerCase().replace(/\s+/g, "-") || "berita";
    categoryName = a.kategori.nama || "Berita Terkini";
  }

  // Handle tags relation (array of tag objects)
  let tags = [];
  if (a.tags && Array.isArray(a.tags)) {
    tags = a.tags.map((t) => t.nama || t);
  }

  return {
    id: a.documentId || a.id,
    numericId: a.id,
    title: a.judul || "Untitled",
    slug: a.slug || "",
    excerpt: a.ringkasan || "",
    content: blocksToHtml(a.konten),
    image: a.gambar?.url
      ? getStrapiMediaUrl(a.gambar.url)
      : "/images/blog/placeholder.webp",
    thumbnail: a.gambar?.formats?.thumbnail?.url
      ? getStrapiMediaUrl(a.gambar.formats.thumbnail.url)
      : "/images/blog/placeholder.webp",
    category: categoryId,
    categoryName: categoryName,
    tags: tags,
    author: a.penulis || "Tim Caya Medical",
    date: formatDate(a.publishedAt || a.createdAt),
    readTime: estimateReadTime(a.konten),
    featured: a.unggulan || false,
    source: "strapi",
  };
}

/**
 * Transform Strapi kategori response
 */
function transformKategori(strapiKategori) {
  const k = strapiKategori;
  return {
    id: k.slug || k.nama?.toLowerCase().replace(/\s+/g, "-") || String(k.id),
    documentId: k.documentId || k.id,
    name: k.nama,
    slug: k.slug,
    count: k.artikels?.count ?? k.artikels?.length ?? 0,
  };
}

/**
 * Format date to Indonesian locale
 */
function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Estimate read time based on content blocks
 */
function estimateReadTime(blocks) {
  if (!blocks || !Array.isArray(blocks)) return "3 menit";
  const text = blocks
    .map((b) => {
      if (b.children) {
        return b.children.map((c) => c.text || "").join(" ");
      }
      return "";
    })
    .join(" ");
  const words = text.split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} menit`;
}

// ============================================
// Public API functions
// ============================================

/**
 * Fetch all articles from Strapi (with relations populated)
 */
export async function fetchArticles({ page = 1, pageSize = 25, sort = "publishedAt:desc" } = {}) {
  const result = await strapiRequest("/articles", {
    "pagination[page]": page,
    "pagination[pageSize]": pageSize,
    "sort": sort,
    "populate[kategori]": "true",
    "populate[tags]": "true",
    "populate[gambar]": "true",
  });

  return {
    articles: result.data.map(transformArticle),
    pagination: result.meta.pagination,
  };
}

/**
 * Fetch a single article by documentId or slug
 */
export async function fetchArticleBySlug(slugOrId) {
  // Try by documentId first
  try {
    const result = await strapiRequest(`/articles/${slugOrId}`, {
      "populate[kategori]": "true",
      "populate[tags]": "true",
      "populate[gambar]": "true",
    });
    if (result.data) {
      return transformArticle(result.data);
    }
  } catch (e) {
    // If not found by documentId, try by slug filter
  }

  // Try by slug
  const result = await strapiRequest("/articles", {
    "filters[slug][$eq]": slugOrId,
    "populate[kategori]": "true",
    "populate[tags]": "true",
    "populate[gambar]": "true",
  });

  if (result.data && result.data.length > 0) {
    return transformArticle(result.data[0]);
  }

  return null;
}

/**
 * Search articles
 */
export async function searchArticles(query) {
  const result = await strapiRequest("/articles", {
    "filters[$or][0][judul][$containsi]": query,
    "filters[$or][1][ringkasan][$containsi]": query,
    "populate[kategori]": "true",
    "populate[tags]": "true",
    "populate[gambar]": "true",
    "sort": "publishedAt:desc",
  });

  return result.data.map(transformArticle);
}

/**
 * Fetch all categories from Strapi (with article count)
 */
export async function fetchCategories() {
  const result = await strapiRequest("/kategoris", {
    "populate[artikels][count]": "true",
    "sort": "nama:asc",
  });

  return result.data.map(transformKategori);
}

/**
 * Fetch all tags from Strapi
 */
export async function fetchTags() {
  const result = await strapiRequest("/tags", {
    "sort": "nama:asc",
  });

  return result.data.map((t) => t.nama);
}

export { STRAPI_URL, getStrapiMediaUrl };
