/*Main JS*/

$(window).scroll(function () { 
   $('.section-div-sponsor').css({
      'top' : -($(this).scrollTop()/10)+"px" // increase # to make even slower
   }); 
});