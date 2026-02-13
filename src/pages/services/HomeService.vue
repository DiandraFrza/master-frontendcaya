<!-- @format -->

<!-- filepath: d:\laragon\www\master-frontendcaya\src\pages\services\HomeService.vue -->
<!-- @format -->

<script setup>
import { ref } from "vue";
import { homeServices } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServiceFilter from "@/pages/services/ServiceFilter.vue";
import ServiceCTA from "../../components/ServiceCTA.vue";

const selectedCategory = ref("pengambilan");
const searchQuery = ref("");

const homeServiceCategories = {
  pengambilan: {
    name: "Pengambilan Sampel",
    items: homeServices.items.filter((s) => s.name.includes("Pengambilan")),
  },
  konsultasi: {
    name: "Layanan Tambahan",
    items: homeServices.items.filter((s) => !s.name.includes("Pengambilan")),
  },
};
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
              <i class="fa-solid fa-house-medical"></i>
              <span>Home Service</span>
            </div>

            <!-- Title -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Layanan Pemeriksaan<br />
              <span class="text-orange-200">di Rumah & Kantor Anda</span>
            </h1>

            <!-- Description -->
            <p class="text-orange-100 text-base md:text-lg leading-relaxed max-w-2xl">Kenyamanan pemeriksaan kesehatan langsung ke rumah atau kantor Anda dengan tenaga medis profesional dan peralatan modern.</p>

            <!-- Meta info -->
            <div class="flex flex-wrap items-center gap-6 mt-6 text-sm text-orange-100">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-clock"></i>
                <span>Jadwal fleksibel</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-user-doctor"></i>
                <span>Tenaga profesional</span>
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

              <!-- Header with Filter -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <!-- Filter button -->
                <ServiceFilter v-model="selectedCategory" :options="homeServiceCategories" />
                <!-- Search -->
                <div class="relative mt-4">
                  <input v-model="searchQuery" type="text" placeholder="Cari layanan home service..." class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- Info Cards -->
              <div class="grid md:grid-cols-3 gap-6 mb-12">
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <i class="fa-solid fa-house text-orange-600 text-xl"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Datang ke Rumah Anda</h3>
                  <p class="text-sm text-gray-600">Tim medis profesional kami datang ke lokasi yang Anda tentukan</p>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <i class="fa-solid fa-clock text-orange-600 text-xl"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Fleksibel & Praktis</h3>
                  <p class="text-sm text-gray-600">Tentukan jadwal sesuai kenyamanan Anda, tanpa perlu ke klinik</p>
                </div>

                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <div class="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center mb-4">
                    <i class="fa-solid fa-check-circle text-orange-600 text-xl"></i>
                  </div>
                  <h3 class="font-bold text-gray-900 mb-2">Hasil Sama Berkualitas</h3>
                  <p class="text-sm text-gray-600">Hasil pemeriksaan dengan standar mutu yang sama dengan klinik</p>
                </div>
              </div>

              <!-- Services Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div v-for="service in homeServices.items" :key="service.name" class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 group">
                  <div class="flex items-start gap-3 mb-3">
                    <div class="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-100">
                      <i :class="`fa-solid ${service.icon} text-orange-600`"></i>
                    </div>
                    <div class="flex-1">
                      <h4 class="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {{ service.name }}
                      </h4>
                      <p class="text-xs text-gray-600 mt-1">
                        {{ service.desc }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Process Section -->
              <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-12 text-center">Cara Kerja Home Service</h2>

                <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                  <h2 class="text-2xl font-bold text-gray-900 mb-12 text-center">Cara Kerja Home Service</h2>

                  <div class="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
                    <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-1/2 md:before:w-full md:before:h-0.5 md:before:bg-orange-200 md:before:z-0">
                      <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto relative z-10 border-4 border-white">
                        <span class="text-2xl font-bold text-orange-600">1</span>
                      </div>
                      <h4 class="font-bold text-gray-900 mb-2">Hubungi Kami</h4>
                      <p class="text-sm text-gray-600">Pilih layanan dan tentukan jadwal yang sesuai</p>
                    </div>

                    <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-1/2 md:before:w-full md:before:h-0.5 md:before:bg-orange-200 md:before:z-0">
                      <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto relative z-10 border-4 border-white">
                        <span class="text-2xl font-bold text-orange-600">2</span>
                      </div>
                      <h4 class="font-bold text-gray-900 mb-2">Konfirmasi Booking</h4>
                      <p class="text-sm text-gray-600">Kami akan mengkonfirmasi jadwal dan persiapan</p>
                    </div>

                    <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-1/2 md:before:w-full md:before:h-0.5 md:before:bg-orange-200 md:before:z-0">
                      <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto relative z-10 border-4 border-white">
                        <span class="text-2xl font-bold text-orange-600">3</span>
                      </div>
                      <h4 class="font-bold text-gray-900 mb-2">Pemeriksaan di Rumah</h4>
                      <p class="text-sm text-gray-600">Tim medis datang dan melakukan pemeriksaan profesional</p>
                    </div>

                    <div class="text-center relative">
                      <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto relative z-10 border-4 border-white">
                        <span class="text-2xl font-bold text-orange-600">4</span>
                      </div>
                      <h4 class="font-bold text-gray-900 mb-2">Hasil & Konsultasi</h4>
                      <p class="text-sm text-gray-600">Hasil digital + konsultasi dengan dokter gratis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <ServiceCTA title="Siap Memesan Home Service?" description="Hubungi kami sekarang untuk reservasi dan dapatkan kemudahan pemeriksaan kesehatan di rumah Anda" secondary-button-text="Lihat Layanan Lainnya" secondary-button-to="/services/lab" />
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
