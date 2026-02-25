<!-- @format -->

<template>
  <div>
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700">
      <!-- Decorative background -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
        <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      <div class="relative container mx-auto px-4 max-w-7xl py-16 md:py-20">
        <div class="max-w-3xl mx-auto text-center">
          <!-- Eyebrow -->
          <div class="inline-flex items-center gap-2 mb-4 text-sm font-medium bg-white/20 px-4 py-1.5 rounded-full backdrop-blur text-white">
            <i class="fa-solid fa-location-dot"></i>
            <span>Jaringan Klinik Kami</span>
          </div>

          <!-- Title -->
          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">Temukan Klinik <span class="text-orange-100">Terdekat</span></h1>

          <!-- Description -->
          <p class="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">Cari dan temukan lokasi klinik Caya di seluruh Indonesia. Pelayanan kesehatan berkualitas dengan fasilitas modern untuk kebutuhan Anda.</p>

          <!-- Stats -->
          <div class="flex flex-wrap items-center justify-center gap-8 mt-8 text-white/90">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-hospital text-xl"></i>
              <span class="font-medium">{{ branches.length }} Lokasi</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-clock text-xl"></i>
              <span class="font-medium">Jam Operasional Fleksibel</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-star text-xl"></i>
              <span class="font-medium">Pelayanan Terbaik</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <main class="page-content">
      <!-- Search Section -->
      <section class="py-8 bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="max-w-2xl mx-auto">
            <div class="relative">
              <input v-model="query" type="text" placeholder="Cari berdasarkan nama klinik, alamat, atau kota..." class="w-full px-6 py-4 pl-14 rounded-2xl border border-gray-200 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-300 bg-white shadow-sm text-gray-700" />
              <i class="fa-solid fa-search absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
            </div>
          </div>
        </div>
      </section>

      <!-- Clinics & Map Section -->
      <section class="py-8 bg-gray-50 min-h-[calc(100vh-300px)]">
        <div class="container mx-auto px-4 max-w-7xl">
          <div class="grid lg:grid-cols-12 gap-6 h-full">
            <!-- Left: Clinic List -->
            <div class="lg:col-span-5 xl:col-span-4 space-y-4 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
              <!-- Clinic Cards -->
              <div v-for="branch in filtered" :key="branch.id" @click="selectBranch(branch)" class="bg-white rounded-xl p-5 border-2 cursor-pointer transition-all duration-300 hover:shadow-md" :class="selectedBranch?.id === branch.id ? 'border-orange-500 bg-orange-50/30 shadow-md' : 'border-gray-100 hover:border-orange-200'">
                <!-- Header -->
                <div class="flex items-start justify-between mb-3">
                  <div class="flex-1">
                    <h3 class="font-bold text-gray-900 text-lg leading-tight">{{ branch.name }}</h3>
                    <div v-if="branch.isPartner" class="inline-flex items-center gap-1.5 mt-1.5 text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                      <i class="fa-solid fa-handshake"></i>
                      Bekerja sama dengan MYU
                    </div>
                    <div v-if="branch.isMain" class="inline-flex items-center gap-1.5 mt-1.5 text-xs font-medium text-orange-600 bg-orange-50 px-2.5 py-1 rounded-full">
                      <i class="fa-solid fa-star"></i>
                      Klinik Pusat
                    </div>
                  </div>
                  <!-- Status Badge -->
                  <div class="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium shrink-0" :class="isOpen(branch.hours) ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'">
                    <span class="w-1.5 h-1.5 rounded-full" :class="isOpen(branch.hours) ? 'bg-green-500 animate-pulse' : 'bg-gray-400'"></span>
                    {{ isOpen(branch.hours) ? "Buka" : "Tutup" }}
                  </div>
                </div>

                <!-- Address -->
                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                  <i class="fa-solid fa-location-dot text-orange-500 mr-1.5"></i>
                  {{ branch.address }}
                </p>

                <!-- Hours -->
                <div class="flex items-center gap-2 text-sm text-gray-600 mb-4">
                  <i class="fa-regular fa-clock text-orange-500"></i>
                  <span>{{ branch.hours }}</span>
                </div>

                <!-- Actions -->
                <div class="flex gap-2">
                  <a :href="branch.maps" target="_blank" class="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-2.5 px-3 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2">
                    <i class="fa-solid fa-location-arrow"></i>
                    <span>Petunjuk Arah</span>
                  </a>
                  <a :href="waUrl(branch)" target="_blank" class="flex-1 bg-gray-100 text-[#ff562c] text-center py-2.5 px-3 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2">
                    <i class="fa-brands fa-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              <!-- Empty State -->
              <div v-if="filtered.length === 0" class="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i class="fa-solid fa-location-xmark text-gray-400 text-2xl"></i>
                </div>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Klinik tidak ditemukan</h3>
                <p class="text-white text-sm">Coba gunakan kata kunci lain atau lihat semua klinik kami</p>
              </div>
            </div>

            <!-- Right: Map -->
            <div class="lg:col-span-7 xl:col-span-8">
              <div class="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden h-full min-h-[500px] lg:min-h-[800px] sticky top-24">
                <!-- Map Header -->
                <div class="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                      <i class="fa-solid fa-map text-orange-600"></i>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900">Lokasi Klinik</h4>
                      <p v-if="selectedBranch" class="text-sm text-white">
                        {{ selectedBranch.name }}
                      </p>
                      <p v-else class="text-sm text-white">Pilih klinik dari daftar</p>
                    </div>
                  </div>
                  <div v-if="selectedBranch" class="hidden sm:flex items-center gap-2">
                    <span class="text-xs text-white">Koordinat:</span>
                    <span class="text-xs font-mono bg-gray-100 px-2 py-1 rounded">{{ selectedBranch.coordinates.lat }}, {{ selectedBranch.coordinates.lng }}</span>
                  </div>
                </div>

                <!-- Map Container -->
                <div class="relative h-[calc(100%-73px)]">
                  <!-- Google Maps Embed -->
                  <iframe v-if="selectedBranch" class="w-full h-full" :src="`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965!2d${selectedBranch.coordinates.lng}!3d${selectedBranch.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM znCsDM4JzIwLjciUyAxMDbCsDUwJzE5LjkiRQ!5e0!3m2!1sen!2sid!4v1700000000000`" width="100%" height="100%" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                  <!-- Default Map View (All Branches) -->
                  <div v-else class="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div class="text-center p-8">
                      <div class="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <i class="fa-solid fa-map-location-dot text-orange-500 text-3xl"></i>
                      </div>
                      <h4 class="font-semibold text-gray-800 mb-2">Peta Lokasi Klinik</h4>
                      <p class="text-white text-sm max-w-xs mx-auto">Pilih salah satu klinik dari daftar di samping untuk melihat lokasi detail pada peta</p>
                    </div>
                  </div>

                  <!-- Map Overlay Info -->
                  <div v-if="selectedBranch" class="absolute bottom-4 left-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                    <div class="flex items-start gap-3">
                      <div class="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center shrink-0">
                        <i class="fa-solid fa-hospital text-white text-xl"></i>
                      </div>
                      <div class="flex-1 min-w-0">
                        <h5 class="font-bold text-gray-900 truncate">{{ selectedBranch.name }}</h5>
                        <p class="text-sm text-gray-600 mt-0.5 line-clamp-2">{{ selectedBranch.address }}</p>
                        <div class="flex items-center gap-4 mt-2">
                          <a :href="`tel:${selectedBranch.phone}`" class="text-sm text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1.5">
                            <i class="fa-solid fa-phone"></i>
                            {{ selectedBranch.phone }}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-16 bg-linear-to-r from-orange-500 to-orange-600">
        <div class="container mx-auto px-4 max-w-7xl relative z-10">
          <div class="text-center">
            <h2 class="text-3xl text-white md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">Butuh Informasi Lebih Lanjut?</h2>
            <p class="text-lg text-white mb-8 max-w-2xl mx-auto">Tim customer service kami siap membantu Anda memilih klinik terdekat dan menjawab pertanyaan seputar layanan kami</p>

            <div class="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/081290094900" class="inline-flex items-center gap-2 bg-white text-[#ff562c] px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition-all hover:scale-105">
                <i class="fa-brands fa-whatsapp"></i>
                Chat WhatsApp
              </a>
              <a href="tel:+6281290094900" class="inline-flex items-center gap-2 bg-white/20 border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-all hover:scale-105">
                <i class="fa-solid fa-phone"></i>
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

