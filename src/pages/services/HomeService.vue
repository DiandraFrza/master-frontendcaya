<!-- @format -->

<!-- filepath: d:\laragon\www\master-frontendcaya\src\pages\services\HomeService.vue -->
<!-- @format -->

<script setup>
import { ref } from "vue";
import { homeServices } from "../data/examinationData.js";
import LegalHero from "../LegalHero.vue";
import ServiceCTA from "../../components/ServiceCTA.vue";
</script>

<template>
  <div>
    <LegalHero title="Home Service" />

    <main class="page-content">
      <!-- Hero Section -->
      <section class="bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white py-12">
        <div class="container mx-auto px-4 max-w-7xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Layanan Pemeriksaan di Rumah</h1>
          <p class="text-orange-100 text-lg">Kenyamanan pemeriksaan kesehatan langsung di rumah Anda dengan tenaga medis profesional</p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid lg:grid-cols-4 gap-6">
            <!-- Sidebar -->
            <aside class="lg:col-span-1">
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
                <h3 class="font-bold text-gray-900 mb-4">Menu</h3>

                <!-- Quick Links -->
                <div class="space-y-2">
                  <router-link to="/services/lab" class="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-flask-vial"></i>
                    <span>Laboratorium Klinik</span>
                  </router-link>
                  <router-link to="/services/radiologi" class="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-x-ray"></i>
                    <span>Radiologi & Penunjang</span>
                  </router-link>
                  <router-link to="/services/elektromedis" class="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-heart-pulse"></i>
                    <span>Elektromedis</span>
                  </router-link>
                  <router-link to="/mcu" class="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-stethoscope"></i>
                    <span>Medical Check Up</span>
                  </router-link>
                  <router-link to="/services/konsultasi" class="flex items-center gap-2 text-sm text-gray-600 hover:text-orange-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-stethoscope"></i>
                    <span>Konsultasi Dokter</span>
                  </router-link>
                </div>

                <!-- Info Card -->
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <div class="bg-orange-50 rounded-lg p-4">
                    <h4 class="font-semibold text-orange-900 mb-2 text-sm">Hubungi Kami</h4>
                    <a href="https://wa.me/081290094900" class="w-full px-3 py-2 rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-700 font-medium text-sm transition-colors flex items-center justify-center gap-2">
                      <i class="fa-brands fa-whatsapp"></i>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <!-- Main Content -->
            <div class="lg:col-span-3">
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
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div v-for="service in homeServices.items" :key="service.name" class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-4 transition-all duration-300 group">
                  <div class="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-orange-100">
                    <i :class="`fa-solid ${service.icon} text-orange-600 text-lg`"></i>
                  </div>

                  <h3 class="font-bold text-gray-900 mb-2 text-lg">{{ service.name }}</h3>
                  <p class="text-sm text-gray-600 mb-4 leading-relaxed">{{ service.desc }}</p>
                </div>
              </div>

              <!-- Process Section -->
              <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Cara Kerja Home Service</h2>

                <div class="grid md:grid-cols-4 gap-6">
                  <div class="text-center">
                    <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto">
                      <span class="text-2xl font-bold text-orange-600">1</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Hubungi Kami</h4>
                    <p class="text-sm text-gray-600">Pilih layanan dan tentukan jadwal yang sesuai</p>
                  </div>

                  <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-0 md:before:w-full md:before:h-0.5 md:before:bg-orange-200 md:before:z-0">
                    <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto relative z-1">
                      <span class="text-2xl font-bold text-orange-600">2</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Konfirmasi Booking</h4>
                    <p class="text-sm text-gray-600">Kami akan mengkonfirmasi jadwal dan persiapan</p>
                  </div>

                  <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-0 md:before:w-full md:before:h-0.5 md:before:bg-orange-200 md:before:z-0">
                    <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto relative z-1">
                      <span class="text-2xl font-bold text-orange-600">3</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Pemeriksaan di Rumah</h4>
                    <p class="text-sm text-gray-600">Tim medis datang dan melakukan pemeriksaan profesional</p>
                  </div>

                  <div class="text-center">
                    <div class="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-4 mx-auto">
                      <span class="text-2xl font-bold text-orange-600">4</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Hasil & Konsultasi</h4>
                    <p class="text-sm text-gray-600">Hasil digital + konsultasi dengan dokter gratis</p>
                  </div>
                </div>
              </div>

              <!-- ...existing FAQ... -->
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
