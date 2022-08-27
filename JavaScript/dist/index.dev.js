"use strict";

//hero
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
} // P1 


var slideIndexP1 = 1;
showSlidesP1(slideIndexP1);
var barP1 = document.getElementsByClassName("spanP1");
var nrp1 = -1;

function plusSlidesP1(nP1) {
  if (nrp1 == 2) {
    nrp1 = -1;
  }

  nrp1++;
  showSlidesP1(slideIndexP1 += nP1);

  if (nrp1 == 0) {
    barP1[0].style.marginLeft = "-85%";
  }

  if (nrp1 == 1) {
    barP1[0].style.marginLeft = "0%";
  }

  if (nrp1 == 2) {
    barP1[0].style.marginLeft = "85%";
  }
}

function showSlidesP1(nP1) {
  var iP1;
  var slidesP1 = document.getElementsByClassName("p1");

  if (nP1 > slidesP1.length) {
    slideIndexP1 = 1;
  }

  if (nP1 < 1) {
    slideIndexP1 = slidesP1.length;
  }

  for (iP1 = 0; iP1 < slidesP1.length; iP1++) {
    slidesP1[iP1].style.display = "none";
  }

  slidesP1[slideIndexP1 - 1].style.display = "flex";
} // P2 


var slideIndexP2 = 1;
showSlidesP2(slideIndexP2);
var barp2 = document.getElementsByClassName("spanP2");
var nrp2 = -1;

function plusSlidesP2(nP2) {
  if (nrp2 == 2) {
    nrp2 = -1;
  }

  nrp2++;
  showSlidesP2(slideIndexP2 += nP2);

  if (nrp2 == 0) {
    barp2[0].style.marginLeft = "-85%";
  }

  if (nrp2 == 1) {
    barp2[0].style.marginLeft = "0%";
  }

  if (nrp2 == 2) {
    barp2[0].style.marginLeft = "85%";
  }
}

function showSlidesP2(nP2) {
  var iP2;
  var slidesP2 = document.getElementsByClassName("p2");

  if (nP2 > slidesP2.length) {
    slideIndexP2 = 1;
  }

  if (nP2 < 1) {
    slideIndexP2 = slidesP2.length;
  }

  for (iP2 = 0; iP2 < slidesP2.length; iP2++) {
    slidesP2[iP2].style.display = "none";
  }

  slidesP2[slideIndexP2 - 1].style.display = "flex";
} // P3 


var slideIndexP3 = 1;
showSlidesP3(slideIndexP3);
var barp3 = document.getElementsByClassName("spanP3");
var nrp3 = -1;

function plusSlidesP3(nP3) {
  if (nrp3 == 2) {
    nrp3 = -1;
  }

  nrp3++;
  showSlidesP2(slideIndexP3 += nP3);

  if (nrp3 == 0) {
    barp3[0].style.marginLeft = "-85%";
  }

  if (nrp3 == 1) {
    barp3[0].style.marginLeft = "0%";
  }

  if (nrp3 == 2) {
    barp3[0].style.marginLeft = "85%";
  }
}

function showSlidesP3(nP3) {
  var iP3;
  var slidesP3 = document.getElementsByClassName("p3");

  if (nP3 > slidesP3.length) {
    slideIndexP3 = 1;
  }

  if (nP3 < 1) {
    slideIndexP3 = slidesP3.length;
  }

  for (iP3 = 0; iP3 < slidesP3.length; iP3++) {
    slidesP3[iP3].style.display = "none";
  }

  slidesP3[slideIndexP3 - 1].style.display = "flex";
}