import { Dispatch } from "react";
import { ActionType } from "../../types";

const handleInputChange = (
  componentKey: number,
  dispatch: Dispatch<ActionType>,
  input: string,
  i: number
) => {
  const cleanedText = input.replace(/^0+/, "");
  dispatch({
    type: "change_FROM_value",
    payload: {
      componentKey,
      value: cleanedText,
      iterator: i,
    },
  });
};

export default handleInputChange;
