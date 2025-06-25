let ramalans = [
  "🌤️ Pagi ini kayaknya bakal cerah, kayak kamu yang selalu bisa bikin suasana adem.",
  "☀️ Semoga harimu seru ya, jangan lupa senyum dikit-dikit biar makin cakep.",
  "💖 Ramalan pagi: peluang dapet kabar baik hari ini 99,9%.",
  "🌸 Jangan lupa sarapan, jangan ngambek kalau lapar ntar.",
  "🎶 Aku nemu lagu gitar mellow yang enak, cocok buat nemenin pagi kayak gini.",
  "🌈 Pagi ini mood-nya harus bagus, biar seharian nggak males-malesan.",
  "☕ Ngopi boleh, tapi jangan kebanyakan. Ntar deg-degan bukan gara-gara kopi tapi notif WA.",
  "Udah percaya sama aku belom hari ini??",
  "Kalo belom aku bakal terus usaha, tapi tetep bantuin yaa Cii."
];

document.getElementById("forecast-btn").onclick = function(){
  let hasil = ramalans[Math.floor(Math.random() * ramalans.length)];
  document.getElementById("result").innerHTML = hasil;

  let pop = new Howl({ src: ['assets/sounds/pop.mp3'] });
  pop.play();

  let rainbow = document.createElement("img");
  rainbow.src = "assets/images/rainbow.svg";
  rainbow.style.position = "absolute";
  rainbow.style.bottom = "0";
  rainbow.style.left = "50%";
  rainbow.style.transform = "translateX(-50%)";
  rainbow.style.width = "250px";
  document.body.appendChild(rainbow);

  gsap.from(rainbow, { y: 100, opacity: 0, duration: 1.5 });
}
