import { Dispatch } from "react";
import { ActionType } from "../../types";

const getCalculatorData = (
  dispatch: Dispatch<ActionType>,
  calculatorType: string
) => {
  let fromUnit1 = "";
  let fromUnit2 = "";

  if (calculatorType === "bmi") {
    fromUnit1 = "kg";
    fromUnit2 = "m";
  }

  if (calculatorType === "weightLoss") {
    fromUnit1 = "kg";
    fromUnit2 = "kg";
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
};

export default getCalculatorData;
