<!-- @format -->
<script setup>
const categories = [
  {
    title: "Paket Personal",
    items: ["Paket Silver", "Paket Platinum", "Paket Haji & Umrah"],
  },
  {
    title: "Paket K3 Perusahaan",
    badge: "Korporasi",
    items: ["K3 Dasar", "K3 Standar", "K3 Lengkap"],
  },
];

import { useHead } from "@vueuse/head";

useHead({
  title: "Medical Check Up | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Layanan Medical Check Up Caya Klinik untuk personal dan perusahaan, tersedia paket Silver, Platinum, K3, serta Haji & Umrah.",
    },
  ],
});
</script>

<template>
  <section class="bg-gray-50">
    <!-- TOP SECTION (SAMA KAYAK LAB) -->
    <div class="container mx-auto px-4 max-w-7xl py-16">
      <!-- Intro -->
      <div class="max-w-3xl mb-12">
        <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Medical Check Up</h1>
        <p class="text-gray-600 leading-relaxed">Medical Check Up di Caya dirancang untuk membantu memantau kondisi kesehatan individu maupun karyawan perusahaan melalui pemeriksaan yang terstandar dan profesional.</p>
      </div>

      <!-- Categories (DISAMAIN DENGAN LAB) -->
      <div class="grid md:grid-cols-2 gap-6">
        <div v-for="cat in categories" :key="cat.title" class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center gap-3 mb-4">
            <h3 class="font-semibold text-gray-900 text-lg">
              {{ cat.title }}
            </h3>
            <span v-if="cat.badge" class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
              {{ cat.badge }}
            </span>
          </div>

          <ul class="space-y-2">
            <li v-for="item in cat.items" :key="item" class="flex items-start gap-2 text-sm text-gray-700">
              <span class="mt-1 w-2 h-2 bg-[#F94327] rounded-full"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA (SAMA KAYAK LAB) -->
      <div class="mt-16 text-center">
        <div class="bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Ingin Mengetahui Paket yang Sesuai?</h3>
          <p class="text-gray-600 mb-6">Konsultasikan kebutuhan Medical Check Up Anda bersama tim kami, baik untuk personal maupun perusahaan.</p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/081290094900" class="inline-flex items-center justify-center bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"> Konsultasi via WhatsApp </a>
            <router-link to="/services/laboratorium" class="inline-flex items-center justify-center border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"> Lihat Layanan Laboratorium </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
