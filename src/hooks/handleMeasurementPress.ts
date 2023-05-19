import { Dispatch } from "react";

import unitList from "../data/unitList";

import { ActionType, AppStateType } from "../../types";

const handleMeasurementPress = (
  dispatch: Dispatch<ActionType>,
  state: AppStateType,
  measure: string
) => {
  const [defaultFrom, defaultTo] = state.settings.metric ? [0, 1] : [1, 0];
  const targetUnit = unitList.find((unit) => unit.measure === measure)!;

  dispatch({
    type: "toggle_konvertor",
  });

  dispatch({
    type: "change_measure",
    payload: measure,
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

export default handleMeasurementPress;
