function Scroll() {
  var topLeft = document.getElementById("img");
  var ypos = window.pageYOffset;
  if (ypos > 300) {
    topLeft.style.marginTop = "0px";
    topLeft.style.height = "60px";
    topLeft.style.width = "60px";
  } else {
    topLeft.style.marginTop = "121.44px";
    topLeft.style.height = "140px";
    topLeft.style.width = "140px";
  }
}

window.addEventListener("scroll", Scroll);
