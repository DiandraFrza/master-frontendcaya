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
                <p>Kebijakan Privasi ini mengatur seluruh aktivitas pemrosesan Data Pribadi, termasuk namun tidak terbatas pada:</p>

                <ul class="list-disc pl-6 pb-2">
                  <li>memperoleh dan mengumpulkan</li>
                  <li>mengolah dan menganalisis</li>
                  <li>menyimpan dan mengamankan</li>
                  <li>menampilkan dan mengumumkan</li>
                  <li>mengirim dan/atau menyebarluaskan</li>
                  <li>membuka akses</li>
                  <li>memusnahkan Data Pribadi</li>
                </ul>

                <p class="">Pemrosesan Data Pribadi dilakukan sehubungan dengan penggunaan layanan CAYA, yang meliputi:</p>

                <ol class="list-decimal pl-6">
                  <li>Layanan Kesehatan CAYA</li>
                  <li>Website resmi CAYA</li>
                  <li>Layanan Contact Center CAYA</li>
                </ol>

                <p>(selanjutnya disebut “Layanan”)</p>

                <p>Kebijakan Privasi ini berlaku bagi seluruh Subjek Data, yaitu setiap individu yang Data Pribadinya diproses oleh CAYA.</p>
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
