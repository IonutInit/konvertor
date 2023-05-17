export type AppStateType = {
  konvertor: boolean;
  extendedList: boolean;
  measureType: string;
  metric: boolean;
  fromUnit: string;
  toUnit: string;
  decimals: number;
};

export type ActionType =
  | { type: "toggle_konvertor" }
  | { type: "change_measure"; payload: string }
  | { type: "change_FROM_unit"; payload: string }
  | { type: "change_TO_unit"; payload: string }
