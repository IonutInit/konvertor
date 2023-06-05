import { Dispatch } from "react";
import { ActionType } from "../../types";

const getCalculatorData = (
  dispatch: Dispatch<ActionType>,
  calculatorType: string,
  metric: boolean,
) => {
 
  let fromUnit1 = "";
  let fromUnit2 = "";
  // let fromUnit3 = "";
  let toUnit = "mVA";
  //"mVA" is default for those that don't need a toUnit, it isn't used in calculators

  if (calculatorType === "bmi") {
    fromUnit1 = metric ? "kg" : "lb";
    fromUnit2 = metric ? "m" : "ft";
  }

  if (calculatorType === "weightLoss") {
    fromUnit1 = metric ? "kg" : "lb";
    fromUnit2 = metric ? "kg" : "lb";
  }

  if (calculatorType === "areaCalc") {
    fromUnit1 = metric ? "m" : "ft";
    fromUnit2 = metric ? "m" : "ft";
    toUnit = metric ? "m2" : "ft2";
  }

  if (calculatorType === "speedCalc") {
    fromUnit1 = metric ? "km" : "mi";
    fromUnit2 = "h";
    toUnit = metric ? "km/h" : "mi/h";
  }

  // if (calculatorType === "volumeCalc") {
  //   fromUnit1 = "m";
  //   fromUnit2 = "m";
  //   fromUnit3 = "m";
  // }

  if (calculatorType === "densityCalc") {
    fromUnit1 = metric ? "g" : "lb";
    fromUnit2 = metric ? "cm3" : "in3";
    toUnit = metric ? "g/cm3" : "lb/in3";
  }

  dispatch({
    type: "add_FROM_unit",
    payload: {
      unit: fromUnit1,
      componentKey: 0,
    },
  });
  dispatch({
    type: "add_FROM_unit",
    payload: {
      unit: fromUnit2,
      componentKey: 1,
    },
  });
  dispatch({
    type: "add_TO_unit",
    payload: toUnit,
  });

  // if(fromUnit3 !== "") {
  //   dispatch({
  //     type: "add_FROM_unit",
  //     payload: {
  //       unit: fromUnit3,
  //       componentKey: 2,
  //     },
  //   });
  // }
};

export default getCalculatorData;
