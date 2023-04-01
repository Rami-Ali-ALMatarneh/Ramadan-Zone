let salat = [
  ["5:15 AM", "6:32 AM", "12:43 AM", "4:11 PM", "6:54 PM", "8:11 PM"],
  ["5:14 AM", "6:31 AM", "12:43 AM", "4:12 PM", "6:55 PM", "8:12 PM"],
  ["5:12 AM", "6:30 AM", "12:42 AM", "4:12 PM", "6:55 PM", "8:13 PM"],
  ["5:11 AM", "6:28 AM", "12:42 AM", "4:12 PM", "6:56 PM", "8:14 PM"],
  ["5:10 AM", "6:27 AM", "12:42 AM", "4:12 PM", "6:57 PM", "8:14 PM"],
  ["5:08 AM", "6:26 AM", "12:41 AM", "4:12 PM", "6:58 PM", "8:15 PM"],
  ["5:07 AM", "6:25 AM", "12:41 AM", "4:12 PM", "6:58 PM", "8:16 PM"],
  ["5:06 AM", "6:23 AM", "12:41 AM", "4:12 PM", "6:59 PM", "8:17 PM"],
  ["5:04 AM", "6:22 AM", "12:41 AM", "4:12 PM", "7:00 PM", "8:18 PM"],
  ["5:03 AM", "6:21 AM", "12:40 AM", "4:13 PM", "7:00 PM", "8:18 PM"],

  ["5:01 AM", "6:19 AM", "12:40 AM", "4:13 PM", "7:01 PM", "8:19 PM"],
  ["5:00 AM", "6:18 AM", "12:40 AM", "4:13 PM", "7:02 PM", "8:20 PM"],
  ["4:58 AM", "6:17 AM", "12:39 AM", "4:13 PM", "7:02 PM", "8:21 PM"],
  ["4:57 AM", "6:16 AM", "12:39 AM", "4:13 PM", "7:03 PM", "8:22 PM"],
  ["4:56 AM", "6:14 AM", "12:39 AM", "4:13 PM", "7:04 PM", "8:23 PM"],
  ["5:54 AM", "6:13 AM", "12:39 AM", "4:13 PM", "7:04 PM", "8:23 PM"],
  ["4:53 AM", "6:21 AM", "12:38 AM", "4:13 PM", "7:05 PM", "8:24 PM"],
  ["4:51 AM", "6:11 AM", "12:38 AM", "4:13 PM", "7:06 PM", "8:25 PM"],
  ["4:50 AM", "6:09 AM", "12:38 AM", "4:13 PM", "7:06 PM", "8:26 PM"],
  ["4:49 AM", "6:08 AM", "12:37 AM", "4:13 PM", "7:07 PM", "8:27 PM"],

  ["4:47 AM", "6:07 AM", "12:37 AM", "4:13 PM", "7:08 PM", "8:28 PM"],
  ["4:46 AM", "6:06 AM", "12:37 AM", "4:13 PM", "7:08 PM", "8:29 PM"],
  ["4:44 AM", "6:05 AM", "12:37 AM", "4:13 PM", "7:09 PM", "8:30 PM"],
  ["4:43 AM", "6:03 AM", "12:36 AM", "4:13 PM", "7:10 PM", "8:30 PM"],
  ["4:42 AM", "6:02 AM", "12:36 AM", "4:13 PM", "7:11 PM", "8:31 PM"],
  ["4:40 AM", "6:01 AM", "12:36 AM", "4:13 PM", "7:11 PM", "8:32 PM"],
  ["4:39 AM", "6:00 AM", "12:36 AM", "4:13 PM", "7:12 PM", "8:33 PM"],
  ["4:37 AM", "5:59 AM", "12:35 AM", "4:13 PM", "7:13 PM", "8:34 PM"],
  ["4:36 AM", "5:58 AM", "12:35 AM", "4:13 PM", "7:13 PM", "8:35 PM"],
];
let DayOfMonth = [];
for (var i = 23; i <= 31; i++) {
  DayOfMonth.push(String(i));
}
for (var i = 1; i <= 21; i++) {
  DayOfMonth.push(String(i));
}
console.log(DayOfMonth);
let fajr = document.querySelector(".Fajr");
let fajr1 = document.getElementById("Fajr");
let Sunrise = document.querySelector(".Sunrise");
let Dhuhr = document.querySelector(".Dhuhr");
let Asr = document.querySelector(".Asr");
let Maghrib = document.querySelector(".Maghrib");
let Maghrib1 = document.getElementById("Maghrib");
let Isha = document.querySelector(".Isha");
let Salat = document.getElementById("Salat");
//console.log(fajr);
let hours1, minutes1;

