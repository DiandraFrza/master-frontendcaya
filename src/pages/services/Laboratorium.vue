<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { laboratoryExams } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import ExamCard from "@/components/ExamCard.vue";

const selectedSubcategory = ref("kimiaDarah");

const currentSubcategory = computed(() => laboratoryExams.subcategories[selectedSubcategory.value]);

const filteredExams = computed(() => currentSubcategory.value.items);

// const stats = [
//   { value: "100+", label: "Jenis Pemeriksaan" },
//   { value: "1-3 Jam", label: "Waktu Hasil" },
//   { value: "24/7", label: "Layanan" },
//   { value: "ISO", label: "Tersertifikasi" },
// ];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-flask-vial', text: 'Laboratorium Klinik' }"
        :title="{ main: 'Pemeriksaan Laboratorium', highlight: 'Akurat & Terpercaya' }"
        description="Pemeriksaan darah, urine, dan parameter klinis dengan standar mutu laboratorium terkini untuk hasil yang akurat dan dapat dipercaya."
        :metaItems="[
          { icon: 'fa-clock', text: 'Hasil cepat' },
          { icon: 'fa-user-doctor', text: 'Analis profesional' },
          { icon: 'fa-file-waveform', text: 'Hasil digital' },
        ]"
        gradientFrom="from-orange-500"
        gradientVia="via-orange-600"
        gradientTo="to-orange-700"
      />

      <!-- Stats Bar -->
      <!-- <div class="bg-white border-b border-gray-100 py-6">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-orange-600">{{ stat.value }}</div>
              <div class="text-xs md:text-sm text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div> -->

      <!-- Main Content -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid lg:grid-cols-4 gap-6">
            <!-- Sidebar -->
            <ServiceSidebar />

            <!-- Main Content -->
            <div class="lg:col-span-3">
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-600 mb-6 transition-colors">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke halaman sebelumnya
              </button>

              <!-- Header -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Subcategory Description -->
                <div class="mb-4 pb-4 border-b border-gray-100">
                  <h2 class="text-lg font-bold text-gray-900">{{ currentSubcategory.name }}</h2>
                  <p class="text-sm text-gray-500 mt-1">{{ currentSubcategory.description }}</p>
                </div>

                <!-- Filter button -->
                <ServiceFilter v-model="selectedSubcategory" :options="laboratoryExams.subcategories" />


              </div>

              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-gray-500">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteredExams.length }}</span> pemeriksaan
                </p>
              </div>

              <!-- Exams Grid -->
              <div v-if="filteredExams.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <ExamCard v-for="exam in filteredExams" :key="exam.name" v-bind="exam" color="orange" />
              </div>



              <!-- Info Box -->
              <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  Keunggulan Laboratorium Caya
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Alat analyzer terkini dan terkalibrasi rutin</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Tenaga analis profesional dan berpengalaman</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Hasil digital berkualitas dengan interpretasi akurat</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Kerja sama dengan laboratorium rujukan untuk tes khusus</span>
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
.page-content {
  min-height: 100vh;
}
</style>
