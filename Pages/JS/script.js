const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const hamburger = document.querySelector(".hamburger");
const menuItem = document.querySelector(".menuItem");

hamburger.addEventListener("click", () =>{
  hamburger.classList.toggle("active");
  menuItem.classList.toggle("active");
})