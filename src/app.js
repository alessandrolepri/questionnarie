import "./style.scss";

let btnRight = document.querySelector(".btn-right");
let btnLeft = document.querySelector(".btn-left");
let page = document.querySelector(".first");
let opuOut = document.querySelector(".oupoutPage");
let next = document.querySelector(".questionsPage");
let second = document.querySelector(".questionsPageTwo");
let third = document.querySelector(".questionsPageThree");
let four = document.querySelector(".questionsPageFour");
let five = document.querySelector(".questionsPageFive");
let six = document.querySelector(".questionsPageSix");
let seven = document.querySelector(".questionsPageSeven");
const opts = document.querySelectorAll(".options");
let back = document.querySelector(".back");
var move = document.querySelector(".next");
var nextSecond = document.querySelector(".nextSecond");
var nextThird = document.querySelector(".nextThird");
var nextFour = document.querySelector(".nextFour");
var nextFive = document.querySelector(".nextFive");
var nextSix = document.querySelector(".nextSix");
var nextSeven = document.querySelector(".nextSeven");
const option = document.querySelectorAll(".choosen");
const help = document.querySelector(".result-need-help");
const doingWell = document.querySelector(".result-doing-well");
const champion = document.querySelector(".result-champion");

back.addEventListener("click", function goBack(e) {
  back = e.target;
  window.history.go(-1);
});

btnRight.addEventListener("click", function() {
  page.classList.add("hide");
  next.classList.remove("hide");
});

btnLeft.addEventListener("click", function() {
  page.classList.add("hide");
  opuOut.classList.remove("hide");
});


for (let i = 0; i < option.length; i++) {
  [].forEach.call(option, (el) => {
    el.addEventListener("click", btnClick, false);
  });

  option[i].addEventListener("click", function() {
    move.classList.add("active");
    nextSecond.classList.add("active");
    nextThird.classList.add("active");
    nextFour.classList.add("active");
    nextFive.classList.add("active");
    nextSix.classList.add("active");
    nextSeven.classList.add("active");
  });
}

function btnClick() {
  [].forEach.call(opts, (el) => {
    if (el !== this) el.classList.remove("selected");
  });
  this.classList.add("selected");
  $(".next").removeAttr("disabled");
  $(".nextSecond").removeAttr("disabled");
  $(".nextThird").removeAttr("disabled");
  $(".nextFour").removeAttr("disabled");
  $(".nextFive").removeAttr("disabled");
  $(".nextSix").removeAttr("disabled");
  $(".nextSeven").removeAttr("disabled");
}

addScore();

function addScore() {
  var answers = [];
  var age = [];
  move.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      age.push(parseFloat(checked, 10));
      console.log(age);
      next.classList.add("hide");
      second.classList.remove("hide");
      nextSecond.classList.remove("active");
    } else {
      return;
    }
  });
  nextSecond.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      answers.push(parseInt(checked, 10));
      third.classList.remove("hide"); // hide second quesiton
      second.classList.add("hide"); // visible third question
    } else {
      return;
    }
  });
  nextThird.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      answers.push(parseInt(checked, 10));
      four.classList.remove("hide"); // hide third question
      third.classList.add("hide"); // visible fourth question
    } else {
      return;
    }
  });
  nextFour.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      answers.push(parseInt(checked, 10));
      five.classList.remove("hide"); // visible fourth question
      four.classList.add("hide"); // hide third question
    } else {
      return;
    }
  });
  nextFive.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      answers.push(parseInt(checked, 10));
      six.classList.remove("hide"); // visible six question
      five.classList.add("hide"); // hide five question
    } else {
      return;
    }
  });
  nextSix.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      answers.push(parseInt(checked, 10));
      // console.log(answers);
      seven.classList.remove("hide"); // visible seven question
      six.classList.add("hide"); // hide six question
    } else {
      return;
    }
  });
  nextSeven.addEventListener("click", function(e) {
    $("button[type=button]").attr("disabled", "disabled");
    var checked = document.querySelector(".selected").value;
    if (checked !== "") {
      answers.push(parseInt(checked, 10));
      console.log(answers);
    }
    let sum = answers.reduce((a, b) => a + b, 0);
    let final = age.reduce((a, b) => a + b, 0);
    let finalScore = sum * final;
    if (finalScore < 5) {
      seven.classList.add("hide"); // hide seven question
      help.classList.remove("hide"); // visible result question
    } else if (finalScore > 5 && finalScore < 10) {
      seven.classList.add("hide"); // hide seven question
      doingWell.classList.remove("hide"); // visible result question
    } else if (finalScore > 10) {
      seven.classList.add("hide"); // hide seven question
      champion.classList.remove("hide"); // visible result question
    } else {
      return;
    }
  });
}
