<!-- @format -->
<script setup>
import { ref, onMounted } from "vue";
import { useBlog } from "@/composables/useBlog.js";

// Use Strapi data with fallback
const { posts, loading, loadPosts } = useBlog();
const displayNews = ref([]);

// Static fallback data
const staticNews = [
  {
    id: 1,
    title: "Program CSR Pemeriksaan Kesehatan Gratis",
    excerpt: "Caya mengadakan program pemeriksaan kesehatan gratis untuk masyarakat sekitar sebagai bentuk kepedulian sosial.",
    date: "12 Januari 2026",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/csr-pemeriksaan-kesehatan",
    category: "CSR",
  },
  {
    id: 2,
    title: "Promo MCU K3 untuk Mitra Perusahaan",
    excerpt: "Penawaran khusus paket Medical Check Up K3 bagi perusahaan mitra dengan periode terbatas.",
    date: "5 Januari 2026",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/promo-mcu-k3",
    category: "Promo",
  },
  {
    id: 3,
    title: "Kegiatan Pemeriksaan On-Site di Perusahaan",
    excerpt: "Tim medis Caya melaksanakan pemeriksaan kesehatan langsung di lokasi perusahaan klien.",
    date: "20 Desember 2025",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/kegiatan-onsite",
    category: "Kegiatan",
  },
];

onMounted(async () => {
  await loadPosts({ pageSize: 3 });
  if (posts.value.length > 0) {
    // Map Strapi articles to the card format
    displayNews.value = posts.value.slice(0, 3).map((post) => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt || "",
      date: post.date,
      image: post.image,
      link: `/blog/${post.id}`,
      category: post.categoryName || post.category || "",
    }));
  } else {
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
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Berita & Update Caya</h3>
          <p class="text-gray-600 max-w-xl text-lg">Informasi terbaru seputar kegiatan, program, dan layanan Caya.</p>
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

      <!-- Grid -->
      <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in displayNews" :key="item.id" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col h-full">
          <!-- Image Container -->
          <div class="relative overflow-hidden h-56">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" @error="$event.target.src = '/images/blog/placeholder.webp'" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <!-- Date -->
            <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur text-gray-900 px-3 py-1 rounded-full flex items-center gap-2 text-xs font-semibold">
              <i class="fa-solid fa-calendar"></i>
              {{ item.date }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h4 class="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
              {{ item.title }}
            </h4>

            <p class="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-2 mb-4">
              {{ item.excerpt }}
            </p>

            <!-- Read More Link -->
            <router-link :to="item.link" class="inline-flex items-center gap-2 text-[#ff562c] font-bold text-sm group/link">
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
