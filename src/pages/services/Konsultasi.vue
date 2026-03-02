<!-- @format -->

<script setup>
import { computed } from "vue";
import { useHead } from "@vueuse/head";
import { consultationServices } from "../data/examinationData.js";
import ServiceSidebar from "@/pages/services/ServiceSidebar.vue";
import ServicesHero from "@/components/ServicesHero.vue";
import ExamCard from "@/components/ExamCard.vue";

const filteredServices = computed(() => consultationServices.items);

useHead({
  title: "Konsultasi Dokter | Caya Klinik",
  meta: [
    {
      name: "description",
      content: "Layanan Konsultasi Dokter Caya Klinik untuk konsultasi kesehatan dengan dokter berpengalaman secara offline, online, maupun home visit.",
    },
  ],
});

// const stats = [
//   { value: "Umum & Spesialis", label: "Jenis Dokter" },
//   { value: "Online", label: "Tersedia" },
//   { value: "Home", label: "Visit" },
//   { value: "Resep", label: "Digital" },
// ];
</script>

<template>
  <div>
    <main class="page-content">
      <!-- Hero Section -->
      <ServicesHero
        :eyebrow="{ icon: 'fa-user-doctor', text: 'Konsultasi Dokter' }"
        :title="{ main: 'Konsultasi Kesehatan', highlight: 'Profesional & Terpercaya' }"
        description="Dapatkan konsultasi medis berkualitas dari dokter berpengalaman secara offline, online, atau home visit sesuai kebutuhan Anda."
        :metaItems="[
          { icon: 'fa-clock', text: 'Jadwal fleksibel' },
          { icon: 'fa-user-doctor', text: 'Dokter berpengalaman' },
          { icon: 'fa-headset', text: 'Layanan terpercaya' },
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
              <div class="text-xl md:text-2xl font-bold text-orange-600">{{ stat.value }}</div>
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



              <!-- Services Grid -->
              <div v-if="filteredServices.length > 0" class="grid md:grid-cols-2 gap-4 mb-8">
                <div v-for="service in filteredServices" :key="service.name" class="bg-white rounded-xl shadow-sm hover:shadow-lg border border-gray-100 p-6 transition-all duration-300 group hover:-translate-y-1">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-100 flex-shrink-0">
                      <i :class="`fa-solid ${service.icon} text-orange-600 text-2xl`"></i>
                    </div>
                    <div class="flex-1">
                      <div class="flex items-start justify-between gap-2">
                        <h3 class="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {{ service.name }}
                        </h3>
                        <span v-if="service.requiresReservation" class="px-2 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded-full"> Reservasi </span>
                      </div>
                    </div>
                  </div>
                  <p class="text-sm text-gray-600 leading-relaxed mb-4">{{ service.desc }}</p>
                  <a href="https://wa.me/081290094900" class="w-full px-4 py-2.5 rounded-lg bg-orange-50 hover:bg-orange-100 text-orange-600 font-medium text-sm transition-colors flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp"></i>
                    {{ service.requiresReservation ? "Reservasi Sekarang" : "Pesan Konsultasi" }}
                  </a>
                </div>
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
                      <span>Pilih jenis konsultasi (Umum/Spesialis/Online)</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                      <span>Hubungi kami untuk jadwal (reservasi jika diperlukan)</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">3</span>
                      <span>Datang ke klinik atau siapkan perangkat untuk online</span>
                    </li>
                    <li class="flex items-start gap-3">
                      <span class="flex-shrink-0 w-6 h-6 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center">4</span>
                      <span>Konsultasi & dapatkan resep/saran medis</span>
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
                      <span>Dokter bersertifikat STR & SIP aktif</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Konsultasi offline, online, & home visit</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Resep digital yang sah secara hukum</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Jadwal fleksibel dan konsultasi tanpa batas waktu</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <span class="text-orange-600 mt-0.5">✓</span>
                      <span>Privasi terjaga dan nyaman</span>
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

                  <details class="group cursor-pointer">
                    <summary class="flex items-center justify-between font-semibold text-sm">
                      <span class="text-gray-900">Apakah bisa konsultasi dengan dokter spesialis tertentu?</span>
                      <svg class="h-4 w-4 transition group-open:rotate-180 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </summary>
                    <p class="mt-3 text-sm text-gray-600 leading-relaxed">Tentu saja, Anda dapat memilih dokter umum atau dokter spesialis sesuai dengan kebutuhan kesehatan Anda. Konsultasi spesialis memerlukan reservasi terlebih dahulu.</p>
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
            <a href="https://wa.me/081290094900" class="px-6 py-3 rounded-lg bg-white text-orange-600 font-bold hover:bg-gray-50 transition-colors flex items-center gap-2 hover:scale-105">
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
.page-content {
  min-height: 100vh;
}
</style>
