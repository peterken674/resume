$(window).ready(function () {
  let width = window.innerWidth;
  
    $(".nav-link").click(function () {
      $(".navbar-toggler").trigger("click");
    });


  $("img").ready(function () {
    $(".loading-page").fadeOut("slow");
  });

  var scroll =
    window.requestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    };

  var elementsToShow = document.querySelectorAll(".resume-section-content");

  function loop() {
    elementsToShow.forEach(function (element) {
      if (isElementInViewport(element)) {
        element.classList.add("is-visible");
      } else {
        element.classList.remove("is-visible");
      }
    });

    scroll(loop);
  }

  loop();

  // Helper function from: http://stackoverflow.com/a/7557433/274826
  function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  var previousPosition =
    window.pageYOffset || document.documentElement.scrollTop;

  window.onscroll = function () {
    var currentPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    if (previousPosition > currentPosition) {
      $(".resume-section-content").css("transform", "translateY(-100px)");

      $(".resume-section-content.is-visible").css(
        "transform",
        "translateY(0px)"
      );
    } else {
        $(".resume-section-content").css("transform", "translateY(100px)");

        $(".resume-section-content.is-visible").css(
          "transform",
          "translateY(0px)"
        );
    }

    previousPosition = currentPosition;
  };
});
