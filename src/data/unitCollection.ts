// for use in typing feature

import description from "./unitDescription";

import { DescriptionType } from "./unitDescription";

const getCollection = (description: DescriptionType, type: string) => {
  const collection: string[] = [];
  for (const key in description) {
    const unitDescription = description[key];
    collection.push(...unitDescription[type]);
  }
  return collection;
};

// creates an array with units containing numbers, such as m2, mm3
const getDifficultUnits = (input: string[]): string[] => {
  return input.filter((str) => /\d/.test(str));
};

const editDifficultUnits = (input: string[]): string[] => {
  const result: string[] = [];

  for (const i of input) {
    let newStr = "";
    let numberStarted = false;

    for (const char of i) {
      if (/[0-9]/.test(char)) {
        numberStarted = true;

        if (char === "2") {
          newStr += "s";
        } else if (char === "3") {
          newStr += "c";
        }
      } else {
        newStr += char;
        numberStarted = false;
      }
    }

    result.push(newStr);
  }

  return result;
};

const unitCollection = getCollection(description, "short");

export const unitCollectionLong = getCollection(description, "long");

export const difficultUnits = getDifficultUnits(unitCollection);
export const difficultUnitsEdited = editDifficultUnits(difficultUnits);

export default unitCollection;
