const params = new URLSearchParams(window.location.search);
const nama = params.get("tamu");
document.querySelectorAll(".tamu").forEach(el => {
    el.textContent = nama ? nama : "Tamu";
});

/////////////////////////

const tombol = document.getElementById('balik');
const titleContainer = document.getElementById('titleContainer');
const buka = document.getElementById('buka');
const kebuka = document.getElementById('pembukaan');

const suara = document.getElementById('suaraMusik')
const tombolSuara = document.getElementById('bukanBalokBunga')

tombol.addEventListener("click", () => {
    titleContainer.classList == "titleContainer" ? balik() : balikAwal();
})
function balik() {
    titleContainer.classList.replace('titleContainer', 'titleContainer-muter');
    tombol.classList.replace('tombolBalik', 'tombolBalik-active');
    buka.classList.add('active');
}
function balikAwal() {
    titleContainer.classList.replace('titleContainer-muter', 'titleContainer');
    tombol.classList.replace('tombolBalik-active', 'tombolBalik');
}
buka.addEventListener("click", () => {
    document.body.style.overflowY = 'scroll';
    kebuka.scrollIntoView();

    suara.muted = false;
    tombolSuara.firstChild.style.color = 'goldenrod'

    suara.play()
    setTimeout(() =>{
        buka.remove();
    }, 2000)
})

///////////////

tombolSuara.addEventListener('click', () => {
    if (suara.muted == false) {
        tombolSuara.firstChild.style.color = 'red'
        suara.muted = true
    } else {
        suara.muted = false
        tombolSuara.firstChild.style.color = 'goldenrod'
    }
    
})

////////////////////

const cahayaKotak = document.createElement('div')
cahayaKotak.id = 'cahayaKotak'
document.body.appendChild(cahayaKotak)

const flashbang = document.createElement('div')
flashbang.id = 'flash'
cahayaKotak.appendChild(flashbang)

const tutupAtas = document.getElementById('tutup')
const tutupBawah = document.getElementById('tutup1')

const kiri = document.getElementById('keKiri')
const kanan = document.getElementById('keKanan')
const adios = document.getElementById('adios')

const menggambar = document.createElement('img')

let angkaGaleri = ""

const gambarGambar = document.querySelectorAll('div.kotakGambar')

gambarGambar.forEach(gambar => {
    gambar.addEventListener('click', e => {
        
        gambarGambar.forEach(gambar => {
            gambar.style.pointerEvents = 'none'
        })
        
        kiri.disabled = false
        kanan.disabled = false
        
        setTimeout(() =>{
            cahayaKotak.classList.add('active')
            cahayaKotak.style.transform = 'translateY(0vh) rotate(0deg)'

            kiri.style.bottom = '10%'
            kiri.style.transform = 'rotate(0deg)'

            kanan.style.bottom = '10%'
            kanan.style.transform = 'rotate(0deg)'

            adios.style.bottom = '10%'
            adios.style.transform = 'rotate(0deg)'

            
        }, 600)
        tutupAtas.classList.add('active')
        tutupBawah.classList.add('active')

        menggambar.id = 'menggambar'
        cahayaKotak.appendChild(menggambar)
        const isi = window.getComputedStyle(gambar)
        const isian = isi.getPropertyValue('background-image')
        const isianBeneran = gambar.firstChild.getAttribute('src')
        
        menggambar.style.backgroundSize = isi.getPropertyValue('background-size')
        menggambar.style.backgroundImage = isian
        menggambar.src= isianBeneran

        angkaGaleri = gambar.getAttribute('id')

        if (angkaGaleri == 1 || angkaGaleri == 5) {
        menggambar.style.aspectRatio = '1.503 / 1'
        } else {
            menggambar.style.aspectRatio = '131 / 200'
        }

        console.log(angkaGaleri)
        
    })
})



adios.addEventListener('click', e => {
    // if (e.target !== e.currentTarget && kiri && kanan) return

    kiri.disabled = true
    kanan.disabled = true

    cahayaKotak.classList.remove('active')
    cahayaKotak.style.transform = 'translateY(120vh) rotate(30deg)'
    setTimeout(() =>{   
        cahayaKotak.removeChild(menggambar)

        gambarGambar.forEach(gambar => {
            gambar.style.pointerEvents = 'auto'
        })

    }, 1400)

    kiri.style.bottom = '-7%'
    kiri.style.transform = 'rotate(50deg)'

    kanan.style.bottom = '-7%'
    kanan.style.transform = 'rotate(-50deg)'

    adios.style.bottom = '-7%'
    adios.style.transform = 'rotate(180deg)'

    tutupAtas.classList.remove('active')
    tutupBawah.classList.remove('active')

})

kiri.addEventListener('click', () => {
    angkaGaleri--

    const flashAmbil = window.getComputedStyle(menggambar)
    const flashRatio = flashAmbil.getPropertyValue('aspect-ratio')
    flashbang.style.aspectRatio = flashRatio

    menggambar.style.animation = 'geter 1s'
    flashbang.style.animation = 'geter 1s'
    flashbang.style.backgroundColor = 'white'
    
    cahayaKotak.style.transform = 'scale(1.2) rotate(-20deg)'

    if (angkaGaleri == 0) {
        angkaGaleri = 24
    }

    adios.disabled = true

    setTimeout(() => {
        angkaGambar = document.getElementById(angkaGaleri)

        if (angkaGaleri == 1 || angkaGaleri == 5) {
        menggambar.style.aspectRatio = '1.503 / 1'
        } else {
        menggambar.style.aspectRatio = '131 / 200'
        }

        const gambarBaru = window.getComputedStyle(angkaGambar)
        const gantiGambar = gambarBaru.getPropertyValue('background-image')

        const gantiBeneran = angkaGambar.firstChild
        const beneranRil = gantiBeneran.src

        menggambar.style.backgroundImage = gantiGambar

        cahayaKotak.style.transform = 'scale(1) rotate(0deg)'
        menggambar.style.animation = ''
        flashbang.style.animation = ''
        flashbang.style.backgroundColor = ''

        menggambar.src = beneranRil
        adios.disabled = false
        
    }, 1100)
})