Salat.addEventListener("click", function (e) {
  let index = e.target.value;
  fajr.innerHTML = `Fajr ${salat[index - 1][0]}`;
  fajr1.innerHTML = `Fajr ${salat[index - 1][0]}`;
  Sunrise.innerHTML = `Sunrise - ${salat[index - 1][1]}`;
  Dhuhr.innerHTML = `Dhuhr - ${salat[index - 1][2]}`;
  Asr.innerHTML = `Asr - ${salat[index - 1][3]}`;
  Maghrib.innerHTML = `Maghrib - ${salat[index - 1][4]}`;
  Maghrib1.innerHTML = `Maghrib - ${salat[index - 1][4]}`;
  Isha.innerHTML = `Isha - ${salat[index - 1][5]}`;
  //console.log(e.target.value);
  let time12 = salat[index - 1][0];
  let { hours, minutes } = convertTimeTo24h(time12);
  let fajrHour = hours;
  let fajrMinute = minutes;
  //  console.log(hours, minutes); // Output: 10 30
  time12 = salat[index - 1][4];
  /////////////////////////////////////////////////////////
  ({ hours, minutes } = convertTimeTo24h(time12));
  //console.log(hours, minutes); // Output: 21 45
  let MMHour = hours;
  let MMminute = minutes;
  let MONTH;
  if (e.target.value < 10) {
    MONTH = "Mar";
  } else {
    MONTH = "Apr";
  }

  let currentDate = new Date();
  let diffDateFajr = new Date(
    `${MONTH} ${DayOfMonth[index - 1]}, 2023 ${fajrHour}:${fajrMinute}`
  );
  let diffDateMM = new Date(
    `${MONTH} ${DayOfMonth[index - 1]}, 2023 ${MMHour}:${MMminute}`
  );
  console.log(diffDateFajr.getMonth());

  ///////////////////////////////////////////////////////////////
});
let Eid = new Date("Apr 22, 2023 00:00:00");

Salat.addEventListener("click", function (e) {
  let index = e.target.value;
  fajr.innerHTML = `Fajr ${salat[index - 1][0]}`;
  fajr1.innerHTML = `Fajr ${salat[index - 1][0]}`;
  Sunrise.innerHTML = `Sunrise - ${salat[index - 1][1]}`;
  Dhuhr.innerHTML = `Dhuhr - ${salat[index - 1][2]}`;
  Asr.innerHTML = `Asr - ${salat[index - 1][3]}`;
  Maghrib.innerHTML = `Maghrib - ${salat[index - 1][4]}`;
  Maghrib1.innerHTML = `Maghrib - ${salat[index - 1][4]}`;
  Isha.innerHTML = `Isha - ${salat[index - 1][5]}`;
  //console.log(e.target.value);
  let time12 = salat[index - 1][0];
  let { hours, minutes } = convertTimeTo24h(time12);
  let fajrHour = hours;
  let fajrMinute = minutes;
  //  console.log(hours, minutes); // Output: 10 30
  time12 = salat[index - 1][4];
  /////////////////////////////////////////////////////////
  ({ hours, minutes } = convertTimeTo24h(time12));
  //console.log(hours, minutes); // Output: 21 45
  let MMHour = hours;
  let MMminute = minutes;
  /*let MONTH;
  if (e.target.value < 10) {
    MONTH = "Mar";
  } else {
    MONTH = "Apr";
  }
 let diffDateFajr = new Date(
   `${MONTH} ${DayOfMonth[index - 1]}, 2023 ${fajrHour}:${fajrMinute}`
 );
 let diffDateMM = new Date(
   `${MONTH} ${DayOfMonth[index - 1]}, 2023 ${MMHour}:${MMminute}`
 );
 console.log(diffDateFajr.getMonth());
 console.log(diffDateFajr.getTime() + "     " + diffDateMM.getTime());
   let MONTH;
  if (e.target.value < 10) {
    MONTH = "Mar";
  } else {
    MONTH = "Apr";
  }
  let currentDate = new Date();
  let diffDateFajr = new Date(
    `${MONTH} ${
      DayOfMonth[index - 1]
    }, 2023 ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`
  );
 */

  console.log(diffDateFajr);
  console.log(currentDate);
  console.log(Eid);
  ///////////////////////////////////////////////////////////////
});
let downTimer = document.querySelector(".downTimer");
let Counter = setInterval(function () {
  let currentDate = new Date().getTime();
  let diffDate = Eid.getTime() - currentDate;
  let day =
    Math.floor(diffDate / (1000 * 60 * 60 * 24)) < 10
      ? `0${Math.floor(diffDate / (1000 * 60 * 60 * 24))}`
      : Math.floor(diffDate / (1000 * 60 * 60 * 24));

  let hour =
    Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) < 10
      ? `0${Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))}`
      : Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minute =
    Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60)) < 10
      ? `0${Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60))}`
      : Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));

  let second =
    Math.floor((diffDate % (1000 * 60)) / 1000) < 10
      ? `${Math.floor((diffDate % (1000 * 60)) / 1000)}`
      : Math.floor((diffDate % (1000 * 60)) / 1000);

  if (diffDate === 0) {
    downTimer.innerHTML = "Eid Mubarak";
    clearInterval(Counter);
  }
  downTimer.innerHTML = `${day}:${hour}:${minute}:${second}`;
}, 1000);
//////////////////////////////////////////////////
function convertTimeTo24h(time12) {
  let hours, minutes;
  let period = time12.slice(-2);

  hours = parseInt(time12.split(":")[0]);
  minutes = parseInt(time12.split(":")[1].slice(0, 2));

  if (period === "AM" && hours === 12) {
    hours = 0;
  } else if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  return { hours, minutes };
}
////////////////////////////////////////////////
