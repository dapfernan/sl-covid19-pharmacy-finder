import { onPageLoad } from "./handlers/on-page-load";
import { toggleShowHideBackToTopButton } from "./handlers/toggle-show-hide-back-to-top-button";

window.addEventListener("scroll", toggleShowHideBackToTopButton);

document.addEventListener("DOMContentLoaded", onPageLoad);
