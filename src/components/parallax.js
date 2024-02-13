function handleScroll() {
  const bgParallax = document.querySelector(".background-p");
  const scrollPosition = window.scrollY * 0.2;
  bgParallax.style.backgroundPositionY = scrollPosition * -1 + "px";
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