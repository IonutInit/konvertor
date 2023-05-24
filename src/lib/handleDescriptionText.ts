import convert from "convert-units";

const handleDescriptionText = (input: string[], isCapitalized: boolean) => {
  const inputSet = new Set(input);
  const uniqueArray = [...inputSet];

  let convertedArray = [];

  for (let i = 0; i < uniqueArray.length; i++) {
    convertedArray.push(convert().describe(uniqueArray[i]).plural);
  }

  const lastTwoElements = convertedArray.slice(-2).join(" and ");
  const remainingElements = convertedArray.slice(0, -2);
  const result = [...remainingElements, lastTwoElements]
    .join(", ")
    .toLowerCase();

  if (isCapitalized) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
};

export default handleDescriptionText;
