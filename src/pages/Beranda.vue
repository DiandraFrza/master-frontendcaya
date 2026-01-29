<!-- @format -->

<script setup>
import About from "./About.vue";
import MedicalCheckUp from "./MedicalCheckUp.vue";
import InspirasiSehat from "./home/InspirasiSehat.vue";
import Testimoni from "./home/Testimoni.vue";
import BeritaEdukasi from "./home/BeritaEdukasi.vue";
</script>
<template>
  <div>
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
    <About />
    <MedicalCheckUp />
    <InspirasiSehat />
    <Testimoni />
    <BeritaEdukasi />
  </div>
</template>

<div>
</div>
