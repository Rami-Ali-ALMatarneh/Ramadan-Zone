let HOURS12 = document.querySelector(".hours12");
let HOURS24 = document.querySelector(".hours24");
let times1 = document.querySelector(".times1 ");
let digit = document.querySelector(".Digit");
let DATE = document.querySelector(".DATE");
let dayMonthYear = document.querySelector(".date");
function fontDigital() {
  if (digit.checked == true) {
    times1.classList.add("font1");
    times1.classList.remove("font2");
  } else {
    times1.classList.add("font2");
    times1.classList.remove("font1");
  }
}


function hours24() {}

/*navbarnav.addEventListener("click", function (e) {
  if (e.target.classList.contains("hours12")) {
  }
});*/
function showDate() {
  if (DATE.checked == false) {
    dayMonthYear.style.display = "none";
  } else {
    dayMonthYear.style.display = "block";
  }
}

digit.onclick = function () {
  fontDigital();
};
DATE.onclick = function () {
  showDate();
};
