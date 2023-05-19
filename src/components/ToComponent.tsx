import React from "react";
import { Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

import PickerComponent from "./Picker";
import RemoveUnit from "./RemoveUnit";

import handleToUnitChange from "../hooks/handleToUnitChange";

import platform from "../data/platform";

import convert from "convert-units";
import converter from "../lib/converter";

const ToComponent = () => {
  const { state } = useAppContext();

  const elements = state.toUnit.map((unit: string, i: number) => {
    const options = convert().from(unit).possibilities();
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
          <PickerComponent
            onChange={handleToUnitChange}
            options={options}
            unit={unit}
            i={i}
          />
        )}

        {platform === "ios" && (
          <Pressable>
            <Text>{unit}</Text>
          </Pressable>
        )}

        {state.toUnit.length > 1 && <RemoveUnit i={i} type={"to"} />}
        {/* <Text>{result[i]}</Text> */}
      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

export default ToComponent;
