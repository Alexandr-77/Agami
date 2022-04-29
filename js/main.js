$('.slider__box').slick({
   dots: false,
   infinite: true,
   speed: 300,

 });
// ================================
var mixer = mixitup('.doctors__box');

// ================================================== 
let burger = document.querySelector('.header__top-burger');
let nav = document.querySelector('.header__block-nav');



burger.addEventListener('click', rotateBurger); 

function rotateBurger() {
  
  burger.classList.toggle('burger-active');

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

}



// --------
let headerLink = document.querySelectorAll('.header__list-link');

  for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('click', function() {
    if (window.screen.width <= 1200 ) {
      burger.classList.toggle('burger-active');
       nav.style.display = "none";
    }
  })
};


// =====================================================

let modernSpan = document.querySelector('.modern__span');
let modernShow = document.querySelector('.modern__show');

modernSpan.addEventListener('click', function() {
  modernShow.classList.toggle('modern__show--active');
});

// ================== accardion =====================
let accord = document.querySelectorAll('.questions__wrap');
let accordOpen = document.querySelectorAll('.questions__block');


for (let i = 0; i < accord.length; i++) {
  accord[i].addEventListener('click', function() {
    accordOpen[i].classList.toggle('questions__block--active');
  });
}