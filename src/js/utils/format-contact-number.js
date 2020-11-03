export const formatContactNumber = (number) => {
  if (number !== "N/A" && number.length === 9) {
    number = `94${number}`;
  }

  return number;
};
