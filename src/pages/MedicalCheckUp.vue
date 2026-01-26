<!-- @format -->
<script setup>
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    title: "Laboratorium Klinik",
    desc: "Pemeriksaan darah, urin, dan diagnostik klinik terpercaya.",
    link: "/services/laboratorium",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2",
  },
  {
    id: 2,
    title: "Medical Check Up",
    desc: "MCU personal, K3, pra-nikah, haji & umrah.",
    link: "/mcu",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z",
  },
  {
    id: 3,
    title: "Screening Penyakit",
    desc: "Jantung, diabetes, obesitas, fungsi organ vital.",
    link: "/services/screening",
    icon: "M2 12h4l3-9 4 18 3-9h4",
  },
  {
    id: 4,
    title: "Radiologi & Penunjang",
    desc: "Rontgen thorax, EKG, dan pemeriksaan penunjang.",
    link: "/services/radiologi",
    icon: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z",
  },
  {
    id: 5,
    title: "Layanan Korporasi & K3",
    desc: "MCU berkala dan laporan kesehatan karyawan.",
    link: "/services/korporasi",
    icon: "M9 19V6l12-3v13",
  },
  {
    id: 6,
    title: "Home Service",
    desc: "Pengambilan sampel di rumah atau kantor.",
    link: "/services/home-service",
    icon: "M13 16h-1v-4h-1m1-4h.01",
  },
]);
</script>

<template>
  <section class="py-20 bg-linear-to-br from-gray-50 to-white">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-10">
        <h3 class="text-3xl font-bold text-gray-900 mb-2">Layanan Kami</h3>
        <p class="text-gray-600 max-w-2xl mx-auto">Ragam layanan kesehatan profesional untuk keluarga dan perusahaan.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in services" :key="item.id" class="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full">
          <div class="flex items-start gap-4 flex-1">
            <div class="w-14 h-14 rounded-xl bg-linear-to-br from-[#FF7D14] to-[#F94327] text-white flex items-center justify-center">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon" />
              </svg>
            </div>

            <div class="flex-1">
              <h4 class="font-semibold text-gray-900 text-lg mb-2">
                {{ item.title }}
              </h4>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>

          <!-- CTA -->
          <div class="mt-auto pt-4">
            <router-link :to="item.link" class="inline-flex items-center justify-center w-full border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors min-h-[42px]"> Lihat Detail </router-link>
          </div>
        </article>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center mt-12">
        <div class="bg-linear-to-r from-[#FF7D14] to-[#F94327] rounded-3xl p-8 text-white shadow-xl">
          <h3 class="text-2xl md:text-3xl font-bold mb-3">Butuh Penawaran Khusus Perusahaan?</h3>
          <p class="text-amber-100 mb-4 text-lg">Tim kami siap membantu paket custom & layanan onsite.</p>
          <a href="https://wa.me/081290094900" class="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors"> Konsultasi Gratis via WhatsApp </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bg-white {
  transition: all 0.25s ease;
}
</style>
