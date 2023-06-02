import { Dispatch } from "react";
import { ActionType } from "../../types";

const getCalculatorData = (
  dispatch: Dispatch<ActionType>,
  calculatorType: string
) => {
  let fromUnit1 = "";
  let fromUnit2 = "";
  // let fromUnit3 = "";

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
  }

  // if (calculatorType === "volumeCalc") {
  //   fromUnit1 = "m";
  //   fromUnit2 = "m";
  //   fromUnit3 = "m";
  // }

  if (calculatorType === "densityCalc") {
    fromUnit1 = "g";
    fromUnit2 = "cm3";
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
