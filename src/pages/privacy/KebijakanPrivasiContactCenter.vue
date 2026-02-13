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
                <p>Data Pribadi yang dikumpulkan melalui Contact Center dapat mencakup:</p>

                <ul class="list-disc pl-6 pb-2">
                  <li>Nama</li>
                  <li>Nomor Telepon</li>
                  <li>Email</li>
                  <li>Akun media sosial</li>
                  <li>Isi percakapan</li>
                </ul>

                <p class="">Percakapan melalui telepon, chat, atau media lainnya dapat direkam untuk keperluan:</p>

                <ol class="list-decimal pl-6">
                  <li>Verifikasi identitas pengguna</li>
                  <li>Peningkatan kualitas layanan</li>
                  <li>Kepentingan hukum</li>
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
