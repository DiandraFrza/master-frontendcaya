<!-- @format -->

<template>
  <div>
    <!-- HERO SECTION -->
    <LegalHero title="Kebijakan Privasi Website" last-updated="Januari 2026" />

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
                <p>Kebijakan Privasi ini disusun sebagai bentuk kepatuhan CAYA terhadap peraturan perundang-undangan yang berlaku di Republik Indonesia, antara lain:</p>
                <ul class="list-decimal pl-6">
                  <li>Undang-Undang Nomor 27 Tahun 2022 tentang Perlindungan Data Pribadi</li>
                  <li>Undang-Undang Nomor 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik sebagaimana diubah dengan Undang-Undang Nomor 19 Tahun 2016</li>
                  <li>Peraturan Pemerintah Nomor 71 Tahun 2019 tentang Penyelenggaraan Sistem dan Transaksi Elektronik</li>
                  <li>Peraturan Menteri Komunikasi dan Informatika Nomor 20 Tahun 2016 tentang Perlindungan Data Pribadi dalam Sistem Elektronik</li>
                  <li>Peraturan Menteri Kesehatan Nomor 24 Tahun 2022 tentang Rekam Medis</li>
                  <li>Peraturan Menteri Kesehatan Nomor 36 Tahun 2012 tentang Rahasia Kedokteran</li>
                  <li>Peraturan Pemerintah Nomor 10 Tahun 1966 tentang Wajib Simpan Rahasia Kedokteran</li>
                  <li>Peraturan perundang-undangan lain yang relevan beserta perubahannya dari waktu ke waktu</li>
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
