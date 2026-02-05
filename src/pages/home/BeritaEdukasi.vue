<!-- @format -->
<script setup>
import { ref } from "vue";

const news = ref([
  {
    id: 1,
    title: "Program CSR Pemeriksaan Kesehatan Gratis",
    excerpt: "Caya mengadakan program pemeriksaan kesehatan gratis untuk masyarakat sekitar sebagai bentuk kepedulian sosial.",
    date: "12 Januari 2026",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/csr-pemeriksaan-kesehatan",
    category: "CSR",
    icon: "fa-heart-hands",
    color: "bg-[#ff562c]",
  },
  {
    id: 2,
    title: "Promo MCU K3 untuk Mitra Perusahaan",
    excerpt: "Penawaran khusus paket Medical Check Up K3 bagi perusahaan mitra dengan periode terbatas.",
    date: "5 Januari 2026",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/promo-mcu-k3",
    category: "Promo",
    icon: "fa-tag",
    color: "bg-[#ff562c]",
  },
  {
    id: 3,
    title: "Kegiatan Pemeriksaan On-Site di Perusahaan",
    excerpt: "Tim medis Caya melaksanakan pemeriksaan kesehatan langsung di lokasi perusahaan klien.",
    date: "20 Desember 2025",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/kegiatan-onsite",
    category: "Kegiatan",
    icon: "fa-briefcase",
    color: "bg-[#ff562c]",
  },
]);
</script>

<template>
  <section class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
        <div>
          <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
            <!-- <i class="fa-solid fa-photofilm"></i> -->
            <i class="fa-solid fa-photo-film"></i>
            <span class="font-semibold text-sm">Update Terbaru</span>
          </div>
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Berita & Update Caya</h3>
          <p class="text-gray-600 max-w-xl text-lg">Informasi terbaru seputar kegiatan, program, dan layanan Caya.</p>
        </div>

        <router-link to="/berita" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#ff562c] font-bold text-sm bg-[#ff562c]/10 px-4 py-2 rounded-full hover:bg-[#ff562c]/20 transition-colors">
          <span>Lihat Semua</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in news" :key="item.id" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col h-full">
          <!-- Image Container with Category Badge -->
          <div class="relative overflow-hidden h-56">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            <!-- Category Badge with Icon -->
            <!-- <div :class="`absolute top-4 right-4 bg-gradient-to-br ${item.color} text-white px-4 py-2 rounded-full flex items-center gap-2 font-semibold text-sm shadow-lg`">
              <i :class="`fa-solid ${item.icon}`"></i>
              {{ item.category }}
            </div> -->

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
