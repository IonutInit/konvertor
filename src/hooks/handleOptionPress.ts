import { Dispatch } from "react";

import unitList from "../data/unitList";

import { ActionType, AppStateType } from "../../types";

const handleOptionPress = (
  dispatch: Dispatch<ActionType>,
  state: AppStateType,
  measure: string,
  name: string
) => {
  const [defaultFrom, defaultTo] = state.settings.metric ? [0, 1] : [1, 0];
  const targetUnit = unitList.find((unit) => unit.name === measure)!;

  const payload =
    targetUnit.extra === undefined ? "konvertor" : targetUnit.name;

  dispatch({
    type: "change_konvertor",
    payload,
  });

  dispatch({
    type: "change_measure",
    payload: {
      measure,
      name,
    },
  });

  dispatch({
    type: "add_FROM_unit",
    payload: targetUnit.default[defaultFrom],
  });

  dispatch({
    type: "add_TO_unit",
    payload: targetUnit.default[defaultTo],
  });
};

export default handleOptionPress;
