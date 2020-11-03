import { render } from "lit-html";

import { onUserSearch } from "./on-user-search";
import { scrollToTop } from "./scroll-to-top";
import { SEARCH_MESSAGES } from "../enums/search-messages";
import { searchMessage } from "../templates/search-message";

export function onPageLoad() {
  const userInputElement = document.getElementById("user-input");
  const searchResultContainer = document.getElementById(
    "search-result-container"
  );
  const backToTopButton = document.getElementById("scroll-to-top-button");

  userInputElement.addEventListener("input", onUserSearch);
  backToTopButton.addEventListener("click", scrollToTop);

  render(searchMessage(SEARCH_MESSAGES.BEFORE_SEARCH), searchResultContainer);
}
