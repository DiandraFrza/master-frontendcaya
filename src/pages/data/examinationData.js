/** @format */

export const laboratoryExams = {
  category: "Laboratorium Klinik",
  icon: "fa-flask-vial",
  color: "from-orange-500 to-orange-600",
  subcategories: {
    kimiaDarah: {
      name: "Kimia Darah",
      icon: "fa-flask-vial",
      items: [
        { name: "Gamma GT", price: 129000, icon: "fa-flask", result: "1 - 3 Jam" },
        { name: "SGOT", price: 60000, icon: "fa-flask", result: "1 - 3 Jam" },
        { name: "SGPT", price: 60000, icon: "fa-flask", result: "1 - 3 Jam" },
        { name: "Cholesterol Total", price: 50000, icon: "fa-heart", result: "1 - 3 Jam" },
        { name: "HDL", price: 85000, icon: "fa-arrow-up", result: "1 - 3 Jam" },
        { name: "LDL", price: 125000, icon: "fa-arrow-down", result: "1 - 3 Jam" },
        { name: "Trigliserida", price: 75000, icon: "fa-chart-line", result: "1 - 3 Jam" },
        { name: "Asam Urat", price: 60000, icon: "fa-flask", result: "1 - 3 Jam" },
        { name: "Ureum", price: 60000, icon: "fa-dna", result: "1 - 3 Jam" },
        { name: "Kreatinin", price: 66000, icon: "fa-microscope", result: "1 - 3 Jam" },
        { name: "E-GFR", price: 175000, icon: "fa-calculator", result: "1 - 3 Jam" },
        { name: "Gula Darah Sewaktu", price: 50000, icon: "fa-chart-line", result: "1 - 3 Jam" },
        { name: "Gula Darah Puasa", price: 50000, icon: "fa-moon", result: "1 - 3 Jam" },
        { name: "Gula Darah 2 Jam Post Prandial", price: 50000, icon: "fa-sun", result: "1 - 3 Jam" },
        { name: "HbA1c", price: 250000, icon: "fa-percent", result: "1 - 2 Jam" },
        { name: "Vitamin D 25OH", price: 405000, icon: "fa-sun", result: "1 - 2 Jam" },
      ],
    },
    hematologi: {
      name: "Hematologi",
      icon: "fa-droplet",
      items: [
        { name: "Hemoglobin", price: 83000, icon: "fa-droplet", result: "1 - 2 Jam" },
        { name: "Hematokrit", price: 65000, icon: "fa-percent", result: "1 - 2 Jam" },
        { name: "Leukosit", price: 77000, icon: "fa-microscope", result: "1 - 2 Jam" },
        { name: "Trombosit", price: 83000, icon: "fa-square", result: "1 - 2 Jam" },
        { name: "Eritrosit", price: 65000, icon: "fa-circle", result: "1 - 2 Jam" },
        { name: "LED", price: 65000, icon: "fa-stopwatch", result: "1 - 2 Jam" },
      ],
    },
    urinalisa: {
      name: "Urinalisa",
      icon: "fa-flask",
      items: [{ name: "Urine Lengkap", price: 75000, icon: "fa-flask", result: "1 - 2 Jam" }],
    },
    imunoserologi: {
      name: "Imunoserologi",
      icon: "fa-shield",
      items: [
        { name: "Drugtest (6 Parameter)", price: 540000, icon: "fa-flask-vial", result: "30 menit - 1 jam" },
        { name: "HCG (Rapid Test)", price: 105000, icon: "fa-heart", result: "15 - 30 menit" },
        { name: "HIV (Rapid Test)", price: 470000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "HCV (Rapid Test)", price: 495000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "HbsAg (Rapid Test)", price: 230000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "HAV (Rapid Test)", price: 517000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "Syphilis (Rapid Test)", price: 440000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "NS1 (Rapid Test)", price: 440000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "Dengue (IgG, IgM)", price: 480000, icon: "fa-virus", result: "30 - 1 jam" },
        { name: "Widal", price: 175000, icon: "fa-flask", result: "1 - 2 jam" },
        { name: "Golongan Darah", price: 85000, icon: "fa-droplet", result: "30 menit - 1 jam" },
      ],
    },
    tumorMarker: {
      name: "Tumor Marker",
      icon: "fa-shield-virus",
      items: [
        { name: "AFP", price: 535000, icon: "fa-shield-virus", result: "Hari yang sama" },
        { name: "CEA", price: 500000, icon: "fa-shield-virus", result: "Hari yang sama" },
        { name: "Ca 125 (Ovarium)", price: 749000, icon: "fa-shield-virus", result: "Hari yang sama" },
        { name: "Ca 15-3 (Breast)", price: 873000, icon: "fa-shield-virus", result: "Hari yang sama" },
        { name: "Ca 19-9 (Pancreas)", price: 883000, icon: "fa-shield-virus", result: "Hari yang sama" },
        { name: "PSA (Prostate)", price: 540000, icon: "fa-shield-virus", result: "Hari yang sama" },
      ],
    },
    hormonal: {
      name: "Hormon & Fertilitas",
      icon: "fa-dna",
      items: [
        { name: "TSH", price: 378000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Free T3", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Free T4", price: 431000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Estradiol", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "FSH", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "LH", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Progesteron", price: 641000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Prolactin", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Testosteron", price: 535000, icon: "fa-dna", result: "Hari yang sama" },
        { name: "Cortisol", price: 730000, icon: "fa-dna", result: "Hari yang sama" },
      ],
    },
  },
};

