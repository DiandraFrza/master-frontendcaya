<!-- @format -->

<template>
  <div class="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
    <!-- Hero Section (tetap sama) -->
    <div class="2xxl:min-h-125 lg:min-h-112.5 md:min-h-100 sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute before:left-0 before:top-0 before:size-full before:bg-[#07121E] before:opacity-70 after:w-full after:h-[calc(100%-80px)] after:absolute after:bottom-0 after:right-0 after:z-0 after:bg-[url(../../src/images/banner/bg.webp)] after:bg-no-repeat after:bg-position-[right_-13px_top] max-lg:after:hidden" style="background-image: url(images/banner/bnr1.webp)">
      <div class="container relative z-1 h-full table">
        <div class="table-cell 2xxl:h-125 lg:h-112.5 md:h-100 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
          <h1 class="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Produk & Layanan</h1>
          <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <ul class="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
              <li class="inline-block lg:text-base text-sm font-normal capitalize text-heading"><router-link to="/" class="text-primary">Beranda</router-link></li>
              <li class="inline-block lg:text-base text-sm font-normal capitalize text-heading pl-2 relative before:content-['\f101'] before:float-left before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">Produk & Layanan</li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 z-1 max-xl:hidden">
        <ul class="flex gap-7.5 [writing-mode:tb-rl]">
          <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.instagram.com/">Instagram</a></li>
          <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.facebook.com/">Facebook</a></li>
          <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://x.com/">twitter</a></li>
        </ul>
      </div>
      <div class="absolute bottom-0 right-0 bg-primary size-71.25 rounded-full blur-[120px] opacity-50 max-xl:hidden"></div>
      <div class="absolute top-[25%] left-0 bg-yellow-400 size-71.25 rounded-full blur-[120px] opacity-40 max-xl:hidden"></div>
      <div class="absolute z-0 top-[35%] right-[32%] max-md:hidden">
        <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z" fill="var(--primary)" />
        </svg>
      </div>
      <div class="absolute z-0 bottom-0 right-[38%] max-md:hidden">
        <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_102_123)">
            <path d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z" fill="var(--primary)" />
          </g>
          <defs>
            <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="20" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_123" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_123" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
      <div class="absolute z-0 bottom-[20%] right-[10%] max-md:hidden">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z" fill="var(--primary)" />
        </svg>
      </div>
    </div>

    <!-- Services Overview -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Layanan Pemeriksaan Kami</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Berbagai jenis pemeriksaan kesehatan dengan teknologi terkini dan tim medis profesional</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          <template v-for="(s, index) in services" :key="s.id">
            <div class="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-slate-100">
              <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                <svg v-if="s.icon === 'xray'" class="w-6 h-6 text-[#F46700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 17h18M7 7v10" />
                </svg>
                <svg v-else-if="s.icon === 'blood'" class="w-6 h-6 text-[#F46700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2s4 4 4 7a4 4 0 11-8 0c0-3 4-7 4-7z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 13v8" />
                </svg>
                <svg v-else-if="s.icon === 'ecg'" class="w-6 h-6 text-[#F46700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h3l2-4 2 8 2-4 2 4 4-8h3" />
                </svg>
                <svg v-else-if="s.icon === 'ear'" class="w-6 h-6 text-[#F46700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2c3 0 5 1 6 3s1 4 1 6-1 4-4 6c-2 1-3 1-5 1" />
                </svg>
                <svg v-else-if="s.icon === 'urine'" class="w-6 h-6 text-[#F46700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2s4 4 4 7a4 4 0 11-8 0c0-3 4-7 4-7z" />
                </svg>
                <svg v-else class="w-6 h-6 text-[#F46700]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M3 17h18" />
                </svg>
              </div>
              <h3 class="text-sm font-semibold text-slate-800 text-center mb-2">{{ s.title }}</h3>
              <p class="text-xs text-slate-600 text-center leading-tight">{{ s.desc }}</p>
            </div>
          </template>
        </div>

        <!-- Paket MCU -->
        <div class="mb-16">
          <div class="text-center mb-8">
            <h2 class="text-3xl font-bold text-slate-800 mb-4">Paket Produk & Layanan</h2>
            <p class="text-slate-600">Pilih paket yang sesuai dengan kebutuhan kesehatan Anda</p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <template v-for="(p, index) in packages" :key="p.id">
              <div class="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 overflow-hidden group flex flex-col h-full">
                <div class="p-6 flex-1">
                  <div class="flex items-start justify-between mb-4">
                    <div>
                      <h3 class="text-lg font-bold text-slate-800 mb-2">{{ p.title }}</h3>
                      <p class="text-sm text-slate-600">{{ p.note }}</p>
                    </div>
                    <div class="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                      <span class="text-[#F46700] font-bold text-sm">{{ index + 1 }}</span>
                    </div>
                  </div>

                  <ul class="space-y-3 mb-6">
                    <li v-for="(t, i) in p.tests" :key="i" class="flex items-start gap-3">
                      <svg class="w-4 h-4 text-green-500 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span class="text-sm text-slate-700">{{ t }}</span>
                    </li>
                  </ul>
                </div>

                <!-- Fixed Button Section -->
                <div class="p-6 pt-0 mt-auto">
                  <div class="flex gap-3">
                    <a :href="`https://wa.me/081290094900`" class="flex-1 bg-linear-to-r from-[#FF7D14] to-[#ff562c] text-white text-center py-2.5 px-4 rounded-lg hover:scale-[1.05] transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md"> Daftar Sekarang </a>
                    <a :href="waLink" class="flex items-center justify-center w-12 h-12 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors hover:border-[#FF7D14]">
                      <svg class="w-5 h-5 text-slate-600 hover:text-[#FF7D14] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>

        <!-- Layanan Onsite -->
        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden mb-16">
          <div class="grid lg:grid-cols-2 gap-8">
            <div class="p-8">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-800">Layanan Onsite / Beranda Service</h3>
              </div>

              <p class="text-slate-600 mb-6 leading-relaxed">Kami menyediakan layanan MCU onsite dengan tim medis profesional yang datang ke lokasi Anda. Cocok untuk perusahaan, institusi, atau individu yang membutuhkan kenyamanan ekstra.</p>

              <div class="space-y-4 mb-8">
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg class="w-3 h-3 text-[#F46700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span class="text-slate-700">Pengambilan sampel darah dan urine di lokasi</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg class="w-3 h-3 text-[#F46700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span class="text-slate-700">Pemeriksaan ECG dan X-ray portable (tersedia)</span>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-0.5 shrink-0">
                    <svg class="w-3 h-3 text-[#F46700]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                  </div>
                  <span class="text-slate-700">Laporan terstruktur dengan interpretasi dokter</span>
                </div>
              </div>

              <a :href="waLink" class="inline-flex items-center gap-2 bg-linear-to-r from-[#FF7D14] to-[#ff562c] text-white px-6 py-3 rounded-lg hover:scale-[1.05] transition-all duration-300 font-medium shadow-sm hover:shadow-md">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.05 4.91A9.816 9.816 0 0012.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.264 8.264 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 012.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z" />
                </svg>
                Request Layanan Onsite
              </a>
            </div>

            <div class="bg-slate-50 p-8">
              <h4 class="text-lg font-semibold text-slate-800 mb-6">Keunggulan Layanan Onsite</h4>
              <div class="grid gap-4">
                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-[#F46700]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Mobile Phlebotomy</h5>
                    <p class="text-sm text-slate-600">Tim terlatih untuk pengambilan sampel yang aman dan nyaman</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h5 class="font-semibold text-slate-800 mb-1">Laporan Komprehensif</h5>
                    <p class="text-sm text-slate-600">Format digital dengan analisis mendalam untuk kebutuhan HR</p>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-4 bg-white rounded-lg">
                  <div class="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center shrink-0">
                    <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
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

        <!-- CTA Section -->
        <!-- <div class="text-center">
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
            <h3 class="text-2xl font-bold text-slate-800 mb-4">Butuh Penawaran Khusus Perusahaan?</h3>
            <p class="text-slate-600 mb-6 max-w-2xl mx-auto">Konsultasikan kebutuhan MCU perusahaan Anda dengan tim kami. Dapatkan penawaran terbaik untuk karyawan Anda.</p>
            <a :href="waLink" class="inline-flex items-center gap-3 bg-linear-to-r from-[#FF7D14] to-[#ff562c] text-white px-8 py-4 rounded-lg hover:scale-[1.05] transition-all duration-300 font-semibold text-lg shadow-sm hover:shadow-md">
              <i class="fa-brands fa-whatsapp text-lg md:text-xl"></i>
              Konsultasi Gratis untuk Korporat
            </a>
          </div>
        </div> -->
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";

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
  { id: "thorax", title: "X-Ray Thorax", desc: "Deteksi kelainan paru & jantung.", icon: "xray" },
  { id: "cbc", title: "Darah Lengkap", desc: "Hemoglobin, leukosit, trombosit.", icon: "blood" },
  { id: "ecg", title: "Rekam Jantung", desc: "Screening listrik jantung.", icon: "ecg" },
  { id: "audiometri", title: "Audiometri", desc: "Tes pendengaran lengkap.", icon: "audio-lines" },
  { id: "urinalysis", title: "Urinalisis", desc: "Analisis fungsi ginjal & urine.", icon: "urine" },
  { id: "onsite", title: "Layanan Onsite", desc: "MCU di lokasi Anda.", icon: "truck" },
]);

const waLink = "https://wa.me/081290094900?text=Halo%20Caya,%20saya%20mau%20tanya%20paket%20MCU%20%2F%20onsite";
</script>

<style scoped>
/* Custom styles for better visual appeal */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.hover\:scale-\[1\.02\]:hover {
  transform: scale(1.02);
}
</style>
