import { Dispatch } from "react";

import { ActionType, AppStateType } from "../../types";

const addUnit = (
  dispatch: Dispatch<ActionType>,
  state: AppStateType,
  type: "to" | "from"
) => {
  const payload =
    type === "from"
      ? state.fromUnit[0][state.fromUnit[0].length - 1]
      : state.toUnit[state.toUnit.length - 1];
  dispatch({
    type: `add_${type.toUpperCase()}_unit` as const,
    payload,
  });
};

export default addUnit;
