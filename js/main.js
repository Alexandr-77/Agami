$('.slider__box').slick({
   dots: false,
   infinite: true,
   speed: 300,

 });


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
// =====================================================

let modernSpan = document.querySelector('.modern__span');
let modernShow = document.querySelector('.modern__show');

modernSpan.addEventListener('click', function() {
  modernShow.classList.toggle('modern__show--active');
});