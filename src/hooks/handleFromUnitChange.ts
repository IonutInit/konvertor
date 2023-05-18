import { Dispatch } from "react";
import { ActionType } from "../../types";

const handleFromUnitChange = (
  dispatch: Dispatch<ActionType>,
  option: string,
  iterator: number
) => {
  dispatch({
    type: "change_FROM_unit",
    payload: { value: option, iterator },
  });
};

export default handleFromUnitChange;
