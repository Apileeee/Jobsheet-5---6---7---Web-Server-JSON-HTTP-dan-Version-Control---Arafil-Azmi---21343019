const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/prediksiCuaca')

const app = express()
const port = process.env.PORT || 4000

// Mendefinisikan jalur/path untuk konfigurasi Express
const direktoriPublic = path.join(__dirname, '../public')
const direktoriViews = path.join(__dirname, '../templates/views')
const direktoriPartials= path.join(__dirname, '../templates/partials')

// Setup handlebars engine dan lokasi folder views
app.set('view engine', 'hbs')
app.set('views', direktoriViews)
hbs.registerPartials(direktoriPartials)

// Setup direktori statis
app.use(express.static(direktoriPublic))

// //ini halaman/page utama
// app.get('', (req, res) => {
//     res.send('<h1>Selamat datang di halaman utama</h1>')
// })

//ini halaman utama
app.get('', (req, res) => {
    res.render('index', {
    judul: 'Aplikasi Cek Cuaca',
    nama: 'Arafil Azmi'
    })
})

// //ini halaman bantuan/FAQ (Frequently Asked Questions)
// app.get('/bantuan', (req, res) => {
//     res.send('<h1>Ini halaman bantuan</h1>')
// })

//ini halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
    judul: 'Ini halaman bantuan',
    nama: 'Arafil Azmi',
    teksBantuan: 'ini adalah teks bantuan'
    })
})

//ini halaman infocuaca
// app.get('/infoCuaca', (req, res) => {
//     // res.send('<h1>Selamat datang halaman infoCuaca</h1>')
//     res.send([
//         {
//         prediksiCuaca: 'Cuaca berpotensi hujan',
//         lokasi: 'Padang'
//         }
//     ])
// })

// app.get('/infocuaca', (req, res) => {
//         if (!req.query.address) {
//         return res.send({
//         error: ' Kamu harus memasukan lokasi yang ingin dicari'
//         })
//     }

//     res.send({
//         prediksiCuaca: 'Cuaca Sedang Hujan',
//         lokasi: 'Padang',
//         address: req.query.address
//     })
// })

app.get('/infocuaca', (req, res) => {
    if(!req.query.address)
    {
        return res.send
        ({
            error:'Kamu harus memasukan lokasi yang ingin dicari'
        })
    }
    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => 
    {
        if (error)
        {
        return res.send({error})
    }
    forecast(latitude, longitude, (error, dataPrediksi) => {
        if (error)
        {
            return res.send({error})
        }
        res.send({prediksiCuaca: dataPrediksi,lokasi: location,address: req.query.address})
        })
    })
})
    
// //ini halaman tentang
// app.get('/tentang', (req, res) => {
//     // res.send('<h1>Selamat datang halaman tentang</h1>')
//     res.send([
//         {
//         nama: 'Randi Proska Sandra',
//         pekerjaan: 'Dosen'
//         }
//     ])
// })

//ini halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
    judul: 'Tentang Saya',
    nama: 'Arafil Azmi'
    })
})

//ini halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('404', {
    judul: '404',
    nama: 'Arafil Azmi',
    pesanKesalahan: 'Artikel yang dicari tidak ditemukan'
    })
})

//ini halaman bantuan
app.get('*', (req, res) => {
    res.render('404', {
    judul: '404',
    nama: 'Arafil Azmi',
    pesanKesalahan: 'Halaman tidak ditemukan'
    })
})

app.listen(port, () => {
    console.log('Server berjalan pada port .' + port)
})
