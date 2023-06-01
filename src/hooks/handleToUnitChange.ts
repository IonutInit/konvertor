import { Dispatch } from "react";
import { ActionType } from "../../types";

import { revertVerbosity } from "./handleVerbosity";

const handleToUnitChange = (
  dispatch: Dispatch<ActionType>,
  option: string,
  iterator: number,
  verbosity: boolean,
  measureType: string
) => {
  const optionForDispatch = revertVerbosity(option, verbosity, measureType);
  dispatch({
    type: "change_TO_unit",
    payload: { value: optionForDispatch, iterator },
  });
};

export default handleToUnitChange;
