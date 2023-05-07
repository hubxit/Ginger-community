const bar = document.getElementById("bars");
const bannerPhoto = document.querySelector(".banner-photo");
let display = true;
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

// Navigation bar
const imgsrc = bar.addEventListener("click", () => {
  const cancle = document.getElementById("cancle");
  const navList = document.querySelector(".nav-links");
  const barHide = document.querySelector(".bar");
  navList.classList.toggle("nav-show");
  if (display) {
    barHide.style.display = "none";
    cancle.style.display = "block";
    display = false;
  } else {
    barHide.style.display = "block";
    cancle.style.display = "none";
    display = true;
  }
});

//  Banner img slider
let slideIndex = 1;

const slider = (n) => {
  let i;
  const slides = document.querySelectorAll(".mySlides");

  console.log(slides.length);
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
};
slider(slideIndex);

function plusSlides(n) {
  slider((slideIndex += n));
}

function currentSlide(n) {
  slider((slideIndex = n));
}
prev.addEventListener("click", () => {
  plusSlides(-1);
});
next.addEventListener("click", () => {
  plusSlides(1);
});

let timeChange = 2000;

const imgChange = () => {
  let slide = true;
  setInterval((slide) => {
    if (slide) {
      plusSlides(+1);
      !slide;
    } else {
      plusSlides(-1);
      slide = true;
    }
  }, timeChange * 3);
};

function plusSlides(n) {
  slider((slideIndex += n));
}

imgChange();
