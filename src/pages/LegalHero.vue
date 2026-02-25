<!-- @format -->

<template>
  <div class="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 z-1 w-full">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-20 pointer-events-none">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
    </div>

    <!-- Star decoration -->
    <div class="absolute z-0 bottom-[20%] right-[10%] max-md:hidden">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z" fill="white" fill-opacity="0.4" />
      </svg>
    </div>

    <div class="container relative z-1 h-full mx-auto px-4 max-w-7xl">
      <div class="flex flex-col items-center justify-center min-h-[400px] py-16 text-center">
        <!-- Eyebrow -->
        <div class="inline-flex items-center gap-2 mb-4 text-sm font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur text-white">
          <i class="fa-solid fa-file-shield"></i>
          <span>Dokumen Legal</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
          {{ title }}
        </h1>

        <!-- Breadcrumb -->
        <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
          <ul class="inline-flex items-center gap-2 rounded-full py-2 px-6 bg-white/10 backdrop-blur-sm">
            <li class="text-sm font-normal text-white/90">
              <router-link to="/" class="hover:text-white transition-colors">Beranda</router-link>
            </li>
            <li class="text-sm font-normal text-white/70">
              <i class="fa-solid fa-chevron-right text-xs mx-2"></i>
            </li>
            <li class="text-sm font-normal text-white">{{ title }}</li>
          </ul>
        </nav>

        <!-- Last Updated -->
        <p v-if="lastUpdated" class="text-white/80 text-sm mt-4">
          Pembaruan Terakhir: <strong class="text-white">{{ lastUpdated }}</strong>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  lastUpdated: String,
});
</script>

<style scoped>
/* Animation classes if not globally available */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}

.wow {
  visibility: visible;
}
</style>
