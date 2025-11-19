<script setup>
import { computed, ref } from 'vue';

const sitePhone = '+622177829192';
const siteWA = '081290007336';
const branches = ref([
  {
    id: 'depok',
    name: 'Caya Lab — Depok (Klinik Pusat)',
    address: 'Jl. KH. M. Yusuf Raya No.13, Sukmajaya, Depok',
    hours: 'Sen–Sab 08:00–17:00 • Minggu 09:00–13:00',
    phone: '+62 21 7782 9192',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+KH.+M.+Yusuf+Raya+No.13+Sukmajaya+Depok',
  },
  {
    id: 'buli',
    name: 'Caya Lab — Buli',
    address: 'Jl. Raya Buli No.45, Buli City',
    hours: 'Sen–Sab 08:30–16:30',
    phone: '+62 21 7782 9193',
    maps: 'https://www.google.com/maps/search/?api=1&query=Buli',
  },
  {
    id: 'jakarta',
    name: 'Caya Lab — Jakarta',
    address: 'Jl. Sudirman Kav. 88, Jakarta Selatan',
    hours: 'Sen–Jum 08:00–18:00 • Sab 08:00–13:00',
    phone: '+62 21 7782 9194',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Sudirman+Kav.+88+Jakarta',
  },
  {
    id: 'surabaya',
    name: 'Caya Lab — Surabaya',
    address: 'Jl. Raya Darmo No.12, Surabaya',
    hours: 'Sen–Sab 09:00–17:00',
    phone: '+62 31 7782 9195',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Raya+Darmo+No.12+Surabaya',
  },
  {
    id: 'tanjungpinang',
    name: 'Caya Lab — Tanjung Pinang',
    address: 'Jl. Imam Bonjol No.7, Tanjung Pinang',
    hours: 'Sen–Sab 08:00–15:00',
    phone: '+62 771 7782 9196',
    maps: 'https://www.google.com/maps/search/?api=1&query=Jl.+Imam+Bonjol+Tanjung+Pinang',
  },
]);

const query = ref('');
const filtered = computed(() => {
  const q = query.value.trim().toLowerCase();
  if (!q) return branches.value;
  return branches.value.filter(
    (b) =>
      b.name.toLowerCase().includes(q) ||
      b.address.toLowerCase().includes(q) ||
      b.phone.toLowerCase().includes(q)
  );
});

function waUrl(branch) {
  const text = encodeURIComponent(
    `Halo Caya, saya mau tanya layanan MCU di cabang ${branch.name} — alamat: ${branch.address}`
  );
  return `https://wa.me/${siteWA.replace(/\D/g, '')}?text=${text}`;
}
</script>

