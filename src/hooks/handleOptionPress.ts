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

  //targetUnit.default = targetUnit.default === undefined ? ["m"] : targetUnit.default

  // const getTargetUnit = (input) => {
  //   if (input !== undefined) {
  //     return input.default[defaultFrom]
  //   }

  //   if(state.konvertor === "bmi") {
  //     dispatch({
  //       type: "add_FROM_unit",
  //       payload: {
  //         unit: "kg",
  //         componentKey: 0,
  //       },
  //     });
  //   }

  // }

  const edgeCases = ["bmi", "weightLoss"];

  const dispatchToFrom = (konvertorType: string) => {
    if (!edgeCases.includes(targetUnit.name)) {
      //   dispatch({
      //     type: "add_FROM_unit",
      //     payload: {
      //       unit: targetUnit.default![defaultFrom],
      //       componentKey: 0,
      //     },
      //   });
      // if(konvertorType === "bmi") {
      //   dispatch({
      //     type: "add_FROM_unit",
      //     payload: {
      //       unit: "kg",
      //       componentKey: 0,
      //     },
      //   });
      //   dispatch({
      //     type: "add_FROM_unit",
      //     payload: {
      //       unit: "m",
      //       componentKey: 1,
      //     },
      //   });
      // }
    }
  };

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

  console.log(targetUnit);

  // calculators don't have defaults, so they will be undefined
  // as a temporray measure they use useEffect
  // dispatch({
  //   type: "add_FROM_unit",
  //   payload: {
  //     unit: targetUnit.default[defaultFrom],
  //     componentKey: 0,
  //   },
  // });

  dispatchToFrom(targetUnit.name);

  // dispatch({
  //   type: "add_TO_unit",
  //   payload: targetUnit.default![defaultTo],
  // });
};

export default handleOptionPress;
