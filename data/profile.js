// ============================================================
//  SEMUA ISI WEBSITE ADA DI FILE INI.
//  Bagian bertanda  // ISI:  masih perlu kamu lengkapi.
// ============================================================

export const profile = {
  name: "Ana Zardani",
  initials: "AZ",
  eyebrow: "Web Developer, menuju IT Support",
  headline: "Membangun web yang rapi, dari tampilan sampai server.",
  intro:
    "Lulusan D3 Teknik Informatika Amikom. Terbiasa dengan Laravel, Yii2, dan Next.js, pernah meng-hosting aplikasi sendiri di VPS, dan sekarang sedang memperdalam jaringan serta Linux.",
  location: "Klaten, Jawa Tengah",

  email: "anazardani2004@gmail.com",
  // Format internasional tanpa +. Kosongkan "" untuk menyembunyikan WhatsApp.
  whatsapp: "6285875082135",
  github: "https://github.com/Anazardani",
  linkedin: "", // ISI: tautan LinkedIn jika ada

  cvFile: "/cv.pdf", // letakkan cv.pdf di folder public/

  // ISI: letakkan foto di public/foto.jpg lalu ganti menjadi "/foto.jpg"
  // Foto setengah badan dengan latar polos akan terlihat paling bagus.
  photo: "/profile.jpg",

  motto: "Cari sumber masalahnya, baru perbaiki.",
};

// ------------------------------------------------------------
// PROYEK (tampil sebagai tulisan saja)
// featured: true -> tampil besar di "Proyek Unggulan"
// repo / demo    -> ISI: tautan GitHub atau demo; tombol muncul jika diisi
// ------------------------------------------------------------
export const projects = [
  {
    title: "Sistem Presensi Karyawan",
    category: "Tugas Akhir",
    summary:
      "Aplikasi web presensi karyawan dengan validasi biometrik dan lokasi, dirancang untuk Radian Edu Solution.",
    role: "Dikerjakan sendiri, dari pengembangan sampai hosting",
    points: [
      "Membangun aplikasi dengan Next.js dan basis data MySQL.",
      "Meng-hosting aplikasi di VPS, termasuk menyiapkan database dan domain.",
      "Menyelesaikan kendala teknis selama pengembangan dan hosting secara mandiri.",
    ],
    stack: ["Next.js", "MySQL", "VPS"],
    featured: true,
    repo: "", // ISI
    demo: "", // ISI
  },
  {
    title: "Aplikasi Jual Beli Properti",
    category: "Magang di Diginet Media",
    summary:
      "Tampilan front-end aplikasi properti berbasis Yii2, ditambah website properti dengan tema WP Residence.",
    role: "Frontend programmer",
    points: [
      "Mengembangkan tampilan front-end aplikasi jual beli properti berbasis Yii2.",
      "Membangun dan menyesuaikan tampilan website properti dengan tema WP Residence.",
    ],
    stack: ["Yii2 (PHP)", "WP Residence"],
    featured: true,
    repo: "",
    demo: "",
  },
  {
    title: "Danni Coffee",
    category: "Proyek pribadi",
    summary:
      "Website kedai kopi dengan halaman menu, promo berhitung mundur, slider menu best seller otomatis, dan animasi saat di-scroll.",
    stack: ["HTML", "Tailwind CSS", "JavaScript"],
    repo: "",
    demo: "",
  },
  {
    title: "Website Undangan Pernikahan",
    category: "Proyek pribadi", 
    summary:
      "Undangan pernikahan digital yang nyaman dibuka di HP, berisi informasi acara untuk para tamu.",
    stack: ["HTML", "CSS", "JavaScript"], 
    repo: "",
    demo: "", 
  },
  {
    title: "Sistem Kasir Gerbang Tol",
    category: "Proyek kuliah",
    summary: "Input kendaraan, tarif dihitung otomatis, dan dashboard riwayat transaksi harian.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
  },
  {
    title: "Landing Page Acara Perusahaan",
    category: "Magang di Radian Edu Solution",
    summary: "Halaman acara perusahaan yang nyaman dibuka di HP maupun laptop.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
  },
  {
    title: "Dashboard Data Akademik",
    category: "Proyek kuliah",
    summary: "Memantau nilai dan kehadiran siswa dalam satu tampilan yang mudah dibaca.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
  },
  {
    title: "Pemesanan Tiket Bus Online",
    category: "Proyek kuliah",
    summary: "Alur pesan tiket dengan validasi formulir supaya data pemesan tidak salah.",
    stack: ["HTML", "CSS", "JavaScript"],
    repo: "",
    demo: "",
  },
];

