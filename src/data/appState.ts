import { AppStateType } from "../../types";

const appState: AppStateType = {
  konvertor: "",
  measureType: "",
  measureName: "",
  addition: true,
  fromUnit: [],
  fromValue: [],
  toUnit: [],
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
