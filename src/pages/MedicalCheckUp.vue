<!-- @format -->
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// modal
const services = ref([
  {
    id: 1,
    title: "Laboratorium",
    desc: "Pemeriksaan darah & urin lengkap, profil lemak, fungsi ginjal dan hati, hingga tes khusus.",
    highlights: ["Profil Lemak", "Fungsi Ginjal", "Darah Lengkap"],
    link: "services/lab",
    icon: "fa-flask-vial",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 2,
    title: "Medical Check Up",
    desc: "Paket MCU personal & perusahaan: Silver, Platinum, K3 Dasar–Lengkap, Haji & Umrah.",
    highlights: ["K3", "Haji & Umrah", "Korporasi"],
    link: "/services/mcu",
    icon: "fa-stethoscope",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 3,
    title: "Screening Penyakit",
    desc: "Deteksi dini penyakit metabolik dan organ vital dengan fokus Lemak & Ginjal.",
    highlights: ["Lemak ⭐", "Ginjal ⭐", "Diabetes"],
    link: "/services/screening",
    icon: "fa-shield-heart",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 4,
    title: "Radiologi",
    desc: "Pemeriksaan radiologi dada, gigi, tulang dan sendi dengan alat modern.",
    highlights: ["Thorax", "Dental", "Extremitas"],
    link: "/services/radiologi",
    icon: "fa-x-ray",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 5,
    title: "Layanan Korporat",
    desc: "MCU berkala karyawan, laporan kesehatan, dan layanan onsite perusahaan.",
    highlights: ["MCU Berkala", "Onsite", "Laporan HR"],
    link: "/services/korporasi",
    icon: "fa-building",
    color: "from-orange-500 to-orange-600",
  },
  {
    id: 6,
    title: "Home Service",
    desc: "Pengambilan sampel darah langsung di rumah atau kantor.",
    highlights: ["Ke Rumah", "Ke Kantor"],
    link: "/services/home-service",
    icon: "fa-house-medical",
    color: "from-orange-500 to-orange-600",
  },
]);

const openModal = (service) => {
  router.push(service.link);
};
</script>
<template>
  <section class="py-20 bg-[#fdfeff]">
    <div class="container mx-auto px-4 max-w-7xl">
      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-4">
          <i class="fa-solid fa-heart-pulse"></i>
          <span class="font-semibold text-sm">Layanan Komprehensif</span>
        </div>
        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Layanan Kami</h3>
        <p class="text-gray-600 max-w-2xl mx-auto text-lg">Ragam layanan kesehatan profesional untuk keluarga dan perusahaan dengan standar terbaik.</p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article v-for="item in services" :key="item.id" class="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-2 flex flex-col h-full">
          <!-- Icon Badge -->
          <div :class="`w-16 h-16 rounded-xl bg-linear-to-br ${item.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`">
            <i :class="`fa-solid ${item.icon} text-2xl`"></i>
          </div>

          <!-- Title -->
          <h4 class="font-bold text-gray-900 text-lg mb-2 group-hover:text-[#ff562c] transition-colors">
            {{ item.title }}
          </h4>

          <!-- Highlights -->
          <!-- <div class="flex flex-wrap gap-2 mb-3">
            <span v-for="tag in item.highlights" :key="tag" class="text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full font-medium">
              {{ tag }}
            </span>
          </div> -->

          <!-- Description -->
          <!-- <p class="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
            {{ item.desc }}
          </p> -->

          <!-- CTA Button -->
          <button @click="openModal(item)" class="inline-flex items-center justify-center w-full border-2 border-[#ff562c] text-[#ff562c] px-4 py-2.5 rounded-lg text-sm font-bold hover:bg-[#ff562c] hover:text-white transition-all duration-300 min-h-11">
            <i class="fa-solid fa-arrow-right mr-2"></i>
            Lihat Detail
          </button>
        </article>
      </div>

      <!-- Bottom CTA -->
      <!-- <div class="text-center mt-16">
        <div class="bg-gradient-to-r from-[#FF7D14] to-[#F94327] rounded-3xl p-8 text-white shadow-xl">
          <div class="flex items-center justify-center gap-3 mb-3">
            <i class="fa-solid fa-star text-2xl"></i>
            <h3 class="text-2xl md:text-3xl font-bold">Butuh Penawaran Khusus Perusahaan?</h3>
            <i class="fa-solid fa-star text-2xl"></i>
          </div>
          <p class="text-amber-100 mb-6 text-lg">Tim kami siap membantu paket custom & layanan onsite dengan harga terbaik.</p>
          <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-amber-600 px-8 py-3 rounded-xl font-bold hover:bg-amber-50 transition-all hover:scale-105">
            <i class="fa-brands fa-whatsapp"></i>
            Konsultasi Gratis via WhatsApp
          </a>
        </div>
      </div> -->
    </div>
  </section>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.bg-white {
  transition: all 0.25s ease;
}
</style>
