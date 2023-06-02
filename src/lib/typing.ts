import unitCollection from "../data/unitCollection";

const typing = (input: string) => {
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
  const toIndex = purifiedArray.indexOf("to");
  const fromRaw = purifiedArray.slice(0, toIndex);
  const toRaw = purifiedArray.slice(toIndex + 1);

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

  const rawCleaned = cleanUp(fromRaw);

  // intersecting FROM with the unit collection, and eliminating all strings not pertaining to the collection
  function removeNonUnits(input, collection) {
    return input.filter((element) => {
      if (typeof element === "string") {
        return collection.includes(element);
      }
      return true;
    });
  }
  const fromIntersected = removeNonUnits(rawCleaned, unitCollection);

  //second removal in FROM of strings not preceded by a number, and numbers not having a string in front

  const fromCleaned = cleanUp(fromIntersected);

  return rawCleaned;
};

export default typing;
