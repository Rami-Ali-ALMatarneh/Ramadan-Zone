let serverRadio = [
  "https://s2.voscast.com:10445/stream", //الحسنى
  "http://104.7.66.64:8095/;?icy=http", //Quran for the Soul
  "http://104.7.66.64:8091/;?icy=http", //Mohammed Rateb Al-Nabulsi Channel
  "http://www.quran-radio.org:8002/;stream/1", //Quran Nablus
  "http://104.7.66.64:8006/;?icy=http", //San Francisco
  "http://104.7.66.64:8007/;?icy=http", //Omar Abd al-Kafi Channel
];
let serverName = [
  "حسنى اف ام",
  "Quran for the Soul",
  "Mohammed Rateb Al-Nabulsi Channel",
  "Quran Nablus",
  "San Francisco",
  "Omar Abd al-Kafi Channel",
];
/////////////////////////////////
let play = document.querySelector(".fa-play");
let pause = document.querySelector(".fa-pause");
let iconradio = document.querySelector(".icon-radio");
let radioServer = document.querySelector(".radioServer");
let flagPlayPause = false;
iconradio.addEventListener("click", function (e) {
  if (e.target.classList.contains("fa-play")) {
    play.style.display = "none";
    pause.style.display = "block";
    onAudio();
  } else if (e.target.classList.contains("fa-pause")) {
    play.style.display = "block";
    pause.style.display = "none";
    offAudio();
  } else if (e.target.classList.contains("fa-backward-step")) {
    goBack();
  } else if (e.target.classList.contains("fa-forward-step")) {
    goNext();
  }
});
/////////////////////////////////
let audio = document.querySelector(".audios");
let countServer = 0;
function onAudio() {
  audio.src = serverRadio[countServer];
  radioServer.innerHTML = serverName[countServer];
  audio.play();
}
/////////////////////////////////
function offAudio() {
  audio.pause();
}
/////////////////////////////////
function goNext() {
  countServer++;
  if (countServer == serverRadio.length) {
    countServer = 0;
  }
  play.style.display = "none";
  pause.style.display = "block";
  onAudio();
}
/////////////////////////////////
function goBack() {
  countServer--;
  if (countServer == -1) {
    countServer = serverRadio.length - 1;
  }
  play.style.display = "none";
  pause.style.display = "block";
  onAudio();
}
/////////////////////////////////
let getVulome = document.querySelector(".Volumes");
getVulome.addEventListener("change", function () {
  //changeVulome(getVulome.value);
  audio.volume = getVulome.value / 100;
});
let Speeds = document.querySelector(".Speeds");
Speeds.addEventListener("change", function () {
  //changeVulome(getVulome.value);
  audio.playbackRate = Speeds.value / 100;
});
