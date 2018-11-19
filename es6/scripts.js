"use strict" ;
console.log("its working, yay");

// init Masonry
var elem = document.querySelector('.grid');
var $grid = $('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  // resize: ,
  percentPosition: true
});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
  $grid.masonry('layout');
});  


// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });


// $(window).on('load', function(){
//   $('.grid').masonry({
//     // options
//     itemSelector: '.grid-item',
//     columnWidth: '.grid-item',
//     percentPosition: true
//   });
// });

// $grid.imagesLoaded().progress( function() {
//   $grid.masonry('layout');
// });


// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-item'
// });

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });