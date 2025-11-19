<script setup>
import { ref } from 'vue';
const packages = ref([
    {
        id: 'lemak',
        title: 'Paket Lemak (Lipid Panel)',
        price: 'Rp 301.700',
        oldPrice: 'Rp 431.000',
        tests: ['Cholesterol Total', 'Trigliserida', 'Cholesterol HDL', 'Cholesterol LDL'],
        note: 'Pemeriksaan profil lemak lengkap.',
    },
    {
        id: 'diabetes',
        title: 'Paket Diabetes',
        price: 'Rp 119.000',
        oldPrice: 'Rp 170.000',
        tests: ['Glukosa Darah Puasa', 'Glukosa 2 Jam PP', 'Urine Lengkap'],
        note: 'Screening gula darah & urine.',
    },
    {
        id: 'fungsi',
        title: 'Paket Fungsi Ginjal',
        price: 'Rp 301.700',
        oldPrice: 'Rp 431.000',
        tests: ['Ureum', 'Creatinin', 'Asam Urat', 'Urine Lengkap', 'eGFR'],
        note: 'Evaluasi fungsi ginjal dasar.',
    },
    {
        id: 'obesitas',
        title: 'Paket Obesitas',
        price: 'Rp 479.500',
        oldPrice: 'Rp 685.000',
        tests: ['Cholesterol Total', 'Trigliserida', 'HDL/LDL', 'Glukosa Puasa', 'HbA1c', 'BMI'],
        note: 'Paket untuk screening risiko metabolik.',
    },
    {
        id: 'fungsi-hati',
        title: 'Paket Fungsi Hati',
        price: 'Rp 353.500',
        oldPrice: 'Rp 505.000',
        tests: ['SGOT', 'SGPT', 'Gamma-GT', 'HBsAg', 'Urine Lengkap'],
        note: 'Pemeriksaan enzim hati & hepatitis.',
    },
    {
        id: 'jantung',
        title: 'Paket Jantung',
        price: 'Rp 1.030.000',
        oldPrice: 'Rp 1.330.000',
        tests: ['Cholesterol Total', 'Trigliserida', 'LDL/HDL', 'Glukosa Puasa', 'HbA1c', 'Rekam Jantung', 'Troponin T'],
        note: 'Screening cardiology + marker jantung.',
    },
]);

const services = ref([
    { id: 'thorax', title: 'Chest X-Ray (Thorax)', desc: 'Deteksi kelainan paru & struktur dada.', icon: 'xray' },
    { id: 'cbc', title: 'CBC (Full Panel)', desc: 'Hemoglobin, leukosit, trombosit, MCV, MCHC.', icon: 'blood' },
    { id: 'ecg', title: 'ECG', desc: 'Screening listrik jantung.', icon: 'ecg' },
    { id: 'audiometri', title: 'Audiometri', desc: 'Tes pendengaran untuk risiko kerja.', icon: 'ear' },
    { id: 'urinalysis', title: 'Urinalisis', desc: 'Fungsi ginjal & infeksi saluran kemih.', icon: 'urine' },
    { id: 'onsite', title: 'Onsite / Home Service', desc: 'Tim MCU kami bisa datang ke kantor/rumah (sample collection dan pemeriksaan tertentu).', icon: 'truck' },
]);

const waLink = 'https://wa.me/081290094900?text=Halo%20Caya,%20saya%20mau%20tanya%20paket%20MCU%20%2F%20onsite';
</script>

