import { AppStateType, ActionType } from "../../types";

const reducer = (state: AppStateType, action: ActionType) => {
  switch (action.type) {
    case "toggle_konvertor":
      return { ...state, konvertor: !state.konvertor};
    case "change_measure":
      return {...state, measureType: action.payload}
    default:
      return state;
  }
};

export default reducer;
