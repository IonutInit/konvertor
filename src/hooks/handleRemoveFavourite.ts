import { Dispatch } from "react";
import { ActionType } from "../../types";

const handleRemoveFavourite = (dispatch: Dispatch<ActionType>, i: number) => {
    dispatch({
        type: "remove_favourite",
        payload: i,
      });
}

export default handleRemoveFavourite;