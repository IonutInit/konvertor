//@ts-nocheck

// import convert from "convert-units";
import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts"

const handleDescriptionText = (
  input: string[],
  described: boolean,
  isCapitalized: boolean
) => {
  const inputSet = new Set(input);
  const uniqueArray = [...inputSet];

  let describedArray = [];

  for (let i = 0; i < uniqueArray.length; i++) {
    describedArray.push(convert().describe(uniqueArray[i]).plural);
  }

  const workingArray = described ? describedArray : uniqueArray;

  const lastTwoElements = workingArray.slice(-2).join(" and ");
  const remainingElements = workingArray.slice(0, -2);
  const result = [...remainingElements, lastTwoElements]
    .join(", ")
    .toLowerCase();

  if (isCapitalized) {
    return result.charAt(0).toUpperCase() + result.slice(1);
  }

  return result;
};

export default handleDescriptionText;
