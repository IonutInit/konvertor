import { Dispatch } from "react";
import { ActionType, AppStateType } from "../../types";

const handleAddToFavourites = (
  dispatch: Dispatch<ActionType>,
  state: AppStateType
) => {
  dispatch({
    type: "add_to_favourites",
    payload: {
      measureType: state.measureType,
      from: state.fromUnit,
      to: state.toUnit,
    },
  });
};

export default handleAddToFavourites;
