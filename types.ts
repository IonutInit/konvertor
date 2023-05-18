export type OptionsStateType = "to" | "from" | "";

export type AppStateType = {
  konvertor: boolean;
  extendedList: boolean;
  measureType: string;
  metric: boolean;
  fromUnit: string[];
  fromValue: (number | string)[];
  toUnit: string[];
  decimals: number;
  optionsState: OptionsStateType;
};

export type ActionType =
  | { type: "toggle_konvertor" }
  | { type: "change_measure"; payload: string }
  // | { type: "add_FROM_unit"; payload: string }
  // | { type: "add_TO_unit"; payload: string }
  | {type: `add_${string}_unit`; payload: string}
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
    | {
      type: "change_TO_unit";
      payload: {
        value: string;
        iterator: number;
      };
    };
