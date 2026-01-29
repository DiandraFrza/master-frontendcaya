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
  },
  {
    id: 2,
    title: "Promo MCU K3 untuk Mitra Perusahaan",
    excerpt: "Penawaran khusus paket Medical Check Up K3 bagi perusahaan mitra dengan periode terbatas.",
    date: "5 Januari 2026",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/promo-mcu-k3",
  },
  {
    id: 3,
    title: "Kegiatan Pemeriksaan On-Site di Perusahaan",
    excerpt: "Tim medis Caya melaksanakan pemeriksaan kesehatan langsung di lokasi perusahaan klien.",
    date: "20 Desember 2025",
    image: "/assets/blog/middle/img1.webp",
    link: "/berita/kegiatan-onsite",
  },
]);
</script>

<template>
  <section class="py-20 bg-[#ecf5fb]">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
        <div>
          <h3 class="text-3xl font-bold text-gray-900 mb-2">Berita & Update Caya</h3>
          <p class="text-gray-600 max-w-xl">Informasi terbaru seputar kegiatan, program, dan layanan Caya.</p>
        </div>

        <router-link to="/berita" class="mt-4 md:mt-0 inline-flex items-center gap-2 text-[#ff562c] font-semibold text-sm">
          Lihat Semua Berita
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </router-link>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in news" :key="item.id" class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
          <!-- Image -->
          <!-- <div class="relative overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
          </div> -->

          <div class="rounded-xxl h-50 relative overflow-hidden before:absolute before:top-0 before:-left-[75%] before:z-0 before:block before:w-1/2 before:h-full before:skew-x-[-25deg] before:bg-linear-(--img-hover-gradient) group-hover:before:animate-dzShine">
            <img :src="item.image" :alt="item.title" class="w-full h-48 object-cover" />
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <span class="text-xs text-gray-500 mb-2">
              <li class="bg-amber-100 text-primary rounded-xxl font-medium text-2xs py-1.25 pr-3.75 pl-5.75 leading-[1.4] relative inline-flex mr-1.25 items-center gap-1 flex-wrap after:absolute after:size-1.5 after:rounded-full after:bg-primary after:left-2.5">{{ item.date }}</li>
            </span>

            <h4 class="xl:text-2xl text-xl mb-2.5">
              {{ item.title }}
            </h4>

            <p class="text-gray-600 text-sm leading-relaxed flex-1">
              {{ item.excerpt }}
            </p>

            <!-- CTA -->
            <router-link :to="item.link" class="inline-flex items-center gap-2 text-[#ff562c] font-semibold text-sm mt-4">
              Baca Selengkapnya
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
