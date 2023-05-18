import { Dispatch } from "react";
import { ActionType } from "../../types";

const handleToUnitChange = (
  dispatch: Dispatch<ActionType>,
  option: string,
  iterator: number
) => {
  dispatch({
    type: "change_TO_unit",
    payload: { value: option, iterator },
  });
};

export default handleToUnitChange;