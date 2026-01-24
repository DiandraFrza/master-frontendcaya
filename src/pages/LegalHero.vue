<!-- @format -->

<template>
  <div class="2xxl:min-h-125 lg:min-h-112.5 md:min-h-100 sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute before:left-0 before:top-0 before:size-full before:bg-[#07121E] before:opacity-70 after:w-full after:h-[calc(100%_-_80px)] after:absolute after:bottom-0 after:right-0 after:z-0 after:bg-[url(../../src/images/banner/bg.webp)] after:bg-no-repeat after:bg-position-[right_-13px_top] max-lg:after:hidden" style="background-image: url(images/banner/bnr1.webp)">
    <div class="container relative z-1 h-full table">
      <div class="table-cell 2xxl:h-125 lg:h-112.5 md:h-100 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
        <h1 class="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">{{ title }}</h1>
        <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
          <ul class="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
            <li class="inline-block lg:text-base text-sm font-normal capitalize text-heading"><router-link to="/" class="text-primary">Beranda</router-link></li>
            <li class="inline-block lg:text-base text-sm font-normal capitalize text-heading pl-2 relative before:content-['\f101'] before:float-left before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">{{ title }}</li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 z-1 max-xl:hidden">
      <ul class="flex gap-7.5 [writing-mode:tb-rl]">
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.instagram.com/">Instagram</a></li>
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.facebook.com/">Facebook</a></li>
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://x.com/">twitter</a></li>
      </ul>
    </div>
    <div class="absolute bottom-0 right-0 bg-primary size-71.25 rounded-full blur-[120px] opacity-50 max-xl:hidden"></div>
    <div class="absolute top-[25%] left-0 bg-yellow-400 size-71.25 rounded-full blur-[120px] opacity-40 max-xl:hidden"></div>
    <div class="absolute z-0 top-[35%] right-[32%] max-md:hidden">
      <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z" fill="var(--primary)" />
      </svg>
    </div>
    <div class="absolute z-0 bottom-0 right-[38%] max-md:hidden">
      <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_102_123)">
          <path d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z" fill="var(--primary)" />
        </g>
        <defs>
          <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset />
            <feGaussianBlur stdDeviation="20" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_102_123" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_123" result="shape" />
          </filter>
        </defs>
      </svg>
    </div>
    <div class="absolute z-0 bottom-[20%] right-[10%] max-md:hidden">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z" fill="var(--primary)" />
      </svg>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
