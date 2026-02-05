<!-- @format -->

<!-- filepath: d:\laragon\www\master-frontendcaya\src\pages\services\Konsultasi.vue -->
<!-- @format -->

<script setup>
import { ref, computed } from "vue";
import { consultationServices } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import { useHead } from "@vueuse/head";

const searchQuery = ref("");

const filteredServices = computed(() => {
  if (!searchQuery.value) return consultationServices.items;
  return consultationServices.items.filter((service) => service.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || service.desc.toLowerCase().includes(searchQuery.value.toLowerCase()));
});

useHead({
  title: "Konsultasi Dokter | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Layanan Konsultasi Dokter Caya Klinik untuk konsultasi kesehatan dengan dokter berpengalaman secara offline, online, maupun home visit.",
    },
  ],
});
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
              <i class="fa-solid fa-stethoscope"></i>
              <span>Konsultasi Dokter</span>
            </div>

            <!-- Title -->
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Konsultasi Kesehatan<br />
              <span class="text-orange-200">Profesional & Terpercaya</span>
            </h1>

            <!-- Description -->
            <p class="text-orange-100 text-base md:text-lg leading-relaxed max-w-2xl">Dapatkan konsultasi medis berkualitas dari dokter berpengalaman secara offline, online, atau home visit sesuai kebutuhan Anda.</p>

            <!-- Meta info -->
            <div class="flex flex-wrap items-center gap-6 mt-6 text-sm text-orange-100">
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-clock"></i>
                <span>Jadwal fleksibel</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-user-doctor"></i>
                <span>Dokter berpengalaman</span>
              </div>
              <div class="flex items-center gap-2">
                <i class="fa-solid fa-headset"></i>
                <span>Layanan terpercaya</span>
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

              <!-- Search Section -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6">
                <div class="relative">
                  <input v-model="searchQuery" type="text" placeholder="Cari jenis konsultasi..." class="w-full px-4 py-3 pl-10 rounded-lg border border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all" />
                  <i class="fa-solid fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- Services Grid -->
              <div v-if="filteredServices.length > 0" class="grid md:grid-cols-2 gap-4 mb-8">
                <div v-for="service in filteredServices" :key="service.name" class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-6 transition-all duration-300 group">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-100 flex-shrink-0">
                      <i :class="`fa-solid ${service.icon} text-orange-600 text-lg`"></i>
                    </div>
                    <div class="flex-1">
                      <h3 class="font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">{{ service.name }}</h3>
                      <!-- <p class="text-xs text-gray-500 font-medium">Harga: Rp {{ service.price.toLocaleString("id-ID") }}</p> -->
                    </div>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ service.desc }}</p>
                  <button class="w-full px-4 py-2 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-600 font-medium text-sm transition-colors">Pesan Konsultasi</button>
                </div>
              </div>

              <!-- Empty State -->
              <div v-else class="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <i class="fa-solid fa-search text-4xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">Tidak ada konsultasi yang sesuai dengan pencarian Anda</p>
              </div>

              <!-- Info Section -->
              <div class="grid md:grid-cols-2 gap-6 mb-8">
                <!-- How It Works -->
                <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                  <h3 class="font-bold text-orange-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-circle-info text-orange-600"></i>
                    Cara Konsultasi
                  </h3>
                  <ol class="space-y-3 text-sm text-orange-800">
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                      <span>Pilih jenis dan dokter spesialis</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                      <span>Daftarkan data kesehatan Anda</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                      <span>Pilih jadwal yang tersedia</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">4</span>
                      <span>Konsultasi & dapatkan resep</span>
                    </li>
                  </ol>
                </div>

                <!-- Keunggulan -->
                <div class="bg-orange-50 border border-orange-200 rounded-2xl p-6">
                  <h3 class="font-bold text-orange-900 mb-4 flex items-center gap-2">
                    <i class="fa-solid fa-star text-orange-600"></i>
                    Keunggulan Kami
                  </h3>
                  <ul class="space-y-2 text-sm text-orange-800">
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Dokter bersertifikat dan berpengalaman</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Konsultasi offline, online, & home visit</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Resep digital yang sah</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Jadwal yang fleksibel</span>
                    </li>
                  </ul>
                </div>
              </div>

              <!-- FAQ -->
              <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i class="fa-solid fa-question text-orange-600"></i>
                  Pertanyaan yang Sering Diajukan
                </h3>

                <div class="space-y-3">
                  <details class="group border-b border-gray-200 pb-4 cursor-pointer">
                    <summary class="flex items-center justify-between font-semibold text-sm">
                      <span class="text-gray-900">Apakah resep yang diberikan sah secara hukum?</span>
                      <svg class="h-4 w-4 transition group-open:rotate-180 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Ya, resep dari dokter Caya berlaku sah secara hukum dan dapat ditebus di apotek manapun yang bekerja sama dengan kami.</p>
                  </details>

                  <details class="group border-b border-gray-200 pb-4 cursor-pointer">
                    <summary class="flex items-center justify-between font-semibold text-sm">
                      <span class="text-gray-900">Berapa lama proses konsultasi?</span>
                      <svg class="h-4 w-4 transition group-open:rotate-180 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Rata-rata konsultasi berlangsung 15-30 menit tergantung kompleksitas masalah kesehatan yang dihadapi.</p>
                  </details>

                  <details class="group border-b border-gray-200 pb-4 cursor-pointer">
                    <summary class="flex items-center justify-between font-semibold text-sm">
                      <span class="text-gray-900">Apakah bisa konsultasi dengan dokter spesialis tertentu?</span>
                      <svg class="h-4 w-4 transition group-open:rotate-180 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Tentu saja, Anda dapat memilih dokter umum atau dokter spesialis sesuai dengan kebutuhan kesehatan Anda.</p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-16">
        <div class="container mx-auto px-4 max-w-7xl text-center">
          <h2 class="text-white text-3xl md:text-4xl font-bold mb-4">Siap Berkonsultasi?</h2>
          <p class="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">Hubungi tim kami sekarang untuk menjadwalkan konsultasi kesehatan Anda dengan dokter berpengalaman.</p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="https://wa.me/081290094900" class="px-6 py-3 rounded-lg bg-white text-orange-600 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2">
              <i class="fa-brands fa-whatsapp"></i>
              Hubungi WhatsApp
            </a>
            <router-link to="/services/lab" class="px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-400 text-white font-bold transition-colors"> Lihat Layanan Lainnya </router-link>
          </div>
        </div>
      </section>
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
