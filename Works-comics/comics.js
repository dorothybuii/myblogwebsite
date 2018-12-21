var i = 0,
  images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg"
  ];

function mySlide(param) {
  if (param === "next") {
    i++;
    if (i === images.length) {
      i = images.length - 1;
    }
  } else {
    i--;
    if (i < 0) {
      i = 0;
    }
  }
  document.getElementById("slide").src = images[i];
}
