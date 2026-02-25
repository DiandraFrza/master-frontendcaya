<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { screeningPenyakit } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import ExamCard from "@/components/ExamCard.vue";
import { useHead } from "@vueuse/head";

const selectedSubcategory = ref("screeningKardiometabolik");
const searchQuery = ref("");

const currentSubcategory = computed(() => screeningPenyakit.subcategories[selectedSubcategory.value]);

const filteredScreenings = computed(() => {
  if (!searchQuery.value) return currentSubcategory.value.items;
  return currentSubcategory.value.items.filter((screening) => screening.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

useHead({
  title: "Screening Penyakit | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Layanan Screening Penyakit Caya Klinik untuk deteksi dini berbagai penyakit kronis dan menular dengan pemeriksaan yang komprehensif.",
    },
  ],
});

const stats = [
  { value: "6+", label: "Kategori Penyakit" },
  { value: "25+", label: "Jenis Screening" },
  { value: "Dokter", label: "Interpretasi" },
  { value: "Early", label: "Detection" },
];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-stethoscope', text: 'Screening Penyakit' }"
        :title="{ main: 'Screening Penyakit', highlight: 'Deteksi Dini & Pencegahan' }"
        description="Program screening penyakit komprehensif untuk deteksi dini berbagai penyakit kronis dan menular, membantu Anda menjaga kesehatan dengan lebih baik."
        :metaItems="[
          { icon: 'fa-shield-heart', text: 'Deteksi dini' },
          { icon: 'fa-user-doctor', text: 'Dokter berpengalaman' },
          { icon: 'fa-chart-line', text: 'Laporan komprehensif' },
        ]"
        gradientFrom="from-orange-500"
        gradientVia="via-orange-600"
        gradientTo="to-orange-700"
      />

      <!-- Stats Bar -->
      <div class="bg-white border-b border-gray-100 py-6">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div v-for="(stat, index) in stats" :key="index" class="text-center">
              <div class="text-2xl md:text-3xl font-bold text-orange-600">{{ stat.value }}</div>
              <div class="text-xs md:text-sm text-gray-500">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>

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

              <!-- Info Banner -->
              <div class="bg-gradient-to-r from-orange-50 to-indigo-50 border border-orange-200 rounded-xl p-4 mb-6">
                <div class="flex items-start gap-3">
                  <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-shield-virus text-orange-600"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-orange-900 text-sm">Pentingnya Deteksi Dini</h4>
                    <p class="text-xs text-orange-700 mt-1">Screening secara rutin dapat mendeteksi penyakit sebelum gejala muncul, meningkatkan peluang pengobatan yang sukses.</p>
                  </div>
                </div>
              </div>

              <!-- Header -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Subcategory Description -->
                <div class="mb-4 pb-4 border-b border-gray-100">
                  <h2 class="text-lg font-bold text-gray-900">{{ currentSubcategory.name }}</h2>
                  <p class="text-sm text-gray-500 mt-1">{{ currentSubcategory.description }}</p>
                </div>

                <!-- Filter -->
                <ServiceFilter v-model="selectedSubcategory" :options="screeningPenyakit.subcategories" class="[&_button]:bg-orange-50 [&_button]:text-orange-700 [&_button:hover]:bg-orange-100 [&_.bg-orange-600]:!bg-orange-600" />

                <!-- Search -->
                <div class="relative mt-4">
                  <input v-model="searchQuery" type="text" placeholder="Cari screening penyakit..." class="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                    <i class="fa-solid fa-times-circle"></i>
                  </button>
                </div>
              </div>

              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-gray-500">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteredScreenings.length }}</span> screening
                </p>
              </div>

              <!-- Screenings Grid -->
              <div v-if="filteredScreenings.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <ExamCard v-for="screening in filteredScreenings" :key="screening.name" v-bind="screening" color="orange" />
              </div>

              <!-- Empty State -->
              <div v-else class="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fa-solid fa-search text-orange-500 text-2xl"></i>
                </div>
                <h3 class="font-semibold text-gray-900 mb-2">Tidak ditemukan</h3>
                <p class="text-sm text-gray-500">Coba kata kunci lain atau pilih kategori berbeda</p>
              </div>

              <!-- Category Info Cards -->
              <div class="grid md:grid-cols-2 gap-4 mb-8">
                <div class="bg-white rounded-xl p-5 border border-gray-100">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                      <i class="fa-solid fa-heart-pulse text-red-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Screening Kardiometabolik</h4>
                  </div>
                  <p class="text-sm text-gray-500">Deteksi dini penyakit jantung, diabetes, hipertensi, dan gangguan metabolik.</p>
                </div>

                <div class="bg-white rounded-xl p-5 border border-gray-100">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <i class="fa-solid fa-lungs text-blue-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Screening Respirator</h4>
                  </div>
                  <p class="text-sm text-gray-500">Pemeriksaan fungsi paru untuk deteksi PPOK, asma, dan TB.</p>
                </div>

                <div class="bg-white rounded-xl p-5 border border-gray-100">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <i class="fa-solid fa-shield-virus text-orange-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Screening Kanker</h4>
                  </div>
                  <p class="text-sm text-gray-500">Skrining awal untuk deteksi dini berbagai jenis kanker.</p>
                </div>

                <div class="bg-white rounded-xl p-5 border border-gray-100">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <i class="fa-solid fa-virus text-green-600"></i>
                    </div>
                    <h4 class="font-bold text-gray-900">Screening Infeksi</h4>
                  </div>
                  <p class="text-sm text-gray-500">Deteksi infeksi menular seperti HIV, hepatitis, dan COVID-19.</p>
                </div>
              </div>

              <!-- Info Box -->
              <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  Keunggulan Program Screening Kami
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Program screening komprehensif untuk berbagai penyakit</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Tim medis profesional dengan pengalaman deteksi dini</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Laporan hasil lengkap dengan rekomendasi tindak lanjut</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Kerahasiaan data terjamin</span>
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

.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
