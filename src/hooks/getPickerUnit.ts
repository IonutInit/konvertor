import description from "../data/unitDescription";

const getPickerUnit = (unit: string, measureType: string) => {
  const targetArray = description[measureType].short;
  const index = targetArray.indexOf(unit[0]);
  return targetArray[index];
};

export default getPickerUnit;