export const radiologyExams = {
  category: "Radiologi & Penunjang",
  icon: "fa-x-ray",
  color: "from-orange-500 to-orange-600",
  subcategories: {
    dental: {
      name: "Gigi (Dental)",
      icon: "fa-tooth",
      items: [
        { name: "Dental", price: 160000, icon: "fa-tooth", result: "5 menit" },
        { name: "Panoramic", price: 300000, icon: "fa-image", result: "5 - 15 menit" },
        { name: "Cephalometri", price: 325000, icon: "fa-image", result: "5 - 15 menit" },
      ],
    },
    thorax: {
      name: "Dada & Paru",
      icon: "fa-lungs",
      items: [{ name: "Thorax PA/AP", price: 250000, icon: "fa-lungs", result: "1 x 24 jam" }],
    },
    extremitas: {
      name: "Extremitas",
      icon: "fa-bone",
      items: [
        { name: "Manus AP/Oblique", price: 275000, icon: "fa-hand", result: "1 x 24 jam" },
        { name: "Wrist Joint AP/Lat", price: 250000, icon: "fa-hand", result: "1 x 24 jam" },
        { name: "Antebrachi AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Elbow AP/Lat", price: 250000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Humerus AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Shoulder", price: 275000, icon: "fa-person", result: "1 x 24 jam" },
        { name: "Clavicula AP", price: 225000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Pedis AP/Lat", price: 275000, icon: "fa-shoe-prints", result: "1 x 24 jam" },
        { name: "Ankle Joint AP/Lat", price: 250000, icon: "fa-shoe-prints", result: "1 x 24 jam" },
        { name: "Cruris AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Genu AP/Lat", price: 250000, icon: "fa-bone", result: "1 x 24 jam" },
        { name: "Femur AP/Lat", price: 275000, icon: "fa-bone", result: "1 x 24 jam" },
      ],
    },
    spinal: {
      name: "Tulang Belakang",
      icon: "fa-spine",
      items: [
        { name: "Cervical AP/Lat", price: 400000, icon: "fa-spine", result: "1 x 24 jam" },
        { name: "Thoracal AP/Lat", price: 400000, icon: "fa-spine", result: "1 x 24 jam" },
        { name: "Lumbal AP/Lat", price: 400000, icon: "fa-spine", result: "1 x 24 jam" },
      ],
    },
    other: {
      name: "Lainnya",
      icon: "fa-image",
      items: [
        { name: "Pelvis AP/Lat", price: 275000, icon: "fa-image", result: "1 x 24 jam" },
        { name: "Cranium AP/Lat", price: 350000, icon: "fa-head-side-virus", result: "1 x 24 jam" },
        { name: "SPN (Sinus Paranassal)", price: 475000, icon: "fa-head-side-virus", result: "1 x 24 jam" },
      ],
    },
  },
};

export const electromedicalExams = {
  category: "Elektromedis",
  icon: "fa-heart-pulse",
  color: "from-cyan-500 to-cyan-600",
  items: [
    { name: "Autospirometri", price: 130000, icon: "fa-lungs", result: "1 - 2 hari" },
    { name: "EKG", price: 150000, icon: "fa-heart-pulse", result: "1 - 2 hari" },
    { name: "USG Upper/Lower Abdomen", price: 500000, icon: "fa-image", result: "1 - 2 hari" },
    { name: "Treadmill", price: 1000000, icon: "fa-person-running", result: "1 - 2 hari" },
    { name: "Audiometri", price: 150000, icon: "fa-headphones", result: "1 - 2 hari" },
  ],
};

export const consultationServices = {
  category: "Konsultasi Dokter",
  icon: "fa-stethoscope",
  color: "from-indigo-500 to-indigo-600",
  items: [
    {
      name: "Konsultasi Dokter Umum",
      price: 75000,
      icon: "fa-user-doctor",
      desc: "Pemeriksaan dan konsultasi dengan dokter umum",
    },
    {
      name: "Konsultasi Spesialis",
      price: 200000,
      icon: "fa-user-md",
      desc: "Konsultasi dengan dokter spesialis",
    },
    {
      name: "Konsultasi Online",
      price: 50000,
      icon: "fa-video",
      desc: "Konsultasi via video call dengan dokter",
    },
  ],
};

export const medicalCheckupPackages = {
  category: "Medical Check Up",
  icon: "fa-heartbeat",
  color: "from-green-500 to-green-600",
  subcategories: {
    paketPersonal: {
      name: "Paket Personal",
      icon: "fa-user",
      items: [
        { name: "Paket Silver", price: 750000, icon: "fa-star", result: "Hasil 1 - 3 hari" },
        { name: "Paket Platinum", price: 1500000, icon: "fa-gem", result: "Hasil 1 - 3 hari" },
        { name: "Paket Haji & Umrah", price: 950000, icon: "fa-mosque", result: "Hasil 1 hari" },
      ],
    },
    paketK3: {
      name: "Paket K3 Perusahaan",
      icon: "fa-building",
      items: [
        { name: "K3 Dasar", price: 500000, icon: "fa-building", result: "Hasil 2 - 3 hari" },
        { name: "K3 Standar", price: 850000, icon: "fa-clipboard", result: "Hasil 2 - 3 hari" },
        { name: "K3 Lengkap", price: 1200000, icon: "fa-circle-check", result: "Hasil 2 - 3 hari" },
      ],
    },
  },
};

export const screeningPenyakit = {
  category: "Screening Penyakit",
  icon: "fa-stethoscope",
  color: "from-blue-500 to-blue-600",
  subcategories: {
    screeningKardiometabolik: {
      name: "Screening Kardiometabolik",
      icon: "fa-heart-pulse",
      items: [
        { name: "Screening Hipertensi", price: 250000, icon: "fa-heart-pulse", result: "30 - 60 menit" },
        { name: "Screening Diabetes", price: 300000, icon: "fa-chart-line", result: "1 - 2 jam" },
        { name: "Screening Dyslipidemia", price: 280000, icon: "fa-vial", result: "1 - 2 jam" },
        { name: "Screening Sindrom Metabolik", price: 450000, icon: "fa-flask", result: "2 - 3 jam" },
        { name: "Screening Penyakit Jantung", price: 500000, icon: "fa-heart", result: "1 - 2 jam" },
      ],
    },
    screeningRespirator: {
      name: "Screening Respirator",
      icon: "fa-lungs",
      items: [
        { name: "Screening PPOK", price: 350000, icon: "fa-lungs", result: "1 jam" },
        { name: "Screening Asma", price: 300000, icon: "fa-wind", result: "1 jam" },
        { name: "Screening Tuberkulosis", price: 200000, icon: "fa-x-ray", result: "1 x 24 jam" },
        { name: "Screening Kanker Paru", price: 400000, icon: "fa-lung", result: "2 - 3 jam" },
      ],
    },
    screeningGinjal: {
      name: "Screening Ginjal & Urinaria",
      icon: "fa-droplet",
      items: [
        { name: "Screening Penyakit Ginjal Kronis", price: 350000, icon: "fa-droplet", result: "1 - 2 jam" },
        { name: "Screening Batu Ginjal", price: 400000, icon: "fa-stone", result: "1 - 2 jam" },
        { name: "Screening Infeksi Saluran Kemih", price: 200000, icon: "fa-flask", result: "1 - 2 jam" },
        { name: "Screening Nefropati Diabetik", price: 300000, icon: "fa-vial", result: "1 - 2 jam" },
      ],
    },
    screeningHepar: {
      name: "Screening Liver & Pencernaan",
      icon: "fa-liver",
      items: [
        { name: "Screening Hepatitis Viral", price: 450000, icon: "fa-shield", result: "1 - 2 hari" },
        { name: "Screening Penyakit Hati Lemak", price: 350000, icon: "fa-flask", result: "1 - 2 jam" },
        { name: "Screening Sirosis Hati", price: 400000, icon: "fa-vial", result: "1 - 2 hari" },
        { name: "Screening Gastritis & GERD", price: 250000, icon: "fa-stomach", result: "1 - 2 jam" },
      ],
    },
    screeningOnkologi: {
      name: "Screening Kanker",
      icon: "fa-shield-virus",
      items: [
        { name: "Screening Kanker Payudara", price: 500000, icon: "fa-breast", result: "1 - 2 hari" },
        { name: "Screening Kanker Serviks", price: 350000, icon: "fa-shield", result: "3 - 7 hari" },
        { name: "Screening Kanker Kolorektal", price: 400000, icon: "fa-microscope", result: "3 - 5 hari" },
        { name: "Screening Kanker Prostat", price: 350000, icon: "fa-shield-virus", result: "Hari yang sama" },
      ],
    },
    screeningInfeksi: {
      name: "Screening Infeksi Menular",
      icon: "fa-virus",
      items: [
        { name: "Screening HIV", price: 300000, icon: "fa-shield", result: "30 - 1 jam" },
        { name: "Screening Hepatitis B & C", price: 400000, icon: "fa-virus", result: "1 - 2 hari" },
        { name: "Screening Syphilis", price: 250000, icon: "fa-flask", result: "30 - 1 jam" },
        { name: "Screening COVID-19", price: 200000, icon: "fa-virus", result: "15 - 30 menit" },
      ],
    },
  },
};

export const homeServices = {
  category: "Layanan Rumah (Home Service)",
  icon: "fa-house-medical",
  color: "from-teal-500 to-teal-600",
  items: [
    {
      name: "Home Service Pemeriksaan Darah",
      price: 150000,
      icon: "fa-droplet",
      desc: "Pengambilan sampel darah ke rumah Anda",
    },
    {
      name: "Home Service Paket Profil Lemak",
      price: 300000,
      icon: "fa-heart",
      desc: "Pemeriksaan profil lemak lengkap di rumah",
    },
    {
      name: "Home Service Paket Diabetes",
      price: 200000,
      icon: "fa-chart-line",
      desc: "Screening diabetes lengkap di rumah",
    },
    {
      name: "Home Service Paket Ginjal",
      price: 250000,
      icon: "fa-droplet-slash",
      desc: "Pemeriksaan fungsi ginjal lengkap di rumah",
    },
    {
      name: "Home Service Paket Jantung",
      price: 500000,
      icon: "fa-heart-pulse",
      desc: "Screening jantung lengkap di rumah",
    },
  ],
};
