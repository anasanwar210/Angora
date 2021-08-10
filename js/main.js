// Navigation Variabls
var aboutOffset  = $("#about").offset().top,
  teamOffset     = $("#our").offset().top,
  servicesOffset = $("#services").offset().top,
  clientOffset   = $("#client").offset().top,
  contactOffset  = $("#contact").offset().top,
  navHeight      = $("nav").outerHeight(),
  contentColor   = $("#contentColor").outerWidth();

// About Variabls
var progOne = $(".action1").offset().top,
  progtwo   = $(".action2").offset().top,
  progthree = $(".action3").offset().top,
  progfour  = $(".action4").offset().top;





/* 
=========================================================================================================================================
=========================================================================================================================================
                                                        Start Navigation Toggle
==========================================================================================================================================
==========================================================================================================================================
*/

$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll >= 100) {
    $("#mainNav").fadeOut();
    $("#secNav").slideDown();
  } else {
    $("#mainNav").fadeIn();
    $("#secNav").slideUp();
  }
});

$(".home, .about, .team, .services, .client, .contact").click(function () {
  $(".home").attr("href", "#navigation");
  $(".about").attr("href", "#about");
  $(".team").attr("href", "#our");
  $(".services").attr("href", "#services");
  $(".client").attr("href", "#client");
  $(".contact").attr("href", "#contact");
});

$(".home").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

$(".about").click(function () {
  $("html,body").animate({ scrollTop: aboutOffset - navHeight }, 1000);
});

$(".team").click(function () {
  $("html,body").animate({ scrollTop: teamOffset - navHeight }, 1000);
});

$(".services").click(function () {
  $("html,body").animate({ scrollTop: servicesOffset - navHeight }, 1000);
});

$(".client").click(function () {
  $("html,body").animate({ scrollTop: clientOffset - navHeight }, 1000);
});

$(".contact").click(function () {
  $("html,body").animate({ scrollTop: contactOffset - navHeight }, 1000);
});

// Click On Animation And Go To About Section

$(".animation").click(function () {
  $("html,body").animate({ scrollTop: aboutOffset - 200 }, 1000);
});

$(window).scroll(function () {
  if ($(window).scrollTop() >= aboutOffset - 400) {
    $(".animation").fadeOut();
  } else {
    $(".animation").fadeIn();
  }
});

if ("anas" == "anas") {
  $("#changeColor").css("left", `-${contentColor}px`);
}

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                       End Navigation Toggle
==========================================================================================================================================
==========================================================================================================================================
*/


// BTN To Up

$("#footer-widgets .fly").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 1000);
});

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                        Start Animate Progress
==========================================================================================================================================
==========================================================================================================================================
*/

var oneOffset = $(".two").offset().top,
  twoOffset = $(".three").offset().top,
  threeOffset = $(".four").offset().top;


$(window).scroll(function () {
  let wScroll = $(window).scrollTop();

  if (wScroll >= oneOffset - aboutOffset) {
    $(".action1").animate(
      { width: $(".action1").attr("data-prog") + "%" },
      2000,
      function () {
        $("#first-perc").text($(".action1").attr("data-prog") + "%").fadeIn();
      }
    );
  }

  if (wScroll >= twoOffset - aboutOffset) {
    $(".action2").animate(
      { width: $(".action2").attr("data-prog") + "%" },
      2000,
      function () {
        $("#sec-perc").text($(".action2").attr("data-prog") + "%").fadeIn();
      }
    );
  }

  if (wScroll >= threeOffset - aboutOffset) {
    $(".action3").animate(
      { width: $(".action3").attr("data-prog") + "%" },
      2000,
      function () {
        $("#third-perc").text($(".action3").attr("data-prog") + "%").fadeIn();
      }
    );
  }

  if (wScroll >= threeOffset - aboutOffset + 50) {
    $(".action4").animate(
      { width: $(".action4").attr("data-prog") + "%" },
      2000,
      function () {
        $("#fourth-perc").text($(".action4").attr("data-prog") + "%").fadeIn( );
      }
    );
  }
});

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                        End Animate Progress
==========================================================================================================================================
==========================================================================================================================================
*/


/* 
=========================================================================================================================================
=========================================================================================================================================
                                                        Start Change Color Box
==========================================================================================================================================
==========================================================================================================================================
*/

$(".fa-cogs").click(function () {
  if ($("#changeColor").css("left") == "0px") {
    $("#changeColor").animate({ left: `-${contentColor}` }, 1000);
    $("#changeColor").css("position", "absolute");
  } else {
    $("#changeColor").animate({ left: "0px" }, 1000);
    $("#changeColor").css("position", "fixed");
  }
});

$("#contentColor .green").click(function () {
  $("#navigation .carousel-caption h5").css("color", "green");
  $(".info h2").css("color", "green");
  $(".progress-bar").css("backgroundColor", "green");
  $("#our .ideas button").css("backgroundColor", "green");
  $("#our .ideas button:hover").css("backgroundColor", "rgba(0, 128, 0, 0.5)");
  $("#services .parent .child .title h2").css("color", "green");
  $(".fas ,.far").css("color", "green");
  $("#contact .form button").css("backgroundColor", "green");
  $("#footer-widgets .fly").css("backgroundColor", "green");
  $(".color").css("color", "white");
});

$("#contentColor .purple").click(function () {
  $("#navigation .carousel-caption h5").css("color", "purple");
  $(".info h2").css("color", "purple");
  $(".progress-bar").css("backgroundColor", "purple");
  $("#our .ideas button").css("backgroundColor", "purple");
  $("#our .ideas button:hover").css(
    "backgroundColor",
    "rgba(128, 0, 128, 0.5)"
  );
  $("#services .parent .child .title h2").css("color", "purple");
  $(".fas ,.far").css("color", "purple");
  $("#contact .form button").css("backgroundColor", "purple");
  $("#footer-widgets .fly").css("backgroundColor", "purple");
  $(".color").css("color", "white");
});

$("#contentColor .main-color").click(function () {
  $("#navigation .carousel-caption h5").css("color", "#fff");
  $(".info h2").css("color", "#000");
  $(".progress-bar").css("backgroundColor", "#f25454");
  $("#our .ideas button").css("backgroundColor", "#f25454");
  $("#our .ideas button:hover").css("backgroundColor", "#f25454");
  $("#services .parent .child .title h2").css("color", "#f25454");
  $(".fas ,.far").css("color", "#f25454");
  $("#contact .form button").css("backgroundColor", "#f25454");
  $("#footer-widgets .fly").css("backgroundColor", "#f25454");
  $(".color").css("color", "white");
});

$("#contentColor .yellow").click(function () {
  $("#navigation .carousel-caption h5").css("color", "yellow");
  $(".info h2").css("color", "yellow");
  $(".progress-bar").css("backgroundColor", "yellow");
  $("#our .ideas button").css("backgroundColor", "yellow");
  $("#our .ideas button:hover").css(
    "backgroundColor",
    "rgba(255, 255, 0, 0.5)"
  );
  $("#services .parent .child .title h2").css("color", "yellow");
  $(".fas ,.far").css("color", "#000");
  $("#contact .form button").css("backgroundColor", "yellow");
  $("#footer-widgets .fly").css("backgroundColor", "yellow");
  $(".color").css("color", "white");
});

/* 
=========================================================================================================================================
=========================================================================================================================================
                                                        End Change Color Box
==========================================================================================================================================
==========================================================================================================================================
*/