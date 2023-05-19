import { UniversalPickerOptions } from "../../types";

const appState = {
  konvertor: true,
  measureType: "",
  addition: true,
  fromUnit: ["m", "cm"],
  fromValue: [],
  toUnit: ["cm"],
  decimals: 2,
  universalPicker: "" as UniversalPickerOptions,
  settings: {
    extendedList: false,
    metric: true,
    decimals: 2,
  },
  favourites: []
};

export default appState;
