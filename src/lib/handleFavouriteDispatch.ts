import { Dispatch } from "react";

import { ActionType } from "../../types";

const handleFavouriteDispatch = (
  dispatch: Dispatch<ActionType>,
  measureType: string[],
  measureName: string[],
  fromUnit: string[][],
  toUnit: string
) => {
  dispatch({
    type: "change_konvertor",
    payload: "konvertor",
  });
  dispatch({
    type: "launch_favourite",
    payload: {
      measureType,
      measureName,
      fromUnit,
      toUnit,
    },
  });
};

export default handleFavouriteDispatch;
