$(function () {

  $("#astroWindowIndex").hide();

  $(".title").click(function(){
    $("#planetMainIndex").on({
      mouseenter: function() {
        $(this).attr("src", "/background/earth.gif");
        $(this).css({width: "110%", filter: "drop-shadow(1px 1px 4px gold)"});
      },
      mouseleave: function() {
        $(this).attr("src", "/background/earth.png");
        $(this).css({width: "100%", filter: ""});
      }
    });
    $("#astroMainIndex").on({
      mouseenter: function() {
        $(this).css({width: "110%", filter: "drop-shadow(1px 1px 4px gold)"});
      },
      mouseleave: function() {
        $(this).css({width: "100%", filter: ""});
      }
    });
    $("#astroMainIndex, #planetMainIndex").animate({width: "100%"});
    $("#astroMainIndex").delay(100).animate({"opacity": "1"}, 700);
    $("#planetMainIndex").delay(300).animate({"opacity": "1"}, 700);
  })

    $("#planetMainIndex").click(function(){
      $("#planetMainIndex, #astroMainIndex").off("mouseenter mouseleave");
      $("#astroMainIndex, #planetMainIndex").animate({width: "0px", "opacity": "0"}, 500);
      setTimeout(function() {
        window.location.href = "http://localhost:8080/#/planet";
      }, 1600);
    });

    $("#astroMainIndex").click(function(){
      $("#planetMainIndex, #astroMainIndex").off("mouseenter mouseleave");
      $("#astroMainIndex, #planetMainIndex").animate({width: "0px", "opacity": "0"}, 500);
      let showHiddenFunc = function() {
        $("#astroHiddenIndex").delay(600).fadeIn("slow");
      }
      let showHiddenAfterFunc = function() {
        $("#astroHiddenIndex").css({
          position: "fixed",
          transform: "rotate(310deg)",
          overflow: "hidden",
          "width": "105%",
          top: "80px",
          transition: "all 4.6s linear"
        });
      }
      $.when(showHiddenFunc()).done(showHiddenAfterFunc());
      setTimeout(function() {
        $("#astroWindowIndex").show()
      }, 4500);
      setTimeout(function() {
        $("#astroHiddenIndex").removeAttr("style").attr("width", "0px");
        $("#astroWindowIndex").hide();
        window.location.href = "http://localhost:8080/#/astro";
      }, 6000);
    })
});
