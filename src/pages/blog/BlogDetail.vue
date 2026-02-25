<!-- @format -->

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { getBlogById, getRelatedPosts, blogCategories, blogTags } from "@/data/blogData.js";
import MainHero from "@/pages/MainHero.vue";

const route = useRoute();
const router = useRouter();

const blog = computed(() => {
  const id = route.params.id;
  return getBlogById(id);
});

const relatedPosts = computed(() => {
  if (!blog.value) return [];
  return getRelatedPosts(blog.value.id, blog.value.category, 3);
});

const searchQuery = ref("");

const handleSearch = () => {
  if (searchQuery.value.trim()) {
    router.push({
      path: "/blog",
      query: { search: searchQuery.value.trim() },
    });
  }
};

const navigateToCategory = (categoryId) => {
  router.push({
    path: "/blog",
    query: { category: categoryId },
  });
};

const navigateToTag = (tag) => {
  router.push({
    path: "/blog",
    query: { tag: tag },
  });
};

const formatDate = (dateString) => {
  return dateString;
};

onMounted(() => {
  if (!blog.value) {
    router.push("/blog");
  }
  window.scrollTo(0, 0);
});
</script>

<template>
  <div v-if="blog">
    <!-- Hero -->
    <MainHero variant="centered" :title="blog.title" :showBreadcrumb="true" eyebrow="Artikel" eyebrowIcon="fa-newspaper" />

    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid xl:grid-cols-3 gap-8">
          <!-- Main Content -->
          <div class="xl:col-span-2">
            <article class="bg-white rounded-2xl shadow-sm overflow-hidden">
              <!-- Featured Image -->
              <div class="relative h-64 md:h-96 overflow-hidden">
                <img :src="blog.image" :alt="blog.title" class="w-full h-full object-cover" @error="$event.target.src = '/images/blog/placeholder.webp'" />
                <div class="absolute top-4 left-4">
                  <span class="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {{ blogCategories.find((c) => c.id === blog.category)?.name || blog.category }}
                  </span>
                </div>
              </div>

              <!-- Article Content -->
              <div class="p-6 md:p-8">
                <!-- Meta -->
                <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-white">
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-user text-orange-500"></i>
                    <span>{{ blog.author }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-calendar text-orange-500"></i>
                    <span>{{ blog.date }}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <i class="fa-solid fa-clock text-orange-500"></i>
                    <span>{{ blog.readTime }} baca</span>
                  </div>
                </div>

                <!-- Title -->
                <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">{{ blog.title }}</h1>

                <!-- Content -->
                <div class="prose prose-orange max-w-none blog-content" v-html="blog.content"></div>

                <!-- Tags -->
                <div class="mt-8 pt-6 border-t border-gray-100">
                  <h4 class="text-sm font-semibold text-gray-700 mb-3">Tags:</h4>
                  <div class="flex flex-wrap gap-2">
                    <button v-for="tag in blog.tags" :key="tag" @click="navigateToTag(tag)" class="px-3 py-1 bg-orange-50 text-orange-600 text-sm rounded-full hover:bg-orange-100 transition-colors">
                      {{ tag }}
                    </button>
                  </div>
                </div>

                <!-- Share -->
                <div class="mt-6 pt-6 border-t border-gray-100">
                  <h4 class="text-sm font-semibold text-gray-700 mb-3">Bagikan:</h4>
                  <div class="flex gap-3">
                    <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
                      <i class="fa-brands fa-whatsapp"></i>
                    </a>
                    <a href="#" class="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                      <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            <!-- Related Posts -->
            <div v-if="relatedPosts.length > 0" class="mt-8">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Artikel Terkait</h3>
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <article v-for="post in relatedPosts" :key="post.id" class="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                  <router-link :to="`/blog/${post.id}`" class="block">
                    <div class="h-40 overflow-hidden">
                      <img :src="post.image" :alt="post.title" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" @error="$event.target.src = '/images/blog/placeholder.webp'" />
                    </div>
                    <div class="p-4">
                      <span class="text-xs text-orange-500 font-medium">{{ blogCategories.find((c) => c.id === post.category)?.name }}</span>
                      <h4 class="font-semibold text-gray-900 mt-1 line-clamp-2 hover:text-orange-600 transition-colors">{{ post.title }}</h4>
                      <p class="text-sm text-white mt-2">{{ post.date }}</p>
                    </div>
                  </router-link>
                </article>
              </div>
            </div>
          </div>

          <!-- Sidebar -->
          <aside class="xl:col-span-1">
            <!-- Search -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h4 class="font-semibold text-gray-900 mb-4">Cari Artikel</h4>
              <div class="relative">
                <input v-model="searchQuery" @keyup.enter="handleSearch" type="text" placeholder="Kata kunci..." class="w-full px-4 py-3 pr-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                <button @click="handleSearch" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-500">
                  <i class="fa-solid fa-search"></i>
                </button>
              </div>
            </div>

            <!-- Categories -->
            <div class="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h4 class="font-semibold text-gray-900 mb-4">Kategori</h4>
              <ul class="space-y-2">
                <li v-for="category in blogCategories" :key="category.id">
                  <button @click="navigateToCategory(category.id)" class="w-full flex items-center justify-between py-2 text-gray-600 hover:text-orange-600 transition-colors">
                    <span class="flex items-center gap-2">
                      <i class="fa-solid fa-folder text-orange-400 text-sm"></i>
                      {{ category.name }}
                    </span>
                    <span class="text-xs bg-gray-100 text-white px-2 py-1 rounded-full">{{ category.count }}</span>
                  </button>
                </li>
              </ul>
            </div>

            <!-- Tags -->
            <div class="bg-white rounded-xl shadow-sm p-6">
              <h4 class="font-semibold text-gray-900 mb-4">Tag Populer</h4>
              <div class="flex flex-wrap gap-2">
                <button v-for="tag in blogTags.slice(0, 8)" :key="tag" @click="navigateToTag(tag)" class="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg hover:bg-orange-100 hover:text-orange-600 transition-colors">
                  {{ tag }}
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </div>

  <!-- Not Found -->
  <div v-else class="min-h-screen flex items-center justify-center bg-gray-50">
    <div class="text-center">
      <i class="fa-solid fa-file-circle-xmark text-6xl text-gray-300 mb-4"></i>
      <h2 class="text-2xl font-bold text-gray-700 mb-2">Artikel Tidak Ditemukan</h2>
      <p class="text-white mb-6">Maaf, artikel yang Anda cari tidak tersedia.</p>
      <router-link to="/blog" class="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors">
        <i class="fa-solid fa-arrow-left"></i>
        Kembali ke Blog
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.blog-content :deep(h3) {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.blog-content :deep(p) {
  margin-bottom: 1rem;
  line-height: 1.75;
  color: #4b5563;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}

.blog-content :deep(li) {
  margin-bottom: 0.5rem;
  color: #4b5563;
}

.blog-content :deep(strong) {
  color: #1f2937;
  font-weight: 600;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
