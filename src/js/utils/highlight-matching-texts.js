import { highlightedText } from "../templates/highlighted-text";

export const highlightMatchingTexts = (string, userInput) => {
  const stringSearchRegex = new RegExp(userInput, "gi");
  const matchingSubStrings = string.match(stringSearchRegex);
  let modifiedString = modifiedString || string;

  if (matchingSubStrings !== null) {
    matchingSubStrings.forEach((subString) => {
      const stringReplaceRegex = new RegExp(subString, "g");

      modifiedString = string.replace(
        stringReplaceRegex,
        highlightedText(subString)
      );
    });
  }

  return modifiedString;
};
