$(function () {

  //Resize the background and title of th main index page
  if (window.location.href == "http://localhost:8080/#/" || window.location.href === "http://localhost:8080/"){
    $(".mainIndexBody").css({height: "100vh"});
    $(".title").css({"margin-top": "100px"});
  } else {
    $(".mainIndexBody").css({height: "80px"});
    $(".title").css({"margin-top": "10px"});
  }

  //Return to the top
  $("a[href='#top']").click(function() {
   $("html, body").animate({ scrollTop: 0 }, "slow");
   return false;
 });


  //constantly show 'top' menu button on the right bottom of the page
  $(window).scroll(function(){
    $("#toTop, #bb8").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
  });

  $("#astroWindowIndex").hide();

  //Show menu(add hover attribute) on click "title"
  $(".title, #backButton").click(function(){
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $(".mainIndexBody").css({height: "100vh"});
    $(".title").css({"margin-top": "100px"});

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



  //Hide menu(re-adjust css attributes including hover) and re-direct the page on click "planet menu"
  $("#planetMainIndex").click(function(){
    $("#planetMainIndex, #astroMainIndex").off("mouseenter mouseleave");
    $("#astroMainIndex, #planetMainIndex").animate({width: "0px", "opacity": "0"}, 500);
    setTimeout(function() {
      $("#planetMainIndex").attr("src", "/background/earth.png").css({filter: ""});
      $(".mainIndexBody").css({height: "80px"});
      $(".title").css({"margin-top": "10px"});
      window.location.href = "http://localhost:8080/#/planet";
    }, 1600);
  });

  //Hide menu(re-adjust css attributes including hover) and re-direct the page on click "astromenu"
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
      $("#astroMainIndex").css({filter: ""});
      $("#astroWindowIndex").hide();
      $(".mainIndexBody").css({height: "80px"});
      $(".title").css({"margin-top": "10px"});
      window.location.href = "http://localhost:8080/#/astro";
    }, 6000);
  })
});