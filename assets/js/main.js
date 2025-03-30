var swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
  // loop: true,
});
new WOW().init();
function navAction(e) {
  document.getElementById("nav").classList.toggle("nav-opened");
}
document.getElementById("navAction").addEventListener("click", (event) => {
  event.preventDefault();
  navAction(event);
});
document.getElementById("nav").addEventListener("click", (event) => {
  tag = event.target.tagName.toLowerCase();
  if (tag == "li") {
    navAction();
  } else {
  }
});

const facilitiesSwiper = new Swiper(".facilitiesSwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();

document.querySelectorAll("place-name").forEach((element) => {
  consolest.log(element);
  element.textContent = "Eliksir Medika";
});
