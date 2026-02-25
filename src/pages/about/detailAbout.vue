<!-- @format -->

<script setup>
import MainHero from "@/pages/MainHero.vue";
import Stats from "./statsAbout.vue";
import Timeline from "./timelineAbout.vue";
import VisiMisi from "./visiMisiAbout.vue";
import Keunggulan from "./keunggulanAbout.vue";
</script>

<template>
  <div class="min-h-screen">
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main class="page-content">
          <!-- Hero Section -->
          <MainHero variant="centered" title="Tentang Caya" :showBreadcrumb="true" :showSocialSidebar="true" :showTwitter="true" eyebrow="Profil Perusahaan" eyebrowIcon="fa-building" />

          <section class="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-white">
            <div class="container">
              <div class="row content-wrapper style-25 items-center">
                <div class="lg:w-1/2 w-full mb-3.75">
                  <div class="2xxl:-ml-20 2xxl:pr-48.75 xl:pr-33.75 lg:pr-18.75 max-lg:mb-5">
                    <div class="flex items-center relative max-lg:h-130 max-sm:h-87.5!">
                      <img src="@/assets/images/about/img1.webp" alt="" class="size-full object-cover rounded-2xl" />
                      <img src="@/assets/images/about/img2.webp" alt="" class="xl:-ml-32.5 -ml-25 xl:w-55 w-37.5 xl:h-65 h-45 object-cover rounded-2xl" />
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/2 w-full mb-7.5">
                  <div class="sm:mb-7.5 mb-5">
                    <div class="text-xl font-medium italic text-primary inline-block font-sub-title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Tentang Caya</div>
                    <h2 class="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl capitalize wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Menebar Manfaat melalui Layanan Laboratorium Berkualitas</h2>
                    <p class="xl:text-lg text-base font-light md:mb-12 mb-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                      Puji syukur kehadirat Allah, Tuhan Yang Maha Esa, karena atas karunia-Nya, Caya Laboratorium Klinik telah hadir untuk mendukung dan memberikan pelayanan laboratorium kesehatan di Indonesia. Pengembangan usaha terus kami upayakan melalui penerapan sistem manajemen mutu serta teknologi pelayanan berkualitas terbaik. Terima kasih dan penghargaan setinggi-tingginya kami sampaikan kepada masyarakat, para dokter, mitra kerja, dan semua pihak atas dukungan, kepercayaan, dan kerja samanya selama ini. Kami berharap, Caya Laboratorium Klinik dapat menjadi mitra utama dalam pelayanan jasa kesehatan yang menebarkan kemanfaatan dan kesejahteraan bagi masyarakat Indonesia.
                    </p>
                  </div>
                  <div class="flex flex-wrap items-center wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                    <router-link to="https://wa.me/081290094900" class="btn-primary px-4 py-3 rounded me-6 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                      Buat Janji
                      <i class="feather icon-arrow-right ms-2"></i>
                    </router-link>
                    <router-link to="https://wa.me/081290094900" class="btn-primary px-4 py-3 rounded me-6 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                      Chat WA
                      <i class="feather icon-arrow-right ms-2"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Timeline / Sejarah -->
          <Timeline />

          <!-- Visi & Misi -->
          <VisiMisi />

          <!-- Keunggulan + FAQ -->
          <Keunggulan />
        </main>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animate-ticker {
  animation: ticker 15s linear infinite;
}

@keyframes ticker {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.scroll-skew {
  transition: transform 0.3s ease;
}

.scroll-skew-left {
  transform: skewX(-15deg);
}

.scroll-skew-right {
  transform: skewX(15deg);
}

.animate-ticker:hover {
  animation-play-state: paused;
}

@media (max-width: 640px) {
  .animate-ticker {
    animation-duration: 20s;
  }
}
</style>
