<!-- @format -->

<template>
  <!-- Footer -->
  <div>
    <footer class="bg-cover bg-no-repeat bg-center bg-[#f8f8f8] bg-blend-luminosity text-bodycolor [--color-bodycolor:#BED2E7] [--color-heading:#FF7D14]" style="background-image: url(&quot;/images/background/bg1.webp&quot;)">
      <!-- Footer Top -->
      <div class="md:pt-17.5 md:pb-7.5 sm:pt-12.5 sm:pb-5 pt-11.25">
        <div class="container">
          <div class="row">
            <div class="xl:w-1/4 lg:w-1/2 w-full wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
              <div class="mb-7.5 me-2">
                <h2 class="relative text-xl sm:mb-5 mb-3.75 font-medium text-black">Dapatkan Informasi <br />Terbaru untukmu.</h2>
                <p class="text-2sm leading-[1.7] mb-5 text-[#424242]">seputar layanan kesehatan, promo MCU, dan update penting dari Caya Medical Center.</p>
                <form class="dzSubscribe style-1" @submit.prevent="handleNewsletterSubmit">
                  <div class="dzSubscribeMsg" v-if="newsletterMessage">
                    {{ newsletterMessage }}
                  </div>
                  <div class="relative flex flex-wrap items-stretch w-full">
                    <input v-model="email" required type="email" class="relative flex-1 w-[1%] py-3.75 pl-6.25 pr-15 text-base text-left text-white border border-[#FF7D14] bg-[#FF7D14] placeholder:text-white rounded-6xl" placeholder="Your Email Address" />
                    <div class="absolute right-1.25 top-1/2 -translate-y-1/2 z-1">
                      <button type="submit" class="size-12 min-w-12 text-lg leading-12 text-center cursor-pointer" :disabled="isSubmitting">
                        <i class="flaticon-message text-white"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="xl:w-3/4 w-full wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
              <div class="row">
                <div class="lg:w-1/4 sm:w-1/2 w-full">
                  <div class="mb-7.5 2xl:pl-7.5">
                    <h2 class="text-xl mb-5 font-medium text-black">Layanan Kami</h2>
                    <ul>
                      <li v-for="service in services" :key="service.name" class="relative pl-7 py-2 text-2sm font-medium duration-500 hover:pl-9.5 text-black">
                        <a class="block relative after:absolute after:bg-arrow-right after:size-4.5 after:bg-contain after:-left-6.5 text-black hover:text-black/80" :href="service.link">
                          <span>{{ service.name }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-1/4 sm:w-1/2 w-full">
                  <div class="mb-7.5 2xl:pl-7.5">
                    <h2 class="text-xl mb-5 font-medium text-black">Tautan Berguna</h2>
                    <ul>
                      <li v-for="link in usefulLinks" :key="link.name" class="relative pl-7 py-2 text-2sm font-medium duration-500 hover:pl-9.5">
                        <a class="block relative after:absolute after:bg-arrow-right after:size-4.5 after:bg-contain after:-left-6.5 text-black! hover:text-black/80 svg-hitam" :href="link.href">
                          <span>{{ link.name }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-1/4 sm:w-1/2 w-full">
                  <div class="mb-7.5 2xl:pl-7.5">
                    <h2 class="text-xl mb-5 font-medium text-black">Lokasi Kami</h2>
                    <ul>
                      <li v-for="location in locations" :key="location" class="relative pl-7 py-2 text-2sm font-medium duration-500 hover:pl-9.5 text-black">
                        <a class="block relative after:absolute after:bg-arrow-right after:size-4.5 after:bg-contain after:-left-6.5 text-black hover:text-black/80" href="#">
                          <span>{{ location }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="lg:w-1/4 sm:w-1/2 w-full">
                  <div class="mb-7.5 2xl:pl-7.5">
                    <h2 class="text-xl mb-5 font-medium text-black">Tautan Cepat</h2>
                    <ul>
                      <li v-for="quickLink in quickLinks" :key="quickLink.name" class="relative pl-7 py-2 text-2sm font-medium duration-500 hover:pl-9.5 text-black">
                        <a class="block relative after:absolute after:bg-arrow-right after:size-4.5 after:bg-contain after:-left-6.5 text-black hover:text-black/80" :href="quickLink.href">
                          <span>{{ quickLink.name }}</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Top End -->

      <!-- Footer Middle -->
      <div class="footer-middle">
        <div class="container">
          <div class="py-6.25 px-10 bg-black/5 rounded-2lg">
            <div class="row g-3 items-center">
              <div class="xl:w-1/4 md:w-full sm:w-1/2 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                <h3 class="md:text-2xl text-[19px] mb-0.75 text-black">Hubungi kami</h3>
                <p class="mb-0 text-black/80">Kami siap membantu Anda dan keluarga.</p>
              </div>
              <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                <div class="flex gap-3.75">
                  <div class="lg:min-w-15 lg:size-15 min-w-12.5 size-12.5 flex items-center lg:text-2xl text-lg justify-center rounded-full bg-linear-to-br from-[#FF7D14] to-[#F94327] text-black">
                    <span class="icon-cell">
                      <i class="feather icon-phone flex text-white"></i>
                    </span>
                  </div>
                  <div class="overflow-hidden">
                    <h5 class="lg:text-lg text-base font-medium text-black mb-1.25">Hubungi Kami</h5>
                    <p class="text-2sm font-light mb-0">
                      <a href="tel:+(021)77829190" class="text-black/80 hover:text-black">+(021) 77829190</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                <div class="flex gap-3.75">
                  <div class="lg:min-w-15 lg:size-15 min-w-12.5 size-12.5 flex items-center lg:text-2xl text-lg justify-center rounded-full bg-linear-to-br from-[#FF7D14] to-[#F94327] text-black">
                    <span class="icon-cell">
                      <i class="feather icon-phone flex text-white"></i>
                    </span>
                  </div>
                  <div class="overflow-hidden">
                    <h5 class="lg:text-lg text-base font-medium text-black mb-1.25">Kirimkan email kepada kami</h5>
                    <p class="text-2sm font-light mb-0">
                      <a href="mailto:info@example.com" class="text-black/80 hover:text-black">fo.cayadeopok@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
              <div class="xl:w-1/4 md:w-1/3 sm:w-1/2 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                <div class="flex gap-3.75">
                  <div class="lg:min-w-15 lg:size-15 min-w-12.5 size-12.5 flex items-center lg:text-2xl text-lg justify-center rounded-full bg-linear-to-br from-[#FF7D14] to-[#F94327] text-black">
                    <span class="icon-cell">
                      <i class="feather icon-clock flex text-white"></i>
                    </span>
                  </div>
                  <div class="overflow-hidden">
                    <h5 class="lg:text-lg text-base font-medium text-black mb-1.25">Jam Buka</h5>
                    <p class="text-2sm font-light mb-0 text-black/80">Sen - Jum: 06:00 - 21:00<br />Sabtu: 06:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="container">
          <div class="py-5 text-base">
            <div class="row">
              <div class="lg:w-1/2 w-full lg:text-start text-center">
                <p class="copyright-text text-black/80">
                  © {{ currentYear }}
                  <a href="/" class="text-black hover:text-black/80">Caya Medical Center</a>
                  . All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Footer Bottom End -->
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      email: "",
      isSubmitting: false,
      newsletterMessage: "",
      services: [
        { name: "Paket MCU K3", link: "/services/emergency" },
        { name: "Screening Jantung", link: "/services/operation" },
        { name: "Panel Darah lengkap", link: "/services/checkup" },
        { name: "Chest X-Ray", link: "/services/diagnostic" },
        { name: "Audiometri", link: "/services/outdoor" },
      ],
      usefulLinks: [
        { name: "Privacy Policy", href: "/privacy-policy" },
        { name: "Terms & Conditions", href: "/terms-conditions" },
        { name: "Medical Disclaimer", href: "/medical-disclaimer" },
        { name: "Cookie Policy", href: "/cookie-policy" },
        { name: "Our Sitemap", href: "/sitemap" },
      ],
      locations: ["Depok", "Buli", "Jakarta", "Surabaya", "Tanjung Pinang"],
      quickLinks: [
        { name: "Beranda", href: "/beranda" },
        { name: "About", href: "/about" },
        { name: "Medical Check Up", href: "/mcu" },
        { name: "Our Clinics", href: "/cabang" },
        { name: "Blog", href: "/blog" },
      ],
    };
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
  methods: {
    handleNewsletterSubmit() {
      if (!this.email) return;

      this.isSubmitting = true;
      this.newsletterMessage = "Subscribing...";

      // Simulate API call - in real app, you'd connect to your email service
      setTimeout(() => {
        this.newsletterMessage = "Thank you for subscribing!";
        this.email = "";
        this.isSubmitting = false;

        // Clear message after 3 seconds
        setTimeout(() => {
          this.newsletterMessage = "";
        }, 3000);
      }, 1000);
    },
  },
};
</script>
