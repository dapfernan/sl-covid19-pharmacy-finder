import { getMatchingPharmacies } from "./get-matching-pharmacies";
import { SEARCH_MESSAGES } from "../enums/search-messages";
import { searchMessage } from "../templates/search-message";
import { getPharmacyCards } from "./get-pharmacy-cards";

let timeOut = null;

export const getSearchResult = (userInput) => {
  clearTimeout(timeOut);

  return new Promise((resolve, reject) => {
    let searchResult = "";
    const matchingPharmacies = getMatchingPharmacies(userInput);

    if (userInput === "") {
      searchResult = searchMessage(SEARCH_MESSAGES.BEFORE_SEARCH);
    } else if (matchingPharmacies.length === 0) {
      searchResult = searchMessage(SEARCH_MESSAGES.NO_RESULTS);
    } else {
      searchResult = getPharmacyCards(matchingPharmacies, userInput);
    }

    timeOut = setTimeout(() => resolve(searchResult), 1000);
  }).then((searchResult) => searchResult);
};
