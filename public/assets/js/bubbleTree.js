function isElementInViewport(elem) {
  var $elem = elem;

  var scrollElem =
    navigator.userAgent.toLowerCase().indexOf("webkit") != -1 ? "body" : "html";
  var viewportTop = $(scrollElem).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

  var elemTop = Math.round($elem.offset().top);
  var elemBottom = elemTop + $elem.height();

  return elemTop < viewportBottom && elemBottom > viewportTop;
}

// Check if it's time to start the animation.
function checkAnimation() {
  var $elem1 = $(".feature-img1");
  if ($elem1.hasClass("start")) return;
  if (isElementInViewport($elem1)) {
    $elem1.addClass("start");
  }
}

function checkAnimation1() {
  var $elem2 = $(".feature-img2");
  if ($elem2.hasClass("start")) return;
  if (isElementInViewport($elem2)) {
    $elem2.addClass("start");
  }
}

function checkAnimation2() {
  var $elem3 = $(".feature-img3");
  if ($elem3.hasClass("start")) return;
  if (isElementInViewport($elem3)) {
    $elem3.addClass("start");
  }
}

$(window).scroll(function() {
  checkAnimation();
  checkAnimation1();
  checkAnimation2();
});