<template>
  <div
    class="2xxl:min-h-125 lg:min-h-112.5 md:min-h-100 sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute before:left-0 before:top-0 before:size-full before:bg-[#07121E] before:opacity-70 after:w-full after:h-[calc(100%_-_80px)] after:absolute after:bottom-0 after:right-0 after:z-0 after:bg-[url(../../src/images/banner/bg.webp)] after:bg-no-repeat after:bg-position-[right_-13px_top] max-lg:after:hidden"
    style="background-image:url(images/banner/bnr1.webp);">
    <div class="container relative z-1 h-full table">
      <div class="table-cell 2xxl:h-125 lg:h-112.5 md:h-100 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
        <h1
          class="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp"
          data-wow-delay="0.2s" data-wow-duration="0.8s">Our Clinics</h1>
        <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
          <ul class="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
            <li class="inline-block lg:text-base text-sm font-normal capitalize text-heading"><a href="index.html"
                class="text-primary">Home</a></li>
            <li
              class="inline-block lg:text-base text-sm font-normal capitalize text-heading pl-2 relative before:content-['\f101'] before:float-left before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">
              Our Clinics</li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 z-1 max-xl:hidden">
      <ul class="flex gap-7.5 [writing-mode:tb-rl]">
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.instagram.com/">Instagram</a></li>
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://www.facebook.com/">Facebook</a>
        </li>
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="https://x.com/">twitter</a></li>
      </ul>
    </div>
    <div class="absolute bottom-0 right-0 bg-primary size-71.25 rounded-full blur-[120px] opacity-50 max-xl:hidden">
    </div>
    <div class="absolute top-[25%] left-0 bg-yellow-400 size-71.25 rounded-full blur-[120px] opacity-40 max-xl:hidden">
    </div>
    <div class="absolute z-0 top-[35%] right-[32%] max-md:hidden">
      <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
          fill="var(--primary)" />
      </svg>
    </div>
    <div class="absolute z-0 bottom-0 right-[38%] max-md:hidden">
      <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_102_123)">
          <path d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z"
            fill="var(--primary)" />
        </g>
        <defs>
          <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
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
        <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z"
          fill="var(--primary)" />
      </svg>
    </div>
  </div>
  <main class="page-content sm:pt-21.5 pt-16">
    <div
      class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 max-xl:hidden">
      <ul class="flex gap-7.5 [writing-mode:tb-rl]">
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="javascript:void(0);">Instagram</a></li>
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="javascript:void(0);">Facebook</a></li>
        <li><a class="text-sm uppercase text-white tracking-[1px]" href="javascript:void(0);">twitter</a></li>
      </ul>
    </div>
    <div class="absolute bottom-0 right-0 bg-primary size-71.25 rounded-full blur-[120px] opacity-50 max-xl:hidden">
    </div>
    <div class="absolute top-[25%] left-0 bg-yellow-400 size-71.25 rounded-full blur-[120px] opacity-40 max-xl:hidden">
    </div>
    <div class="absolute z-0 top-[35%] right-[32%] max-md:hidden">
      <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
          fill="#F46700" />
      </svg>
    </div>
    <div class="absolute z-0 bottom-0 right-[38%] max-md:hidden">
      <svg width="102" height="102" viewBox="0 0 102 102" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_102_123)">
          <path d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z"
            fill="#F46700" />
        </g>
        <defs>
          <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102" filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha" />
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
        <path d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z"
          fill="#F46700" />
      </svg>
    </div>
    <div class="absolute left-0 bottom-0 h-50 w-full bg-light"></div>

    <section class="2xl:py-25 md:py-17.5 sm:py-12.5 py-10 bg-light">
      <div class="container">
        <div class="row box-hover-wrapper">
          <div class="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <div
              class="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%_-_40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%_-_50px)] after:absolute after:bg-primary after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover">
              <div
                class="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&]:bg-primary">
                <span class="text-white">
                  <i class="feather icon-map-pin"></i>
                </span>
              </div>
              <div class="overflow-hidden">
                <h5 class="text-lg font-semibold">Address</h5>
                <p class="mb-0">1247/Plot No. 39, 15th Phase, Colony, Kukatpally, Hyderabad</p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <div
              class="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%_-_40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%_-_50px)] after:absolute after:bg-primary after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover">
              <div
                class="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&]:bg-primary">
                <span class="text-white">
                  <i class="feather icon-phone"></i>
                </span>
              </div>
              <div class="overflow-hidden">
                <h5 class="text-lg font-semibold">Call Us</h5>
                <p class="mb-0">
                  <a href="tel:+01234567890" class="text-body">+0 123-456-7890</a><br>
                  <a href="tel:+09876543210" class="text-body">+0 987-654-3210</a>
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
            <div
              class="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%_-_40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%_-_50px)] after:absolute after:bg-primary after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover active">
              <div
                class="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&]:bg-primary">
                <span class="text-white">
                  <i class="feather icon-mail"></i>
                </span>
              </div>
              <div class="overflow-hidden">
                <h5 class="text-lg font-semibold">Send us a Mail</h5>
                <p class="mb-0">
                  <a href="mailto:info@example.com" class="text-body">info@example.com</a><br>
                  <a href="mailto:medical@example.com" class="text-body">medical@example.com</a>
                </p>
              </div>
            </div>
          </div>
          <div class="lg:w-1/4 sm:w-1/2 w-full mb-7.5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
            <div
              class="rounded-xxl p-6.25 pt-0 relative mt-10 h-[calc(100%_-_40px)] duration-200 bg-white after:w-1.25 after:h-[calc(100%_-_50px)] after:absolute after:bg-primary after:right-0 after:top-1/2 after:-translate-y-1/2 after:rounded-2lg after:opacity-30 after:duration-200 [.box-hover.active]:after:opacity-100 box-hover">
              <div
                class="size-20 rounded-full flex items-center justify-center text-[32px] text-white -translate-y-10 -mb-5 duration-200 bg-secondary [.box-hover.active_&]:bg-primary">
                <span class="text-white">
                  <i class="feather icon-clock"></i>
                </span>
              </div>
              <div class="overflow-hidden">
                <h5 class="text-lg font-semibold">Opening Time</h5>
                <p class="mb-0">Mon-Thu: 8:00am-5:00pm <br> Fri: 8:00am-1:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <section class="2xl:pb-25 md:pb-17.5 sm:pb-12.5 pb-10 bg-light !p-0">
      <div class="container">
        <div
          class="row flex items-center bg-primary/7 rounded-3xl overflow-hidden 2xxl:min-h-125 min-h-50 2xxl:!-mx-37.5 2xxl:p-30 xl:p-12.5 sm:p-7.5 p-6.25">
          <div class="md:w-1/2">
            <div class="relative overflow-hidden 2xxl:-m-30 xl:-m-12.5 sm:-m-7.5 -m-6.25 md:!mr-12.5 max-md:!mb-5">
              <img src="./images/about/img8.webp" alt="">
            </div>
          </div>
          <div class="md:w-1/2">
            <h2 class="2xxl:text-6xxl xl:text-5xl lg:text-3xxl sm:text-3xl text-2xl capitalize lg:mb-8.75 mb-5">
              Schedule Your Consulation Today!</h2>
          </div>
        </div>
      </div>
    </section>

    <div class="bg-light 2xl:pt-25 md:pt-17.5 sm:pt-12.5 pt-10">
      <div class="container">
        <div class="sm:p-2.5 p-1.25 bg-white/50 lg:h-120 sm:h-100 h-75 rounded-2xl overflow-hidden wow fadeInUp"
          data-wow-delay="0.4s" data-wow-duration="0.8s">
          <iframe class="size-full rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.066211003569!2d106.83708487499176!3d-6.38545659360497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ebf490b675c1%3A0xe9f3c4416667eaf4!2sCaya%20Laboratorium%20Klinik%20Depok!5e0!3m2!1sid!2sid!4v1763438760874!5m2!1sid!2sid"
            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

    <section class="2xl:pt-25 2xl:pb-17.5 md:pt-17.5 md:pb-10 sm:pt-12.5 sm:pb-5 pt-10 pb-5 bg-light">
      <div class="container">
        <div class="md:mb-10 mb-5 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
          <h2 class="2xxl:text-5xxl xl:text-4xxl lg:text-4xl sm:text-3xxl text-2xxl font-bold capitalize mb-2.5">All
            Locations</h2>
        </div>
        <div class="row">
          <div class="xl:w-1/4 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
            <div
              class="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
              <div class="py-1.25 px-5">
                <h3 class="flex items-center gap-2.5 text-[20px] font-semibold">
                  <img src="./images/country/united_states.webp" alt="" class="w-6">
                  United State
                </h3>
              </div>
              <div class="min-w-47.5 h-47.5 rounded-2xl overflow-hidden">
                <img src="./images/map/map1.webp" alt="" class="size-full object-cover">
              </div>
              <div class="py-4.5 px-3.75">
                <p class="mb-2.5">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                <a href="tel:+0123-456-7890">+0 123-456-7890</a>
              </div>
              <div class="py-4.5 px-7.5 border-t" style="border-color: rgba(0,0,0,0.1); margin: auto -10px -10px;">
                <a href="https://www.google.com/maps/" target="_blank" class="text-primary font-medium">
                  Get Directions
                  <i class="feather icon-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
            <div
              class="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
              <div class="py-1.25 px-5">
                <h3 class="flex items-center gap-2.5 text-[20px] font-semibold">
                  Canada
                </h3>
              </div>
              <div class="min-w-47.5 h-47.5 rounded-2xl overflow-hidden">
                <img src="./images/map/map2.webp" alt="" class="size-full object-cover">
              </div>
              <div class="py-4.5 px-3.75">
                <p class="mb-2.5">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                <a href="tel:+0123-456-7890">+0 123-456-7890</a>
              </div>
              <div class="py-4.5 px-7.5 border-t" style="border-color: rgba(0,0,0,0.1); margin: auto -10px -10px;">
                <a href="https://www.google.com/maps/" target="_blank" class="text-primary font-medium">
                  Get Directions
                  <i class="feather icon-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
            <div
              class="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
              <div class="py-1.25 px-5">
                <h3 class="flex items-center gap-2.5 text-[20px] font-semibold">

                  United State
                </h3>
              </div>
              <div class="min-w-47.5 h-47.5 rounded-2xl overflow-hidden">
                <img src="./images/map/map1.webp" alt="" class="size-full object-cover">
              </div>
              <div class="py-4.5 px-3.75">
                <p class="mb-2.5">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                <a href="tel:+0123-456-7890">+0 123-456-7890</a>
              </div>
              <div class="py-4.5 px-7.5 border-t" style="border-color: rgba(0,0,0,0.1); margin: auto -10px -10px;">
                <a href="https://www.google.com/maps/" target="_blank" class="text-primary font-medium">
                  Get Directions
                  <i class="feather icon-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="xl:w-1/4 md:w-1/2 mb-7.5 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
            <div
              class="bg-white rounded-xxl shadow-1 transition-all p-2.5 h-full flex flex-col duration-500 hover:-translate-y-2">
              <div class="py-1.25 px-5">
                <h3 class="flex items-center gap-2.5 text-[20px] font-semibold">
                  <img src="./images/country/united_states.webp" alt="" class="w-6">
                  Canada
                </h3>
              </div>
              <div class="min-w-47.5 h-47.5 rounded-2xl overflow-hidden">
                <img src="./images/map/map2.webp" alt="" class="size-full object-cover">
              </div>
              <div class="py-4.5 px-3.75">
                <p class="mb-2.5">123 Health Way, Suite 456 Goodland, 78910 United States</p>
                <a href="tel:+0123-456-7890">+0 123-456-7890</a>
              </div>
              <div class="py-4.5 px-7.5 border-t" style="border-color: rgba(0,0,0,0.1); margin: auto -10px -10px;">
                <a href="https://www.google.com/maps/" target="_blank" class="text-primary font-medium">
                  Get Directions
                  <i class="feather icon-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>

</style>
