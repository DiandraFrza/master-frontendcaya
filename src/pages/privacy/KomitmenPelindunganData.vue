<!-- @format -->

<template>
  <div>
    <!-- HERO SECTION -->
    <LegalHero title="Komitmen Perlindungan Data" last-updated="Januari 2026" />

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
                <p>CAYA sangat menghargai dan menjunjung tinggi privasi dan kerahasiaan data pribadi, khususnya data kesehatan dan data medis pasien. CAYA berkomitmen untuk menjaga kerahasiaan, integritas, dan keamanan setiap data pribadi yang diperoleh, baik secara elektronik maupun non-elektronik.</p>

                <p>Data pribadi yang dimaksud mencakup, namun tidak terbatas pada:</p>

                <ul class="list-disc pl-6">
                  <li>Nama lengkap</li>
                  <li>Nomor Identitas</li>
                  <li>Tanggal Lahir</li>
                  <li>Nomor Telepon</li>
                  <li>Alamat</li>
                  <li>Alamat Email</li>
                  <li>Informasi Medis dan Rekam Medis</li>
                  <li>Hasil Pemeriksaan Laboratorium, Dokter, dan Pemeriksaan Penunjang Lainnya seperti Radiologi, Elektromedis, dan lainnya</li>
                  <li>Data lain yang dikategorikan sebagai Data Pribadi berdasarkan peraturan perundang-undangan yang berlaku (selanjutnya disebut "Data Pribadi")</li>
                </ul>
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
