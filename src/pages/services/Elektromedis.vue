<!-- @format -->

<!-- filepath: d:\laragon\www\master-frontendcaya\src\pages\services\Elektromedis.vue -->
<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { electromedicalExams } from "../data/examinationData.js";

import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";

const searchQuery = ref("");

const filteredExams = computed(() => {
  if (!searchQuery.value) return electromedicalExams.items;
  return electromedicalExams.items.filter((exam) => exam.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-linear-to-br from-orange-600 via-orange-500 to-orange-700 text-white">
        <!-- Decorative background -->
        <div class="absolute inset-0 opacity-15">
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>

        <div class="relative container mx-auto px-4 max-w-7xl py-16">
          <div class="max-w-3xl">
            <!-- Eyebrow -->
            <div class="inline-flex items-center gap-2 mb-4 text-sm font-medium bg-white/10 px-3 py-1.5 rounded-full backdrop-blur">
              <i class="fa-solid fa-x-ray"></i>
              <span>Elektromedis</span>
            </div>

            <!-- Title -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Pemeriksaan Elektromedis<br />
              <span class="text-orange-200">Lorem ipsum</span>
            </h1>

            <!-- Description -->
            <p class="text-orange-100 text-base md:text-lg leading-relaxed max-w-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ex qui accusamus. Veniam similique ipsam a rem, ex, numquam expedita quisquam molestiae voluptatem tempora in aperiam ipsum ducimus inventore. Nostrum!.</p>

            <!-- Meta info -->
            <div class="flex flex-wrap items-center gap-6 mt-6 text-sm text-orange-100">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-clock"></i>
                <span>Hasil cepat</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-user-doctor"></i>
                <span>Dokter berpengalaman</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-file-waveform"></i>
                <span>Hasil digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid lg:grid-cols-4 gap-6">
            <!-- Sidebar -->
            <ServiceSidebar />

            <!-- Main Content -->
            <div class="lg:col-span-3">
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 mb-6">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke halaman sebelumnya
              </button>
              <!-- Header -->
              <!-- <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8"></div> -->

              <!-- Exams Grid -->
              <div v-if="filteredExams.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div v-for="exam in filteredExams" :key="exam.name" class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 group">
                  <div class="flex items-start gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-100">
                      <i :class="`fa-solid ${exam.icon} text-orange-600`"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{{ exam.name }}</h4>
                      <p class="text-xs text-gray-500 mt-1">{{ exam.result }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Info Box -->
              <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  Tentang Pemeriksaan Elektromedis
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Pemeriksaan non-invasif yang aman dan cepat</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Alat medis berkalibrasi dan terawat dengan baik</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Interpretasi hasil oleh dokter spesialis berpengalaman</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
