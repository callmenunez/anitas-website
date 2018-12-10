"use strict" ;
console.log("its working, yay");

// init Masonry
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});  

VanillaTilt.init(document.querySelector(".tilting-logo"), {
  max: 35,
  speed: 800,
});
console.log("this is here");

// function toggle(){
//   var off=document.getElementById('splash');
//   if (off.style.display == "none") {
//       off.style.display = "block";
//   } else {
//       off.style.display = "none";
//   }        
// }

// // let splashImage = getElementByClassName('splash');
// document.getElementById('splash').onclick = function() {document.getElementById('splash').style.backgroundImage = 'none';};
