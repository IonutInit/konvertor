export type AppStateType = {
  konvertor: boolean;
  extendedList: boolean;
  measureType: string;
};

export type ActionType = {type: "toggle_konvertor"} | {type: "change_measure", payload: string};
