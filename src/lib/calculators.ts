import getFromAddition from "./getFromAddition_temp";

export const calculateBmi = (
  value0: (string | number)[],
  unit0: string[],
  value1: (string | number)[],
  unit1: string[]
) => {
  const weigth = getFromAddition(value0, unit0, "kg");
  const height = getFromAddition(value1, unit1, "m");
  const bmi = weigth / height ** 2;
  return bmi.toFixed(1);
};