// ------------------------------------------------------------
// TENTANG SAYA
// ------------------------------------------------------------
export const about = [
  "Saya lulusan D3 Teknik Informatika Universitas Amikom Yogyakarta. Sebelum kuliah, saya belajar di SMK jurusan Teknik Kendaraan Ringan. Dari bengkel saya belajar satu kebiasaan yang masih terbawa sampai sekarang: cari dulu sumber masalahnya, baru perbaiki.",
  "Selama kuliah dan dua kali magang, saya mengerjakan tampilan web, back-end dengan PHP, sampai proses hosting aplikasi di VPS. Pengalaman terakhir itulah yang membuat saya tertarik ke sisi infrastruktur dan dukungan teknis.",
];

export const facts = [
  { label: "Domisili", value: "Klaten, Jawa Tengah" },
  { label: "Pendidikan", value: "D3 Teknik Informatika" },
  { label: "Pengalaman", value: "2 kali magang di bidang IT" },
];

// ------------------------------------------------------------
// BAHASA PEMROGRAMAN
// icon  -> logo di folder public/icons (dari Devicon, lisensi MIT)
// abbr  -> teks cadangan jika icon kosong, color -> warna garis lencana
// tools -> framework / alat yang dipakai bersama bahasa itu
// ------------------------------------------------------------
export const languages = [
  { name: "PHP", abbr: "PHP", icon: "/icons/php-original.svg", color: "#8892BF", use: "Back-end dan logika aplikasi", tools: ["Laravel", "Yii2"] },
  { name: "JavaScript", abbr: "JS", icon: "/icons/javascript-original.svg", color: "#F0DB4F", use: "Interaksi halaman dan aplikasi web", tools: ["Next.js"] },
  { name: "HTML", abbr: "HTML", icon: "/icons/html5-original.svg", color: "#E9663A", use: "Struktur halaman web", tools: [] },
  { name: "CSS", abbr: "CSS", icon: "/icons/css3-original.svg", color: "#3D8FD1", use: "Tampilan dan tata letak responsif", tools: ["Tailwind CSS"] },
  { name: "SQL", abbr: "SQL", icon: "/icons/mysql-original.svg", color: "#2FA3B5", use: "Mengelola data di database", tools: ["MySQL"] },
];

// ------------------------------------------------------------
// FRAMEWORK
// ------------------------------------------------------------
export const frameworks = [
  { name: "Laravel", abbr: "LV", icon: "/icons/laravel-original.svg", color: "#FF5A4F", use: "Framework PHP untuk aplikasi web", tools: ["PHP", "Blade"] },
  { name: "Yii2", abbr: "YII", icon: "/icons/yii-original.svg", color: "#40B3D8", use: "Framework PHP, dipakai saat magang di Diginet Media", tools: ["PHP"] },
  { name: "Next.js", abbr: "NX", icon: "/icons/nextjs-original.svg", color: "#E8E8E8", use: "Framework React, dipakai di Tugas Akhir", tools: ["JavaScript", "React"] },
  { name: "React", abbr: "RE", icon: "/icons/react-original.svg", color: "#61DAFB", use: "Membangun antarmuka berbasis komponen", tools: ["JavaScript"] },
  { name: "Tailwind CSS", abbr: "TW", icon: "/icons/tailwindcss-original.svg", color: "#38BDF8", use: "Menata tampilan dengan cepat dan konsisten", tools: ["CSS"] },
];

// ------------------------------------------------------------
// KEAHLIAN LAIN  (icon: "server" | "git" | "learn" | "code" | "db")
// ------------------------------------------------------------
export const skills = [
  { icon: "server", title: "Hosting", detail: "Deploy aplikasi ke VPS dan atur domain" },
  { icon: "git", title: "Git dan GitHub", detail: "Mengelola versi kode" },
  { icon: "learn", title: "Sedang dipelajari", detail: "Jaringan komputer dan Linux" },
];

// ------------------------------------------------------------
// PENGALAMAN (urut dari yang terbaru)
// ------------------------------------------------------------
export const experience = [
  {
    company: "Radian Edu Solution",
    role: "Magang, Tim IT",
    period: "Sep 2025 – Jan 2026",
    place: "Sleman, DIY",
    points: [
      "Menginput dan memperbarui data karyawan baru.",
      "Membangun landing page acara perusahaan.",
    ],
  },
  {
    company: "Diginet Media",
    role: "Magang, Frontend Programmer",
    period: "", // ISI: contoh "Feb 2025 – Jun 2025"
    place: "Sleman, DIY",
    points: [
      "Front-end aplikasi jual beli properti berbasis Yii2.",
      "Website properti dengan tema WP Residence.",
    ],
  },
];

export const education = [
  { school: "Universitas Amikom Yogyakarta", program: "D3 Teknik Informatika", period: "2023 – 2026" },
  { school: "SMK Negeri 1 Gantiwarno", program: "Teknik Kendaraan Ringan", period: "2020 – 2023" },
];
