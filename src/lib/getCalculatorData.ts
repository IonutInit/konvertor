import { Dispatch } from "react";
import { ActionType } from "../../types";



const getCalculatorData = (
  dispatch: Dispatch<ActionType>,
  calculatorType: string
) => {
  let fromUnit1 = "";
  let fromUnit2 = "";
  // let fromUnit3 = "";
  let toUnit = "mVA";
  //"mVA" is default for those that don't need a toUnit, it isn't used in calculators

  if (calculatorType === "bmi") {
    fromUnit1 = "kg";
    fromUnit2 = "m";
  }

  if (calculatorType === "weightLoss") {
    fromUnit1 = "kg";
    fromUnit2 = "kg";
  }

  if (calculatorType === "areaCalc") {
    fromUnit1 = "m";
    fromUnit2 = "m";
    toUnit = "m2";
  }

  if (calculatorType === "speedCalc") {
    fromUnit1 = "km";
    fromUnit2 = "h";
    toUnit = "km/h";
  }

  // if (calculatorType === "volumeCalc") {
  //   fromUnit1 = "m";
  //   fromUnit2 = "m";
  //   fromUnit3 = "m";
  // }

  if (calculatorType === "densityCalc") {
    fromUnit1 = "g";
    fromUnit2 = "cm3";
    toUnit = "g/cm3"
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
