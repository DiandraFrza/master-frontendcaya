<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { radiologyExams } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import ExamCard from "@/components/ExamCard.vue";

const selectedSubcategory = ref("dental");

const currentSubcategory = computed(() => radiologyExams.subcategories[selectedSubcategory.value]);

const filteredExams = computed(() => currentSubcategory.value.items);

// Hitung total pemeriksaan yang perlu reservasi
const reservationRequiredCount = computed(() => {
  return Object.values(radiologyExams.subcategories).reduce((total, sub) => {
    return total + sub.items.filter((item) => item.requiresReservation).length;
  }, 0);
});

// const stats = [
//   { value: "15+", label: "Jenis Pemeriksaan" },
//   { value: "Digital", label: "Teknologi" },
//   { value: reservationRequiredCount.value + "+", label: "Perlu Reservasi" },
//   { value: "1-2 Hari", label: "Waktu Hasil" },
// ];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-x-ray', text: 'Radiologi & Penunjang' }"
        :title="{ main: 'Pemeriksaan Radiologi', highlight: 'Modern & Presisi' }"
        description="Layanan pencitraan medis dengan teknologi digital terkini untuk membantu diagnosis yang cepat, akurat, dan dapat dipercaya."
        :metaItems="[
          { icon: 'fa-clock', text: 'Hasil cepat' },
          { icon: 'fa-user-doctor', text: 'Dokter berpengalaman' },
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

              <!-- Alert untuk reservasi -->
              <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <i class="fa-solid fa-calendar-check text-amber-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-amber-900 text-sm">Pemeriksaan dengan Reservasi</h4>
                  <p class="text-xs text-amber-700 mt-1">Beberapa pemeriksaan seperti <strong>USG, Treadmill, Dental X-Ray</strong> memerlukan reservasi terlebih dahulu. Silakan hubungi kami untuk jadwal.</p>
                </div>
              </div>

              <!-- Header -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Subcategory Description -->
                <div class="mb-4 pb-4 border-b border-gray-100">
                  <h2 class="text-lg font-bold text-gray-900">{{ currentSubcategory.name }}</h2>
                  <p class="text-sm text-gray-500 mt-1">{{ currentSubcategory.description }}</p>
                </div>

                <!-- Filter button -->
                <ServiceFilter v-model="selectedSubcategory" :options="radiologyExams.subcategories" />


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
                  Keunggulan Radiologi Kami
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Peralatan radiologi digital terkini dengan dosis radiasi minimal (ALARA)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Radiografer bersertifikat kompetensi dan berpengalaman</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Interpretasi hasil oleh dokter spesialis radiologi</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Hasil digital berkualitas tinggi dan dapat diakses online</span>
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
