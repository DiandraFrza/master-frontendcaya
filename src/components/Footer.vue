<!-- @format -->

<template>
  <!-- Footer -->
  <div>
    <footer class="bg-[#f0f0f0] py-12">
      <div class="container">
        <!-- Footer Main Content -->
        <div class="mb-8">
          <div class="text-center mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-black mb-2">Konsultasikan Kebutuhan Kesehatan Anda</h2>
            <p class="text-gray-600 text-base">Menjaga Kesehatan sebagai Amanah dengan Pelayanan sepenuh Hati.</p>
          </div>

          <!-- Contact and Hours Section -->
          <div class="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
            <!-- Left Side - Salaam CAYA -->
            <div class="flex flex-col md:flex-row items-center gap-4 order-2 md:order-1">
              <div class="text-center md:text-left">
                <h3 class="text-xl font-bold text-black mb-1">Salam CAYA</h3>
                <p class="text-sm text-gray-700">021-77829190 / +62812-9000-7336</p>
              </div>
              <div class="w-16 h-16 rounded-full bg-[#FF7D14] flex items-center justify-center text-white text-2xl shrink-0">
                <i class="feather icon-phone"></i>
              </div>
            </div>

            <!-- Right Side - Operating Hours -->
            <div class="flex flex-col md:flex-row-reverse items-center gap-4 order-1 md:order-2">
              <div class="text-center md:text-right">
                <h3 class="text-xl font-bold text-black mb-2">Jam Operasional</h3>
                <p class="text-sm text-gray-700 mb-1">Senin - Jum'at : 06:00 - 21:00</p>
                <p class="text-sm text-gray-700 mb-2">Sabtu : 06:00 - 20:00</p>
              </div>
              <div class="w-16 h-16 rounded-full bg-[#FF7D14] flex items-center justify-center text-white text-2xl shrink-0">
                <i class="feather icon-clock"></i>
              </div>
            </div>
          </div>

          <!-- Additional Info -->
          <div class="text-center mt-6">
            <p class="text-xs text-gray-600">Libur pada hari Minggu dan Peringatan Hari Besar Indonesia (PHBi)</p>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="border-t border-gray-300 pt-4">
          <p class="text-center text-sm text-gray-700">
            © {{ currentYear }} <a href="/" class="text-black font-semibold hover:text-gray-700">Caya Medical Center</a>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
