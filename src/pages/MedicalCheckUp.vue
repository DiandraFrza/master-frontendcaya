<script setup>
import { ref } from 'vue'

const services = ref([
  {
    id: 1,
    title: "Paket MCU K3 - Basic",
    description: "Konsultasi + CBC + Urinalisis + ECG + Chest X-ray + Sertifikat.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"
  },
  {
    id: 2,
    title: "Screening Jantung (ECG)",
    description: "Pemeriksaan cepat non-invasif, interpretasi dokter spesialis.",
    icon: "M2 12h4l3-9 4 18 3-9h4"
  },
  {
    id: 3,
    title: "Panel Darah Lengkap (CBC)",
    description: "Deteksi anemia, infeksi, dan parameter penting darah lainnya.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1z"
  },
  {
    id: 4,
    title: "Chest X-Ray",
    description: "Evaluasi paru dan struktur dada — wajib di banyak paket K3.",
    icon: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"
  },
  {
    id: 5,
    title: "Audiometri",
    description: "Tes pendengaran untuk deteksi gangguan akibat lingkungan kerja.",
    icon: "M9 19V6l12-3v13"
  },
  {
    id: 6,
    title: "Konsultasi Dokter & Rekomendasi",
    description: "Saran medis tertulis dan klasifikasi rekomendasi untuk HR.",
    icon: "M13 16h-1v-4h-1m1-4h.01"
  }
])

const branches = ref([
  { id: 'depok', title: 'Depok', promo: 'Promo Check-up Korporat - Gratis Konsultasi HR', hasPromo: true, link: '/branches/depok' },
  { id: 'buli', title: 'Buli', promo: 'Pemeriksaan Fast-Track untuk pekerja pabrik', hasPromo: true, link: '/branches/buli' },
  { id: 'jakarta', title: 'Jakarta', promo: 'Express Report 24 jam (terbatas)', hasPromo: true, link: '/branches/jakarta' },
  { id: 'surabaya', title: 'Surabaya', promo: 'Onsite MCU untuk grup hingga 200 orang', hasPromo: true, link: '/branches/surabaya' },
  { id: 'tanjungpinang', title: 'Tanjung Pinang', promo: 'Diskon paket K3 untuk klien baru', hasPromo: true, link: '/branches/tanjungpinang' }
])

const walkIn = ref([
  { branch: 'Depok', services: ['Konsultasi Umum', 'CBC', 'Urinalisis', 'ECG'] },
  { branch: 'Buli', services: ['Konsultasi Umum', 'Audiometri', 'Chest X-Ray'] },
  { branch: 'Jakarta', services: ['Screening Jantung', 'CBC', 'Rapid Test'] },
  { branch: 'Surabaya', services: ['Konsultasi & Rujukan', 'Urinalisis', 'X-Ray'] },
  { branch: 'Tanjung Pinang', services: ['Konsultasi Umum', 'CBC', 'ECG'] }
])

const showModal = ref(false)
const selectedService = ref(null)

const openModal = (service) => {
  selectedService.value = service
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedService.value = null
  document.body.style.overflow = ''
}
</script>

