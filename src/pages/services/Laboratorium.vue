<!-- @format -->
<script setup>
const categories = [
  {
    title: "Pemeriksaan Darah & Urin",
    items: ["Darah Lengkap (Hematologi)", "Urin Lengkap", "Gula Darah (Puasa / 2PP / Sewaktu)"],
  },
  {
    title: "Profil Lemak",
    badge: "Paling Sering",
    items: ["Kolesterol Total", "HDL", "LDL", "Trigliserida"],
  },
  {
    title: "Fungsi Ginjal",
    badge: "Paling Sering",
    items: ["Ureum", "Kreatinin", "Asam Urat"],
  },
  {
    title: "Fungsi Hati",
    items: ["SGOT", "SGPT", "Gamma GT"],
  },
  {
    title: "Tes Khusus",
    items: ["Widal", "Golongan Darah & Rhesus", "Tes Narkoba"],
  },
];
import { useHead } from "@vueuse/head";

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Caya Laboratorium Klinik",
        url: "https://caya.co.id/services/laboratorium",
        medicalSpecialty: "DiagnosticLab",
        description: "Laboratorium klinik Caya menyediakan pemeriksaan darah, urin, profil lemak, fungsi ginjal, fungsi hati, dan tes khusus dengan standar profesional.",
        areaServed: "Indonesia",
        availableService: [
          { "@type": "MedicalTest", name: "Darah Lengkap" },
          { "@type": "MedicalTest", name: "Profil Lemak" },
          { "@type": "MedicalTest", name: "Fungsi Ginjal" },
          { "@type": "MedicalTest", name: "Fungsi Hati" },
          { "@type": "MedicalTest", name: "Tes Narkoba" },
        ],
      }),
    },
  ],
});

useHead({
  meta: [
    { property: "og:title", content: "Laboratorium Klinik Caya" },
    {
      property: "og:description",
      content: "Pemeriksaan laboratorium klinik profesional untuk keluarga & perusahaan.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://caya.co.id/services/laboratorium" },
  ],
});

useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "MedicalBusiness",
        name: "Caya Laboratorium Klinik",
        url: "https://caya.co.id/services/laboratorium",
        medicalSpecialty: "DiagnosticLab",
        description: "Laboratorium klinik Caya menyediakan pemeriksaan darah, urin, profil lemak, fungsi ginjal, fungsi hati, dan tes khusus dengan standar profesional.",
        areaServed: "Indonesia",
        availableService: [
          { "@type": "MedicalTest", name: "Darah Lengkap" },
          { "@type": "MedicalTest", name: "Profil Lemak" },
          { "@type": "MedicalTest", name: "Fungsi Ginjal" },
          { "@type": "MedicalTest", name: "Fungsi Hati" },
          { "@type": "MedicalTest", name: "Tes Narkoba" },
        ],
      }),
    },
  ],
});
</script>

<!-- langsung gas 3 aja full code oke, usahakan untuk tampilannya boleh di imporve agar lebih menarik, modern, user friendly  -->
<template>
  <section class="bg-gray-50">
    <!-- HERO -->
    <div class="bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white">
      <div class="container mx-auto px-4 max-w-7xl py-16">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">Laboratorium Klinik</h1>
        <p class="max-w-2xl text-amber-100 leading-relaxed">Layanan pemeriksaan laboratorium yang akurat, cepat, dan terpercaya untuk kebutuhan kesehatan pribadi, keluarga, maupun perusahaan.</p>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="container mx-auto px-4 max-w-7xl py-16">
      <!-- Intro -->
      <div class="max-w-3xl mb-12">
        <h2 class="text-2xl font-bold text-gray-900 mb-3">Jenis Pemeriksaan Laboratorium</h2>
        <p class="text-gray-600 leading-relaxed">Pemeriksaan dilakukan oleh tenaga profesional dengan standar mutu laboratorium klinik, menggunakan peralatan modern untuk hasil yang presisi.</p>
      </div>

      <!-- Categories -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="cat in categories" :key="cat.title" class="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
          <div class="flex items-center gap-3 mb-4">
            <h3 class="font-semibold text-gray-900 text-lg">
              {{ cat.title }}
            </h3>
            <span v-if="cat.badge" class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
              {{ cat.badge }}
            </span>
          </div>

          <ul class="space-y-2">
            <li v-for="item in cat.items" :key="item" class="flex items-start gap-2 text-sm text-gray-700">
              <span class="mt-1 w-2 h-2 bg-[#F94327] rounded-full"></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="mt-16 text-center">
        <div class="bg-white rounded-3xl p-8 shadow-lg max-w-3xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 mb-3">Butuh Pemeriksaan Laboratorium?</h3>
          <p class="text-gray-600 mb-6">Konsultasikan kebutuhan pemeriksaan Anda bersama tim kami. Kami siap membantu menentukan jenis tes yang sesuai.</p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/081290094900" class="inline-flex items-center justify-center bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"> Konsultasi via WhatsApp </a>
            <router-link to="/hasil-mcu" class="inline-flex items-center justify-center border border-gray-200 px-8 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors"> Lihat Contoh Hasil </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
