# Portofolio Ana Zardani

Website portofolio dengan **Next.js**, siap di-hosting di **Vercel**.

## 1. Jalankan di laptop

Butuh Node.js 18.18+ versi **64-bit**. Buka terminal di folder ini:

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## 2. Ubah isi website

Semua teks ada di **`data/profile.js`**. Cari tanda `// ISI:` untuk bagian yang perlu dilengkapi.

Tambahkan ke folder **`public/`**:

| File | Kegunaan |
|---|---|
| `cv.pdf` | Tombol "Unduh CV" |
| `profile.jpg` | Foto di bagian atas (sudah terpasang) |




## 3. Hosting di Vercel

1. Unggah folder ini ke repository GitHub baru (branch `main`).
2. Masuk ke https://vercel.com dengan akun GitHub.
3. **Add New → Project**, pilih repository, lalu **Deploy**.

Setiap `git push` ke `main`, website otomatis diperbarui.
