let menuClick = false;
let nav = document.getElementById("nav-menu");
let infomenu = document.getElementById("Toggle-menu1");

function Toggle() {
  if (!menuClick) {
    menuClick = true;
    nav.classList.toggle("active");
    infomenu.classList.toggle("goLeft");
    nav.classList.remove("not-active");
    infomenu.classList.remove("goRight");
  } else {
    menuClick = false;
    nav.classList.toggle("not-active");
    infomenu.classList.toggle("goRight");
    nav.classList.remove("active");
    infomenu.classList.remove("goLeft");
  }
}
nav.addEventListener("click", Toggle);
let goUp = document.querySelector(".goUp");
goUp.onclick = function () {
  if (window.scrollY > 600) {
    window.scrollTo(0, 0);
  } else {
  }
};
window.onscroll = function () {
  if (window.scrollY > 700) {
    goUp.classList.remove("DisplayHidding");
  } else if (window.scrollY < 600) {
    goUp.classList.add("DisplayHidding");
  }
};
//////////////////////////////////////////////////////lang.onclick = function ()
let flag1 = false;
let radioLink = document.querySelector(".radio");
let times1H3 = document.querySelector(".times1 h3");
let offcanvasTitle = document.querySelector(".offcanvas-title");
let navlink = document.querySelectorAll(".nav-link");
let dropdown = document.querySelectorAll(".dropdown");
let Islamicprayertimess = document.querySelector(".schedule .headSection");
let ramadanK = document.querySelector(".infoSchedule h1");
let ramadanH4 = document.querySelector(".infoSchedule h4");
let ramadanP = document.querySelector(".infoSchedule P");
let box = document.querySelector(".box h5");
let eid = document.querySelector(".countDown .headSection");
let h4Countdown = document.querySelector(".h4Countdown");
let Volume = document.querySelector(".Volume p");
let headerAlarm = document.querySelector(".headerAlarm");
let TimerAlarmH1 = document.querySelector(
  ".TimerAlarm .container .headSection"
);
let Speed = document.querySelector(".Speed p");
let h1radio = document.querySelector(".img-radio h1");
let SetAlarm = document.querySelector(".times1 .btn-primary");
let stopAlarm = document.querySelector(".stopAlarm .btn-info");
let head11 = document.querySelector(".head11");
let head22 = document.querySelector(".head22");
let head33 = document.querySelector(".head33");
let RamadanFastingDays = document.querySelector(
  ".RamadanFastingDays .headSection"
);
let dua = document.querySelector(".dua");
let dua1 = document.querySelector(".dua1");
let dua2 = document.querySelector(".dua2");
let dua3 = document.querySelector(".dua3");

