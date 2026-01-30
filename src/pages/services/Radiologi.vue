<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { radiologyExams } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";

const selectedSubcategory = ref("dental");
const searchQuery = ref("");

const currentSubcategory = computed(() => radiologyExams.subcategories[selectedSubcategory.value]);

const filteredExams = computed(() => {
  if (!searchQuery.value) return currentSubcategory.value.items;
  return currentSubcategory.value.items.filter((exam) => exam.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
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
              <span>Radiologi & Penunjang</span>
            </div>

            <!-- Title -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Pemeriksaan Radiologi<br />
              <span class="text-orange-200">Modern & Presisi</span>
            </h1>

            <!-- Description -->
            <p class="text-orange-100 text-base md:text-lg leading-relaxed max-w-2xl">Layanan pencitraan medis dengan teknologi terkini untuk membantu diagnosis yang cepat, akurat, dan dapat dipercaya.</p>

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
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Filter button -->
                <ServiceFilter v-model="selectedSubcategory" :options="radiologyExams.subcategories" />
                <!-- Search -->
                <div class="relative">
                  <input v-model="searchQuery" type="text" placeholder="Cari pemeriksaan..." class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- Exams Grid -->
              <div v-if="filteredExams.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
                  Keunggulan Radiologi Kami
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Peralatan radiologi modern dan terkalibrasi</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Radiografer dan dokter radiolog berpengalaman</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Hasil digital berkualitas tinggi dengan interpretasi dokter</span>
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
