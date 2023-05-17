export type OptionsStateType = "to" | "from" | "" 

export type AppStateType = {
  konvertor: boolean;
  extendedList: boolean;
  measureType: string;
  metric: boolean;
  fromUnit: string;
  toUnit: string;
  Unit?: string; //when the options picker is inactive
  decimals: number;
  optionsState: OptionsStateType;
};

export type ActionType =
  | { type: "toggle_konvertor" }
  | { type: "change_measure"; payload: string }
  | { type: "change_FROM_unit"; payload: string }
  | { type: "change_TO_unit"; payload: string }
  | { type: "change_options_state"; payload: OptionsStateType };