let dropdownItem = document.querySelectorAll(".dropdown-item");
document.querySelector(".fa-language").onclick = function () {
  if (!flag1) {
    radioLink.innerHTML = "راديو رمضان";
    offcanvasTitle.innerHTML = "إعدادات";
    navlink[0].innerHTML = "الخط الرقمي";
    navlink[1].innerHTML = "12 ساعة (صباحًا / مساءً)";
    navlink[2].innerHTML = "عرض التاريخ";
    dropdownItem[0].innerHTML = "أوقات الصلاة الإسلامية";
    dropdownItem[1].innerHTML = "منبه";
    dropdownItem[2].innerHTML = "الوقت الحالي";
    dropdownItem[3].innerHTML = "راديو رمضان";
    dropdownItem[4].innerHTML = "عيد الفطر";
    dropdownItem[5].innerHTML = "أيام صيام رمضان";
    times1H3.innerHTML = "الوقت الحالي";
    Islamicprayertimess.innerHTML = "أوقات الصلاة الإسلامية";
    ramadanK.innerHTML = "رمضان كريم";
    ramadanH4.innerHTML = "السحري والجدول الزمني";
    ramadanP.innerHTML = `شهر رمضان هو الشهر التاسع في التقويم الهجري، وهو شهر مميز لدى المسلمين حيث أنزل فيه القرآن على النبيّ محمد صلىّ الله عليه وسلّم في ليلة القدر،أحد ليالي العشر الأواخر من شهر رمضان.<br><br>شهر رمضان هو شهر هام في التقويم الإسلامي، وفي دولة الإمارات، حيث يعتبر شهر الخير، والتقوى، والإحسان. خلال الشهر، يصوم المسلمون عن الطعام والشراب خلال الفترة ما بين شروق الشمس وغروبها. صوم رمضان هو الركن الرابع من أركان الإسلام الخمسة.<br><br>تُحدد بداية ونهاية شهر رمضان بواسطة التقويم الإسلامي القمري، من خلال تحري الهلال ورؤيته بصرياً في السماء، ويستمر إما 29 أو 30 يوماً.<br><br>`;
    box.innerHTML = "جدول الصلوات اليوم";
    eid.innerHTML = "عيد الفطر";
    h4Countdown.innerHTML =
      "عيدُ الفطر عيد إسلامي في اليوم الأول من شهر شوال الذي يفطر فيه المسلمون محتفلين بإتمام عبادة الصيام في شهر رمضان الوقت المتبقي له. ";
    h1radio.innerHTML = "راديو رمضان";
    Volume.innerHTML = "الصوت";
    Speed.innerHTML = "السرعة";
    TimerAlarmH1.innerHTML = "منبه";
    headerAlarm.innerHTML = "منبه";
    SetAlarm.innerHTML = "اضافة منبه";
    stopAlarm.innerHTML = "حذف منبه";
    RamadanFastingDays.innerHTML = "أوقات الصلاة الإسلامية";
    head11.innerHTML = "العشرة الأوائل من رمضان";
    head22.innerHTML = "العشرة الوسطى من رمضان";
    head33.innerHTML = "العشرة الاواخر من رمضان";
    dua1.innerHTML = "دعاء رمضان";
    dua2.innerHTML = "أدعية من القرآن للدعاء في رمضان";
    dua3.innerHTML = "أدعية رمضان من الأحاديث النبوية الشريفة";
    dua.innerHTML =
      "الدعاء عبادة جميلة ومهمة يجب على المسلم أن يلتزم بها طوال الوقت وليس خلال شهر رمضان فقط، وفيما يلي نذكر مجموعة من الأدعية التي يمكن الدعاء بها كأدعية رمضان في هذا الشهر المبارك، هذه الأدعية الروحية خلال شهر رمضان المبارك، التي تساعد المؤمن على الاستمرار في الصيام والصلاة وأعمال الخير والتقرب إلى الله.";
    flag1 = true;
  } else {
    radioLink.innerHTML = "Ramadan Radio";
    offcanvasTitle.innerHTML = "Settings";
    navlink[0].innerHTML = "Digital Font";
    navlink[1].innerHTML = "12 hours (am/pm)";
    navlink[2].innerHTML = "Show Date";
    dropdownItem[0].innerHTML = "Islamic prayer times";
    dropdownItem[1].innerHTML = "Alarm Clock";
    dropdownItem[2].innerHTML = "Time Now";
    dropdownItem[3].innerHTML = "Ramadan Radio";
    dropdownItem[4].innerHTML = "Eid ul Fitr";
    dropdownItem[5].innerHTML = "Ramadan fasting days";
    times1H3.innerHTML = "Time Now";
    Islamicprayertimess.innerHTML = "Ramadan fasting days";
    ramadanK.innerHTML = "RAMADAN KAREEM";
    ramadanH4.innerHTML = "SAHRI AND IFTER TIME SCHEDULE";
    ramadanP.innerHTML = `The month of Ramadan is the ninth month in the Hijri calendar, and it is a special month for Muslims in which the Qur’an was revealed to the Prophet Muhammad, may God’s prayers and peace be upon him, on Laylat al-Qadr, one of the last ten nights of Ramadan.<br><br>The month of Ramadan is an important month in the Islamic calendar, and in the UAE, as it is considered the month of goodness, piety, and charity. During the month, Muslims abstain from food and drink during the period between sunrise and sunset. Fasting Ramadan is the fourth of the five pillars of Islam.<br><br>The beginning and end of the month of Ramadan are determined by the lunar Islamic calendar, by examining the crescent and seeing it visually in the sky, and it lasts either 29 or 30 days.<br><br>`;
    box.innerHTML = "TODAY'S SCHEDULE";
    eid.innerHTML = "Eid ul Fitr";
    h4Countdown.innerHTML =
      "Eid al-Fitr is an Islamic holiday on the first day of the month of Shawwal, when Muslims break their fast, celebrating the completion of the worship of fasting in the month of Ramadan, the remaining time for it.";
    h1radio.innerHTML = "Ramadan Radio";
    Volume.innerHTML = "Volume";
    Speed.innerHTML = "Speed";
    TimerAlarmH1.innerHTML = "Alarm Clock";
    headerAlarm.innerHTML = "Alarm Clock";
    SetAlarm.innerHTML = "Set Alarm";
    stopAlarm.innerHTML = "Clear Alarm";
    RamadanFastingDays.innerHTML = "Ramadan fasting days";
    head11.innerHTML = "First 1-10 Days";
    head22.innerHTML = "second 11-20 Days";
    head33.innerHTML = "Third 21-29 Days";
    dua1.innerHTML = "Ramadan Duas";
    dua2.innerHTML = "Duas from the Qur'an to pray in Ramadan";
    dua3.innerHTML =
      "Ramadan supplications from the noble hadiths of the Prophet";
    dua.innerHTML = "<span class='ColorDua'>Dua (supplication)</span> is a beautiful and important act of worship that Muslims should adhere to throughout the year, not just during the month of Ramadan. Below are a collection of duas that can be recited during Ramadan, this blessed month of spiritual supplication that helps the believer continue fasting, praying, doing good deeds, and drawing closer to Allah.";;

      flag1 = true;
  }
};
