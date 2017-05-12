



$(function () {
    $("#astroWindowIndex").hide()
    $("#planetMainIndex").hover(function () {
        $(this).attr("src", "/background/earth.gif") ;

    });
    $("#planetMainIndex").mouseleave(function () {
        $(this).attr("src", "/background/earth.png") ;

    });

    $("#astroMainIndex").click(function(){
      $("#astroMainIndex").fadeOut("fast");
      $("#planetMainIndex").fadeOut("fast");
      $("#astroWindowIndex").fadeOut("fast");
      let showHiddenFunc = function() {
        $("#astroHiddenIndex").delay(600).fadeIn("slow");
      }
      let showHiddenAfterFunc = function() {
        $("#astroHiddenIndex").css({
          position: "fixed",
          transform: "rotate(400deg)",
          overflow: "hidden",
          "width": "105%",
          "max-width": "1300px",
          top: "200px",
          transition: "all 4.6s linear"
        });
      }
      $.when(showHiddenFunc()).done(showHiddenAfterFunc());
      setTimeout(function() {
        $("#astroWindowIndex").show()
      }, 4400);
      setTimeout(function() {
        $("#astroHiddenIndex").removeAttr("style");
        $("#astroHiddenIndex").attr("width", "1px");
        $("#astroMainIndex").fadeIn("fast");
        $("#planetMainIndex").fadeIn("fast");
        $("#astroWindowIndex").hide()
        window.location.href = "http://localhost:8080/#/astro";
      }, 6000);


    })



});
