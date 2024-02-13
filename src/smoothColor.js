function toggleHeaderStickiness() {
    const icon = document.querySelector(".main-navigation");
let xdxd = 350;
    if (window.scrollY > xdxd) {
      // Calculate opacity based on scroll position
      const opacity = (scrollY - xdxd) / xdxd;
      icon.style.backgroundColor = `rgba(0, 51, 128, ${opacity})`;
    } else {
      icon.style.backgroundColor = "transparent";
    }
}
window.addEventListener("scroll", toggleHeaderStickiness);



let adjustScroll;
function toggleDeviceType() {
  if (window.innerWidth < 768) {
    adjustScroll = 1570;
  } else if (window.innerWidth < 1366) {
    adjustScroll = 1085;
  } else {
    adjustScroll = 865;
  }
}
const scrollShapes = document.querySelector(".shapes-background");
function handleScroll() {
  const scrollPosition = window.scrollY*2;
  scrollShapes.style.backgroundPositionY = scrollPosition * 0.25 + "px";
  scrollShapes.style.backgroundPositionX = "-" + scrollPosition * 0.1 + "px";

}
window.addEventListener("scroll", handleScroll);


// Animations scroll position helper
window.addEventListener("DOMContentLoaded", function() {
  var animatedElements = document.querySelectorAll('.animated');

  function isElementInViewport(el, threshold) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var elementHeight = rect.bottom - rect.top;

    return (
      rect.top <= windowHeight - threshold * elementHeight &&
      rect.bottom >= threshold * elementHeight
    );
  }

  function onScrollAnim() {
    animatedElements.forEach(function (el) {
      if (isElementInViewport(el, 0.5) && !el.classList.contains('fadeInUp')) {
        el.classList.add('fadeInUp');
      }
    });
  }

  // Subscribe to scroll events
  window.addEventListener('scroll', onScrollAnim);

  // Trigger the check once the page is loaded (in case the element is already in the viewport)
  onScrollAnim();
});


