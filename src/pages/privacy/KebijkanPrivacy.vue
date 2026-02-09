<!-- @format -->

<template>
  <div>
    <!-- HERO SECTION -->
    <LegalHero title="Kebijakan Privasi" last-updated="Januari 2026" />

    <!-- MAIN CONTENT SECTION -->
    <main class="page-content bg-gray-50 py-12">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-4 gap-6">
          <!-- SIDEBAR -->
          <PrivacySidebar />

          <!-- MAIN CONTENT -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div class="prose prose-slate max-w-none">
                <p>Kebijakan Privasi ini (selanjutnya disebut “Kebijakan Privasi”) merupakan ketentuan mengenai pengelolaan dan perlindungan data dan/atau informasi pribadi Anda yang terdapat pada seluruh layanan CAYA Laboratorium Klinik yang dimiliki dan dikelola oleh CAYA Medical Center / CAYA Laboratorium Klinik (selanjutnya disebut “CAYA”).<br /></p>
                <p>Kebijakan Privasi ini mengikat antara CAYA dengan seluruh pengguna layanan, pasien, pendamping pasien, mitra, agen, vendor, pemasok, kontraktor, tenaga kesehatan, serta pihak lain yang berinteraksi dengan layanan CAYA (selanjutnya secara bersama-sama disebut “Anda”), kecuali diatur secara khusus dalam kebijakan privasi terpisah.<br /></p>
                <p>Apabila Anda menggunakan layanan CAYA atas nama individu lain, maka Anda menyatakan bahwa Anda telah memperoleh kewenangan yang sah untuk bertindak atas nama individu tersebut dan individu tersebut memahami serta menyetujui ketentuan dalam Kebijakan Privasi ini.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import LegalHero from "../LegalHero.vue";
import PrivacySidebar from "./PrivacySidebar.vue";
</script>
