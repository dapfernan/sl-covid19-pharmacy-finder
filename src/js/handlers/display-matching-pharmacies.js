import { render } from "lit-html";

import { searchResult } from "../templates/search-result";
import { getSearchResult } from "./get-search-result";
import { SEARCH_MESSAGES } from "../enums/search-messages";
import { searchMessage } from "../templates/search-message";

export const displayMatchingPharmacies = (userInput, searchResultContainer) => {
  render(
    searchResult(
      getSearchResult(userInput),
      searchMessage(SEARCH_MESSAGES.ON_SEARCH)
    ),
    searchResultContainer
  );
};
