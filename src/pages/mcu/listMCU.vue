<!-- @format -->

<script setup>
import { ref } from "vue";
import MainHero from "@/pages/MainHero.vue";

const packages = ref([
  {
    id: "lemak",
    title: "Paket Profil Lemak",
    tests: ["Cholesterol Total", "Trigliserida", "Cholesterol HDL", "Cholesterol LDL"],
    note: "Pemeriksaan profil lemak lengkap untuk deteksi risiko kardiovaskular.",
  },
  {
    id: "diabetes",
    title: "Paket Diabetes",
    tests: ["Glukosa Darah Puasa", "Glukosa 2 Jam PP", "Urine Lengkap"],
    note: "Screening komprehensif untuk deteksi dini diabetes.",
  },
  {
    id: "fungsi",
    title: "Paket Fungsi Ginjal",
    tests: ["Ureum", "Creatinin", "Asam Urat", "Urine Lengkap", "eGFR"],
    note: "Evaluasi menyeluruh fungsi ginjal dan kesehatan saluran kemih.",
  },
  {
    id: "obesitas",
    title: "Paket Metabolik",
    tests: ["Cholesterol Total", "Trigliserida", "HDL/LDL", "Glukosa Puasa", "HbA1c", "BMI"],
    note: "Paket lengkap untuk screening risiko metabolik dan obesitas.",
  },
  {
    id: "fungsi-hati",
    title: "Paket Fungsi Hati",
    tests: ["SGOT", "SGPT", "Gamma-GT", "HBsAg", "Urine Lengkap"],
    note: "Pemeriksaan enzim hati dan screening hepatitis.",
  },
  {
    id: "jantung",
    title: "Paket Kardiologi",
    tests: ["Cholesterol Total", "Trigliserida", "LDL/HDL", "Glukosa Puasa", "HbA1c", "Rekam Jantung", "Troponin T"],
    note: "Screening jantung lengkap dengan marker spesifik.",
  },
]);

const services = ref([
  { id: "thorax", title: "X-Ray Thorax", desc: "Deteksi kelainan paru & jantung.", icon: "fa-x-ray" },
  { id: "cbc", title: "Darah Lengkap", desc: "Hemoglobin, leukosit, trombosit.", icon: "fa-vial" },
  { id: "ecg", title: "Rekam Jantung", desc: "Screening listrik jantung.", icon: "fa-heart-pulse" },
  { id: "audiometri", title: "Audiometri", desc: "Tes pendengaran lengkap.", icon: "fa-ear-listen" },
  { id: "urinalysis", title: "Urinalisis", desc: "Analisis fungsi ginjal & urine.", icon: "fa-flask" },
  { id: "onsite", title: "Layanan Onsite", desc: "MCU di lokasi Anda.", icon: "fa-truck-medical" },
]);

const metaItems = [
  { icon: "fa-stethoscope", text: "Pemeriksaan Lengkap" },
  { icon: "fa-user-doctor", text: "Dokter Profesional" },
  { icon: "fa-file-medical", text: "Laporan Terperinci" },
];

const waLink = "https://wa.me/081290094900?text=Halo%20Caya,%20saya%20mau%20tanya%20paket%20MCU";
</script>

