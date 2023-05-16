import { AppStateType, ActionType } from "../../types";

const reducer = (state: AppStateType, action: ActionType) => {
  switch (action.type) {
    case "one":
      return { ...state, screen: 1 };
    default:
      return state;
  }
};

export default reducer;
