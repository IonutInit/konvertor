import convert from "convert-units";
import description from "../data/unitDescription";


export const handleVerbosity = (input: string[], verbose: boolean) => {
  let verboseResult = [];
  const measureType = convert().describe(input[0]).measure
  if (verbose) {
    for (let i = 0; i < input.length; i++) {
      // verboseResult.push(convert().describe(input[i]).plural.toLowerCase());
      //switched to local description
      verboseResult.push(description[measureType].long[i])
    }
    return verboseResult;
  }
  return input;
};

export const revertVerbosity = (
  input: string,
  verbose: boolean,
  measureType: string
) => {
  if (verbose) {
    const index = description[measureType].long.indexOf(input as string);
    return description[measureType].short[index];
  }
  return input;
};