const sitePhone = "+622177829192";
const siteWA = "081290007336";

const branches = ref([
  {
    id: "depok",
    name: "Caya — Depok",
    isMain: true,
    isPartner: false,
    address: "Jl. KH. M. Yusuf Raya No.13, Mekar Jaya, Sukmajaya, Depok",
    hours: "Senin–Sabtu 08:00–17:00 • Minggu 09:00–13:00",
    phone: "+62 21 7782 9192",
    maps: "https://maps.app.goo.gl/X3ocVevP8SLPBn2z7",
    coordinates: { lat: -6.3899, lng: 106.8305 },
  },
  {
    id: "bintaro",
    name: "Caya — Bintaro",
    isMain: false,
    isPartner: true,
    address: "Jl. Bintaro Utama 3A No.25, Sektor 3, Bintaro, Tangerang Selatan",
    hours: "Senin–Sabtu 08:00–17:00",
    phone: "+62 21 7486 3920",
    maps: "https://maps.app.goo.gl/xyz123",
    coordinates: { lat: -6.2785, lng: 106.7176 },
  },
  {
    id: "kelapagading",
    name: "Caya — Kelapa Gading",
    isMain: false,
    isPartner: true,
    address: "Jl. Boulevard Raya No.88, Kelapa Gading, Jakarta Utara",
    hours: "Senin–Sabtu 08:00–17:00 • Minggu 09:00–13:00",
    phone: "+62 21 4585 2210",
    maps: "https://maps.app.goo.gl/abc456",
    coordinates: { lat: -6.1694, lng: 106.9027 },
  },
  {
    id: "cibubur",
    name: "Caya — Cibubur",
    isMain: false,
    isPartner: false,
    address: "Jl. Raya Cibubur No.12, Ciracas, Jakarta Timur",
    hours: "Senin–Sabtu 08:00–17:00",
    phone: "+62 21 8778 1123",
    maps: "https://maps.app.goo.gl/def789",
    coordinates: { lat: -6.3565, lng: 106.8855 },
  },
  {
    id: "tangerang",
    name: "Caya — Tangerang",
    isMain: false,
    isPartner: true,
    address: "Jl. Jenderal Sudirman No.45, Tangerang",
    hours: "Senin–Sabtu 08:00–17:00 • Minggu 09:00–13:00",
    phone: "+62 21 5578 9910",
    maps: "https://maps.app.goo.gl/ghi012",
    coordinates: { lat: -6.1783, lng: 106.6319 },
  },
  {
    id: "bekasi",
    name: "Caya — Bekasi",
    isMain: false,
    isPartner: false,
    address: "Jl. Ahmad Yani No.88, Bekasi Selatan",
    hours: "Senin–Sabtu 08:00–17:00",
    phone: "+62 21 8832 4456",
    maps: "https://maps.app.goo.gl/jkl345",
    coordinates: { lat: -6.2349, lng: 106.9896 },
  },
]);

const query = ref("");
const selectedBranch = ref(branches.value[0]);

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return branches.value;
  return branches.value.filter((b) => b.name.toLowerCase().includes(q) || b.address.toLowerCase().includes(q) || b.phone.toLowerCase().includes(q));
});

function selectBranch(branch) {
  selectedBranch.value = branch;
}

function waUrl(branch) {
  const text = encodeURIComponent(`Halo Caya, saya mau tanya layanan di ${branch.name} — alamat: ${branch.address}`);
  return `https://wa.me/${siteWA.replace(/\D/g, "")}?text=${text}`;
}

function isOpen(hours) {
  // Simple check - in real app, parse hours and compare with current time
  const now = new Date();
  const day = now.getDay();
  const hour = now.getHours();

  // Sunday check
  if (day === 0) {
    return hour >= 9 && hour < 13;
  }

  // Monday-Saturday
  return hour >= 8 && hour < 17;
}
</script>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
