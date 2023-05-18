import { Dispatch } from "react";

import { ActionType, OptionsStateType } from "../../types";

const handleOptionsList = (
  dispatch: Dispatch<ActionType>,
  optionType: OptionsStateType
) => {
  dispatch({
    type: "change_options_state",
    payload: optionType,
  });
};

export default handleOptionsList;
