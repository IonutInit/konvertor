import { Dispatch } from "react";
import { ActionType } from "../../types";

import { revertVerbosity } from "./handleVerbosity";

const handleFromUnitChange = (
  componentKey: number,
  dispatch: Dispatch<ActionType>,
  option: string,
  iterator: number,
  measureType: string,
  verbosity: boolean
) => {
  const optionForDispatch = revertVerbosity(option, verbosity, measureType);

  dispatch({
    type: "change_FROM_unit",
    payload: {
      componentKey,
      value: optionForDispatch,
      iterator,
    },
  });
};

export default handleFromUnitChange;
