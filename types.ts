export type UniversalPickerOptions = "to" | "from" | "";

export type FavouriteType = {
  from: string[];
  to: string[];
};

export type AppStateType = {
  konvertor: string;
  measureType: string;
  addition: boolean;
  fromUnit: string[];
  fromValue: (number | string)[];
  toUnit: string[];
  universalPicker: {
    type: UniversalPickerOptions;
    index?: number;
  };
  settings: {
    extendedList: boolean;
    metric: number;
    decimals: number;
  };
  favourites: FavouriteType[];
};

export type ActionType =
  | { type: "change_konvertor"; payload: string }
  | { type: "toggle_extendedList" }
  | { type: "toggle_addition" }
  | { type: "change_measure"; payload: string }
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
        fromUnit: string[];
        toUnit: string[];
      };
    }
  //------------
  | {
      type: "work_universal_picker";
      payload: {
        type: UniversalPickerOptions;
        index?: number;
      };
    };
