

$(document).ready(function() {

        // Transition effect for navbar and back-to-top icon

        $("#nav-home").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#home"), 1000);
        });
        $("#nav-who-we-are").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#who-we-are"), 1000);
        });
        $("#nav-experiences").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#experiences"), 1000);
        });
        $("#nav-contact").click(function(e) {
            e.preventDefault();
            $.scrollTo($("#contact"), 1000);
        });

      });
