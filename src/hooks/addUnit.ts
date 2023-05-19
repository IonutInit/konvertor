import { Dispatch } from "react";

import { ActionType, AppStateType } from "../../types";

const addUnit = (
  dispatch: Dispatch<ActionType>,
  state: AppStateType,
  type: "to" | "from"
) => {
  dispatch({
    type: `add_${type.toUpperCase()}_unit` as const,
    payload: state.toUnit[0],
  });
};

export default addUnit;
