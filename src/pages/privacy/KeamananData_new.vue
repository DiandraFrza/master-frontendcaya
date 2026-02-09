<!-- @format -->

<template>
  <div>
    <!-- HERO SECTION -->
    <LegalHero title="Keamanan Data" last-updated="Januari 2026" />

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
                <p>CAYA mengimplementasikan berbagai langkah keamanan untuk melindungi Data Pribadi dari akses, pengubahan, pengungkapan, atau perusakan yang tidak sah.</p>

                <p>Langkah-langkah keamanan yang kami lakukan meliputi:</p>

                <ul class="list-disc pl-6">
                  <li>Enkripsi data dalam transit dan saat istirahat</li>
                  <li>Kontrol akses berbasis peran untuk karyawan</li>
                  <li>Audit keamanan rutin dan penetration testing</li>
                  <li>Penyimpanan data di fasilitas yang aman dengan akses terbatas</li>
                  <li>Pelatihan keamanan informasi untuk seluruh karyawan</li>
                  <li>Kebijakan backup dan disaster recovery</li>
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
