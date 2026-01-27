<!-- @format -->

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "@vueuse/head";
import { serviceData } from "../data/serviceData.js";
import LegalHero from "../LegalHero.vue";

const route = useRoute();

const service = computed(() => serviceData[route.params.slug]);

useHead(() => ({
  title: service.value ? `${service.value.title} | Caya Klinik` : "Layanan | Caya Klinik",
  meta: service.value
    ? [
        {
          name: "description",
          content: service.value.intro,
        },
      ]
    : [],
}));
</script>

<template>
  <LegalHero :title="service?.title || 'Layanan'" />
  <main class="page-content">
    <section class="py-16 bg-[#fff5f2]">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <!-- SIDEBAR (KIRI - STICKY) -->
          <aside class="lg:col-span-1 space-y-6 sticky top-28 self-start">
            <!-- Layanan Lainnya -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border">
              <h4 class="font-semibold mb-4">Layanan Lainnya</h4>

              <ul class="space-y-2 text-sm">
                <li v-for="(item, slug) in serviceData" :key="slug">
                  <router-link :to="`/services/${slug}`" class="group flex items-center justify-between rounded-lg px-3 py-2 transition" :class="slug === route.params.slug ? 'bg-amber-50 text-[#F94327] font-semibold' : 'text-gray-700 hover:bg-gray-50 hover:text-[#F94327]'">
                    <span>{{ item.title }}</span>
                    <svg class="h-4 w-4 opacity-0 transition group-hover:opacity-100" :class="slug === route.params.slug && 'opacity-100'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- CTA -->
            <div class="bg-white rounded-2xl p-6 shadow-sm border">
              <h4 class="font-semibold mb-3">Konsultasi</h4>
              <p class="text-sm text-gray-600 mb-4">Konsultasikan kebutuhan layanan Anda bersama tim kami.</p>

              <a href="https://wa.me/081290094900" class="flex items-center justify-center gap-2 bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white py-2.5 rounded-xl font-semibold hover:shadow-lg transition">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16.72 13.41c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.34-.81-.72-1.36-1.6-1.52-1.87-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.95 4.68 4.13z" />
                </svg>
                WhatsApp Kami
              </a>
            </div>
          </aside>

          <!-- CONTENT (KANAN - SCROLL) -->
          <div class="lg:col-span-3">
            <h1 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {{ service?.title }}
            </h1>

            <p class="text-gray-600 leading-relaxed mb-10">
              {{ service?.intro }}
            </p>

            <div v-for="section in service?.sections" :key="section.title" class="mb-10">
              <h2 class="text-xl font-semibold text-gray-900 mb-4">
                {{ section.title }}
              </h2>

              <ul class="space-y-2">
                <li v-for="item in section.items" :key="item" class="flex items-start gap-2 text-gray-700 text-sm">
                  <span class="mt-1 w-2 h-2 bg-[#F94327] rounded-full"></span>
                  {{ item }}
                </li>
              </ul>
            </div>

            <!-- FAQ -->
            <div v-if="service?.faqs?.length" class="mt-16">
              <h2 class="text-xl font-semibold text-gray-900 mb-6">Pertanyaan yang Sering Diajukan</h2>

              <div class="space-y-4">
                <details v-for="(faq, i) in service.faqs" :key="i" class="group rounded-xl border bg-white p-5">
                  <summary class="flex cursor-pointer items-center justify-between font-medium">
                    <span>{{ faq.q }}</span>
                    <svg class="h-4 w-4 transition group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p class="mt-3 text-sm text-gray-600 leading-relaxed">
                    {{ faq.a }}
                  </p>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
