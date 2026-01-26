<!-- @format -->

<template>
  <section class="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-white">
    <div class="container">
      <div class="row content-wrapper style-25 items-center">
        <div class="lg:w-1/2 w-full mb-3.75">
          <div class="2xxl:-ml-20 2xxl:pr-48.75 xl:pr-33.75 lg:pr-18.75 max-lg:mb-5">
            <div class="flex items-center relative max-lg:h-130 max-sm:h-87.5">
              <img src="@/assets/images/about/img1.webp" alt="" class="size-full object-cover rounded-2xl" />
              <img src="@/assets/images/about/img2.webp" alt="" class="xl:-ml-32.5 -ml-25 xl:w-55 w-37.5 xl:h-65 h-45 object-cover rounded-2xl" />
            </div>
          </div>
        </div>

        <div class="lg:w-1/2 w-full mb-7.5">
          <div class="sm:mb-7.5 mb-5">
            <div class="text-sm font-medium italic text-[#F94327] inline-block font-sub-title">Tentang Caya</div>

            <h2 class="2xxl:text-4xxl lg:text-[38px] sm:text-[32px] text-2xxl capitalize sm:leading-tight leading-snug">Klinik Syariah, Profesional & Bersahabat</h2>

            <p class="xl:text-lg text-base font-light md:mb-8 mb-6 sm:leading-relaxed leading-normal">Caya menggabungkan standar medis modern dengan prinsip syariah — layanan cepat, akurat, dan ramah keluarga. Fokus kami: pemeriksaan menyeluruh, staf terlatih, serta pengalaman pasien yang nyaman.</p>
          </div>

          <div class="grid sm:grid-cols-2 gap-4 mb-6">
            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-[#FF7D14]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#FF7D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold sm:text-base text-sm">Pelayanan Bersertifikat</div>
                <div class="text-sm text-gray-500 sm:text-xs text-xs">Sertifikat & laporan medis untuk kebutuhan formal.</div>
              </div>
            </div>

            <div class="flex items-start gap-3">
              <div class="w-10 h-10 rounded-lg bg-[#FF7D14]/10 flex items-center justify-center">
                <svg class="w-5 h-5 text-[#FF7D14]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4"></path>
                </svg>
              </div>
              <div>
                <div class="font-semibold sm:text-base text-sm">Cepat & Terintegrasi</div>
                <div class="text-sm text-gray-500 sm:text-xs text-xs">Hasil digital, PDF rapih ready-to-share ke HR / pasien.</div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center gap-3 sm:gap-4">
            <router-link to="/about" class="btn btn-rounded text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3 me-0 sm:me-6">
              Selengkapnya
              <i class="feather icon-arrow-right ms-2"></i>
            </router-link>

            <router-link to="/mcu" class="inline-flex items-center gap-2 btn-rounded1 font-semibold text-sm sm:text-base px-4 sm:px-5 py-2.5 sm:py-3">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
              Lihat Paket MCU
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-rounded {
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  background: #f94327;
  color: #fff;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

.btn-rounded:hover {
  background: #e03a20;
  transform: translateY(-2px);
}

.btn-rounded1 {
  padding: 0.75rem 1.25rem;
  border-radius: 9999px;
  background: #ffecb3;
  color: #f94327;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
}

.btn-rounded1:hover {
  background: #ffe082;
  transform: translateY(-2px);
}

/* Responsive text adjustments */
@media (max-width: 640px) {
  .btn-rounded,
  .btn-rounded1 {
    width: 100%;
    justify-content: center;
  }
}
</style>
