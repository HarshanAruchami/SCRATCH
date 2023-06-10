//Navbar Mobile view toggle button BG-color Changes
$(document).ready(function () {
    $("#toggle").click(function () {
      // Get the current background color
      const currentColor = $("nav").css("background-color");
      // If the current background color is #464646, change it to transparent
      if (currentColor === "#464646") {
        $("nav").css("background-color", "transparent");
      } else {
        // If the current background color is transparent, change it to #464646
        $("nav").css("background-color", "#464646");
      }
    });
  });
  //Navbar Scrolldown BG-color Changes
  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar-fixed-top");
      $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
  });
  