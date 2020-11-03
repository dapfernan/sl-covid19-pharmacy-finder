import { pharmacyCard } from "../templates/pharmacy-card";

export const getPharmacyCards = (matchingPharmacies, userInput) =>
  matchingPharmacies.map((matchingPharmacy) =>
    pharmacyCard(matchingPharmacy, userInput)
  );