<template>
  <div class="min-h-screen bg-slate-50">
    <!-- Hero Section -->
    <MainHero
      variant="default"
      title="Produk & Layanan"
      subtitle="Medical Check Up Komprehensif"
      description="Berbagai jenis pemeriksaan kesehatan dengan teknologi terkini dan tim medis profesional untuk kebutuhan individu maupun korporat."
      eyebrow="Medical Check Up"
      eyebrowIcon="fa-heartbeat"
      :metaItems="metaItems"
    />

    <!-- Services Overview -->
    <section class="py-16 bg-white">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Layanan Pemeriksaan Kami</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Berbagai jenis pemeriksaan kesehatan dengan teknologi terkini dan tim medis profesional</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <div v-for="s in services" :key="s.id" class="bg-slate-50 p-4 rounded-xl hover:shadow-md transition-all duration-300 group border border-slate-100">
            <div class="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
              <i :class="`fa-solid ${s.icon} text-orange-500 text-xl`"></i>
            </div>
            <h3 class="text-sm font-semibold text-slate-800 text-center mb-2">{{ s.title }}</h3>
            <p class="text-xs text-slate-600 text-center leading-tight">{{ s.desc }}</p>
          </div>
        </div>

        <!-- Paket MCU -->
        <div class="mb-16">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Paket Produk & Layanan</h2>
            <p class="text-slate-600">Pilih paket yang sesuai dengan kebutuhan kesehatan Anda</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="(p, index) in packages" :key="p.id" class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full">
              <div class="p-6 flex-1">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-lg font-bold text-slate-800 mb-2">{{ p.title }}</h3>
                    <p class="text-sm text-slate-600">{{ p.note }}</p>
                  </div>
                  <div class="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                    <span class="text-orange-500 font-bold text-sm">{{ index + 1 }}</span>
                  </div>
                </div>

                <ul class="space-y-3 mb-6">
                  <li v-for="(t, i) in p.tests" :key="i" class="flex items-start gap-3">
                    <i class="fa-solid fa-check text-green-500 mt-0.5 shrink-0"></i>
                    <span class="text-sm text-slate-700">{{ t }}</span>
                  </li>
                </ul>
              </div>

              <div class="p-6 pt-0 mt-auto">
                <div class="flex gap-3">
                  <a :href="waLink" class="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2.5 px-4 rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"> Daftar Sekarang </a>
                  <a :href="waLink" class="flex items-center justify-center w-12 h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors hover:border-orange-500">
                    <i class="fa-brands fa-whatsapp text-slate-600 hover:text-orange-500 transition-colors text-xl"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Layanan Onsite -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <i class="fa-solid fa-house-medical text-green-600 text-xl"></i>
                </div>
                <h3 class="text-2xl font-bold text-slate-800">Layanan Onsite / Home Service</h3>
              </div>

              <p class="text-slate-600 mb-6 leading-relaxed">Kami menyediakan layanan MCU onsite dengan tim medis profesional yang datang ke lokasi Anda. Cocok untuk perusahaan, institusi, atau individu yang membutuhkan kenyamanan ekstra.</p>

              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <i class="fa-solid fa-check text-orange-500 text-xs"></i>
                  </div>
                  <span class="text-slate-700">Pengambilan sampel darah dan urine di lokasi</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <i class="fa-solid fa-check text-orange-500 text-xs"></i>
                  </div>
                  <span class="text-slate-700">Pemeriksaan ECG dan X-ray portable (tersedia)</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <i class="fa-solid fa-check text-orange-500 text-xs"></i>
                  </div>
                  <span class="text-slate-700">Laporan terstruktur dengan interpretasi dokter</span>
                </div>
              </div>

              <a :href="waLink" class="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
                <i class="fa-brands fa-whatsapp text-xl"></i>
                Request Layanan Onsite
              </a>
            </div>

            <div class="bg-slate-50 p-8">
              <h4 class="text-lg font-semibold text-slate-800 mb-6">Keunggulan Layanan Onsite</h4>
              <div class="grid gap-4">
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-syringe text-blue-600"></i>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Mobile Phlebotomy</h5>
                    <p class="text-sm text-slate-600">Tim terlatih untuk pengambilan sampel yang aman dan nyaman</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-file-medical text-green-600"></i>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Laporan Komprehensif</h5>
                    <p class="text-sm text-slate-600">Format digital dengan analisis mendalam untuk kebutuhan HR</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-user-doctor text-purple-600"></i>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Tim Profesional</h5>
                    <p class="text-sm text-slate-600">Dokter dan tenaga medis bersertifikat dengan pengalaman</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
