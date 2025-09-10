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
    document.documentElement.style.overflowY = 'scroll';
    kebuka.scrollIntoView();
    setTimeout(() =>{
        buka.remove();
    }, 2000)
})

////////////////////

const cahayaKotak = document.createElement('div')
cahayaKotak.id = 'cahayaKotak'
document.body.appendChild(cahayaKotak)

const tutupAtas = document.getElementById('tutup')
const tutupBawah = document.getElementById('tutup1')

let angkaGaleri = 0;

const gambarGambar = document.querySelectorAll('div.kotakGambar')
gambarGambar.forEach(gambar => {
    gambar.addEventListener('click', e => {
        
        setTimeout(() =>{
            cahayaKotak.classList.add('active')
        }, 600)
        const menggambar = document.createElement('div')
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
cahayaKotak.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return

    cahayaKotak.classList.remove('active')
    setTimeout(() =>{
        cahayaKotak.removeChild(cahayaKotak.firstChild)
    }, 1500)


    tutupAtas.classList.remove('active')
    tutupBawah.classList.remove('active')
})

/////////////////////////