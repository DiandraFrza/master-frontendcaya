<!-- @format -->

<script setup>
import { ref } from "vue";
import { servicesCategories } from "@/pages/data/servicesData.js";
import { useRouter } from "vue-router";

const router = useRouter();
const selectedCategory = ref(null);
const showReservationModal = ref(false);

const handleServiceClick = (service) => {
  if (service.requiresReservation) {
    // Jika butuh reservasi, buka modal
    selectedCategory.value = service;
    showReservationModal.value = true;
  } else {
    // Jika tidak, langsung ke halaman
    router.push(service.path);
  }
};

const closeModal = () => {
  showReservationModal.value = false;
  selectedCategory.value = null;
};
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-linear-to-br from-orange-50 via-white to-orange-50 py-20 relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 mb-8 text-sm text-gray-600">
          <router-link to="/" class="hover:text-orange-600 transition-colors">Beranda</router-link>
          <i class="fa-solid fa-chevron-right"></i>
          <span class="text-orange-600 font-semibold">Layanan</span>
        </div>

        <!-- Main Content -->
        <div class="text-center mb-16">
          <div class="inline-flex items-center gap-2 bg-orange-100/80 backdrop-blur px-4 py-2 rounded-full border border-orange-200/50 mb-6">
            <i class="fa-solid fa-sparkles text-orange-600"></i>
            <span class="text-sm font-semibold text-orange-700">Layanan Lengkap Kami</span>
          </div>

          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Temukan Layanan
            <span class="text-transparent bg-clip-text bg-linear-to-r from-orange-500 to-orange-600">Kesehatan Anda</span>
          </h1>

          <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-8">Kami menyediakan berbagai layanan kesehatan modern dengan standar internasional. Dari pemeriksaan laboratorium hingga screening penyakit komprehensif.</p>

          <!-- Quick Stats -->
          <div class="flex flex-wrap justify-center gap-8 py-6 border-t border-b border-orange-200/50">
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-600 mb-1">{{ servicesCategories.length }}</div>
              <div class="text-sm text-gray-600">Kategori Layanan</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-600 mb-1">99%</div>
              <div class="text-sm text-gray-600">Kepuasan Pelanggan</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-orange-600 mb-1">24/7</div>
              <div class="text-sm text-gray-600">Siap Melayani</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-orange-100/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <!-- Section Title -->
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-4">Pilih Layanan Anda</h2>
          <div class="w-16 h-1 bg-linear-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <!-- Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="service in servicesCategories" :key="service.id" @click="handleServiceClick(service)" class="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 hover:border-orange-300">
            <!-- Card Header with Gradient -->
            <div :class="['bg-linear-to-br ' + service.color, 'h-20 relative overflow-hidden']">
              <div class="absolute inset-0 opacity-10">
                <div class="absolute top-2 right-2 text-4xl">
                  <i :class="'fa-solid ' + service.icon"></i>
                </div>
              </div>
            </div>

            <!-- Card Body -->
            <div class="p-6 relative z-10 -mt-8">
              <!-- Icon Badge -->
              <div :class="['w-16 h-16 rounded-lg bg-linear-to-br ' + service.color, 'flex items-center justify-center text-white text-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform']">
                <i :class="'fa-solid ' + service.icon"></i>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {{ service.name }}
              </h3>

              <!-- Description -->
              <p class="text-sm text-gray-600 mb-4 line-clamp-2">
                {{ service.description }}
              </p>

              <!-- Reservation Badge -->
              <div v-if="service.requiresReservation" class="flex items-center gap-2 text-xs text-amber-700 bg-amber-50 px-3 py-2 rounded-lg border border-amber-200 mb-4">
                <i class="fa-solid fa-calendar-check"></i>
                <span>Perlu Reservasi</span>
              </div>

              <!-- CTA Button -->
              <button class="w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all group-hover:scale-105 active:scale-95" :class="service.requiresReservation ? 'bg-amber-100 text-amber-700 hover:bg-amber-200' : 'bg-orange-100 text-orange-700 hover:bg-orange-200'">
                <i class="fa-solid fa-arrow-right mr-2"></i>
                {{ service.requiresReservation ? "Reservasi Sekarang" : "Lihat Layanan" }}
              </button>
            </div>

            <!-- Hover Indicator -->
            <div class="h-1 bg-linear-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features/Benefits Section -->
    <section class="py-20 bg-linear-to-br from-orange-50 to-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-16">Mengapa Memilih Kami?</h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-check-circle"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Hasil Akurat</h3>
            <p class="text-gray-600 text-sm">Teknologi terkini dan tim profesional memastikan hasil pemeriksaan yang akurat dan dapat dipercaya.</p>
          </div>

          <!-- Feature 2 -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-clock"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Cepat & Efisien</h3>
            <p class="text-gray-600 text-sm">Layanan yang efisien dengan waktu tunggu minimal. Hasil pemeriksaan dapat diakses secara digital.</p>
          </div>

          <!-- Feature 3 -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-green-100 text-green-600 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-shield"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Privasi Terjamin</h3>
            <p class="text-gray-600 text-sm">Data kesehatan Anda dijaga dengan keamanan tingkat tinggi sesuai standar HIPAA internasional.</p>
          </div>

          <!-- Feature 4 -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-stethoscope"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Dokter Bersertifikat</h3>
            <p class="text-gray-600 text-sm">Semua dokter kami bersertifikat dan berpengalaman di bidangnya masing-masing.</p>
          </div>

          <!-- Feature 5 -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-house-chimney"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Home Service</h3>
            <p class="text-gray-600 text-sm">Layanan ke rumah tersedia untuk kemudahan Anda. Tidak perlu datang ke klinik.</p>
          </div>

          <!-- Feature 6 -->
          <div class="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center text-xl mb-4">
              <i class="fa-solid fa-headset"></i>
            </div>
            <h3 class="text-lg font-bold text-gray-900 mb-2">Customer Support</h3>
            <p class="text-gray-600 text-sm">Tim customer support 24/7 siap membantu menjawab semua pertanyaan Anda kapan saja.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-linear-to-r from-orange-500 to-orange-600 text-white py-16 relative overflow-hidden">
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 max-w-6xl relative z-10 text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Butuh Konsultasi?</h2>
        <p class="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">Hubungi tim kami untuk mendapatkan rekomendasi pemeriksaan yang tepat sesuai dengan kebutuhan Anda.</p>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
            <i class="fa-brands fa-whatsapp"></i>
            Chat WhatsApp
          </a>
          <a href="tel:+6281290094900" class="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            <i class="fa-solid fa-phone"></i>
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>

    <!-- Reservation Modal -->
    <transition name="fade">
      <div v-if="showReservationModal" class="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div class="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in">
          <!-- Modal Header -->
          <div class="bg-linear-to-r from-orange-500 to-orange-600 text-white p-6 flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center text-xl">
                <i :class="'fa-solid ' + selectedCategory?.icon"></i>
              </div>
              <div class="text-left">
                <h3 class="text-lg font-bold">{{ selectedCategory?.name }}</h3>
                <p class="text-orange-100 text-sm">Reservasi Layanan</p>
              </div>
            </div>
            <button @click="closeModal" class="text-white/70 hover:text-white transition-colors">
              <i class="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>

          <!-- Modal Body -->
          <div class="p-8">
            <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
              <div class="flex gap-3">
                <div class="text-orange-600 text-lg mt-0.5">
                  <i class="fa-solid fa-calendar-check"></i>
                </div>
                <div>
                  <p class="font-semibold text-gray-900 text-sm">Langkah Berikutnya</p>
                  <p class="text-gray-700 text-sm">Hubungi kami untuk menjadwalkan reservasi. Tim kami akan membantu Anda memilih waktu yang tepat.</p>
                </div>
              </div>
            </div>

            <div class="space-y-3">
              <p class="text-sm text-gray-600 font-semibold mb-4">Hubungi kami melalui:</p>

              <!-- WhatsApp Button -->
              <a :href="'https://wa.me/081290094900?text=Saya ingin reservasi ' + selectedCategory?.name" target="_blank" class="flex items-center gap-3 p-3 rounded-lg border-2 border-green-200 bg-green-50 hover:bg-green-100 transition-colors group">
                <div class="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <i class="fa-brands fa-whatsapp"></i>
                </div>
                <div class="flex-1 text-left">
                  <p class="font-semibold text-gray-900 text-sm">WhatsApp</p>
                  <p class="text-gray-600 text-xs">081290094900</p>
                </div>
                <i class="fa-solid fa-arrow-right text-green-600"></i>
              </a>

              <!-- Phone Button -->
              <a href="tel:+6281290094900" class="flex items-center gap-3 p-3 rounded-lg border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 transition-colors group">
                <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="flex-1 text-left">
                  <p class="font-semibold text-gray-900 text-sm">Telepon</p>
                  <p class="text-gray-600 text-xs">+62 812 9009 4900</p>
                </div>
                <i class="fa-solid fa-arrow-right text-blue-600"></i>
              </a>

              <!-- Email Button -->
              <a href="mailto:info@medicinecaya.com" class="flex items-center gap-3 p-3 rounded-lg border-2 border-orange-200 bg-orange-50 hover:bg-orange-100 transition-colors group">
                <div class="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="flex-1 text-left">
                  <p class="font-semibold text-gray-900 text-sm">Email</p>
                  <p class="text-gray-600 text-xs">info@medicinecaya.com</p>
                </div>
                <i class="fa-solid fa-arrow-right text-orange-600"></i>
              </a>
            </div>

            <!-- Disclaimer -->
            <div class="bg-gray-50 rounded-lg p-3 mt-6 text-xs text-gray-600 border border-gray-200">
              <i class="fa-solid fa-info-circle text-gray-400 mr-2"></i>
              Kami akan menghubungi Anda kembali dalam 1x24 jam untuk mengkonfirmasi jadwal reservasi.
            </div>

            <!-- Close Button -->
            <button @click="closeModal" class="w-full mt-6 py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold transition-colors">Tutup</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
/* Line clamp for description */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Fade and zoom animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Zoom animation for modal */
.animate-in.zoom-in {
  animation: zoomIn 0.3s ease-out;
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
}

.bg-clip-text {
  background-clip: text;
  -webkit-background-clip: text;
}

.text-transparent {
  color: transparent;
}
</style>
