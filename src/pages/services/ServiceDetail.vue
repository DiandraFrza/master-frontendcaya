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
    <section class="py-8 md:py-16 bg-[#fff5f2]">
      <div class="container max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-10">
          <!-- SIDEBAR (KIRI - STICKY) -->
          <aside class="lg:col-span-1 space-y-4 md:space-y-6 lg:sticky lg:top-28 lg:self-start order-2 lg:order-1">
            <!-- Layanan Lainnya -->
            <div class="bg-white rounded-2xl p-4 md:p-6 shadow-sm border">
              <h4 class="font-semibold mb-3 md:mb-4 text-sm md:text-base">Layanan Lainnya</h4>

              <ul class="space-y-1 md:space-y-2 text-xs md:text-sm">
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
            <div class="bg-white rounded-2xl p-4 md:p-6 shadow-sm border">
              <h4 class="font-semibold mb-2 md:mb-3 text-sm md:text-base">Konsultasi</h4>
              <p class="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">Konsultasikan kebutuhan layanan Anda bersama tim kami.</p>
              <a href="https://wa.me/081290094900" class="flex items-center justify-center gap-2 bg-linear-to-r from-[#FF7D14] to-[#F94327] text-white py-2 md:py-2.5 rounded-xl font-semibold text-sm md:text-base hover:shadow-lg transition">
                <i class="fa-brands fa-whatsapp text-lg md:text-xl"></i>
                WhatsApp Kami
              </a>
            </div>
          </aside>

          <!-- CONTENT (KANAN - SCROLL) -->
          <div class="lg:col-span-3 order-1 lg:order-2">
            <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
              {{ service?.title }}
            </h1>

            <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-8 md:mb-10">
              {{ service?.intro }}
            </p>

            <div v-for="section in service?.sections" :key="section.title" class="mb-8 md:mb-10">
              <h2 class="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
                {{ section.title }}
              </h2>

              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                <div v-for="item in section.items" :key="typeof item === 'string' ? item : item.name" class="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#F94327] transition-all">
                  <div class="flex items-start gap-3">
                    <div class="text-2xl md:text-3xl text-[#F94327] flex-shrink-0" v-if="typeof item === 'object'">
                      <i :class="`fa-solid ${item.icon}`"></i>
                    </div>
                    <span class="text-lg text-[#F94327] flex-shrink-0" v-else>📌</span>
                    <span class="text-sm md:text-base text-gray-700 font-medium">
                      {{ typeof item === "string" ? item : item.name }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div v-if="service?.faqs?.length" class="mt-12 md:mt-16">
              <h2 class="text-lg md:text-xl font-semibold text-gray-900 mb-4 md:mb-6">Pertanyaan yang Sering Diajukan</h2>

              <div class="space-y-3 md:space-y-4">
                <details v-for="(faq, i) in service.faqs" :key="i" class="group rounded-xl border bg-white p-4 md:p-5">
                  <summary class="flex cursor-pointer items-center justify-between font-medium text-sm md:text-base">
                    <span>{{ faq.q }}</span>
                    <svg class="h-4 w-4 transition group-open:rotate-180 flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p class="mt-2 md:mt-3 text-xs md:text-sm text-gray-600 leading-relaxed">
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
