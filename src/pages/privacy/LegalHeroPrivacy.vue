<!-- @format -->

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 min-h-[400px] flex items-center">
    <!-- Decorative background -->
    <div class="absolute inset-0 opacity-20">
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-orange-300 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 left-1/3 w-72 h-72 bg-amber-300 rounded-full blur-3xl"></div>
      <div class="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-200 rounded-full blur-3xl"></div>
    </div>

    <!-- Star decorations -->
    <div class="absolute z-0 bottom-[20%] right-[10%] max-md:hidden">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z" fill="white" fill-opacity="0.3" />
      </svg>
    </div>

    <!-- Social Sidebar -->
    <div class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 z-1 max-xl:hidden">
      <ul class="flex gap-7.5 [writing-mode:tb-rl]">
        <li><a class="text-sm uppercase text-white/80 hover:text-white tracking-[1px] transition-colors" href="https://www.instagram.com/">Instagram</a></li>
        <li><a class="text-sm uppercase text-white/80 hover:text-white tracking-[1px] transition-colors" href="https://www.facebook.com/">Facebook</a></li>
      </ul>
    </div>

    <!-- Main Content -->
    <div class="container relative z-1 mx-auto px-4 max-w-7xl py-16 text-center">
      <!-- Eyebrow -->
      <div class="inline-flex items-center gap-2 mb-4 text-sm font-medium bg-white/20 px-3 py-1.5 rounded-full backdrop-blur text-white">
        <i class="fa-solid fa-shield-halved"></i>
        <span>Perlindungan Data</span>
      </div>

      <!-- Title -->
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">Kebijakan Privasi</h1>

      <!-- Breadcrumb -->
      <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
        <ul class="inline-flex items-center gap-2 rounded-full py-2 px-6 bg-white/10 backdrop-blur-sm">
          <li class="text-sm font-normal text-white/90">
            <router-link to="/" class="hover:text-white transition-colors">Beranda</router-link>
          </li>
          <li class="text-sm font-normal text-white/70">
            <i class="fa-solid fa-chevron-right text-xs mx-2"></i>
          </li>
          <li class="text-sm font-normal text-white">Kebijakan Privasi</li>
        </ul>
      </nav>

      <!-- Last Update -->
      <p class="text-white/80 text-sm mt-4">Pembaruan Terakhir: <strong class="text-white">Januari 2026</strong></p>
    </div>
  </section>
</template>

<style scoped>
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}
</style>
