import { AppStateType, ActionType } from "../../types";

const reducer = (state: AppStateType, action: ActionType) => {
  switch (action.type) {
    case "toggle_konvertor":
      return { ...state, konvertor: !state.konvertor };
    case "change_measure":
      return { ...state, measureType: action.payload, fromUnit: [] };
    case "add_FROM_unit":
      return { ...state, fromUnit: [...state.fromUnit, action.payload], fromValue: [...state.fromValue, 0] }
    case "change_TO_unit":
      return { ...state, toUnit: action.payload };
    case "change_FROM_value":
      const newValue = action.payload.value;
      const updatedFromValue = state.fromValue.map((value, index) => (index === action.payload.iterator ? newValue : value));
      return { ...state, fromValue: updatedFromValue };
    case "change_options_state":
      return { ...state, optionsState: action.payload };
    default:
      return state;
  }
};

export default reducer;
