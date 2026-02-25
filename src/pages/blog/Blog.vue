<!-- @format -->

<script setup>
import { ref, computed, watch, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { blogPosts, blogCategories, blogTags, getBlogsByCategory, getBlogsByTag, searchBlogs } from "@/data/blogData.js";
import MainHero from "@/pages/MainHero.vue";

const route = useRoute();
const router = useRouter();

// State
const searchQuery = ref("");
const selectedCategory = ref("all");
const selectedTag = ref("");
const displayedPosts = ref([]);
const postsPerPage = 6;
const currentPage = ref(1);

// Initialize from URL query
onMounted(() => {
  const { search, category, tag } = route.query;
  if (search) searchQuery.value = search;
  if (category) selectedCategory.value = category;
  if (tag) selectedTag.value = tag;
  filterPosts();
});

// Watch for query changes
watch(
  () => route.query,
  (newQuery) => {
    const { search, category, tag } = newQuery;
    searchQuery.value = search || "";
    selectedCategory.value = category || "all";
    selectedTag.value = tag || "";
    filterPosts();
  },
);

// Filter posts based on search, category, and tag
const filterPosts = () => {
  let filtered = [...blogPosts];

  // Filter by category
  if (selectedCategory.value && selectedCategory.value !== "all") {
    filtered = getBlogsByCategory(selectedCategory.value);
  }

  // Filter by tag
  if (selectedTag.value) {
    filtered = getBlogsByTag(selectedTag.value);
  }

  // Filter by search
  if (searchQuery.value) {
    filtered = searchBlogs(searchQuery.value);
  }

  displayedPosts.value = filtered;
  currentPage.value = 1;
};

// Computed
const filteredPosts = computed(() => {
  return displayedPosts.value;
});

const paginatedPosts = computed(() => {
  const start = 0;
  const end = currentPage.value * postsPerPage;
  return filteredPosts.value.slice(start, end);
});

const hasMorePosts = computed(() => {
  return paginatedPosts.value.length < filteredPosts.value.length;
});

const featuredPost = computed(() => {
  return blogPosts.find((post) => post.featured) || blogPosts[0];
});

// Methods
const handleSearch = () => {
  updateQuery({ search: searchQuery.value || undefined });
};

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  searchQuery.value = "";
  selectedTag.value = "";
  updateQuery({
    category: categoryId === "all" ? undefined : categoryId,
    search: undefined,
    tag: undefined,
  });
};

const selectTag = (tag) => {
  selectedTag.value = tag;
  selectedCategory.value = "all";
  searchQuery.value = "";
  updateQuery({
    tag: tag,
    category: undefined,
    search: undefined,
  });
};

const clearFilters = () => {
  searchQuery.value = "";
  selectedCategory.value = "all";
  selectedTag.value = "";
  updateQuery({});
};

const updateQuery = (newQuery) => {
  router.replace({
    path: "/blog",
    query: Object.keys(newQuery).length > 0 ? newQuery : undefined,
  });
};

const loadMore = () => {
  currentPage.value++;
};

const formatDate = (dateString) => {
  return dateString;
};

const getCategoryName = (categoryId) => {
  const category = blogCategories.find((c) => c.id === categoryId);
  return category ? category.name : categoryId;
};
</script>

