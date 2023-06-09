//@ts-nocheck

import getFromAddition from "./getFromAddition_temp";
import convert from "./converter-library/lib";

// const calculatorWork = (input, calcType) => {
//   let anchor1 = "";
//   let anchor2 = "";

//   if (calcType === "bmi") {
//     anchor1 = "kg";
//     anchor2 = "m";
//   } else if (calcType === "areaCalc") {
//     anchor1 = "m";
//     anchor2 = "m";
//   } else if (calcType === "speedCalc") {
//     anchor1 = "km";
//     anchor2 = "h";
//   } else if (calcType === "weightLoss") {
//     anchor1 = "g";
//     anchor2 = "g";
//   }

//   const input0 = getFromAddition(input.from0, input.unit0, anchor1);
//   const input1 = getFromAddition(input.from1, input.unit1, anchor2);

//   if (calcType === "bmi") {
//     return (input0 / input1 ** 2).toFixed(1);
//   }

//   if (calcType === "areaCalc") {
//     const aggregate = input0 * input1;
//     return convert(aggregate).from("m2").to(input.to);
//   }

//   if (calcType === "speedCalc") {
//     const aggregate = input0 / input1;
//     return convert(aggregate).from("km/h").to(input.to);
//   }

//   if (calcType === "weightLoss") {
//     const input0 = getFromAddition(value0, unit0, "g");
//     const input1 = getFromAddition(value1, unit1, "g");
//     return ((input0 - input1) / input0) * 100;
//   }
// };

// export default calculatorWork;


export const calculateBmi = (
  value0: (string | number)[],
  unit0: string[],
  value1: (string | number)[],
  unit1: string[]
) => {
  const input0 = getFromAddition(value0, unit0, "kg");
  const input1 = getFromAddition(value1, unit1, "m");
  const bmi = input0 / input1 ** 2;
  return bmi.toFixed(1);
};

export const calculateArea = (
  value0: (string | number)[],
  unit0: string[],
  value1: (string | number)[],
  unit1: string[],
  to: string
) => {
  const input0 = getFromAddition(value0, unit0, "m");
  const input1 = getFromAddition(value1, unit1, "m");
  const aggregate = input0 * input1;
  return convert(aggregate).from("m2").to(to);
};

export const calculateSpeed = (
  value0: (string | number)[],
  unit0: string[],
  value1: (string | number)[],
  unit1: string[],
  to: string
) => {
  const input0 = getFromAddition(value0, unit0, "km");
  const input1 = getFromAddition(value1, unit1, "h");
  const aggregate = input0 / input1;
  return convert(aggregate).from("km/h").to(to);
};

export const calculateDensity = (
  value0: (string | number)[],
  unit0: string[],
  value1: (string | number)[],
  unit1: string[],
  to: string
) => {
  const toSeparatorIndex = to.indexOf("/");
  const to1 = to.substring(0, toSeparatorIndex);
  const to2 = to.substring(toSeparatorIndex + 1);

  const input0 = getFromAddition(value0, unit0, to1);
  const input1 = getFromAddition(value1, unit1, to2);

  return input0 / input1;
};

export const calculateWeightLoss = (
  value0: (string | number)[],
  unit0: string[],
  value1: (string | number)[],
  unit1: string[]
) => {
  const input0 = getFromAddition(value0, unit0, "g");
  const input1 = getFromAddition(value1, unit1, "g");
  return ((input0 - input1) / input0) * 100;
};
