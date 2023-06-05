import unitCollection from "../data/unitCollection";
import description from "../data/unitDescription"

import convert from "convert-units"

type DescriptionType = {
  [key: string]: {
    short: string[];
    long: string[];
  };
}

const typing = (input: string) => {
  // potential message to be displayed
  let message = ""

  // create array from the input string
  const inputArray = input.split(/\s+/).filter((str) => str.trim() !== "");

  // separate letters from numbers
  const purifiedArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    const element = inputArray[i];

    if (element.match(/[a-zA-Z]+/) && element.match(/\d+/)) {
      const letters = (element.match(/[a-zA-Z]+/) ?? [])[0] as string;
      const numbers = parseInt((element.match(/\d+/) ?? [])[0] as string);

      purifiedArray.push(numbers, letters);
    } else {
      purifiedArray.push(element);
    }
  }

  // all of the above have been returned as a string
  // now we are converting numbers into numbers

  for (let i = 0; i < purifiedArray.length; i++) {
    const element: string | number = purifiedArray[i];
    if (typeof element === "string" && !isNaN(parseInt(element))) {
      purifiedArray[i] = parseInt(element);
    }
  }

  // separating into future FROM and TO components, divided by the string "to"
  // if "to" doesn't exist, TO will be empty
  const toIndex = purifiedArray.indexOf("to");
  const fromRaw = purifiedArray.slice(0, toIndex);
  const toRaw = toIndex === -1 ? [] : purifiedArray.slice(toIndex + 1);

  // first cleanup of FROM: removal of all strings not preceded by a number, and all numbers not having a string in front

  function cleanUp(array: (number | string)[]) {
    for (let i = array.length - 1; i >= 0; i--) {
      const current = array[i];
      const prev = array[i - 1];

      if (typeof current === "string" && typeof prev !== "number") {
        array.splice(i, 1);
      } else if (typeof current === "number" && typeof array[0] !== "string") {
        array.splice(i, 1);
      }
    }
    return array;
  }

  const rawFromCleaned = cleanUp(fromRaw);

  // intersecting FROM with the unit collection, and eliminating all strings not pertaining to the collection
  function removeNonUnits(input: (string | number)[], collection: string[]) {
    return input.filter((element) => {
      if (typeof element === "string") {
        return collection.includes(element);
      }
      return true;
    });
  }
  const fromIntersected = removeNonUnits(rawFromCleaned, unitCollection);

  // separating the intersected FROM into strings and numbers

  function separateElements(input: (string | number)[]) {
    const strings = input.filter((element) => typeof element === 'string');
    const numbers = input.filter((element) => typeof element === 'number');
    return {strings, numbers}
  }

  const fromUnits = separateElements(fromIntersected).strings as string[]
  const fromValuesRaw = separateElements(fromIntersected).numbers as number[]

  // finally, only those values which have a unit are kept in the values array 
  const fromValues = fromValuesRaw.slice(0, fromUnits.length)


  //if there are no available FROM values, a notifications is returned
  if (fromValues.length === 0) {
    message = "I didn't get that. Please try again"
    return {
      message,
    }
  }

  // searching for the descriptions of FROM units
  
  function findMeasureTypes(input: string[], description: DescriptionType): string[] {
    const fromTypes: string[] = [];
  
    for (const element of input) {
      for (const key in description) {
        const shortDescription = description[key].short;
        if (shortDescription.includes(element)) {
          fromTypes.push(key);
          break; // Stop searching in other keys once a match is found
        }
      }
    }  
    return fromTypes;
  }

const fromTypes = findMeasureTypes(fromUnits, description)


// if there is more than one type, looking for the most frequent FROM types

function findMostFrequentType(input: string[]): string | null {
  const frequencies: Record<string, number> = {};

  for (const i of input) {
    frequencies[i] = (frequencies[i] || 0) + 1;
  }

  let mostFrequentString: string | null = null;
  let highestFrequency = 0;

  for (const i in frequencies) {
    if (frequencies[i] > highestFrequency) {
      highestFrequency = frequencies[i];
      mostFrequentString = i;
    }
  }

  return mostFrequentString;
}

const getMeasureType = (input: string[]) => {
  let result: (string | null) = ""
  if(input.length > 1) {
    result = findMostFrequentType(input)
    message = `I found a few measurement types in your query. I went for ${result}`
  }
  return findMostFrequentType(input)
}

const measureType = getMeasureType(fromTypes)


// checking if TO is empty or not
// if empty, it will be assigned a toBest() value for the largest FROM
const largestFrom = (fromUnits[0]) //temporary

// if not empty...

const handleTo = (input: (string | number)[]) => {
  if(input.length === 0) {
     const best = convert(1).from(largestFrom).toBest()
     return separateElements(best).strings[0]
  }
  // removing numbers from TO... 
  const toRawStrings = separateElements(input).strings as string[]

  // // ...then intersecting TO with the unit collection, and eliminating all strings not pertaining to the collection
  // const toIntersectedOnce = removeNonUnits(toRawStrings, unitCollection); 

  // ...then intersecting the results with onlt the possible options of the already established measureType
  const toIntersected = removeNonUnits(toRawStrings, description[measureType!].short)

  return toIntersected
}

const toUnits = handleTo(toRaw)

  return {
    message,
    fromUnits,
    fromValues,
    measureType,
    toUnits
  }
};

export default typing;