kanan.addEventListener('click', () => {
    angkaGaleri++

    const flashAmbil = window.getComputedStyle(menggambar)
    const flashRatio = flashAmbil.getPropertyValue('aspect-ratio')
    flashbang.style.aspectRatio = flashRatio

    menggambar.style.animation = 'geter 1s'
    flashbang.style.animation = 'geter 1s'
    flashbang.style.backgroundColor = 'white'
    
    cahayaKotak.style.transform = 'scale(1.2) rotate(20deg)'

    if (angkaGaleri == 25) {
        angkaGaleri = 1
    }

    adios.disabled = true

    setTimeout(() => {
        angkaGambar = document.getElementById(angkaGaleri)

        if (angkaGaleri == 1 || angkaGaleri == 5) {
            menggambar.style.aspectRatio = '1.503 / 1'
        } else {
            menggambar.style.aspectRatio = '131 / 200'
        }

        const gambarBaru = window.getComputedStyle(angkaGambar)
        const gantiGambar = gambarBaru.getPropertyValue('background-image')

        const gantiBeneran = angkaGambar.firstChild
        const beneranRil = gantiBeneran.src

        menggambar.style.backgroundImage = gantiGambar

        cahayaKotak.style.transform = 'scale(1) rotate(0deg)'
        cahayaKotak.firstChild.style.setProperty('--after-warna', 'transparent')
        cahayaKotak.firstChild.style.animation = ''
        flashbang.style.animation = ''
        flashbang.style.backgroundColor = ''
        menggambar.style.animation = ''

        menggambar.src = beneranRil
        adios.disabled = false
        
    }, 1100)
})

/////////////////////////

const hari = document.getElementById('hari')
const jam = document.getElementById('jam')
const menit = document.getElementById('menit')
const detik = document.getElementById('detik')

const tengat = new Date("September 24 2025 00:00:00").getTime()

function timer() {
    const sekarang = new Date().getTime();
    const jarak = tengat - sekarang;

    const harian = Math.floor(jarak / 1000 / 60 / 60 / 24);
    const jaman = Math.floor(jarak / 1000 / 60 / 60) % 24;
    const menitan = Math.floor(jarak / 1000 / 60) % 60;
    const detikkan = Math.floor(jarak / 1000) % 60;

    hari.innerHTML = harian;
    jam.innerHTML = jaman;
    menit.innerHTML = menitan;
    detik.innerHTML = detikkan;

    console.log(hari + ":" + jam + ":" + menit + ":" + detik)
}

setInterval(timer, 1000)


/////////////////

const preloader = document.getElementById('preloader')
const tutupLoading = document.getElementById('tutupLoading')
const tutupLoading1 = document.getElementById('tutupLoading1')
const loadingnya = document.getElementById('loadingnya')

window.addEventListener("load", function(){

    loadingnya.style.transform = 'translateY(110vh) rotate(60deg)'
    
    this.setTimeout(() => {
        tutupLoading.style.transform = 'translateX(110%)'
        tutupLoading1.style.transform = 'translateX(-110%)'
    }, 1000)

    this.setTimeout(() => {
        preloader.style.display = 'none'
    }, 2500)

})

///////////////
const tutupKalender = document.getElementById('tombolKalender')
const tutupAlamat = document.getElementById('tombolLokasi')

tutupKalender.addEventListener('click', () => {
    tutup()
})

tutupAlamat.addEventListener('click', () => {
    tutup1()
})


function tutup() {

    preloader.style.display = 'block'
    
    setTimeout(() => {
    tutupLoading.style.transform = 'translateX(48%)'
    tutupLoading1.style.transform = 'translateX(-48%)'
    }, 300)

    setTimeout(() =>{
        window.location.href = "https://calendar.google.com/calendar/u/0/r/eventedit?text=Pernikahan%20Adi%20dan%20Ayu%20Candra&dates=20250924T0209%2F20250924T0209&details=&location=Kediaman%20mempelai%20wanita"
    }, 1300)

    setTimeout(() =>{
        tutupLoading.style.transform = 'translateX(110%)'
        tutupLoading1.style.transform = 'translateX(-110%)'
        preloader.style.display = 'none'
    }, 2000)
}

function tutup1() {

    preloader.style.display = 'block'
    
    setTimeout(() => {
    tutupLoading.style.transform = 'translateX(48%)'
    tutupLoading1.style.transform = 'translateX(-48%)'
    }, 300)

    setTimeout(() =>{
        window.location.href = "https://maps.app.goo.gl/AL6pMEhPU1wZk9Zm9"
    }, 1300)

    setTimeout(() =>{
        tutupLoading.style.transform = 'translateX(110%)'
        tutupLoading1.style.transform = 'translateX(-110%)'
        preloader.style.display = 'none'
    }, 2000)
}