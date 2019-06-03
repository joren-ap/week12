let parallax = document.querySelector(".parallax");
let iframe = document.querySelector("iframe");
let hoogte = document.querySelectorAll("div")[0].offsetHeight + document.querySelectorAll("div")[1].offsetHeight;
let eerste = document.querySelectorAll("div")[0].offsetHeight;
let hawaii = document.querySelectorAll("img")[1];
let rat = document.querySelectorAll("img")[2];
let mijnH2 = document.querySelector("h2");


function main() {
  let offset = window.pageYOffset;
  console.log("offset" + offset);
  parallax.style.backgroundPositionY = offset * 0.6 + "px";

  hawaii.style.top = offset * 0.3 + "px";

  rat.style.top = offset * 0.2 + "px";

  iframe.style.top = offset - hoogte + "px";

  if (window.pageYOffset < eerste) {
        mijnH2.classList.add("onzichtbaar");
  } else {
        mijnH2.classList.remove("onzichtbaar");
  }
}

window.addEventListener("scroll",main);


let darklink = document.querySelector("a");
let mijnCSS = document.querySelector("#switchcss");

function switchToDark() {
  if (mijnCSS.getAttribute("href").innerHTML = "stijl-dark.css") {
    mijnCSS.setAttribute("href","");
    mijnH2.innerHTML = "Scroll verder";
  } else {
    mijnCSS.setAttribute("href","stijl-dark.css");
  }
}
darklink.addEventListener("click",switchToDark);
