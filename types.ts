export type OptionsStateType = "to" | "from" | "";

export type Favourite = {
  from: string[];
  to: string[];
}

export type AppStateType = {
  konvertor: boolean;
  measureType: string;
  addition: boolean;
  fromUnit: string[];
  fromValue: (number | string)[];
  toUnit: string[];
  decimals: number;
  optionsState: OptionsStateType;
  settings: {
    extendedList: boolean;
    metric: number;
    decimals: number;
  };
  favourites: Favourite[];
};

export type ActionType =
  | { type: "toggle_konvertor" }
  | { type: "toggle_addition" }
  | { type: "change_measure"; payload: string }
  // | { type: "add_FROM_unit"; payload: string }
  // | { type: "add_TO_unit"; payload: string }
  | { type: `add_${string}_unit`; payload: string }
  | { type: "change_options_state"; payload: OptionsStateType }
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
    type: "add_to_favourites",
    payload: {}
  }
