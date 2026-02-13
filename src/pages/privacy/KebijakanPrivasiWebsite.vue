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
                <p>Dengan menggunakan website resmi CAYA, Anda dianggap telah membaca, memahami, dan menyetujui Kebijakan Privasi ini.</p>
                <p class="font-bold">Ketentuan Umum<br /><span class="font-normal">Website CAYA berfungsi sebagai sarana informasi dan pendukung kegiatan layanan kesehatan CAYA, termasuk namun tidak terbatas pada:</span></p>
                <ul class="list-disc pl-6">
                  <li>Informasi layanan dan fasilitas</li>
                  <li>Artikel dan Edukasi Kesehatan</li>
                  <li>Informasi lokasi dan kontak</li>
                  <li>Pendaftaran atau permintaan layanan kesehatan</li>
                </ul>
                <p>Caya dapat memperbarui konten dan fitur website sewaktu-waktu tanpa pemberitahuan sebelumnya.</p>

                <p class="font-bold">Penggunaan Website<br /><span class="font-normal">Penggunaan dilarang menggunakan website untuk:</span></p>
                <ul class="list-disc pl-6">
                  <li>Tindakan melanggar hukum</li>
                  <li>Penipuan Penyalahgunaan</li>
                  <li>Penyabaran virus atau malware</li>
                  <li>Aktivitas yang merugikan atau tidak etis</li>
                </ul>
                <p>Caya berhak membatasi atau menghentikan akses pengguna yang melanggar ketentuan ini tanpa pemberitahuan sebelumnya.</p>
                <p class="font-bold">Cookies<br /><span class="font-normal">Website CAYA menggunakan cookies untuk meningkatkan pengalaman pengguna, menganalisis penggunaan, dan mengingat preferensi. Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.</span></p>

                <p class="font-bold">Tautan ke Website Lain<br /><span class="font-normal">Caya menggunakan cookies untuk meningkatkan pengalaman pengguna, menganalisis penggunaan, dan mengingat preferensi. Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.</span></p>
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
