import { Dispatch } from "react";

import { ActionType, UniversalPickerOptions } from "../../types";

const handleOptionsList = (
  dispatch: Dispatch<ActionType>,
  optionType: UniversalPickerOptions
) => {
  dispatch({
    type: "change_options_state",
    payload: optionType,
  });
};

export default handleOptionsList;
