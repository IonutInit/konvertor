import { OptionsStateType } from "../../types";

const appState = {
  konvertor: false,
  measureType: "",
  addition: true,
  fromUnit: [],
  fromValue: [],
  toUnit: [],
  decimals: 2,
  optionsState: "" as OptionsStateType,
  settings: {
    extendedList: false,
    metric: true,
    decimals: 2,
  },
  favourites: []
};

export default appState;
