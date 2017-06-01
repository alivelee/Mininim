// /**
//  * Main JS file for Casper behaviours
//  */
//
// /* globals jQuery, document */
// (function ($, undefined) {
//     "use strict";
//
//     var $document = $(document);
//
//     $document.ready(function () {
//
//         var $postContent = $(".post-content");
//         $postContent.fitVids();
//
//         $(".scroll-down").arctic_scroll();
//
//         // $(".menu-button").on("click", function(e){
//         //     e.preventDefault();
//         //     $(".nav").toggleClass("nav--open");
//         //     $(".container").toggleClass("content-animated");
//         // });
//
//     });
//
//     // Arctic Scroll by Paul Adam Davis
//     // https://github.com/PaulAdamDavis/Arctic-Scroll
//     $.fn.arctic_scroll = function (options) {
//
//         var defaults = {
//             elem: $(this),
//             speed: 500
//         },
//
//         allOptions = $.extend(defaults, options);
//
//         allOptions.elem.click(function (event) {
//             event.preventDefault();
//             var $this = $(this),
//                 $htmlBody = $('html, body'),
//                 offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
//                 position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
//                 toMove;
//
//             if (offset) {
//                 toMove = parseInt(offset);
//                 $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
//             } else if (position) {
//                 toMove = parseInt(position);
//                 $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
//             } else {
//                 $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
//             }
//         });
//
//     };
// })(jQuery);
(function () {
  var menuButton = document.querySelectorAll('.menu-button')[0];
  var nav = document.querySelectorAll('.main-nav')[0];
  var container = document.querySelectorAll('.container')[0];
  var body = document.querySelectorAll('body')[0];
  menuButton.addEventListener('click',function (e) {
    nav.classList.toggle('nav--open');
    this.classList.toggle('menu-button--open');
    body.classList.toggle('not-scroll');
    body.classList.toggle('menu-button--open');
    e.stopPropagation();
  },false);
  body.addEventListener('click',function () {
    nav.classList.remove('nav--open');
    menuButton.classList.remove('menu-button--open');
    body.classList.remove('not-scroll');
    body.classList.remove('menu-button--open');
  },false);
})();
