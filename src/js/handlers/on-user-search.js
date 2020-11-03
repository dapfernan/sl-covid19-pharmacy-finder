import { displayMatchingPharmacies } from "./display-matching-pharmacies";

export function onUserSearch(event) {
  const userInput = event.target.value;
  const searchResultContainer = document.getElementById(
    "search-result-container"
  );

  displayMatchingPharmacies(userInput, searchResultContainer);
}
