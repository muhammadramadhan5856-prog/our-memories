# Birthday Website untuk Ayangg ♡

Website birthday romantis berbasis HTML, CSS, dan JavaScript. Tidak memerlukan framework atau build tools.

## Struktur folder

- `index.html` — isi website
- `style.css` — desain dan animasi
- `script.js` — musik, tombol kejutan, dan efek hati
- `images/foto-utama.jpg` — foto utama
- `images/foto-1.jpg` — foto galeri 1
- `images/foto-2.jpg` — foto galeri 2
- `images/foto-3.jpg` — foto galeri 3
- `music/lagu-kita.mp3` — lagu pilihanmu

## Cara menjalankan

1. Ekstrak ZIP ini.
2. Ganti gambar contoh dengan foto kalian. Gunakan nama file persis seperti struktur di atas.
3. Masukkan file lagu MP3 yang kamu punya hak untuk gunakan ke folder `music`, lalu beri nama `lagu-kita.mp3`.
4. Klik dua kali `index.html` untuk membuka website di browser. Jika audio bermasalah saat dibuka langsung, jalankan server lokal sederhana:
   - Pastikan Python terpasang.
   - Buka terminal di folder ini dan jalankan `python -m http.server 8000`.
   - Buka `http://localhost:8000`.
5. Untuk mengubah ucapan, buka `index.html` dan edit teks di bagian surat cinta serta pesan rahasia.

## Publikasi gratis lewat GitHub Pages

1. Buat akun di GitHub jika belum punya.
2. Buat repository baru, misalnya `birthday-untuk-ayangg`.
3. Upload seluruh isi folder ini ke repository (pastikan `index.html` berada di root repository).
4. Buka **Settings → Pages**.
5. Pada bagian build/deployment, pilih **Deploy from a branch**, pilih branch `main` dan folder `/(root)`, lalu simpan.
6. Tunggu proses publikasi. GitHub akan menampilkan URL website di halaman Pages.

## Catatan penting

- Browser biasanya tidak mengizinkan musik autoplay sebelum ada interaksi pengguna. Karena itu musik dimulai setelah tombol ditekan.
- Gunakan foto yang nyaman untuk dibagikan dan lagu yang kamu punya hak untuk digunakan.
- Website publik dapat dibuka siapa pun yang memiliki tautan. Jangan unggah informasi pribadi atau foto yang tidak disetujui pasangan.
- Font dari Google Fonts memerlukan koneksi internet; jika offline, website tetap berjalan dengan font cadangan.
