export function toggleShowHideBackToTopButton() {
  const backToTopButton = document.getElementById("scroll-to-top-button");
  const scrolledHeight = this.scrollY;

  if (scrolledHeight > 3000) {
    backToTopButton.classList.add("scroll-to-top-button-show");
  } else {
    backToTopButton.classList.remove("scroll-to-top-button-show");
  }
}
