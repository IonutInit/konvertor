//@ts-nocheck

import unitCollection from "../data/unitCollection";
import description from "../data/unitDescription";

import { difficultUnits, difficultUnitsEdited } from "../data/unitCollection";

// import convert from "convert-units";
import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts"

type DescriptionType = {
  [key: string]: {
    short: string[];
    long: string[];
  };
};

const typing = (input: string) => {
  let success = true;

  // potential message to be displayed
  let message = "";

  // create array from the input string
  const inputArray = input.split(/\s+/).filter((str) => str.trim() !== "");

  // difficult units names, such as m2 or cm3 are edited

  function replaceDifficultUnits(
    input: string[],
    difficultCollection: string[],
    editedDifficultCollection: string[]
  ): string[] {
    const result: string[] = [];

    for (const str of input) {
      const words = str.split(" ");

      const replacedWords = words.map((word) => {
        const index = difficultCollection.indexOf(word);
        if (index !== -1) {
          return editedDifficultCollection[index];
        } else {
          return word;
        }
      });

      result.push(replacedWords.join(" "));
    }

    return result;
  }

  const madeLessDifficult = replaceDifficultUnits(
    inputArray,
    difficultUnits,
    difficultUnitsEdited
  );

  // separate letters from numbers
  function separateLettersFromNumber(input: string[]) {
    const purifiedArray = [];

    for (let i = 0; i < input.length; i++) {
      const element = input[i];

      if (element.match(/[a-zA-Z]+/) && element.match(/\d+/)) {
        const letters = (element.match(/[a-zA-Z]+/) ?? [])[0] as string;
        const numbers = parseInt((element.match(/\d+/) ?? [])[0] as string);

        purifiedArray.push(numbers, letters);
      } else {
        purifiedArray.push(element);
      }
    }
    return purifiedArray;
  }

  const purifiedArray = separateLettersFromNumber(madeLessDifficult);

  // returning difficult unit names to their original value
  function restoreDifficultUnits(
    input: (string | number)[],
    difficultCollection: string[],
    editedDifficultCollection: string[]
  ): (string | number)[] {
    const result: (string | number)[] = [];

    for (const element of input) {
      if (typeof element === "string") {
        const index = editedDifficultCollection.indexOf(element);
        if (index !== -1) {
          result.push(difficultCollection[index]);
          continue;
        }
      }
      result.push(element);
    }

    return result;
  }

  const restored = restoreDifficultUnits(
    purifiedArray,
    difficultUnits,
    difficultUnitsEdited
  );

  // all of the above have been returned as a string
  // now we are converting numbers into numbers
  for (let i = 0; i < restored.length; i++) {
    const element: string | number = purifiedArray[i];
    if (typeof element === "string" && !isNaN(parseInt(element))) {
      restored[i] = parseInt(element);
    }
  }

  // separating into future FROM and TO components, divided by the string "to"
  // if "to" doesn't exist, TO will be empty
  const toIndex = restored.indexOf("to");
  const fromRaw = restored.slice(0, toIndex);
  const toRaw = toIndex === -1 ? [] : restored.slice(toIndex + 1);

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
    const strings = input.filter((element) => typeof element === "string");
    const numbers = input.filter((element) => typeof element === "number");
    return { strings, numbers };
  }

  const fromUnits_All = separateElements(fromIntersected).strings as string[];
  const fromValuesRaw = separateElements(fromIntersected).numbers as number[];

  // finally, only those values which have a unit are kept in the values array
  const fromValues_All = fromValuesRaw.slice(0, fromUnits_All.length);

  //if there are no available FROM values, a notifications is returned
  if (fromValues_All.length === 0) {
    message = "I didn't get that. Please try again";
    return {
      success: false,
      message,
    };
  }

  // searching for the descriptions of FROM units

  function findMeasureTypes(
    input: string[],
    description: DescriptionType
  ): string[] {
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

  const fromTypes = findMeasureTypes(fromUnits_All, description);

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
    let result: string | null = "";
    if (input.length > 1) {
      result = findMostFrequentType(input);
      message = `There's more than one measurement type in your query. I went for ${result}.`;
    }
    return findMostFrequentType(input);
  };

  const measureType = getMeasureType(fromTypes);

  //now, the units and values in FROM are filtered according to the winning measure type
  function filterByMeasure(
    input: (string | number)[],
    measureArray: string[],
    measure: string
  ): string[] {
    const filtered: string[] = [];

    for (let i = 0; i < input.length; i++) {
      if (measureArray[i] === measure && input[i] !== undefined) {
        filtered.push(input[i] as string);
      }
    }
    return filtered;
  }

  const fromUnits = filterByMeasure(fromUnits_All, fromTypes, measureType!);
  const fromValues = filterByMeasure(fromValues_All, fromTypes, measureType!);

  //
  // if empty, it will be assigned a toBest() value for the largest FROM
  const largestFrom = fromUnits_All[0]; //temporary

  function findLargestFrom(input: string[], lookUp: string[]): string | null {
    let highestIndex = -1;
    let result: string | null = null;

    for (const i of input) {
      const index = lookUp.indexOf(i);
      if (index > highestIndex) {
        highestIndex = index;
        result = i;
      }
    }
    return result;
  }

  // if not empty...

  const handleTo = (input: (string | number)[]) => {
    // let bestOption: string

    // removing numbers from TO...
    const toRawStrings = separateElements(input).strings as string[];

    // // ...then intersecting TO with the unit collection, and eliminating all strings not pertaining to the collection
    const toIntersectedOnce = removeNonUnits(toRawStrings, unitCollection);

    // ...then intersecting the results with onlt the possible options of the already established measureType
    const toIntersected = removeNonUnits(
      toRawStrings,
      description[measureType!].short
    );

    if (toIntersected.length === 0) {
      const largestFrom = findLargestFrom(
        fromUnits,
        description[measureType!].short
      );
      return convert(1).from(largestFrom).toBest().unit;
    }
    return toIntersected;
  };

  const toUnits = handleTo(toRaw);

  const measureName = measureType!.replace(/^\w/, (c) => c.toUpperCase());

  return {
    success,
    message,
    fromUnits,
    fromValues,
    measureType,
    measureName,
    toUnits,
  };
};

export default typing;
