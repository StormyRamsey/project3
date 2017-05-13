



$(function () {

  $("#astroWindowIndex").hide();

  $(".title").click(function(){
    $("#astroMainIndex").fadeIn();
    $("#planetMainIndex").fadeIn();
    $("#astroMainIndex").animate({width: "100%"}, 700);
    $("#planetMainIndex").animate({width: "100%"}, 700);
    $("#astroMainIndex").delay(500).animate({"opacity": "1"}, 700);
    $("#planetMainIndex").delay(600).animate({"opacity": "1"}, 700);
  })

  $("#planetMainIndex").hover(function () {
      $(this).attr("src", "/background/earth.gif")
      $(this).css({width: "110%", "transition": "1s"}) ;
    });
    $("#planetMainIndex").mouseleave(function () {
        $(this).attr("src", "/background/earth.png")
        $(this).css({width: "100%"}) ;
    });

    $("#astroMainIndex").hover(function () {
        $(this).css({width: "110%", "transition": "1s"}) ;
    });
    $("#astroMainIndex").mouseleave(function () {
        $(this).css({width: "100%"}) ;
    });

    $("#planetMainIndex").click(function(){

      $("#astroMainIndex").animate({width: "0px"}, 700);
      $("#planetMainIndex").animate({width: "0px"}, 700);
      $("#astroMainIndex").animate({"opacity": "0"}, 700);
      $("#planetMainIndex").animate({"opacity": "0"}, 700);
      $(".indexName").fadeOut("fast");
      $("#planetMainIndex").fadeOut("fast");
      setTimeout(function() {
        $(".indexName").fadeIn("fast");
        window.location.href = "http://localhost:8080/#/planet";
      }, 2400);

    });

    $("#astroMainIndex").click(function(){

      $("#astroMainIndex").animate({width: "0px"}, 700);
      $("#planetMainIndex").animate({width: "0px"}, 700);
      $("#astroMainIndex").animate({"opacity": "0"}, 700);
      $("#planetMainIndex").animate({"opacity": "0"}, 700);
      $(".indexName").fadeOut("fast");
      $("#astroMainIndex").fadeOut("fast");
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
        $("#astroHiddenIndex").removeAttr("style");
        $("#astroHiddenIndex").attr("width", "1px");
        $(".indexName").fadeIn("fast");
        $("#astroWindowIndex").hide();
        window.location.href = "http://localhost:8080/#/astro";
      }, 6000);
    })
});
