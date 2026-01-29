<!-- @format -->

<!-- filepath: d:\laragon\www\master-frontendcaya\src\pages\services\Konsultasi.vue -->
<!-- @format -->

<script setup>
import { consultationServices } from "../data/examinationData.js";
import LegalHero from "../LegalHero.vue";
import ServiceCTA from "../../components/ServiceCTA.vue";
</script>

<template>
  <div>
    <LegalHero title="Konsultasi Dokter" />

    <main class="page-content">
      <!-- Hero Section -->
      <section class="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-12">
        <div class="container mx-auto px-4 max-w-7xl">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">Konsultasi Kesehatan Profesional</h1>
          <p class="text-indigo-100 text-lg">Dapatkan konsultasi medis dari dokter berpengalaman secara offline maupun online</p>
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
                  <router-link to="/services/lab" class="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-flask-vial"></i>
                    <span>Laboratorium Klinik</span>
                  </router-link>
                  <router-link to="/services/radiologi" class="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-x-ray"></i>
                    <span>Radiologi & Penunjang</span>
                  </router-link>
                  <router-link to="/services/elektromedis" class="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-heart-pulse"></i>
                    <span>Elektromedis</span>
                  </router-link>
                  <router-link to="/mcu" class="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-stethoscope"></i>
                    <span>Medical Check Up</span>
                  </router-link>
                  <router-link to="/services/home-service" class="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors p-2 rounded hover:bg-gray-50">
                    <i class="fa-solid fa-house-medical"></i>
                    <span>Home Service</span>
                  </router-link>
                </div>

                <!-- Info Card -->
                <div class="mt-8 pt-6 border-t border-gray-200">
                  <div class="bg-indigo-50 rounded-lg p-4">
                    <h4 class="font-semibold text-indigo-900 mb-2 text-sm">Hubungi Kami</h4>
                    <a href="https://wa.me/081290094900" class="w-full px-3 py-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium text-sm transition-colors flex items-center justify-center gap-2">
                      <i class="fa-brands fa-whatsapp"></i>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            <!-- Main Content -->
            <div class="lg:col-span-3">
              <!-- Services Grid -->
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div v-for="service in consultationServices.items" :key="service.name" class="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-100 p-6 transition-all duration-300 group flex flex-col h-full">
                  <div class="w-12 h-12 rounded-lg bg-indigo-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-indigo-100">
                    <i :class="`fa-solid ${service.icon} text-indigo-600 text-lg`"></i>
                  </div>

                  <h3 class="font-bold text-gray-900 mb-2 text-lg">{{ service.name }}</h3>
                  <p class="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">{{ service.desc }}</p>
                </div>
              </div>

              <!-- How It Works -->
              <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-12">
                <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">Cara Melakukan Konsultasi</h2>

                <div class="grid md:grid-cols-4 gap-6">
                  <div class="text-center">
                    <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                      <span class="text-2xl font-bold text-indigo-600">1</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Pilih Tipe Konsultasi</h4>
                    <p class="text-sm text-gray-600">Pilih antara offline, online, atau home visit</p>
                  </div>

                  <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-0 md:before:w-full md:before:h-0.5 md:before:bg-indigo-200 md:before:z-0">
                    <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto relative z-1">
                      <span class="text-2xl font-bold text-indigo-600">2</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Daftarkan Data Anda</h4>
                    <p class="text-sm text-gray-600">Isi form dengan informasi kesehatan singkat</p>
                  </div>

                  <div class="text-center relative md:before:absolute md:before:top-8 md:before:left-0 md:before:w-full md:before:h-0.5 md:before:bg-indigo-200 md:before:z-0">
                    <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto relative z-1">
                      <span class="text-2xl font-bold text-indigo-600">3</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Jadwalkan Waktu</h4>
                    <p class="text-sm text-gray-600">Pilih jadwal yang sesuai dengan ketersediaan Anda</p>
                  </div>

                  <div class="text-center">
                    <div class="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 mx-auto">
                      <span class="text-2xl font-bold text-indigo-600">4</span>
                    </div>
                    <h4 class="font-bold text-gray-900 mb-2">Konsultasi & Resep</h4>
                    <p class="text-sm text-gray-600">Konsultasi dengan dokter & dapatkan resep jika diperlukan</p>
                  </div>
                </div>
              </div>

              <!-- FAQ -->
              <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">Pertanyaan yang Sering Diajukan</h2>

                <div class="space-y-4">
                  <details class="group border-b border-gray-200 pb-4 cursor-pointer">
                    <summary class="flex items-center justify-between font-semibold text-sm md:text-base">
                      <span>Apakah dokter yang akan saya konsultasi berpengalaman?</span>
                      <svg class="h-4 w-4 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Ya, semua dokter di Caya memiliki sertifikasi dan pengalaman minimal 5 tahun di bidangnya masing-masing.</p>
                  </details>

                  <details class="group border-b border-gray-200 pb-4 cursor-pointer">
                    <summary class="flex items-center justify-between font-semibold text-sm md:text-base">
                      <span>Apakah resep yang diberikan sah secara hukum?</span>
                      <svg class="h-4 w-4 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Ya, resep dari dokter Caya berlaku sah dan dapat ditebus di apotek manapun yang bekerja sama dengan kami.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <ServiceCTA title="Ingin Berkonsultasi dengan Dokter?" description="Hubungi tim kami untuk menentukan jadwal konsultasi yang sesuai dengan kebutuhan Anda." secondary-button-text="Lihat Layanan Lainnya" secondary-button-to="/services/lab" />
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
