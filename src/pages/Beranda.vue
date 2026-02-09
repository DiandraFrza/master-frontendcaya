<!-- @format -->

<script setup>
import { ref } from "vue";
import About from "./About.vue";
import MedicalCheckUp from "./MedicalCheckUp.vue";
import InspirasiSehat from "./home/InspirasiSehat.vue";
import Testimoni from "./home/Testimoni.vue";
import BeritaEdukasi from "./home/BeritaEdukasi.vue";

const activeTab = ref("search"); // 'search' or 'results'
const searchQuery = ref("");
</script>

<template>
  <div>
    <!-- Hero Section -->
    <div class="min-h-screen bg-[#FFF8ED] relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-200/30 to-orange-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-orange-100/20 to-orange-200/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10 py-16 md:py-24">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <!-- Badge -->
            <div class="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur text-orange-700 px-4 py-2 rounded-full mb-6 border border-orange-200/50">
              <i class="fa-solid fa-check-circle text-orange-600"></i>
              <span class="font-semibold text-sm">Klinik Syariah Pertama Di Indonesia</span>
            </div>

            <!-- Main Heading -->
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Kesehatan Anda,
              <span class="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">Prioritas Kami</span>
            </h1>

            <!-- Subtitle -->
            <p class="text-lg text-gray-700 mb-8 leading-relaxed">Layanan kesehatan modern dengan nilai-nilai syariah. Pemeriksaan lengkap, hasil akurat, dan tim profesional yang peduli.</p>

            <!-- Quick Features -->
            <div class="space-y-3 mb-10">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
                <span class="text-gray-800 font-medium">Hasil Cepat & Akurat</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
                <span class="text-gray-800 font-medium">Dokter Bersertifikat</span>
              </div>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                  <i class="fa-solid fa-check text-white text-xs"></i>
                </div>
                <span class="text-gray-800 font-medium">Layanan Terpercaya</span>
              </div>
            </div>

            <!-- CTA Buttons -->
            <div class="flex flex-wrap gap-4">
              <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-linear-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:scale-105">
                <i class="fa-brands fa-whatsapp"></i>
                Hubungi Kami
              </a>
              <router-link to="/services/home-service" class="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all">
                <i class="fa-solid fa-house-chimney"></i>
                Ingin Home Service ?
              </router-link>
            </div>
          </div>

          <!-- Right Content - Interactive Section -->
          <div class="relative">
            <!-- TABS (POSISI FIX) -->
            <div class="flex gap-2 mb-6 bg-orange-100/80 backdrop-blur p-1 rounded-lg border border-orange-100/50">
              <button @click="activeTab = 'search'" :class="['flex-1 py-2 px-4 rounded-md font-semibold transition-all text-sm', activeTab === 'search' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-md' : 'text-gray-600 hover:text-orange-600']">
                <i class="fa-solid fa-magnifying-glass mr-2"></i>
                Cari Layanan
              </button>

              <button @click="activeTab = 'results'" :class="['flex-1 py-2 px-4 rounded-md font-semibold transition-all text-sm', activeTab === 'results' ? 'bg-linear-to-r from-orange-500 to-orange-600 text-white shadow-md' : 'text-gray-600 hover:text-orange-600']">
                <i class="fa-solid fa-file-check mr-2"></i>
                Cek Hasil
              </button>
            </div>

            <!-- CONTENT WRAPPER (TINGGI DIKUNCI) -->
            <div class="relative min-h-[420px]">
              <!-- SEARCH TAB -->
              <div v-show="activeTab === 'search'" class="absolute inset-0 bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-orange-100/50 animate-in fade-in">
                <h3 class="font-bold text-gray-900 mb-4">Apa yang Anda cari?</h3>

                <div class="relative mb-4">
                  <input v-model="searchQuery" type="text" placeholder="Cari pemeriksaan, layanan, atau keluhan..." class="w-full px-4 py-3 pl-10 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all outline-none" />
                  <i class="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"></i>
                </div>

                <div class="space-y-2">
                  <p class="text-xs text-gray-500 font-semibold mb-3">Pencarian Populer:</p>
                  <div class="flex flex-wrap gap-2">
                    <button class="px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-semibold rounded-full border border-orange-200"><i class="fa-solid fa-heart mr-1"></i> Cek Kolesterol</button>
                    <button class="px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-semibold rounded-full border border-orange-200"><i class="fa-solid fa-flask mr-1"></i> Darah Lengkap</button>
                    <button class="px-3 py-1.5 bg-orange-50 hover:bg-orange-100 text-orange-700 text-xs font-semibold rounded-full border border-orange-200"><i class="fa-solid fa-stethoscope mr-1"></i> MCU</button>
                  </div>
                </div>

                <RouterLink to="/belum-tersedia" class="block w-full mt-6 bg-linear-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all text-center">
                  <i class="fa-solid fa-arrow-right mr-2"></i>
                  Lihat Hasil Pencarian
                </RouterLink>
              </div>

              <!-- CEK HASIL TAB -->
              <div v-show="activeTab === 'results'" class="absolute inset-0 bg-white/80 backdrop-blur rounded-2xl p-6 shadow-lg border border-orange-100/50 animate-in fade-in">
                <h3 class="font-bold text-gray-900 mb-4">Cek Hasil Pemeriksaan Anda</h3>

                <div class="space-y-3 mb-4">
                  <div>
                    <label class="text-sm font-semibold text-gray-700 mb-2 block"> No. Pendaftaran / Identitas </label>
                    <input type="text" placeholder="Masukkan nomor pendaftaran..." class="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none" />
                  </div>

                  <div>
                    <label class="text-sm font-semibold text-gray-700 mb-2 block"> Nomor HP </label>
                    <input type="tel" placeholder="Masukkan nomor HP..." class="w-full px-4 py-3 rounded-lg border-2 border-orange-100 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none" />
                  </div>
                </div>

                <div class="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4 text-xs text-orange-700">
                  <i class="fa-solid fa-shield-heart mr-2"></i>
                  Data Anda aman dan terenkripsi
                </div>

                <RouterLink to="/belum-tersedia" class="block w-full bg-linear-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all text-center">
                  <i class="fa-solid fa-check-circle mr-2"></i>
                  Cek Hasil Anda
                </RouterLink>
              </div>
            </div>

            <!-- DECORATIVE CARD (TETAP NORMAL FLOW) -->
            <div class="mt-6 bg-linear-to-br from-orange-100 to-orange-50 rounded-2xl p-4 border border-orange-200/50">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                  <i class="fa-solid fa-lightbulb text-white"></i>
                </div>
                <div class="text-sm">
                  <p class="font-semibold text-orange-900 mb-1">Ingin Konsultasi Gratis?</p>
                  <p class="text-orange-700">Chat dengan tim medis kami untuk rekomendasi pemeriksaan yang tepat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About Section with Enhanced Visuals -->
    <section>
      <About />
    </section>

    <!-- Services Section -->
    <section class="py-20 bg-white relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-[#ff562c]/10 to-[#ff7d2e]/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-orange-100/20 to-red-100/10 rounded-full blur-3xl"></div>

      <MedicalCheckUp />
    </section>

    <!-- Health Inspiration Section -->
    <section class="py-20 bg-linear-to-br from-blue-50 via-white to-orange-50">
      <InspirasiSehat />
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-linear-to-br from-green-100/20 to-blue-100/10 rounded-full blur-3xl"></div>

      <Testimoni />
    </section>

    <!-- News Section -->
    <section class="py-20 bg-linear-to-br from-amber-50 via-orange-50 to-white">
      <BeritaEdukasi />
    </section>

    <!-- Final CTA Section -->
    <section class="bg-linear-to-r from-[#ff562c] via-orange-500 to-[#ff7d2e] text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 max-w-7xl relative z-10">
        <div class="text-center">
          <h2 class="text-3xl text-white md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">Butuh Penawaran Khusus Perusahaan?</h2>
          <p class="text-lg text-white mb-8 max-w-2xl mx-auto">Paket Pemeriksaan yang sesuai dengan Kebutuhan Anda</p>

          <div class="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-[#ff562c] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105">
              <i class="fa-brands fa-whatsapp"></i>
              Chat WhatsApp
            </a>
            <a href="tel:+6281290094900" class="inline-flex items-center gap-2 bg-white/20 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all hover:scale-105">
              <i class="fa-solid fa-phone"></i>
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="bg-linear-to-r from-[#FF7D14] to-[#ff562c] rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-lg">
        <div class="text-center md:text-left">
          <h3 class="text-xl sm:text-2xl font-bold text-white leading-tight sm:leading-snug">Paket MCU K3 untuk Perusahaan — Sertifikat & Laporan HR-Ready</h3>
          <p class="mt-1 sm:mt-2 opacity-90 text-white text-sm sm:text-base leading-relaxed">Penuhi kewajiban K3 dengan laporan terstruktur, interpretasi dokter, dan opsi onsite untuk pemeriksaan massal.</p>
        </div>
      </div> -->
    </section>
  </div>
</template>

<style scoped>
.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.text-transparent {
  color: transparent;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-in {
  animation: fadeIn 0.3s ease-in-out;
}

.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}
</style>
