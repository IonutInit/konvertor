import { AppStateType } from "../../types";

const appState: AppStateType = {
  konvertor: "",
  measureType: [],
  measureName: [],
  addition: true,
  fromUnit: [],
  fromValue: [],
  toUnit: [],
  universalPicker: {
    type: "",
    index: -1,
    position: [],
    activeFromComponent: 0,
    calculatorTo: false,
  },
  settings: {
    extendedList: false,
    metric: true,
    decimals: 2,
    verbose: false,
    theme: 4,
    favouritesOnHome: false,
  },
  favourites: [],
  init: 0,
  activeTab: "Home",
};

export default appState;
