<!-- @format -->
<script setup>
import ServiceCTA from "../../components/ServiceCTA.vue";

const categories = [
  {
    title: "Paket Personal",
    items: [
      { name: "Paket Silver", icon: "fa-star" },
      { name: "Paket Platinum", icon: "fa-gem" },
      { name: "Paket Haji & Umrah", icon: "fa-mosque" },
    ],
  },
  {
    title: "Paket K3 Perusahaan",
    badge: "Korporasi",
    items: [
      { name: "K3 Dasar", icon: "fa-building" },
      { name: "K3 Standar", icon: "fa-clipboard" },
      { name: "K3 Lengkap", icon: "fa-circle-check" },
    ],
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
    <div class="container mx-auto px-4 max-w-7xl py-8 md:py-16">
      <!-- Intro -->
      <div class="max-w-3xl mb-8 md:mb-12">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 md:mb-3">Medical Check Up</h1>
        <p class="text-sm md:text-base text-gray-600 leading-relaxed">Medical Check Up di Caya dirancang untuk membantu memantau kondisi kesehatan individu maupun karyawan perusahaan melalui pemeriksaan yang terstandar dan profesional.</p>
      </div>

      <!-- Categories (DISAMAIN DENGAN LAB) -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div v-for="cat in categories" :key="cat.title" class="bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-start md:items-center gap-3 mb-4">
            <h3 class="font-semibold text-gray-900 text-sm md:text-lg flex-1">
              {{ cat.title }}
            </h3>
            <span v-if="cat.badge" class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full whitespace-nowrap">
              {{ cat.badge }}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div v-for="item in cat.items" :key="item.name" class="bg-gradient-to-br from-gray-50 to-white rounded-lg p-4 border border-gray-100 hover:border-[#F94327] hover:shadow-sm transition-all">
              <div class="text-3xl md:text-4xl mb-2 text-[#F94327]">
                <i :class="`fa-solid ${item.icon}`"></i>
              </div>
              <p class="text-sm md:text-base font-medium text-gray-700">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <ServiceCTA title="Ingin Mengetahui Paket yang Sesuai?" description="Konsultasikan kebutuhan Medical Check Up Anda bersama tim kami, baik untuk personal maupun perusahaan." secondary-button-text="Lihat Layanan Laboratorium" secondary-button-to="/services/lab" />
    </div>
  </section>
</template>
