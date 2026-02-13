<!-- @format -->

<template>
  <div>
    <!-- HERO SECTION -->
    <LegalHero title="Kebijakan Privasi Layanan Kesehatan" last-updated="Januari 2026" />

    <!-- MAIN CONTENT SECTION -->
    <main class="page-content bg-gray-50 py-12">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-4 gap-6">
          <!-- SIDEBAR -->
          <PrivacySidebar />

          <!-- MAIN CONTENT -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100">
              <div class="prose prose-slate p-8 max-w-none">
                <p>CAYA hanya menggunakan Data Pribadi Anda untuk keperluan:</p>

                <ul class="list-disc pl-6 pb-2">
                  <li>Pelayanan kesehatan</li>
                  <li>Pemeriksaan laboratorium dan Radiologi</li>
                  <li>Pengelolaan rekam medis</li>
                  <li>Administrasi layanan kesehatan</li>
                  <li>Kewajiban hukum dan regulasi</li>
                </ul>

                <p class="">CAYA akan meminta persetujuan Anda sebelum melakukan pelayanan kesehatan atau penggunaan Data Pribadi untuk tujuan lain yang tidak berkaitan langsung dengan pelayanan medis.</p>

                <ol class="list-disc pl-6">
                  <li>Kerahasiaan Medis</li>
                  <li>Etika profesi kesehatan</li>
                  <li>Prinsip Syariah</li>
                  <li>Ketentuan hukum yang berlaku</li>
                </ol>
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
