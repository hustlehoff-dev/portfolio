function handleScroll() {
  const bgParallax = document.querySelector(".background-p");
  const bgMotto = document.querySelector(".motto-background");
  const scrollPosition = window.scrollY * 0.2;
  if (window.innerWidth < window.innerHeight ) {
    bgParallax.style.backgroundPositionY = scrollPosition * -1 + "px";
  } else if (window.innerWidth > 2000 ) {
    bgParallax.style.backgroundPositionY = -600 + scrollPosition * -1 + "px";
  } else {
    bgParallax.style.backgroundPositionY = -200 + scrollPosition * -1 + "px";
  }
  if (window.innerWidth < window.innerHeight) {
    bgMotto.style.backgroundPositionY =300+ scrollPosition * -1 +"px";
  } else {
    bgMotto.style.backgroundPositionY = scrollPosition * -1 +"px";
  }
}
window.addEventListener("scroll", handleScroll);
function logoHide() {
  const logo = document.querySelector(".logo-slide-wrapper img");
  const logoXD = 420;
  if (window.scrollY > logoXD) {
    logo.style.transform = "translateX(-100%)";
  } else {
    logo.style.transform = "translateX(0%)";
  }
}
window.addEventListener("scroll", logoHide);

function strongColor() {
  var element = document.querySelector('.strong');
  var elementRect = element.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (elementRect.top <= windowHeight / 2 && elementRect.bottom >= windowHeight / 2) {
    element.classList.add('in-middle');
  }
}window.addEventListener('scroll',strongColor);