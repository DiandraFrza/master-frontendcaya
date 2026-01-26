<!-- @format -->
<script setup>
import { ref } from "vue";

const articles = ref([
  {
    id: 1,
    title: "Cek TSH Neonatus Sejak Dini",
    excerpt: "Pemeriksaan TSH penting untuk mendeteksi gangguan tiroid pada bayi baru lahir.",
    image: "/assets/images/articles/tsh-neonatus.webp",
    tag: "Edukasi",
    link: "/blog/cek-tsh-neonatus",
  },
  {
    id: 2,
    title: "Diet Alkali: Mitos atau Fakta?",
    excerpt: "Benarkah diet alkali bisa mencegah kanker? Ini penjelasan medisnya.",
    image: "/assets/images/articles/diet-alkali.webp",
    tag: "Mitos & Fakta",
    link: "/blog/diet-alkali",
  },
  {
    id: 3,
    title: "Kontrol Lapar Berlebih",
    excerpt: "Tips sederhana mengontrol rasa lapar agar tetap sehat dan seimbang.",
    image: "/assets/images/articles/lapar-berlebih.webp",
    tag: "Tips Sehat",
    link: "/blog/kontrol-lapar",
  },
]);
</script>

<template>
  <section class="py-20 bg-[#fff5f2] relative overflow-hidden">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-12">
        <h3 class="text-3xl font-bold text-gray-900 mb-2">Inspirasi Sehat</h3>
        <p class="text-gray-600 max-w-2xl mx-auto">Temukan berbagai artikel kesehatan sebagai sumber inspirasi Anda dan keluarga.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in articles" :key="item.id" class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full">
          <!-- Image -->
          <div class="relative overflow-hidden">
            <img :src="item.image" :alt="item.title" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
            <span class="absolute top-4 left-4 bg-[#ff562c] text-white text-xs font-semibold px-3 py-1 rounded-full">
              {{ item.tag }}
            </span>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-1">
            <h4 class="font-semibold text-gray-900 text-lg mb-2 leading-snug">
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

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <router-link to="/blog" class="inline-flex items-center gap-3 border border-[#ff562c] text-[#ff562c] px-8 py-3 rounded-full font-semibold hover:bg-[#ff562c] hover:text-white transition-colors"> Semua Artikel </router-link>
      </div>
    </div>
  </section>
</template>
