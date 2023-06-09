export type UniversalPickerOptions = "to" | "from" | "";

export type FavouriteType = {
  measureType: string[][];
  from: string[][];
  to: string[];
};

export type SettingsType = {
  [key: string]: boolean | number;
  extendedList: boolean;
  metric: boolean;
  decimals: number;
  verbose: boolean;
  theme: number;
  favouritesOnHome: boolean;
  typingInputMessages: boolean;
};

export type AppStateType = {
  konvertor: string;
  measureName: string[][];
  measureType: string[][];
  addition: boolean;
  fromUnit: string[][];
  fromValue: (number | string)[][];
  toUnit: string[];
  universalPicker: {
    type: UniversalPickerOptions;
    index: number;
    position: [number, number][];
    activeFromComponent: number;
    calculatorTo: boolean;
  };
  settings: SettingsType;
  favourites: FavouriteType[];
  init: 0 | 1; //used to switch between useEffect and state when handling favourites; could find no other way to subscribe to changes
  activeTab: "Home" | "Favourites" | "Settings";
};

export type ActionType =
  | { type: "change_konvertor"; payload: string }
  | { type: "toggle_extendedList" }
  | { type: "toggle_addition" }
  | {
      type: "change_measure";
      payload: {
        measure: string;
        name: string;
      };
    }
  | {
      type: "add_FROM_unit";
      payload: {
        unit: string;
        componentKey?: number;
      };
    }
  | { type: "add_TO_unit"; payload: string }
  | {
      type: `change_${string}_unit`;
      payload: {
        componentKey?: number;
        value: string;
        iterator: number;
      };
    }
  | {
      type: "change_FROM_value";
      payload: {
        componentKey?: number;
        value: string;
        iterator: number;
      };
    }
  | {
      type: "change_FROM_unit";
      payload: {
        componentKey?: number;
        value: string;
        iterator: number;
      };
    }
  | {
      type: `remove_${string}_value`;
      payload: number[];
    }
  | {
      type: "change_TO_unit";
      payload: {
        componentKey?: number;
        value: string;
        iterator: number;
      };
    }
  | {
      type: "change_settings";
      payload: {
        settingType: string;
        settingValue: boolean | number;
      };
    }
  | {
      type: "change_decimals";
      payload: "plus" | "minus";
    }
  | {
      type: "change_theme";
      payload: string;
    }
  | {
      type: "add_to_favourites";
      payload: FavouriteType;
    }
  | {
      type: "launch_favourite";
      payload: {
        measureType: string[];
        measureName: string[];
        fromUnit: string[][];
        toUnit: string;
      };
    }
  //------------
  | {
      type: "work_universal_picker";
      payload: {
        type: UniversalPickerOptions;
        index: number;
        activeFromComponent: number;
        calculatorTo: boolean;
      };
    }
  | {
      type: "remove_favourite";
      payload: number;
    }
  | {
      type: "initialise_favourites";
      payload: FavouriteType[];
    }
  | {
      type: "initialise_settings";
      payload: SettingsType;
    }
  | {
      type: "switch";
      payload: {
        sourceFromUnit: string[];
        sourceToUnit: string[];
      };
    }
  | {
      type: "change_tab";
      payload: "Home" | "Favourites" | "Settings";
    }
  | {
      type: "toggle_favourites_on_home";
    }
  | {
      type: "dispatch_typing";
      payload: {
        konvertor: string;
        fromUnit: string[][];
        fromValue: (number | string)[][];
        measureType: string[][];
        measureName: string[];
        toUnit: string[];
        message?: string;
      };
    }
  | {
      type: "toggle_universal_picker_TO";
      payload: boolean;
    }
  | { type: "toggle_typing_input_messages" };

export type ThemeType = {
  mainColour: string;
  gray1: string;
  gray1Darker: string;
  gray2: string;
  gray3: string;
  secondaryColour: string;
};
