import { removeWhiteSpaces } from "../utils/remove-white-spaces";

const pharmacies = require("../../data/pharmacies.json");

export const getMatchingPharmacies = (userInput) => {
  userInput = removeWhiteSpaces(userInput.toLowerCase());

  const matchingPharmacies = pharmacies.filter((pharmacy) => {
    const district = removeWhiteSpaces(pharmacy["District"].toLowerCase());
    const mohArea = removeWhiteSpaces(pharmacy["MOH Area"].toLowerCase());
    const address = removeWhiteSpaces(pharmacy["Address"].toLowerCase());
    const name = removeWhiteSpaces(
      pharmacy["Name of the Pharmacy"].toLowerCase()
    );

    return (
      district.indexOf(userInput) !== -1 ||
      mohArea.indexOf(userInput) !== -1 ||
      address.indexOf(userInput) !== -1 ||
      name.indexOf(userInput) !== -1
    );
  });

  return matchingPharmacies;
};
