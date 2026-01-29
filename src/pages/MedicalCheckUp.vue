<!-- @format -->
<script setup>
import { ref } from "vue";

// new modal
import { onMounted, onBeforeUnmount } from "vue";

const handleEsc = (e) => {
  if (e.key === "Escape" && showModal.value) {
    closeModal();
  }
};

onMounted(() => {
  window.addEventListener("keydown", handleEsc);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleEsc);
});
// modal
const showModal = ref(false);
const activeService = ref(null);

const serviceDetails = {
  Laboratorium: ["Darah Lengkap (Hematologi)", "Urin Lengkap", "Profil Lemak (Kolesterol, HDL, LDL, Trigliserida)", "Fungsi Ginjal (Ureum, Kreatinin)", "Fungsi Hati (SGOT, SGPT, Gamma GT)", "Gula Darah (Puasa / 2PP / Sewaktu)", "Golongan Darah & Rhesus", "Tes Narkoba"],
  "Medical Check Up": ["Paket Silver", "Paket Platinum", "K3 Dasar", "K3 Standar", "K3 Lengkap", "Paket Haji & Umrah"],
  "Screening Penyakit": ["Profil Lemak ⭐", "Fungsi Ginjal ⭐", "Fungsi Hati", "Diabetes", "Jantung", "Obesitas"],
  "Radiologi & Penunjang": ["Thorax", "Panoramic", "Cephalometric", "Dental", "Extremitas (Genu, Ankle, Wrist, dll)"],
  "Layanan Korporasi & K3": ["MCU Berkala Karyawan", "MCU Onsite", "Rekap & Laporan HR"],
  "Home Service": ["Pengambilan darah ke rumah", "Pengambilan darah ke kantor"],
};

const openModal = (service) => {
  activeService.value = service;
  showModal.value = true;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  showModal.value = false;
  activeService.value = null;
  document.body.style.overflow = "";
};

const services = ref([
  {
    id: 1,
    title: "Laboratorium",
    desc: "Pemeriksaan darah & urin lengkap, profil lemak, fungsi ginjal dan hati, hingga tes khusus.",
    highlights: ["Profil Lemak", "Fungsi Ginjal", "Darah Lengkap"],
    link: "services/lab",
    icon: "...",
  },
  {
    id: 2,
    title: "Medical Check Up",
    desc: "Paket MCU personal & perusahaan: Silver, Platinum, K3 Dasar–Lengkap, Haji & Umrah.",
    highlights: ["K3", "Haji & Umrah", "Korporasi"],
    link: "/services/medical-check-up",
    icon: "...",
  },
  {
    id: 3,
    title: "Screening Penyakit",
    desc: "Deteksi dini penyakit metabolik dan organ vital dengan fokus Lemak & Ginjal.",
    highlights: ["Lemak ⭐", "Ginjal ⭐", "Diabetes"],
    link: "/services/screening",
    icon: "...",
  },
  {
    id: 4,
    title: "Radiologi & Penunjang",
    desc: "Pemeriksaan radiologi dada, gigi, tulang dan sendi dengan alat modern.",
    highlights: ["Thorax", "Dental", "Extremitas"],
    link: "/services/radiologi",
    icon: "...",
  },
  {
    id: 5,
    title: "Layanan Korporasi & K3",
    desc: "MCU berkala karyawan, laporan kesehatan, dan layanan onsite perusahaan.",
    highlights: ["MCU Berkala", "Onsite", "Laporan HR"],
    link: "/services/korporasi",
    icon: "...",
  },
  {
    id: 6,
    title: "Home Service",
    desc: "Pengambilan sampel darah langsung di rumah atau kantor.",
    highlights: ["Ke Rumah", "Ke Kantor"],
    link: "/services/home-service",
    icon: "...",
  },
]);
</script>
<template>
  <section class="py-20 bg-[#fdfeff]">
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
              <div class="flex flex-wrap gap-2 mb-3">
                <span v-for="tag in item.highlights" :key="tag" class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                  {{ tag }}
                </span>
              </div>
              <p class="text-gray-600 text-sm leading-relaxed">
                {{ item.desc }}
              </p>
            </div>
          </div>

          <!-- MODAL -->
          <transition name="modal">
            <div v-if="showModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4" @click="closeModal">
              <div class="bg-white max-w-lg w-full rounded-2xl p-6 shadow-xl relative" @click.stop>
                <!-- Header -->
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h3 class="text-xl font-bold text-gray-900">
                      {{ activeService?.title }}
                    </h3>
                    <p class="text-sm text-gray-500">Ringkasan layanan</p>
                  </div>
                  <button @click="closeModal" class="text-gray-400 hover:text-gray-600">✕</button>
                </div>

                <!-- Content -->
                <ul class="space-y-2 mb-6">
                  <li v-for="item in serviceDetails[activeService?.title]" :key="item" class="flex items-start gap-2 text-sm text-gray-700">
                    <span class="mt-1 w-2 h-2 bg-[#F94327] rounded-full"></span>
                    {{ item }}
                  </li>
                </ul>

                <!-- CTA -->
                <div class="flex gap-3">
                  <router-link :to="activeService?.link" class="flex-1 text-center bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white py-2.5 rounded-xl font-semibold"> Lihat Halaman Lengkap </router-link>
                  <a href="https://wa.me/081290094900" class="flex-1 text-center border border-gray-200 py-2.5 rounded-xl font-semibold hover:bg-gray-50"> Tanya Admin </a>
                </div>
              </div>
            </div>
          </transition>
          <!-- CTA -->
          <button @click="openModal(item)" class="inline-flex items-center justify-center w-full border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors min-h-[42px]">Lihat Detail</button>

          <!-- <div class="mt-auto pt-4">
            <router-link :to="item.link" class="inline-flex items-center justify-center w-full border border-gray-200 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors min-h-[42px]"> Lihat Detail </router-link>
          </div> -->
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
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
