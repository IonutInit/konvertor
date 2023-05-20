import React from "react";
import { Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

import ToPicker from "./ToPicker";
import RemoveUnit from "./RemoveUnit";
import UniversalPickerUnit from "./UniversalPickerUnit";

import handleToUnitChange from "../hooks/handleToUnitChange";

import platform from "../data/platform";

import convert from "convert-units";
import converter from "../lib/converter";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/description";

const ToComponent = () => {
  const { state } = useAppContext();

  const elements = state.toUnit.map((unit: string, i: number) => {
    const allOptions = convert()
      .from(state.toUnit[state.toUnit.length - 1])
      .possibilities();
    const nextOption = getNextUnit(
      state.toUnit[state.toUnit.length - 1],
      description[state.measureType.toLowerCase()]
    );

    const options = state.toUnit.length > 1 ? nextOption : allOptions;

    const result = converter(
      state.addition,
      state.fromValue,
      state.fromUnit,
      state.fromUnit[0],
      state.toUnit
    );

    return (
      <React.Fragment key={i}>
        <Text>{result[i].toFixed(state.settings.decimals)}</Text>

        {platform === "android" && (
          <ToPicker
            onChange={handleToUnitChange}
            options={options}
            unit={unit}
            i={i}
          />
        )}

        {platform === "ios" && (
          <UniversalPickerUnit unit={unit} i={i} type="to" />
        )}

        {state.toUnit.length > 1 && <RemoveUnit i={i} type={"to"} />}
        {/* <Text>{result[i]}</Text> */}
      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

export default ToComponent;
