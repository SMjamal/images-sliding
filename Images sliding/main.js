//Access images
let slideImages = document.querySelectorAll('img');
//access next buttons
let next = document.querySelector('.next');
//Access prev buttons
let prev = document.querySelector('.prev');
//Access dot indicators
let dots = document.querySelectorAll('.dot');

var counter =0;

//code for next buttons
next.addEventListener('click',slideNext);
function slideNext() {
   slideImages[counter].style.animation='next1 0.5s ease-in forwards';
   if (counter>=slideImages.length-1) {
    
     counter=0;
   } else {
      counter++;
   }
   slideImages[counter].style.animation='next2 0.5s ease-in forwards';
    dotsLabel();
};

//code for prev buttons
prev.addEventListener('click',slidePrev);
function slidePrev() {
   slideImages[counter].style.animation='prev1 0.5s ease-in forwards';
   if (counter==0) {
    
     counter=slideImages.length-1;
   } else {
      counter--;
   }
   slideImages[counter].style.animation='prev2 0.5s ease-in forwards';
      dotsLabel();
};

//auto sliding
function autoSliding() {
   deleteInterval=setInterval(timer,2000);
   function timer() {
     slideNext();
     dotsLabel();
   }
}
  autoSliding();


//stop auto sliding when mouse is over

const mainContainer = document.querySelector('.slide-container');
mainContainer.addEventListener('mouseover',function () {
  clearInterval(deleteInterval);
});
//Resume autosliding when mouse is out

mainContainer.addEventListener("mouseleave", autoSliding);

//add and remove active class from indicators

function dotsLabel(){
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace( 'active', '');
  }
  dots[counter].className +=' active';
}