<template>
    <div class="min-h-screen">
        <div id="smooth-wrapper">
            <div id="smooth-content">
                <main class="page-content">

                    <div class="2xxl:min-h-125 lg:min-h-112.5 md:min-h-100 sm:min-h-87.5 min-h-75 bg-cover bg-center bg-light relative z-1 w-full overflow-hidden pb-7.5 before:absolute before:left-0 before:top-0 before:size-full before:bg-[#07121E] before:opacity-70 after:w-full after:h-[calc(100%_-_80px)] after:absolute after:bottom-0 after:right-0 after:z-0 after:bg-[url(../../src/images/banner/bg.webp)] after:bg-no-repeat after:bg-position-[right_-13px_top] max-lg:after:hidden"
                        style="background-image:url(images/banner/bnr1.webp);">
                        <div class="container relative z-1 h-full table">
                            <div
                                class="table-cell 2xxl:h-125 lg:h-112.5 md:h-100 sm:h-87.5 h-75 align-middle pt-22.5 pb-5 text-center">
                                <h1 class="2xxl:text-8xl xl:text-6xxl md:text-[48px] text-[32px] font-semibold mb-3.75 break-word text-white wow fadeInUp"
                                    data-wow-delay="0.2s" data-wow-duration="0.8s">Medical Check Up</h1>
                                <nav class="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <ul
                                        class="inline-block rounded-5xl lg:py-2.5 py-1.5 lg:px-7.5 px-5 bg-white shadow-breadcrumb">
                                        <li
                                            class="inline-block lg:text-base text-sm font-normal capitalize text-heading">
                                            <a href="index.html" class="text-primary">Home</a>
                                        </li>
                                        <li
                                            class="inline-block lg:text-base text-sm font-normal capitalize text-heading pl-2 relative before:content-['\f101'] before:float-left before:text-heading before:font-bold before:font-['Font_Awesome_5_Free'] before:text-sm before:pr-3 before:top-0.5 before:relative">
                                            Medical Check Up</li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div
                            class="h-full w-20 min-w-20 absolute bottom-0 flex justify-center items-center flex-col py-18.75 px-3.75 left-0 border-r border-white/10 z-1 max-xl:hidden">
                            <ul class="flex gap-7.5 [writing-mode:tb-rl]">
                                <li><a class="text-sm uppercase text-white tracking-[1px]"
                                        href="https://www.instagram.com/">Instagram</a></li>
                                <li><a class="text-sm uppercase text-white tracking-[1px]"
                                        href="https://www.facebook.com/">Facebook</a>
                                </li>
                                <li><a class="text-sm uppercase text-white tracking-[1px]"
                                        href="https://x.com/">twitter</a></li>
                            </ul>
                        </div>
                        <div
                            class="absolute bottom-0 right-0 bg-primary size-71.25 rounded-full blur-[120px] opacity-50 max-xl:hidden">
                        </div>
                        <div
                            class="absolute top-[25%] left-0 bg-yellow-400 size-71.25 rounded-full blur-[120px] opacity-40 max-xl:hidden">
                        </div>
                        <div class="absolute z-0 top-[35%] right-[32%] max-md:hidden">
                            <svg width="61" height="61" viewBox="0 0 61 61" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M30.5 0L34.4251 26.5749L61 30.5L34.4251 34.4251L30.5 61L26.5749 34.4251L0 30.5L26.5749 26.5749L30.5 0Z"
                                    fill="var(--primary)" />
                            </svg>
                        </div>
                        <div class="absolute z-0 bottom-0 right-[38%] max-md:hidden">
                            <svg width="102" height="102" viewBox="0 0 102 102" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_d_102_123)">
                                    <path
                                        d="M51 40L52.4156 49.5844L62 51L52.4156 52.4156L51 62L49.5844 52.4156L40 51L49.5844 49.5844L51 40Z"
                                        fill="var(--primary)" />
                                </g>
                                <defs>
                                    <filter id="filter0_d_102_123" x="0" y="0" width="102" height="102"
                                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feColorMatrix in="SourceAlpha" type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset />
                                        <feGaussianBlur stdDeviation="20" />
                                        <feComposite in2="hardAlpha" operator="out" />
                                        <feColorMatrix type="matrix"
                                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                                        <feBlend mode="normal" in2="BackgroundImageFix"
                                            result="effect1_dropShadow_102_123" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_102_123"
                                            result="shape" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div class="absolute z-0 bottom-[20%] right-[10%] max-md:hidden">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15 0L16.9304 13.0696L30 15L16.9304 16.9304L15 30L13.0696 16.9304L0 15L13.0696 13.0696L15 0Z"
                                    fill="var(--primary)" />
                            </svg>
                        </div>
                    </div>
                    <section class="py-16 bg-slate-50">
                        <div class="container mx-auto px-6 max-w-6xl">
                            <div class="text-center mb-10">
                                <h1 class="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">Paket MCU &
                                    Pemeriksaan Spesialis
                                </h1>
                                <p class="text-gray-600 max-w-2xl mx-auto">
                                    Solusi MCU untuk individu & perusahaan (K3). Pilih paket yang sesuai — onsite
                                    tersedia, pengambilan
                                    darah & urine, hasil terstruktur.
                                </p>
                            </div>
                            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-10">
                                <template v-for="s in services" :key="s.id">
                                    <div
                                        class="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
                                        <!-- icon mapping simple: gunakan svg inline -->
                                        <div
                                            class="mb-3 w-12 h-12 flex items-center justify-center rounded-md bg-amber-50 text-amber-600">
                                            <svg v-if="s.icon === 'xray'" class="w-6 h-6" viewBox="0 0 24 24"
                                                fill="none">
                                                <path stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                                    stroke-linejoin="round" d="M3 7h18M3 17h18M7 7v10" />
                                            </svg>
                                            <svg v-else-if="s.icon === 'blood'" class="w-6 h-6" viewBox="0 0 24 24"
                                                fill="none">
                                                <path stroke="currentColor" stroke-width="1.6" stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M12 2s4 4 4 7a4 4 0 11-8 0c0-3 4-7 4-7z" />
                                                <path stroke="currentColor" stroke-width="1.6" d="M12 13v8" />
                                            </svg>
                                            <svg v-else-if="s.icon === 'ecg'" class="w-6 h-6" viewBox="0 0 24 24"
                                                fill="none">
                                                <path stroke="currentColor" stroke-width="1.6"
                                                    d="M3 12h3l2-4 2 8 2-4 2 4 4-8h3" />
                                            </svg>
                                            <svg v-else-if="s.icon === 'ear'" class="w-6 h-6" viewBox="0 0 24 24"
                                                fill="none">
                                                <path stroke="currentColor" stroke-width="1.6"
                                                    d="M12 2c3 0 5 1 6 3s1 4 1 6-1 4-4 6c-2 1-3 1-5 1" />
                                            </svg>
                                            <svg v-else-if="s.icon === 'urine'" class="w-6 h-6" viewBox="0 0 24 24"
                                                fill="none">
                                                <path stroke="currentColor" stroke-width="1.6"
                                                    d="M12 2s4 4 4 7a4 4 0 11-8 0c0-3 4-7 4-7z" />
                                            </svg>
                                            <svg v-else class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                                                <path stroke="currentColor" stroke-width="1.6" d="M3 7h18M3 17h18" />
                                            </svg>
                                        </div>
                                        <div class="text-sm font-semibold text-slate-800">{{ s.title }}</div>
                                        <div class="text-xs text-gray-500 mt-1">{{ s.desc }}</div>
                                    </div>
                                </template>
                            </div>

                            <!-- packages grid -->
                            <div class="mb-8">
                                <h2 class="text-xl font-semibold text-slate-800 mb-4">Paket Utama
                                </h2>
                                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <template v-for="p in packages" :key="p.id">
                                        <article class="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition">
                                            <div class="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 class="font-semibold text-slate-800 text-lg">{{ p.title }}</h3>
                                                    <p class="text-sm text-gray-500 mt-1">{{ p.note }}</p>
                                                </div>

                                                <div class="text-right">
                                                    <div v-if="p.oldPrice" class="text-xs text-gray-400 line-through">{{
                                                        p.oldPrice }}
                                                    </div>
                                                    <div class="text-amber-600 font-bold text-lg">{{ p.price }}</div>
                                                </div>
                                            </div>

                                            <ul class="mt-4 text-sm text-gray-600 space-y-2">
                                                <li v-for="(t, i) in p.tests" :key="i" class="flex items-start gap-3">
                                                    <svg class="w-4 h-4 mt-1 text-amber-500 flex-none"
                                                        viewBox="0 0 24 24" fill="none">
                                                        <path stroke="currentColor" stroke-width="1.6"
                                                            stroke-linecap="round" stroke-linejoin="round"
                                                            d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    <span>{{ t }}</span>
                                                </li>
                                            </ul>

                                            <div class="mt-4 flex items-center gap-3">
                                                <a :href="`/appointment`"
                                                    class="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-full shadow hover:scale-[1.02] transition">Book</a>
                                                <a :href="waLink"
                                                    class="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-amber-600">Info
                                                    / Onsite</a>
                                            </div>
                                        </article>
                                    </template>
                                </div>
                            </div>

                            <!-- onsite + how it works -->
                            <section class="bg-white p-6 rounded-2xl shadow-sm mb-8">
                                <div class="grid md:grid-cols-3 gap-6 items-center">
                                    <div>
                                        <h3 class="text-lg font-semibold text-slate-800">Onsite / Home Service</h3>
                                        <p class="text-gray-600 mt-2">Kami menyediakan layanan MCU onsite: tim datang ke
                                            lokasi untuk
                                            pengambilan
                                            darah, pemeriksaan dasar, dan supervisi dokter. Cocok untuk perusahaan,
                                            event, atau pasien
                                            yang sulit
                                            datang ke klinik.</p>

                                        <ul class="mt-4 space-y-2 text-sm text-gray-600">
                                            <li class="flex items-start gap-3"><strong>✅</strong> Pengambilan darah
                                                (venipuncture) &
                                                urine sample
                                            </li>
                                            <li class="flex items-start gap-3"><strong>✅</strong> Pemeriksaan ECG &
                                                Chest X-ray
                                                (tergantung paket /
                                                peralatan)</li>
                                            <li class="flex items-start gap-3"><strong>✅</strong> Laporan terstruktur &
                                                rekomendasi
                                                medis</li>
                                        </ul>

                                        <div class="mt-4">
                                            <a :href="waLink"
                                                class="inline-flex items-center gap-2 bg-amber-600 text-white px-5 py-2 rounded-full shadow">Request
                                                Onsite</a>
                                        </div>
                                    </div>

                                    <div class="md:col-span-2 grid grid-cols-2 gap-4">
                                        <div class="bg-amber-50 p-4 rounded-lg flex items-start gap-4">
                                            <div
                                                class="w-10 h-10 bg-white rounded-md flex items-center justify-center text-amber-600">
                                                🏥</div>
                                            <div>
                                                <div class="font-semibold text-slate-800">Mobile Phlebotomy</div>
                                                <div class="text-sm text-gray-600">Tim terlatih untuk pengambilan darah
                                                    aman & nyaman.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bg-amber-50 p-4 rounded-lg flex items-start gap-4">
                                            <div
                                                class="w-10 h-10 bg-white rounded-md flex items-center justify-center text-amber-600">
                                                📄</div>
                                            <div>
                                                <div class="font-semibold text-slate-800">Laporan & Sertifikat</div>
                                                <div class="text-sm text-gray-600">Format PDF & lampiran interpretasi
                                                    dokter untuk HR.
                                                </div>
                                            </div>
                                        </div>

                                        <div class="bg-amber-50 p-4 rounded-lg flex items-start gap-4">
                                            <div
                                                class="w-10 h-10 bg-white rounded-md flex items-center justify-center text-amber-600">
                                                ⚕️</div>
                                            <div>
                                                <div class="font-semibold text-slate-800">Tim Profesional</div>
                                                <div class="text-sm text-gray-600">Dokter & teknisi bersertifikat.</div>
                                            </div>
                                        </div>

                                        <div class="bg-amber-50 p-4 rounded-lg flex items-start gap-4">
                                            <div
                                                class="w-10 h-10 bg-white rounded-md flex items-center justify-center text-amber-600">
                                                ⏱
                                            </div>
                                            <div>
                                                <div class="font-semibold text-slate-800">Hasil Cepat</div>
                                                <div class="text-sm text-gray-600">Pilihan ekspres tersedia untuk
                                                    kebutuhan urgent.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <!-- CTA bottom -->
                            <div class="text-center mt-8">
                                <p class="text-sm text-gray-600 mb-4">Mau penawaran untuk perusahaan? Kirim detail
                                    (jumlah peserta,
                                    tanggal, lokasi)
                                    via WA — tim sales kami akan follow up.</p>
                                <a :href="waLink"
                                    class="inline-flex items-center gap-3 bg-amber-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-[1.02] transition-transform">
                                    Konsultasi & Penawaran Korporat
                                </a>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* simple ticker style if needed later */
</style>
