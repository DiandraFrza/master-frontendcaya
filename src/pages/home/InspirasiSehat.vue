<!-- @format -->
<script setup>
import { ref } from "vue";

const articles = ref([
  {
    id: 1,
    title: "Cek TSH Neonatus Sejak Dini",
    excerpt: "Pemeriksaan TSH penting untuk mendeteksi gangguan tiroid pada bayi baru lahir.",
    image: "/assets/blog/middle/img1.webp",
    tag: "Edukasi",
    // icon: "fa-baby",
    color: "from-orange-500 to-orange-600",
    link: "/blog/cek-tsh-neonatus",
  },
  {
    id: 2,
    title: "Diet Alkali: Mitos atau Fakta?",
    excerpt: "Benarkah diet alkali bisa mencegah kanker? Ini penjelasan medisnya.",
    image: "/assets/blog/middle/img1.webp",
    tag: "Mitos & Fakta",
    // icon: "fa-flask",
    color: "from-orange-500 to-orange-600",
    link: "/blog/diet-alkali",
  },
  {
    id: 3,
    title: "Kontrol Lapar Berlebih",
    excerpt: "Tips sederhana mengontrol rasa lapar agar tetap sehat dan seimbang.",
    image: "/assets/blog/middle/img1.webp",
    tag: "Tips Sehat",
    // icon: "fa-apple",
    color: "from-orange-500 to-orange-600",
    link: "/blog/kontrol-lapar",
  },
]);
</script>

<template>
  <section class="py-20 relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
          <i class="fa-solid fa-newspaper"></i>
          <span class="font-semibold text-sm">Artikel Kesehatan</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Inspirasi Sehat</h3>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">Temukan berbagai artikel kesehatan sebagai sumber inspirasi Anda dan keluarga untuk hidup lebih sehat.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <article v-for="item in articles" :key="item.id" class="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full hover:-translate-y-2">
          <!-- Image Container with Icon Badge -->
          <div class="relative overflow-hidden h-56">
            <img :src="item.image" :alt="item.title" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            <!-- Icon Badge -->
            <!-- <div :class="`absolute top-4 right-4 w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-lg`">
              <i :class="`fa-solid ${item.icon} text-2xl`"></i>
            </div> -->

            <!-- Tag -->
            <span class="absolute bottom-4 left-4 bg-white text-gray-900 text-xs font-bold px-3 py-1 rounded-full">
              {{ item.tag }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h4 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
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

      <!-- Bottom CTA -->
      <div class="text-center">
        <router-link to="/blog" class="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff562c] to-[#ff7d2e] text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
          <i class="fa-solid fa-newspaper"></i>
          Semua Artikel
          <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>
