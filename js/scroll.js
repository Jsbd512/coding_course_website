

$(document).ready(function() {

        // Transition effect for navbar and back-to-top icon

        $("#nav-home").click(function(e) {
            $('html, body').animate({
                scrollTop: $("#home").offset().top
            }, 1000);
            return false;
        });
        $("#nav-who-we-are").click(function(e) {
            $('html, body').animate({
                scrollTop: $("#who-we-are").offset().top
            }, 1000);
            return false;
        });
        $("#nav-experiences").click(function(e) {
            $('html, body').animate({
                scrollTop: $("#experiences").offset().top
            }, 1000);
            return false;
        });
        $("#nav-contact").click(function(e) {
            $('html, body').animate({
                scrollTop: $("#contact").offset().top
            }, 1000);
            return false;
        });

      });
