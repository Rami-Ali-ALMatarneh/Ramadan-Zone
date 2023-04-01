let Alarmtimes = document.getElementById("Alarmtimes");
let hoursAlarm = document.querySelector(".hoursAlarm .form-select");
let minutesAlarm = document.querySelector(".minutesAlarm .form-select");
let soundsAlarm = document.querySelector(".soundsAlarm .form-select");
let formControl = document.querySelector(".form-control");
let setAlarm = document.querySelector(".setAlarm");

let hours = null,
  minutes = null,
  sound = null,
  nameAlarm = null;
hoursAlarm.addEventListener("click", function (e) {
  hours = e.target.value;
});
minutesAlarm.addEventListener("click", function (e) {
  minutes = e.target.value;
});
soundsAlarm.addEventListener("click", function (e) {
  sound = e.target.value;
});
nameAlarm = setAlarm.value;
let DIV = document.createElement("div");
let m, h, AmPm;
let count = 0;
let audios = [];
audios.push(new Audio("Audio/1.mp3"));
audios.push(new Audio("Audio/2.mp3"));
audios.push(new Audio("Audio/3.mp3"));
setAlarm.onclick = function () {
  if (hours !== null && minutes !== null && nameAlarm !== null) {
    if (parseInt(minutes) < 10) {
      m = `0${parseInt(minutes)}`;
    } else {
      m = parseInt(minutes);
    }
    if (parseInt(hours) < 10) {
      h = `0${parseInt(hours)}`;
    } else {
      h = parseInt(hours);
    }
    if (parseInt(hours) < 13) {
      AmPm = "AM";
    } else {
      AmPm = "PM";
    }
    let audio = ["Audio/1.mp3", "Audio/2.mp3", "Audio/3.mp3"];

    let Div = `${h}:${m} ${AmPm}`;
    DIV.innerHTML = Div;
    Alarmtimes.appendChild(DIV);

    infoTime(h, m, audios[sound - 1]);
  }
  let clearAlarm = document.querySelector(".stopAlarm");
  clearAlarm.onclick = function () {
    // stop all audio elements in audios array
    Alarmtimes.removeChild(DIV);
    for (let i = 0; i < audios.length; i++) {
      audios[i].pause();
      audios[i].currentTime = 0;
    }
  };
};

function infoTime(h, m, audio) {
  let Alarms = setInterval(function () {
    let hours = parseInt(h);
    let minutes = parseInt(m);
    let date = new Date();
    let minute = date.getMinutes();
    let hour = date.getHours();
    if (hour === hours && minutes === minute) {
      DIV.style.backgroundColor = "red";
      DIV.classList.add("Desgin");
      audio.play();
      audio.addEventListener("ended", function () {
        audio.currentTime = 0;
        audio.play();
      });
      clearInterval(Alarms);
    }
  }, 1000);
}
