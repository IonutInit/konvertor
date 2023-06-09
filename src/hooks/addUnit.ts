import { Dispatch } from "react";

import { ActionType, AppStateType } from "../../types";

const addUnit = (
  dispatch: Dispatch<ActionType>,
  state: AppStateType,
  type: "to" | "from",
  componentKey?: number
) => {
  const unit =
    type === "from"
      ? state.fromUnit[componentKey!][state.fromUnit[0].length - 1]
      : state.toUnit[state.toUnit.length - 1];
  if (type === "from") {
    dispatch({
      type: "add_FROM_unit",
      payload: {
        unit,
        componentKey,
      },
    });
  }

  if (type === "to") {
    dispatch({
      type: "add_TO_unit",
      payload: unit,
    });
  }
};

export default addUnit;
