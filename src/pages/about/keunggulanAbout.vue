<template>
  <section class="py-16 bg-gradient-to-br from-blue-50 to-white">
    <div class="container mx-auto px-4 max-w-6xl">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#f15840]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Keunggulan Layanan Kami</h2>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">Solusi komprehensif MCU yang efisien, terstandar, dan disesuaikan dengan kebutuhan korporat maupun individu</p>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <!-- Fasilitas Lengkap -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-300 group">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Fasilitas Lengkap</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Laboratorium modern, radiologi digital, dan ruang konsultasi yang nyaman dalam satu lokasi.</p>
        </div>

        <!-- Hasil Cepat -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Hasil Cepat & Akurat</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Opsi standar 1-3 hari atau ekspres 24 jam dengan jaminan akurasi hasil pemeriksaan.</p>
        </div>

        <!-- Tim Profesional -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Tim Profesional</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Dokter dan tenaga medis berpengalaman dengan sertifikasi dan SOP ketat untuk setiap prosedur.</p>
        </div>

        <!-- Pelayanan Etis -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-orange-200 transition-all duration-300 group">
          <div class="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-slate-800 mb-2">Pelayanan Etis & Amanah</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Menghormati privasi pasien, menjaga kerahasiaan hasil, dan mengutamakan kepentingan kesehatan Anda.</p>
        </div>
      </div>

      <!-- Additional Features for Lab Clinic -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <!-- Teknologi Modern -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-2">Teknologi Terkini</h4>
              <p class="text-slate-600 text-sm">Peralatan laboratorium modern dan sistem digital untuk akurasi maksimal.</p>
            </div>
          </div>
        </div>

        <!-- Layanan Corporate -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-2">Layanan Korporat</h4>
              <p class="text-slate-600 text-sm">Paket MCU khusus perusahaan dengan laporan terstruktur untuk HR.</p>
            </div>
          </div>
        </div>

        <!-- Jadwal Fleksibel -->
        <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div class="flex items-start">
            <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 class="font-semibold text-slate-800 mb-2">Jadwal Fleksibel</h4>
              <p class="text-slate-600 text-sm">Buka setiap hari termasuk weekend untuk kenyamanan Anda.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
        <div class="text-center mb-8">
          <h3 class="text-2xl font-bold text-slate-800 mb-2">Pertanyaan Umum</h3>
          <p class="text-slate-600">Informasi lengkap tentang layanan dan prosedur kami</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <!-- Column 1 -->
          <div class="space-y-4">
            <details class="bg-slate-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
              <summary class="font-semibold text-slate-800 cursor-pointer flex items-center">
                <span class="flex-1">Apakah ada paket MCU untuk perusahaan?</span>
                <svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p class="mt-3 text-slate-600 text-sm">
                Ya, kami menyediakan paket MCU khusus untuk perusahaan dengan opsi onsite/offsite dan laporan terstruktur yang mudah dipahami oleh divisi HR.
              </p>
            </details>

            <details class="bg-slate-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
              <summary class="font-semibold text-slate-800 cursor-pointer flex items-center">
                <span class="flex-1">Berapa lama hasil laboratorium tersedia?</span>
                <svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p class="mt-3 text-slate-600 text-sm">
                Hasil standar tersedia dalam 1-3 hari kerja. Untuk kebutuhan mendesak, kami menyediakan layanan ekspres dengan hasil dalam 24 jam.
              </p>
            </details>
          </div>

          <!-- Column 2 -->
          <div class="space-y-4">
            <details class="bg-slate-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
              <summary class="font-semibold text-slate-800 cursor-pointer flex items-center">
                <span class="flex-1">Apakah hasil MCU dijamin kerahasiaannya?</span>
                <svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p class="mt-3 text-slate-600 text-sm">
                Absolutely. Kami menjamin kerahasiaan hasil pemeriksaan dan hanya memberikan akses kepada pihak yang berwenang sesuai persetujuan.
              </p>
            </details>

            <details class="bg-slate-50 p-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
              <summary class="font-semibold text-slate-800 cursor-pointer flex items-center">
                <span class="flex-1">Apakah melayani MCU untuk persyaratan kerja?</span>
                <svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </summary>
              <p class="mt-3 text-slate-600 text-sm">
                Ya, kami melayani MCU untuk berbagai keperluan termasuk pra-kerja, periodic check-up, dan persyaratan khusus industri.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// presentational
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Custom styling for details/summary */
details[open] summary {
  margin-bottom: 0.5rem;
}

details summary {
  list-style: none;
}

details summary::-webkit-details-marker {
  display: none;
}
</style>