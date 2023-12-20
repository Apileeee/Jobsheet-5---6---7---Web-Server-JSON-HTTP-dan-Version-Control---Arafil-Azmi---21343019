# Proyek Pengembangan Aplikasi Cuaca berdasarkan jobsheet 5,6 dan 7
  Pada Jobsheet kali ini yaitu menjelajahi pembuatan web server cuaca dengan Node.js, manajemen versi dengan Git, dan proses deployment aplikasi menggunakan Cyclic.
# JobSheet 5: Web Server dan Express.js

## Instalasi Express.js dan Membuat Halaman

1. Buat folder "web-server" dan inisialisasi proyek dengan `npm init -y`.
2. Instal Express.js (v4.18.2) dengan `npm install express@4.18.2`.
3. Buat folder "public" dan "src" di dalam "web-server."
4. Buat file "app.js" di dalam "src" dan tambahkan kode untuk halaman utama.
5. Jalankan dengan `node app.js` dan akses http://localhost:4000/.

## Integrasi HTML dan JSON

1. Ganti teks halaman utama dengan HTML `<h1>`.
2. Halaman "tentang" menggunakan format JSON.
3. Tambahkan "bantuan" (HTML) dan "infoCuaca" (JSON).
4. Akses halaman-halaman tersebut di browser.

## Akses Static Assets dengan Path Module

1. Buat "index.html" di "public" dan tambahkan kode HTML.
2. Tambahkan kode di "app.js" untuk akses static assets.
3. Buat file HTML tambahan dan folder "css," "js," serta "img" di "public."
4. Akses halaman-halaman tersebut di browser.

## Templating dengan Handlebars.js

1. Install `hbs` dengan `npm install hbs`.
2. Atur view engine menjadi Handlebars di "app.js."
3. Ubah kode halaman utama, tentang, dan bantuan menggunakan Handlebars.
4. Buat folder "views" dan "partials," pindahkan file HTML ke "views."
5. Buat "header.hbs" dan "footer.hbs" di "partials."
6. Akses halaman-halaman tersebut di browser.

## Wildcard Route pada Express.js

1. Tambahkan wildcard route di "app.js" untuk tangani pesan kesalahan 404.
2. Buat "404.hbs" di "views" dan tampilkan saat mengakses URL tidak valid.

# JobSheet 6: JSON HTTP Endpoints

## Tampilan JSON Statis
1. Jalankan web server.
2. Buka http://localhost:4000/infoCuaca.
3. Lihat tampilan JSON statis.

## Penggunaan req.query dan Postman-Request
1. Gunakan req.query sebagai objek permintaan.
2. Ganti kode untuk kueri `address`.
3. Gunakan `postman-request`.
4. Buat folder "utils" dan file "geocode.js" serta "prediksiCuaca.js".
5. Isi kode pada file-file tersebut.
6. Ubah kode pada "app.js" untuk menggunakan geocode dan prediksiCuaca.
7. Akses http://localhost:4000/infocuaca?address=jakarta.

## Form Pencarian Lokasi
1. Buka "public/js/app.js" dan tambahkan kode untuk fetch data dari JSON HTTP Endpoints.
2. Ubah bagian <body> pada "index.hbs" dengan kode form pencarian.
3. Tambahkan style untuk form input dan button pada "styles.css".
4. Akses aplikasi dan lakukan pencarian lokasi.

# Jobsheet 7: Version Control, Git, dan Deployment Aplikasi

## Persiapan Akun GitHub
1. Install akun GitHub di https://github.com/signup.
2. Login, atur Two-factor authentication.
3. Pilih metode otentikasi.
4. Unduh Authenticator app, pindai kode batang, dan aktifkan.

## Instalasi dan Inisialisasi Git
1. Unduh dan instal Git dari https://git-scm.com/.
2. Verifikasi instalasi dengan `git --version`.
3. Jalankan `git init` di direktori web-server.
4. Periksa direktori .git di Visual Studio Code Explorer.
5. Hapus .git dari File:Exclude di pengaturan VS Code.
6. Verifikasi status dengan `git status`.
7. Buat .gitignore untuk mengabaikan node_modules.
8. Tambahkan, commit, dan push perubahan ke GitHub.

## Persiapan Kunci SSH
1. Buat kunci SSH dengan `ssh-keygen`.
2. Set up agen SSH dan tambahkan kunci.
3. Tambahkan kunci SSH ke akun GitHub.

## Persiapan Repositori GitHub
1. Buat repositori baru di GitHub.
2. Tambahkan remote origin dengan `git remote add origin`.
3. Push aplikasi ke GitHub dengan `git push`.

## Penyebaran Aplikasi dengan Cyclic
1. Daftar di https://www.cyclic.sh/.
2. Buka direktori web-server.
3. Perbarui skrip package.json.
4. Modifikasi app.js dan app.js di public/js.
5. Uji aplikasi secara lokal dengan `npm run start`.
6. Push perubahan ke GitHub.
7. Hubungkan GitHub dengan Cyclic.
8. Terapkan aplikasi di Cyclic.

