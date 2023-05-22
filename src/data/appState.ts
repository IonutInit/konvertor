import { AppStateType } from "../../types";

const appState: AppStateType = {
  konvertor: "",
  measureType: "",
  addition: true,
  fromUnit: [],
  fromValue: [],
  toUnit: [],
  universalPicker: {
    type: "",
    index: -1,
  },
  settings: {
    extendedList: false,
    metric: 2,
    decimals: 2,
  },
  favourites: [],
};

export default appState;
