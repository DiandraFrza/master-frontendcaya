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
                  Apabila Anda memiliki pertanyaan, permintaan, atau keluhan terkait Kebijakan Privasi ini, Anda dapat menghubungi:
                  <br />
                  CAYA Laboratorium Klinik
                  <br />📧 Email: info@cayalab.co.id <br />🌐 Website: www.cayalab.co.id <br />📞 WhatsApp: +62 812-9000-7336
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
