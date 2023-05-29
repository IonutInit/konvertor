import { AppStateType } from "../../types";

const appState: AppStateType = {
  konvertor: "konvertor",
  measureType: "length",
  measureName: "Length",
  addition: true,
  fromUnit: ["m", "km"],
  fromValue: [2, 3],
  toUnit: ["mi", "ft"],
  universalPicker: {
    type: "",
    index: -1,
    position: [],
  },
  settings: {
    extendedList: false,
    metric: 2,
    decimals: 2,
    verbose: false,
    theme: 1,
  },
  favourites: [],
  init: 0,
};

export default appState;
