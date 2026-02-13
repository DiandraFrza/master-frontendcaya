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
                <p>CAYA melakukan upaya pengamanan teknis dan organisasi yang wajar untuk melindungi Data Pribadi dari:</p>

                <ul class="list-disc pl-6 pb-2">
                  <li>Akses tidak sah</li>
                  <li>Penyalahgunaan</li>
                  <li>Kehilangan</li>
                  <li>Kebocoran</li>
                </ul>

                <p class="">Namun, Anda memahami bahwa transmisi data melalui internet tidak sepenuhnya bebas risiko</p>
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
