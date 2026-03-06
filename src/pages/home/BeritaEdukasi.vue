<!-- @format -->
<script setup>
import { ref, onMounted } from "vue";
import { useBlog } from "@/composables/useBlog.js";

// Use Strapi data with fallback
const { posts, loading, isStrapi, loadPosts } = useBlog();
const displayNews = ref([]);

// Static fallback data
const staticNews = [
  {
    id: 1,
    title: "Caya Lab Luncurkan Layanan Home Service 24 Jam",
    date: "12 Mar 2026",
    category: "Berita",
    image: "/assets/blog/middle/img1.webp",
    summary: "Kini layanan pengambilan sampel darah bisa dilakukan di rumah Anda kapan saja dengan tenaga medis profesional.",
    link: "/blog/home-service-24-jam",
  },
  {
    id: 2,
    title: "Promo Kemerdekaan: Diskon 17% Untuk MCU Plus",
    date: "05 Agu 2025",
    category: "Promo",
    image: "/assets/blog/middle/img1.webp",
    summary: "Rayakan kemerdekaan dengan tubuh sehat. Dapatkan potongan harga khusus untuk paket Medical Check Up Plus.",
    link: "/blog/promo-mcu-merdeka",
  },
  {
    id: 3,
    title: "Pelatihan K3 Untuk Perusahaan Mitra Caya",
    date: "20 Feb 2025",
    category: "Corporate",
    image: "/assets/blog/middle/img1.webp",
    summary: "Caya Lab menyelenggarakan pelatihan Kesehatan dan Keselamatan Kerja terpadu untuk 50 perusahaan mitra.",
    link: "/blog/pelatihan-k3-corporate",
  },
];

onMounted(async () => {
  // Fetch only "berita" category articles
  await loadPosts({ pageSize: 3, category: "berita" });
  if (posts.value.length > 0) {
    // Map Strapi articles to the card format
    displayNews.value = posts.value.slice(0, 3).map((post) => ({
      id: post.id,
      title: post.title,
      date: post.date || "Terbaru",
      category: post.categoryName || post.category || "Berita",
      image: post.image,
      summary: post.excerpt || "",
      link: `/blog/${post.id}`,
    }));
  } else if (isStrapi.value) {
    // Strapi connected but no 'berita' articles found
    displayNews.value = [];
  } else {
    // Strapi disconnected, fallback
    displayNews.value = staticNews;
  }
});
</script>

<template>
  <section class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div>
          <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <i class="fa-solid fa-photo-film"></i>
            <span class="font-semibold text-sm">Update Terbaru</span>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Berita Terkini Caya</h3>
          <p class="text-gray-600 max-w-xl text-lg text-left whitespace-nowrap">Temukan informasi terbaru tentang layanan laboratorium, program kesehatan, dan aktivitas Caya Lab.</p>
        </div>

        <router-link to="/blog" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#ff562c] font-bold text-sm bg-[#ff562c]/10 px-4 py-2 rounded-full hover:bg-[#ff562c]/20 transition-colors">
          <span>Lihat Semua</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 3" :key="n" class="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
          <div class="h-56 bg-gray-200"></div>
          <div class="p-6">
            <div class="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
            <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="!loading && displayNews.length === 0" class="text-center py-16 bg-white rounded-2xl shadow-sm border border-orange-100/50">
        <i class="fa-solid fa-file-circle-xmark text-5xl text-gray-200 mb-4"></i>
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Belum ada berita terkini</h3>
        <p class="text-gray-500 mb-6">Informasi terbaru akan segera diperbarui oleh tim Caya.</p>
      </div>

      <!-- Articles Grid -->
      <div v-else-if="!loading && displayNews.length > 0" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="post in displayNews" :key="post.id" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-orange-50 hover:border-orange-200 hover:-translate-y-2">
          <!-- Image Container -->
          <div class="relative overflow-hidden h-56">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" @error="$event.target.src = '/images/blog/placeholder.webp'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <!-- Date -->
            <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur text-gray-900 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-semibold">
              <i class="fa-solid fa-calendar"></i>
              {{ post.date }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h4 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
              {{ post.title }}
            </h4>

            <p class="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
              {{ post.summary }}
            </p>

            <!-- Read More Link -->
            <router-link :to="post.link" class="inline-flex items-center gap-2 text-[#ff562c] font-bold text-sm group/link">
              Baca Selengkapnya
              <svg class="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