<template>
  <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
    <div class="container mx-auto px-4 max-w-7xl">

      <div class="text-center max-w-4xl mx-auto mb-12">
        <span
          class="inline-block text-sm font-medium text-[#f15840] uppercase tracking-wider mb-4 bg-amber-100 px-3 py-1 rounded-full">
          Layanan Unggulan MCU K3
        </span>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Pemeriksaan MCU Profesional untuk Perusahaan & Individu
        </h2>
        <p class="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Paket sesuai standar K3, hasil rapi untuk kebutuhan HR, dan opsi onsite untuk pemeriksaan massal.
        </p>

        <div class="mt-6 flex justify-center gap-3">
          <a href="/mcu"
            class="inline-flex items-center gap-3 bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg">
            Lihat Semua Layanan
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </a>
          <a href="/appointment" class="inline-flex items-center gap-2 border border-gray-200 px-6 py-3 rounded-full">
            Booking Sekarang
          </a>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-gray-900">Sebaran Cabang Caya</h3>
          <p class="text-sm text-gray-500">Pilih cabang untuk lihat promo & layanan tersedia.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <article v-for="branch in branches" :key="branch.id"
            class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all">
            <div class="flex justify-between items-start">
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 text-lg mb-2">{{ branch.title }}</h4>
                <p class="text-sm text-gray-600">{{ branch.promo }}</p>
              </div>
              <div class="ml-4 flex flex-col items-end">
                <span v-if="branch.hasPromo"
                  class="text-xs bg-amber-100 text-amber-700 px-3 py-1 rounded-full mb-2">Promo</span>
                <a :href="branch.link" class="text-sm text-[#F94327] font-semibold whitespace-nowrap">Lihat Promo →</a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="mb-12">
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-2xl font-bold text-gray-900">Layanan Walk-in per Cabang</h3>
          <p class="text-sm text-gray-500">Layanan yang rutin tersedia di masing-masing cabang.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="item in walkIn" :key="item.branch"
            class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg flex flex-col h-full">
            <div class="flex-1">
              <h4 class="font-semibold text-gray-900 mb-3">{{ item.branch }}</h4>
              <ul class="text-sm text-gray-600 space-y-2">
                <li v-for="svc in item.services" :key="svc" class="flex items-center">
                  <span class="w-2 h-2 bg-[#F94327] rounded-full mr-3"></span>
                  {{ svc }}
                </li>
              </ul>
            </div>
            <div class="mt-4 pt-4 border-t border-gray-100">
              <a :href="'/branches/' + item.branch.toLowerCase().replace(/ /g, '')"
                class="text-sm font-semibold text-[#F94327]">Detail Cabang →</a>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-12">
        <div class="text-center mb-8">
          <h3 class="text-3xl font-bold text-gray-900 mb-2">Layanan Medis Kami</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">Ringkasan layanan utama yang sering diminta perusahaan.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article v-for="service in services" :key="service.id"
            class="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl transition-all flex flex-col h-full">
            <div class="flex items-start gap-4 flex-1">
              <div
                class="flex-none w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7D14] to-[#F94327] text-white flex items-center justify-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon" />
                </svg>
              </div>
              <div class="flex-1">
                <h4 class="font-semibold text-gray-900 text-lg mb-2">{{ service.title }}</h4>
                <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ service.description }}</p>
              </div>
            </div>
            <!-- Tombol yang selalu sejajar di bawah -->
            <div class="mt-auto pt-4">
              <div class="flex gap-3">
                <button @click="openModal(service)"
                  class="flex-1 bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#e83a20] transition-colors min-h-[42px] flex items-center justify-center">
                  Detail
                </button>
                <a href="/mcu"
                  class="flex-1 border border-gray-200 px-4 py-2.5 rounded-lg text-sm hover:bg-gray-50 transition-colors min-h-[42px] flex items-center justify-center text-center">
                  Lihat Paket
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>

      <div class="text-center">
        <div class="bg-linear-to-r from-[#FF7D14] to-[#F94327] rounded-3xl p-8 text-white shadow-xl">
          <h3 class="text-2xl md:text-3xl font-bold mb-3 text-white">Butuh Penawaran Khusus Perusahaan?</h3>
          <p class="text-amber-100 mb-4 text-lg">Kirim kebutuhanmu, tim kami buat paket custom & onsite.</p>
          <a href="https://wa.me/081290094900"
            class="inline-flex items-center gap-3 bg-white text-amber-600 px-8 py-3 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div class="bg-white rounded-2xl max-w-md w-full mx-auto p-6 shadow-2xl" @click.stop>
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-xl font-bold text-gray-900">{{ selectedService?.title }}</h3>
          <button @click="closeModal" class="text-gray-400 hover:text-gray-600 p-1 rounded-lg transition-colors">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <p class="text-gray-600 mb-4">{{ selectedService?.description }}</p>

        <div class="space-y-3">
          <h4 class="font-semibold text-gray-900">Termasuk (contoh):</h4>
          <ul class="text-sm text-gray-600 space-y-2">
            <li class="flex items-center">
              <svg class="w-4 h-4 text-[#F94327] mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Interpretasi Dokter
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-[#F94327] mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Hasil Digital (PDF)
            </li>
            <li class="flex items-center">
              <svg class="w-4 h-4 text-[#F94327] mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Sertifikat (jika diperlukan)
            </li>
          </ul>
        </div>

        <div class="mt-6 flex gap-3">
          <a :href="'/appointment?service=' + encodeURIComponent(selectedService?.title || '')"
            class="flex-1 bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white text-center py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all">
            Booking Sekarang
          </a>
          <a href="https://wa.me/081290094900"
            class="flex-1 border border-[#F94327] text-amber-600 text-center py-3 px-4 rounded-xl font-semibold hover:bg-amber-50 transition-colors">
            Tanya via WA
          </a>
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