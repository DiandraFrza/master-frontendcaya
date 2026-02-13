<!-- @format -->

<template>
  <div>
    <!-- HERO SECTION -->
    <LegalHero title="Tujuan dan Ruang Lingkup Kebijakan Privasi" last-updated="Januari 2026" />

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
                <p>
                  KCAYA berhak memperbarui Kebijakan Privasi ini dari waktu ke waktu. Versi terbaru akan dipublikasikan melalui website resmi CAYA.
                  <br />
                  Penggunaan Layanan secara berkelanjutan dianggap sebagai persetujuan atas perubahan tersebut.
                </p>
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
