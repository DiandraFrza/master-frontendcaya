<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { laboratoryExams } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";

const selectedCategory = ref(Object.keys(laboratoryExams)[0]);
const searchQuery = ref("");

const currentCategory = computed(() => laboratoryExams[selectedCategory.value]);

const filteredExams = computed(() => {
  if (!searchQuery.value) return currentCategory.value.items;
  return currentCategory.value.items.filter((exam) => exam.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});
</script>

<template>
  <main class="page-content">
    <!-- HERO -->
    <section class="relative overflow-hidden bg-linear-to-br from-orange-600 via-orange-500 to-orange-700 text-white">
      <div class="relative container mx-auto px-4 max-w-7xl py-16">
        <div class="max-w-3xl">
          <div class="inline-flex items-center gap-2 mb-4 text-sm bg-white/10 px-3 py-1.5 rounded-full">
            <i class="fa-solid fa-flask-vial"></i>
            <span>Laboratorium Klinik</span>
          </div>

          <h1 class="text-4xl font-bold mb-4">
            Pemeriksaan Laboratorium<br />
            <span class="text-orange-200">Akurat & Terpercaya</span>
          </h1>

          <p class="text-orange-100 max-w-2xl">Pemeriksaan darah, urin, dan parameter klinis dengan standar mutu laboratorium.</p>
        </div>
      </div>
    </section>

    <!-- CONTENT -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4 max-w-7xl">
        <div class="grid lg:grid-cols-4 gap-6">
          <!-- SIDEBAR -->
          <ServiceSidebar />

          <!-- MAIN -->
          <div class="lg:col-span-3">
            <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 mb-6">
              <i class="fa-solid fa-arrow-left"></i>
              Kembali
            </button>

            <!-- FILTER + SEARCH -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
              <ServiceFilter v-model="selectedCategory" :options="laboratoryExams" />

              <div class="relative mt-4">
                <input v-model="searchQuery" placeholder="Cari pemeriksaan laboratorium..." class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200" />
                <i class="fa-solid fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
              </div>
            </div>

            <!-- GRID -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="exam in filteredExams" :key="exam.name" class="bg-white rounded-xl p-4 border shadow-sm hover:shadow-md transition">
                <div class="flex gap-3">
                  <div class="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                    <i :class="`fa-solid ${exam.icon} text-orange-600`"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold">{{ exam.name }}</h4>
                    <p class="text-xs text-gray-500">{{ exam.result }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- INFO -->
            <div class="mt-8 bg-orange-50 border border-orange-200 rounded-2xl p-6">
              <h3 class="font-bold text-orange-900 mb-2">Keunggulan Laboratorium Caya</h3>
              <ul class="text-sm text-orange-800 space-y-1">
                <li>✓ Alat terkalibrasi & modern</li>
                <li>✓ Tenaga analis profesional</li>
                <li>✓ Hasil digital & mudah dibaca</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
