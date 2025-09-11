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

const tutupAtas = document.getElementById('tutup')
const tutupBawah = document.getElementById('tutup1')

const kiri = document.getElementById('keKiri')
const kanan = document.getElementById('keKanan')
const adios = document.getElementById('adios')

const menggambar = document.createElement('div')

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
        
        menggambar.style.backgroundSize = isi.getPropertyValue('background-size')
        menggambar.style.backgroundImage = isian

        angkaGaleri = gambar.getAttribute('id')
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
        cahayaKotak.removeChild(cahayaKotak.firstChild)

        gambarGambar.forEach(gambar => {
            gambar.style.pointerEvents = 'auto'
        })

    }, 1400)

    kiri.style.bottom = '-5%'
    kiri.style.transform = 'rotate(50deg)'

    kanan.style.bottom = '-5%'
    kanan.style.transform = 'rotate(-50deg)'

    adios.style.bottom = '-5%'
    adios.style.transform = 'rotate(180deg)'

    tutupAtas.classList.remove('active')
    tutupBawah.classList.remove('active')

})

kiri.addEventListener('click', () => {
    angkaGaleri--
    
    console.log(angkaGaleri)
    cahayaKotak.firstChild.style.animation = 'geter 1s'
    cahayaKotak.firstChild.style.setProperty('--after-warna', 'white')
    
    cahayaKotak.style.transform = 'scale(1.2) rotate(-20deg)'

    if (angkaGaleri == 0) {
        angkaGaleri = 8
    }

    adios.disabled = true

    setTimeout(() => {
        angkaGambar = document.getElementById(angkaGaleri)
        console.log(angkaGambar)

        const gambarBaru = window.getComputedStyle(angkaGambar)
        const gantiGambar = gambarBaru.getPropertyValue('background-image')

        menggambar.style.backgroundImage = gantiGambar

        cahayaKotak.style.transform = 'scale(1) rotate(0deg)'
        cahayaKotak.firstChild.style.setProperty('--after-warna', 'transparent')
        cahayaKotak.firstChild.style.animation = ''
        adios.disabled = false
        
    }, 1100)
})

kanan.addEventListener('click', () => {
    angkaGaleri++
    
    console.log(angkaGaleri)
    cahayaKotak.firstChild.style.animation = 'geter 1s'
    cahayaKotak.firstChild.style.setProperty('--after-warna', 'white')
    
    cahayaKotak.style.transform = 'scale(1.2) rotate(20deg)'

    if (angkaGaleri == 9) {
        angkaGaleri = 1
    }

    adios.disabled = true

    setTimeout(() => {
        angkaGambar = document.getElementById(angkaGaleri)
        console.log(angkaGambar)

        const gambarBaru = window.getComputedStyle(angkaGambar)
        const gantiGambar = gambarBaru.getPropertyValue('background-image')

        menggambar.style.backgroundImage = gantiGambar

        cahayaKotak.style.transform = 'scale(1) rotate(0deg)'
        cahayaKotak.firstChild.style.setProperty('--after-warna', 'transparent')
        cahayaKotak.firstChild.style.animation = ''
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
        tutupLoading.style.transform = "translateX(110%)"
        tutupLoading1.style.transform = "translateX(-110%)"
        preloader.style.display = "none"
    }, 500)

})