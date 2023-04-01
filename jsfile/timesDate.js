let times = document.querySelector(".times");
let dateName = document.querySelector(".date");
let dateName1 = document.querySelector(".date1");
let HOUR1 = document.querySelector(".hours12");
let HOUR2 = document.querySelector(".hours24");
let hh = document.querySelector(".hour");
let mm = document.querySelector(".minute");
let ss = document.querySelector(".second");
let mn = document.querySelector(".hightMorning");

///////////////////////////////////////////////////
let DATE1 = "",
  DATE2 = "";
let flag = false;

window.onload = function () {
  let time = setInterval(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    /*******************************************/
    let second = date.getSeconds();
    let minute = date.getMinutes();
    let hour = date.getHours();
    let m, h, s, AmPm, d, M, y;
    if (minute < 10) {
      m = `0${minute}`;
    } else {
      m = minute;
    }
    if (hour < 10) {
      h = `0${hour}`;
    } else {
      h = hour;
    }
    if (hour < 10) {
      h = `0${hour}`;
    } else {
      h = hour;
    }
    if (second < 10) {
      s = `0${second}`;
    } else {
      s = second;
    }
    if (hour < 13) {
      AmPm = "AM";
    } else {
      AmPm = "PM";
    }
    /*******************************************/
    if (day < 10) {
      d = `0${day}`;
    } else {
      d = day;
    }
    if (month < 10) {
      M = `0${month}`;
    } else {
      M = month;
    }
    if (year < 10) {
      y = `0${year}`;
    } else {
      y = year;
    }
    let sub = `<sub style="font-size:25px">${AmPm}</sub>`;
    //////////////////////////

    //////////////////////////
    mm.innerHTML = `${m}:`;
    ss.innerHTML = s;
    mn.innerHTML = sub;

    if (HOUR1.checked == true) {
      flag = true;
      if (h % 12 < 10) {
        hh.innerHTML = `0${h % 12}:`;
      } else {
        hh.innerHTML = `${h % 12}:`;
      }
    } else {
      hh.innerHTML = `${h}:`;
    }
    GetDate(dateName);
    GetDate(dateName1);
  }, 1000);
};
function GetDate(e) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date = new Date();
  const dayOfWeekIndex = date.getDay(); // returns a number between 0 and 6
  const dayOfWeekName = date.getDate();
  ////////////////////////////////////////////////////
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthIndex = date.getMonth(); // returns a number between 0 and 11
  const monthName = monthNames[monthIndex];
  const year = date.getFullYear();
  e.innerHTML = `${dayOfWeekName} - ${monthName} ${monthIndex + 1}. ${year}`;
}
/////////////////////////////////////////////////////

