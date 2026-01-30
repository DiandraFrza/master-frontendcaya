<!-- @format -->
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToProduk = () => {
  router.push("/services/mcu");
};

const goToHasilMCU = () => {
  router.push("/hasil-mcu");
};
</script>

<template>
  <section class="hero-wrapper relative overflow-hidden">
    <div class="min-h-screen p-16px bg-cover bg-center relative overflow-hidden" style="background-image: url(/assets/images/background_1x.webp)">
      <div class="container h-full relative z-10 pt-30">
        <div class="h-full">
          <div class="row items-start h-full">
            <div class="md:w-1/2 w-full pe-12">
              <div class="2xxl:ml-0 xl:ml-10 max-md:mb-7.5">
                <div class="inline-block mt-2 mb-5">
                  <span class="md:px-4.5 md:py-2 md:-[22px] px-4 py-2 sm:text-[22px] font-bold text-[#ffffff] bg-[#ff562c] rounded-[1.5vw] backdrop-blur-md font-sans"> Klinik Syariah Pertama di Indonesia </span>
                </div>
                <p class="text-[#ffffff] text-4xl md:text-5xl font-extrabold leading-tight">
                  <span class="text-[#ff562c]">Layanan</span>
                  Kesehatan Terpercaya & Berstandar
                  <span class="text-[#ff562c]">Syariah</span>
                </p>

                <p class="max-w-[580px] mt-4 text-[#e9e9e9] text-[16px] leading-relaxed tracking-[0.4px]">Layanan kesehatan syariah untuk keluarga & perusahaan — proffesional, cepat, akurat, dan ramah</p>

                <div class="mt-6 flex gap-3">
                  <button class="group relative flex items-center justify-between bg-[#ff562c] pl-8 pr-12 py-2 rounded-full shadow-md hover:scale-[1.03] transition-all duration-300">
                    <span class="text-[#F9FAFB] font-light text-[16px] tracking-wide"> Chat With Us </span>
                    <div class="absolute right-0.5 flex items-center justify-center w-9 h-9 bg-white rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff562c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" class="-rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300">
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <div class="md:w-1/2 hidden md:block"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="bg-white -mt-6 pb-8">
      <div class="container mx-auto px-4 max-w-6xl">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 py-6">
          <div class="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <img src="@/assets/images/logo/logo1.png" alt="logo" class="h-6 sm:h-8 opacity-80" />
            <img src="@/assets/images/logo/logo2.png" alt="logo" class="h-6 sm:h-8 opacity-80" />
            <img src="@/assets/images/logo/logo2.png" alt="cert" class="h-6 sm:h-8" />
          </div>
          <div class="text-center md:text-right">
            <div class="text-xs sm:text-sm text-gray-600 leading-tight">120+ Perusahaan • Laporan HR-ready (PDF) • Onsite capacity up to 500/orang</div>
          </div>
        </div>

        <div class="bg-linear-to-r from-[#FF7D14] to-[#ff562c] rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 shadow-lg">
          <div class="text-center md:text-left">
            <h3 class="text-xl sm:text-2xl font-bold text-white leading-tight sm:leading-snug">Paket MCU K3 untuk Perusahaan — Sertifikat & Laporan HR-Ready</h3>
            <p class="mt-1 sm:mt-2 opacity-90 text-white text-sm sm:text-base leading-relaxed">Penuhi kewajiban K3 dengan laporan terstruktur, interpretasi dokter, dan opsi onsite untuk pemeriksaan massal.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- <About />
    <MedicalCheckUp /> -->
  </section>
</template>

<style scoped>
.hero-wrapper {
  background: linear-gradient(to bottom, rgba(236, 245, 251, 0.8), #ffffff);
}
</style>
