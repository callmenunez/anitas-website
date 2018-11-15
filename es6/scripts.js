"use strict" ;
console.log("its working, yay");


$(window).on('load', function(){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
    columnWidth: '.grid-item',
    percentPosition: true
  });
});


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