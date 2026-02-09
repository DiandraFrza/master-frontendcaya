<!-- @format -->

<template>
  <div>
    <LegalHero title="Kebijakan Cookie" last-updated="Januari 2026" />

    <main class="page-content bg-gray-50 py-12">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="grid lg:grid-cols-4 gap-6">
          <!-- Sidebar -->
          <PrivacySidebar />
          <!-- Main Content -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div class="prose prose-slate max-w-none">
                <p>Website Caya Laboratorium Klinik menggunakan cookie untuk meningkatkan pengalaman pengguna.</p>

                <h3>Apa itu Cookie?</h3>
                <p>Cookie adalah file kecil yang disimpan di perangkat pengguna untuk membantu website mengenali preferensi pengguna.</p>

                <h3>Jenis Cookie yang Digunakan</h3>
                <ul>
                  <li>Cookie fungsional untuk memastikan website berjalan optimal</li>
                  <li>Cookie analitik untuk evaluasi performa website</li>
                </ul>

                <h3>Pengelolaan Cookie</h3>
                <p>Pengguna dapat mengatur atau menonaktifkan cookie melalui pengaturan browser masing-masing.</p>

                <h3>Persetujuan</h3>
                <p>Dengan melanjutkan penggunaan website ini, Anda dianggap menyetujui penggunaan cookie sesuai kebijakan ini.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import LegalHero from "./LegalHero.vue";
import PrivacySidebar from "./privacy/PrivacySidebar.vue";
</script>
