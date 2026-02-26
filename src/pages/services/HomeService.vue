<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { homeServices } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import ExamCard from "@/components/ExamCard.vue";

const searchQuery = ref("");

const filteredServices = computed(() => {
  if (!searchQuery.value) return homeServices.items;
  return homeServices.items.filter((service) => service.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || service.desc.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

const processSteps = [
  {
    number: "1",
    title: "Hubungi Kami",
    desc: "Pilih layanan dan tentukan jadwal yang sesuai",
    icon: "fa-phone",
  },
  {
    number: "2",
    title: "Konfirmasi Booking",
    desc: "Kami akan mengkonfirmasi jadwal dan persiapan",
    icon: "fa-calendar-check",
  },
  {
    number: "3",
    title: "Pemeriksaan di Rumah",
    desc: "Tim medis datang dan melakukan pemeriksaan profesional",
    icon: "fa-house-medical",
  },
  {
    number: "4",
    title: "Hasil & Konsultasi",
    desc: "Hasil digital + konsultasi dengan dokter",
    icon: "fa-file-medical",
  },
];

// const stats = [
//   { value: "100%", label: "Perlu Reservasi" },
//   { value: "H-1", label: "Minimal Booking" },
//   { value: "Jabodetabek", label: "Area Layanan" },
//   { value: "Sama", label: "Kualitas Hasil" },
// ];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-truck-medical', text: 'Home Service' }"
        :title="{ main: 'Layanan Pemeriksaan', highlight: 'di Rumah & Kantor Anda' }"
        description="Kenyamanan pemeriksaan kesehatan langsung ke rumah atau kantor Anda dengan tenaga medis profesional dan peralatan modern."
        :metaItems="[
          { icon: 'fa-clock', text: 'Jadwal fleksibel' },
          { icon: 'fa-user-doctor', text: 'Tenaga profesional' },
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

              <!-- Alert Reservasi -->
              <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <i class="fa-solid fa-calendar-check text-orange-600"></i>
                </div>
                <div>
                  <h4 class="font-semibold text-orange-900 text-sm">Reservasi Diperlukan</h4>
                  <p class="text-xs text-orange-700 mt-1">Semua layanan Home Service memerlukan reservasi minimal <strong>H-1</strong>. Hubungi kami untuk jadwal terdekat.</p>
                  <a href="https://wa.me/081290094900" class="inline-flex items-center gap-1 mt-2 text-xs font-semibold text-orange-700 hover:text-orange-800">
                    <i class="fa-brands fa-whatsapp"></i>
                    Reservasi Sekarang
                  </a>
                </div>
              </div>

              <!-- Info Cards -->
              <div class="grid md:grid-cols-3 gap-4 mb-8">
                <div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-3">
                    <i class="fa-solid fa-house text-orange-600 text-xl"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-1">Datang ke Rumah Anda</h3>
                  <p class="text-sm text-gray-500">Tim medis profesional kami datang ke lokasi yang Anda tentukan</p>
                </div>

                <div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-3">
                    <i class="fa-solid fa-clock text-orange-600 text-xl"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-1">Fleksibel & Praktis</h3>
                  <p class="text-sm text-gray-500">Tentukan jadwal sesuai kenyamanan Anda, tanpa perlu ke klinik</p>
                </div>

                <div class="bg-white rounded-xl p-5 border border-gray-100 hover:shadow-md transition-shadow">
                  <div class="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-3">
                    <i class="fa-solid fa-check-circle text-orange-600 text-xl"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-1">Hasil Sama Berkualitas</h3>
                  <p class="text-sm text-gray-500">Hasil pemeriksaan dengan standar mutu yang sama dengan klinik</p>
                </div>
              </div>

              <!-- Search -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div class="relative">
                  <input v-model="searchQuery" type="text" placeholder="Cari layanan home service..." class="w-full px-4 py-3 pl-10 pr-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                  <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-orange-500 transition-colors">
                    <i class="fa-solid fa-times-circle"></i>
                  </button>
                </div>
              </div>

              <!-- Results Count -->
              <div class="flex items-center justify-between mb-4">
                <p class="text-sm text-gray-500">
                  Menampilkan <span class="font-semibold text-gray-900">{{ filteredServices.length }}</span> layanan
                </p>
              </div>

              <!-- Services Grid -->
              <div v-if="filteredServices.length > 0" class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <ExamCard v-for="service in filteredServices" :key="service.name" v-bind="service" color="orange" />
              </div>

              <!-- Empty State -->
              <div v-else class="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fa-solid fa-search text-orange-500 text-2xl"></i>
                </div>
                <h3 class="font-semibold text-gray-900 mb-2">Tidak ditemukan</h3>
                <p class="text-sm text-gray-500">Coba kata kunci lain</p>
              </div>

              <!-- Process Section -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
                <h2 class="text-xl font-bold text-gray-900 mb-8 text-center">Cara Kerja Home Service</h2>

                <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
                  <!-- Connecting Line (Desktop) -->
                  <div class="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-orange-100"></div>

                  <div v-for="(step, index) in processSteps" :key="index" class="text-center relative">
                    <div class="w-16 h-16 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center mb-4 mx-auto relative z-10 border-4 border-white shadow-sm">
                      <i :class="`fa-solid ${step.icon} text-orange-600 text-lg`"></i>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-1">{{ step.title }}</h4>
                    <p class="text-sm text-gray-500">{{ step.desc }}</p>
                  </div>
                </div>
              </div>

              <!-- CTA Box -->
              <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 text-white text-center">
                <h3 class="text-xl font-bold mb-2">Siap Memesan Home Service?</h3>
                <p class="text-orange-100 mb-4">Hubungi kami sekarang untuk reservasi dan dapatkan kemudahan pemeriksaan kesehatan di rumah Anda</p>
                <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-xl font-bold hover:bg-orange-50 transition-all hover:scale-105">
                  <i class="fa-brands fa-whatsapp text-lg"></i>
                  Reservasi via WhatsApp
                </a>
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