<template>
  <div>
    <!-- Hero -->
    <MainHero variant="centered" title="Berita & Edukasi" subtitle="Informasi Terkini Seputar Kesehatan" :showBreadcrumb="true" :showSocialSidebar="true" :showTwitter="true" eyebrow="Konten" eyebrowIcon="fa-book-open" />

    <!-- Main Content -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <!-- Featured Post -->
        <div v-if="!searchQuery && selectedCategory === 'all' && !selectedTag" class="mb-12">
          <div class="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div class="grid lg:grid-cols-2 gap-0">
              <div class="relative h-64 lg:h-auto overflow-hidden">
                <img :src="featuredPost.image" :alt="featuredPost.title" class="w-full h-full object-cover" @error="$event.target.src = '/images/blog/placeholder.webp'" />
                <div class="absolute top-4 left-4">
                  <span class="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full"> Unggulan </span>
                </div>
              </div>
              <div class="p-6 lg:p-8 flex flex-col justify-center">
                <div class="flex items-center gap-3 mb-3">
                  <span class="text-sm text-orange-500 font-medium">{{ getCategoryName(featuredPost.category) }}</span>
                  <span class="text-gray-300">|</span>
                  <span class="text-sm text-white">{{ featuredPost.date }}</span>
                </div>
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 hover:text-orange-600 transition-colors">
                  <router-link :to="`/blog/${featuredPost.id}`">{{ featuredPost.title }}</router-link>
                </h2>
                <p class="text-gray-600 mb-6 line-clamp-3">{{ featuredPost.excerpt }}</p>
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <i class="fa-solid fa-user text-orange-500"></i>
                    </div>
                    <div>
                      <p class="text-sm font-medium text-gray-900">{{ featuredPost.author }}</p>
                      <p class="text-xs text-white">{{ featuredPost.readTime }} baca</p>
                    </div>
                  </div>
                  <router-link :to="`/blog/${featuredPost.id}`" class="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors">
                    Baca Selengkapnya
                    <i class="fa-solid fa-arrow-right"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="grid xl:grid-cols-3 gap-8">
          <!-- Blog Grid -->
          <div class="xl:col-span-2">
            <!-- Filter Status -->
            <div v-if="searchQuery || selectedCategory !== 'all' || selectedTag" class="mb-6 flex items-center justify-between bg-white p-4 rounded-lg shadow-sm">
              <div class="flex items-center gap-2">
                <span class="text-gray-600">Menampilkan hasil untuk:</span>
                <span v-if="searchQuery" class="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  "{{ searchQuery }}"
                  <button @click="clearFilters" class="hover:text-orange-900"><i class="fa-solid fa-times"></i></button>
                </span>
                <span v-if="selectedCategory !== 'all'" class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  {{ getCategoryName(selectedCategory) }}
                  <button @click="clearFilters" class="hover:text-blue-900"><i class="fa-solid fa-times"></i></button>
                </span>
                <span v-if="selectedTag" class="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-2">
                  #{{ selectedTag }}
                  <button @click="clearFilters" class="hover:text-green-900"><i class="fa-solid fa-times"></i></button>
                </span>
              </div>
              <button @click="clearFilters" class="text-sm text-white hover:text-orange-600">Hapus Filter</button>
            </div>

            <!-- Posts Grid -->
            <div v-if="paginatedPosts.length > 0" class="grid md:grid-cols-2 gap-6">
              <article v-for="post in paginatedPosts" :key="post.id" class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
                <router-link :to="`/blog/${post.id}`" class="block">
                  <div class="relative h-48 overflow-hidden">
                    <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" @error="$event.target.src = '/images/blog/placeholder.webp'" />
                    <div class="absolute top-3 left-3">
                      <span class="bg-white/90 backdrop-blur text-orange-600 text-xs font-medium px-2 py-1 rounded-full">{{ getCategoryName(post.category) }}</span>
                    </div>
                  </div>
                  <div class="p-5">
                    <div class="flex items-center gap-3 mb-3 text-xs text-white">
                      <span class="flex items-center gap-1"><i class="fa-regular fa-calendar"></i> {{ post.date }}</span>
                      <span class="flex items-center gap-1"><i class="fa-regular fa-clock"></i> {{ post.readTime }}</span>
                    </div>
                    <h3 class="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">{{ post.title }}</h3>
                    <p class="text-sm text-gray-600 line-clamp-2 mb-4">{{ post.excerpt }}</p>
                    <div class="flex items-center justify-between">
                      <span class="text-xs text-white flex items-center gap-1">
                        <i class="fa-solid fa-user-circle"></i>
                        {{ post.author }}
                      </span>
                      <span class="text-sm font-medium text-orange-600 group-hover:translate-x-1 transition-transform">Baca <i class="fa-solid fa-arrow-right text-xs"></i></span>
                    </div>
                  </div>
                </router-link>
              </article>
            </div>

            <!-- Empty State -->
            <div v-else class="text-center py-16 bg-white rounded-2xl">
              <i class="fa-solid fa-search text-5xl text-gray-200 mb-4"></i>
              <h3 class="text-xl font-semibold text-gray-700 mb-2">Tidak ada artikel ditemukan</h3>
              <p class="text-white mb-6">Coba ubah kata kunci pencarian atau filter kategori</p>
              <button @click="clearFilters" class="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">Lihat Semua Artikel</button>
            </div>

            <!-- Load More -->
            <div v-if="hasMorePosts" class="text-center mt-8">
              <button @click="loadMore" class="inline-flex items-center gap-2 bg-white text-gray-700 px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all">
                <i class="fa-solid fa-rotate-right"></i>
                Muat Lebih Banyak
              </button>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="xl:col-span-1 space-y-6">
            <!-- Search -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <i class="fa-solid fa-magnifying-glass text-orange-500"></i>
                Cari Artikel
              </h4>
              <div class="relative">
                <input v-model="searchQuery" @keyup.enter="handleSearch" type="text" placeholder="Kata kunci..." class="w-full px-4 py-3 pr-12 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                <button @click="handleSearch" class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 bg-orange-500 text-white rounded-md flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <i class="fa-solid fa-arrow-right text-sm"></i>
                </button>
              </div>
            </div>

            <!-- Categories -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <i class="fa-solid fa-folder-open text-orange-500"></i>
                Kategori
              </h4>
              <ul class="space-y-1">
                <li v-for="category in blogCategories" :key="category.id">
                  <button @click="selectCategory(category.id)" :class="['w-full flex items-center justify-between py-2.5 px-3 rounded-lg transition-colors', selectedCategory === category.id ? 'bg-orange-50 text-orange-600' : 'text-gray-600 hover:bg-gray-50']">
                    <span class="flex items-center gap-3">
                      <i :class="['fa-solid text-sm', selectedCategory === category.id ? 'fa-folder-open' : 'fa-folder']"></i>
                      {{ category.name }}
                    </span>
                    <span :class="['text-xs px-2 py-0.5 rounded-full', selectedCategory === category.id ? 'bg-orange-200 text-orange-700' : 'bg-gray-100 text-white']">{{ category.count }}</span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Recent Posts -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <i class="fa-solid fa-clock-rotate-left text-orange-500"></i>
                Terbaru
              </h4>
              <div class="space-y-4">
                <router-link v-for="post in blogPosts.slice(0, 3)" :key="post.id" :to="`/blog/${post.id}`" class="flex gap-4 group">
                  <div class="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform" @error="$event.target.src = '/images/blog/placeholder.webp'" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <span class="text-xs text-orange-500 font-medium">{{ getCategoryName(post.category) }}</span>
                    <h5 class="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-orange-600 transition-colors">{{ post.title }}</h5>
                    <p class="text-xs text-white mt-1">{{ post.date }}</p>
                  </div>
                </router-link>
              </div>
            </div>

            <!-- Tags -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h4 class="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <i class="fa-solid fa-tags text-orange-500"></i>
                Tag Populer
              </h4>
              <div class="flex flex-wrap gap-2">
                <button v-for="tag in blogTags" :key="tag" @click="selectTag(tag)" :class="['px-3 py-1.5 text-sm rounded-lg transition-colors', selectedTag === tag ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-orange-100 hover:text-orange-600']">
                  {{ tag }}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
