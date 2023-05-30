import { ImageSourcePropType } from "react-native";

export type IconMapType = {
  [key: string]: ImageSourcePropType;
};

export type UniversalPickerOptions = "to" | "from" | "";

export type FavouriteType = {
  measureType: string;
  from: string[];
  to: string[];
};

export type SettingsType = {
  [key: string]: boolean | number;
  extendedList: boolean;
  metric: boolean;
  decimals: number;
  verbose: boolean;
  theme: number;
};

export type AppStateType = {
  konvertor: string;
  measureName: string;
  measureType: string;
  addition: boolean;
  fromUnit: string[];
  fromValue: (number | string)[];
  toUnit: string[];
  universalPicker: {
    type: UniversalPickerOptions;
    index: number;
    position: [number, number][];
  };
  settings: SettingsType;
  favourites: FavouriteType[];
  init: 0 | 1; //used to switch between useEffect and state when handling favourites; could find no other way to subscribe to changes
  activeTab: "Home" | "Favourites" | "Settings"
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
  // | { type: "add_FROM_unit"; payload: string }
  // | { type: "add_TO_unit"; payload: string }
  | { type: `add_${string}_unit`; payload: string }
  | {
      type: `change_${string}_unit`;
      payload: {
        value: string;
        iterator: number;
      };
    }
  | { type: "change_options_state"; payload: UniversalPickerOptions }
  | {
      type: "change_FROM_value";
      payload: {
        value: string;
        iterator: number;
      };
    }
  | {
      type: "change_FROM_unit";
      payload: {
        value: string;
        iterator: number;
      };
    }
  | { type: `remove_${string}_value`; payload: number }
  | {
      type: "change_TO_unit";
      payload: {
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
      type: "add_to_favourites";
      payload: FavouriteType;
    }
  | {
      type: "launch_favourite";
      payload: {
        measureType: string;
        fromUnit: string[];
        toUnit: string[];
      };
    }
  //------------
  | {
      type: "work_universal_picker";
      payload: {
        type: UniversalPickerOptions;
        index: number;
        position?: number[];
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
  |{ 
    type: "change_tab";
    payload: "Home" | "Favourites" | "Settings";
  }

export type ThemeType = {
  mainColour: string;
  gray1: string;
  gray1Darker: string;
  gray2: string;
  gray3: string;
  secondaryColour: string;
};
