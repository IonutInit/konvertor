import { AppStateType, ActionType } from "../../types";

const reducer = (state: AppStateType, action: ActionType): AppStateType => {
  switch (action.type) {
    case "toggle_konvertor":
      return { ...state, konvertor: !state.konvertor };

    case "toggle_extendedList":
      return {
        ...state,
        settings: {
          ...state.settings,
          extendedList: !state.settings.extendedList,
        },
      };

    case "toggle_addition":
      return { ...state, addition: !state.addition };

    case "change_measure":
      return {
        ...state,
        measureType: action.payload,
        fromUnit: [],
        toUnit: [],
      };

    //-------------------------------
    //-------------------------------
    //-------------------------------

    case "work_universal_picker":
      return {
        ...state,
        universalPicker: action.payload,
      };

    //-------------------------------
    //-------------------------------
    //-------------------------------

    case "add_FROM_unit":
      let value = !state.fromValue.length ? 1 : 0;
      return {
        ...state,
        fromUnit: [...state.fromUnit, action.payload],
        fromValue: [...state.fromValue, value],
      };

    case "add_TO_unit":
      return { ...state, toUnit: [...state.toUnit, action.payload] };

    case "change_TO_unit":
      const updatedFromUnit2 = state.toUnit.map((unit, index) =>
        index === action.payload.iterator ? action.payload.value : unit
      );
      return { ...state, toUnit: updatedFromUnit2 };

    case "change_FROM_unit":
      const updatedFromUnit = state.fromUnit.map((unit, index) =>
        index === action.payload.iterator ? action.payload.value : unit
      );
      return { ...state, fromUnit: updatedFromUnit };

    case "change_FROM_value":
      const newValue = action.payload.value;
      const updatedFromValue = state.fromValue.map((value, index) =>
        index === action.payload.iterator ? newValue : value
      );
      return { ...state, fromValue: updatedFromValue };

    case "remove_FROM_value":
      const updatedFromUnit3 = state.fromUnit.filter(
        (unit, index) => index !== action.payload
      );
      const updatedFromValue3 = state.fromValue.filter(
        (value, index) => index !== action.payload
      );
      return {
        ...state,
        fromUnit: updatedFromUnit3,
        fromValue: updatedFromValue3,
      };

    case "remove_TO_value":
      const updatedFromUnit4 = state.toUnit.filter(
        (unit, index) => index !== action.payload
      );
      // const updatedFromValue4 = state.toValue.filter((value, index) =>
      //   index !== action.payload
      // );
      return {
        ...state,
        toUnit: updatedFromUnit4,
        // fromValue: updatedFromValue4
      };

    case "change_settings":
      const { settingType, settingValue } = action.payload;
      return {
        ...state,
        settings: {
          ...state.settings,
          [settingType]: settingValue,
        },
      };

    case "add_to_favourites":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };

    case "launch_favourite":
      return {
        ...state,
        fromUnit: action.payload.fromUnit,
        toUnit: action.payload.toUnit,
      };

    default:
      return state;
  }
};

export default reducer;
