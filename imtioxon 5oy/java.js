var yangiRasmlar = ['img/wp2565111.jpg', 'img/nature-scenes-er5t90arlxnmon8c.jpg', 'img/588628_wallpapers-1920x1080-hd-nature-best-hd-desktop-wallpapers-1080p-hd_1920x1080_h.jpg', 'img/120902.jpg', 'img/561110-landscape-nature.jpg', 'img/38732015-full-hd-wallpapers.jpg']; // Tasodifiy tanlanadigan rasmlar ro'yxati
var intervalID;

function tasodifiyRasm() {
    var tasodifiyIndex = Math.floor(Math.random() * yangiRasmlar.length);
    document.body.style.backgroundImage = 'url(' + yangiRasmlar[tasodifiyIndex] + ')';
}

window.onload = function() {
    tasodifiyRasm();
    intervalID = setInterval(tasodifiyRasm, 4000);
};

let hrs = document.getElementById("hrs");
let min = document.getElementById("min");


setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = (currentTime.getHours())<10?"0":"" + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes())<10?"04":"" + currentTime.getMinutes();


}, 1000);

let container2 = document.querySelector('.container2');
let timeNow = new Date().getHours();
let greeting = timeNow >= 5 && timeNow < 12 ? "Good morning" : timeNow >= 12 && timeNow < 18 ? "Good afternoon" : "Good evening";

container2.innerHTML = `<h1>${greeting},</h1>`;

// Matnlar ro'yhati
var matnlar = [""];

// Tasodifiy indeksni tanlash
var tasodifiyIndeks = Math.floor(Math.random() * matnlar.length);

// Tasodifiy matnni ekranga chiqarish
console.log(matnlar[tasodifiyIndeks]);