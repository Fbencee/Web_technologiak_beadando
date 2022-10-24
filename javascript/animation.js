$(document).ready(function(){
    $("document").ready(function(){
      $(".recipe-box").animate({
          opacity: 1,
      }, 1400);
  
    });
  });

  $(window).on("scroll", function () {
    if (window.scrollY > window.outerHeight) {
      $("#scrollToTop").addClass("active");
      setTimeout(function() {
        var theta = ($(window).scrollTop() - (window.outerHeight + (window.outerHeight/2))) / 500;
        $('#scrollToTop').css({ transform: 'rotate(' + theta + 'rad)' });
      })
    } else {
      $("#scrollToTop").removeClass("active");
    }
  });

  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
