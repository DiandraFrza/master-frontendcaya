<template>
  <section class="bg-white text-gray-800">
    <!-- Compact hero/banner (kept minimal - matches detail page style later) -->
    <div class="relative overflow-hidden bg-[url('/assets/images/banner/bnr1.webp')] bg-cover bg-center">
      <div class="bg-black/50">
        <div class="container mx-auto px-6 py-20 text-center">
          <h1 class="text-white font-semibold text-3xl md:text-5xl lg:text-6xl leading-tight">
            About Us
          </h1>
          <p class="mt-3 text-white/90 max-w-2xl mx-auto">
            Klinik syariah untuk keluarga & perusahaan — layanan pemeriksaan lengkap dengan pendekatan ramah anak.
          </p>
          <nav class="mt-6">
            <ul class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-sm text-white/90">
              <li><a href="/" class="text-amber-400 font-medium">Home</a></li>
              <li class="text-white/60">/</li>
              <li class="text-white">About Us</li>
            </ul>
          </nav>
        </div>
      </div>
      <!-- decorative dots (ke kanan bawah) -->
      <div class="hidden lg:block absolute right-6 bottom-6 opacity-40">
        <svg width="80" height="80" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.5 0L34.425 26.575L61 30.5L34.425 34.425L30.5 61L26.575 34.425L0 30.5L26.575 26.575L30.5 0Z" fill="#2EA743"/>
        </svg>
      </div>
    </div>

    <!-- Main about content -->
    <div class="container mx-auto px-6 py-16">
      <div class="grid lg:grid-cols-2 gap-10 items-center">
        <!-- images stack -->
        <div class="space-y-4">
          <div class="rounded-2xl overflow-hidden shadow-lg">
            <img src="/src/assets/images/about/img1.webp" alt="Clinic photo" class="w-full h-72 object-cover" />
          </div>
          <div class="flex gap-4">
            <div class="flex-1 rounded-2xl overflow-hidden shadow-md">
              <img src="/src//assets/images/about/img2.webp" alt="Team" class="w-full h-40 object-cover" />
            </div>
            <div class="flex-1 rounded-2xl overflow-hidden shadow-md">
              <img src="/src/assets/images/about/img4.webp" alt="Facility" class="w-full h-40 object-cover" />
            </div>
          </div>
        </div>

        <!-- copy + CTA -->
        <div>
          <span class="text-amber-500 font-medium">About Us</span>
          <h2 class="mt-3 text-3xl md:text-4xl font-semibold">
            Spesialis Perawatan Anak — Mudah, Cepat, & Terpercaya
          </h2>
          <p class="mt-4 text-gray-600 leading-relaxed">
            Kami menggabungkan tenaga medis berpengalaman dengan fasilitas modern dan pendekatan ramah anak.
            Hasil akurat, proses cepat — tersedia untuk personal & corporate MCU termasuk layanan onsite.
          </p>

          <!-- bullets -->
          <ul class="mt-6 grid sm:grid-cols-2 gap-3 text-gray-700">
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-700">✓</span>
              <div>
                <div class="font-semibold">Staf Berpengalaman</div>
                <div class="text-sm text-gray-500">Dokter & lab teknisi terlatih.</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-700">✓</span>
              <div>
                <div class="font-semibold">Hasil Cepat</div>
                <div class="text-sm text-gray-500">Hasil basic 1-3 hari kerja, ekspres tersedia.</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-700">✓</span>
              <div>
                <div class="font-semibold">Layanan Onsite</div>
                <div class="text-sm text-gray-500">Cocok untuk perusahaan & event kesehatan.</div>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <span class="inline-flex items-center justify-center w-9 h-9 rounded-full bg-green-100 text-green-700">✓</span>
              <div>
                <div class="font-semibold">Berstandar Syariah</div>
                <div class="text-sm text-gray-500">Prosedur & layanan sesuai prinsip syariah.</div>
              </div>
            </li>
          </ul>

          <!-- CTA -->
          <div class="mt-8 flex flex-wrap gap-3 items-center">
            <a href="/appointment.html" class="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold px-5 py-3 rounded-lg shadow">
              Reservasi Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22l-7-7 1.4-1.425L12 16.175V11h2v7.175l4.6-4.575L19 15z"/></svg>
            </a>

            <a :href="waLink" class="inline-flex items-center gap-2 border border-amber-500 text-amber-500 px-4 py-3 rounded-lg hover:bg-amber-50">
              Chat via WhatsApp
            </a>

            <button @click="openVideo" class="inline-flex items-center gap-2 text-gray-600 px-4 py-3 rounded-lg hover:bg-gray-50">
              <svg class="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l11-7z"/></svg>
              Watch Highlight
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- small stats strip -->
    <div class="bg-gray-50 border-t border-b">
      <div class="container mx-auto px-6 py-6 flex flex-col sm:flex-row gap-6 items-center justify-between">
        <div class="flex gap-6 items-center">
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">100K+</div>
            <div class="text-sm text-gray-500">Pemeriksaan</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">30+</div>
            <div class="text-sm text-gray-500">Cabang</div>
          </div>
          <div class="text-center">
            <div class="text-2xl font-bold text-gray-900">99%</div>
            <div class="text-sm text-gray-500">Kepuasan Pasien</div>
          </div>
        </div>

        <div class="text-sm text-gray-600">
          Trusted by families & companies across the region.
        </div>
      </div>
    </div>

    <!-- FAQ compact -->
    <div class="container mx-auto px-6 py-12">
      <div class="max-w-3xl mx-auto text-center">
        <h3 class="text-2xl font-semibold">Frequently Asked Questions</h3>
        <p class="mt-2 text-gray-500">Pertanyaan umum seputar reservasi, hasil lab, dan layanan onsite.</p>
      </div>

      <div class="mt-8 grid md:grid-cols-2 gap-4">
        <details class="p-4 border rounded-lg">
          <summary class="font-medium cursor-pointer">Apakah tersedia layanan onsite untuk perusahaan?</summary>
          <p class="mt-2 text-gray-500">Iya. Kami menyediakan paket onsite untuk perusahaan dengan invoice & laporan terstruktur.</p>
        </details>

        <details class="p-4 border rounded-lg">
          <summary class="font-medium cursor-pointer">Berapa lama hasil lab keluar?</summary>
          <p class="mt-2 text-gray-500">Hasil basic 1-3 hari kerja. Tersedia opsi ekspres jika dibutuhkan.</p>
        </details>

        <details class="p-4 border rounded-lg">
          <summary class="font-medium cursor-pointer">Bagaimana cara reservasi?</summary>
          <p class="mt-2 text-gray-500">Klik tombol Reservasi atau chat WhatsApp — tim kami akan bantu proses & invoice.</p>
        </details>

        <details class="p-4 border rounded-lg">
          <summary class="font-medium cursor-pointer">Apakah layanan sesuai prinsip syariah?</summary>
          <p class="mt-2 text-gray-500">Ya — semua prosedur & kebijakan layanan mengikuti standar syariah yang kami terapkan.</p>
        </details>
      </div>
    </div>

    <!-- small testimonial preview -->
    <div class="bg-gray-100">
      <div class="container mx-auto px-6 py-12">
        <div class="flex flex-col md:flex-row items-center gap-6">
          <div class="flex-1">
            <h4 class="text-xl font-semibold">What our patients say</h4>
            <p class="text-gray-600 mt-2">"Proses cepat & tim ramah — HRD kami puas." — PT. XYZ</p>
          </div>
          <div class="flex gap-4">
            <a href="/testimonials" class="px-4 py-2 bg-white rounded-lg shadow">Read more</a>
            <a href="/contact" class="px-4 py-2 border rounded-lg">Contact us</a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue';

const waLink = '/#'; // replace with actual pre-filled wa link when ready
function openVideo() {
  // quick video open — you can replace with modal logic
  window.open('https://www.youtube.com/watch?v=o8OgzQdA70c', '_blank');
}
</script>

<style scoped>
/* small helpers if needed */
.container { max-width: 1200px; }
</style>
