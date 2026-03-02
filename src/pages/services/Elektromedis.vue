<!-- @format -->

<script setup>
import { computed } from "vue";
import { electromedicalExams } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import ExamCard from "@/components/ExamCard.vue";

const filteorangeExams = computed(() => electromedicalExams.items);

// const stats = [
//   { value: "100%", label: "Perlu Reservasi" },
//   { value: "Non-Invasif", label: "Aman" },
//   { value: "15-30 min", label: "Durasi" },
//   { value: "Dokter", label: "Interpretasi" },
// ];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-heart-pulse', text: 'Elektromedis' }"
        :title="{ main: 'Pemeriksaan Elektromedis', highlight: 'Akurat & Cepat' }"
        description="Pemeriksaan elektrokardiogram (EKG), spirometri, dan audiometri untuk evaluasi fungsi jantung, paru, dan pendengaran dengan hasil yang akurat."
        :metaItems="[
          { icon: 'fa-shield-heart', text: 'Aman & Non-invasif' },
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
              <div class="text-xs md:text-sm text-black">{{ stat.label }}</div>
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
              <button @click="$router.back()" class="inline-flex items-center gap-2 text-sm text-black hover:text-orange-600 mb-6 transition-colors">
                <i class="fa-solid fa-arrow-left"></i>
                Kembali ke halaman sebelumnya
              </button>

              <!-- Alert untuk reservasi -->
              <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <i class="fa-solid fa-calendar-check text-orange-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-orange-900 text-sm">⚠️ Wajib Reservasi</h4>
                  <p class="text-xs text-orange-700 mt-1">
                    Seluruh pemeriksaan elektromedis <strong>(EKG, Spirometri, Audiometri)</strong>
                    memerlukan reservasi terlebih dahulu untuk memastikan ketersediaan alat dan tenaga medis.
                  </p>
                  <a href="https://wa.me/081290094900" class="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-orange-700 hover:text-orange-800">
                    <i class="fa-brands fa-whatsapp"></i>
                    Reservasi via WhatsApp
                  </a>
                </div>
              </div>



              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-black">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteorangeExams.length }}</span> pemeriksaan
                </p>
              </div>

              <!-- Exams Grid -->
              <div v-if="filteorangeExams.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <ExamCard v-for="exam in filteorangeExams" :key="exam.name" v-bind="exam" color="orange" />
              </div>



              <!-- Info Cards -->
              <div class="grid md:grid-cols-3 gap-4">
                <!-- EKG Info -->
                <div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <i class="fa-solid fa-heart-pulse text-orange-500 text-xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">EKG</h4>
                  <p class="text-xs text-black mb-3">Rekam aktivitas listrik jantung untuk mendeteksi gangguan irama dan fungsi jantung.</p>
                  <div class="flex items-center gap-2 text-xs text-gray-400">
                    <i class="fa-regular fa-clock"></i>
                    <span>10-15 menit</span>
                  </div>
                </div>

                <!-- Spirometri Info -->
                <div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <i class="fa-solid fa-lungs text-orange-500 text-xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Spirometri</h4>
                  <p class="text-xs text-black mb-3">Ukur volume dan kecepatan udara yang dihirup dan dihembuskan untuk evaluasi fungsi paru.</p>
                  <div class="flex items-center gap-2 text-xs text-gray-400">
                    <i class="fa-regular fa-clock"></i>
                    <span>15-20 menit</span>
                  </div>
                </div>

                <!-- Audiometri Info -->
                <div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-3">
                    <i class="fa-solid fa-headphones text-orange-500 text-xl"></i>
                  </div>
                  <h4 class="font-bold text-gray-900 mb-2">Audiometri</h4>
                  <p class="text-xs text-black mb-3">Tes pendengaran untuk mengukur ketajaman pendengaran dan identifikasi gangguan telinga.</p>
                  <div class="flex items-center gap-2 text-xs text-gray-400">
                    <i class="fa-regular fa-clock"></i>
                    <span>20-30 menit</span>
                  </div>
                </div>
              </div>

              <!-- Info Box -->
              <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6 mt-6">
                <h3 class="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <i class="fa-solid fa-circle-info text-orange-600"></i>
                  Informasi Pemeriksaan
                </h3>
                <ul class="space-y-2 text-sm text-orange-800">
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Pemeriksaan non-invasif yang aman tanpa efek samping</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="text-orange-600 mt-0.5">✓</span>
                    <span>Alat elektromedis berkalibrasi dan terawat dengan baik</span>
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
.page-content {
  min-height: 100vh;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
