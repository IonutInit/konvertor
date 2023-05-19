import React from "react";
import { Text } from "react-native";

import useAppContext from "../context/useAppContext";

import PickerComponent from "./Picker";
import RemoveUnit from "./RemoveUnit";

import handleToUnitChange from "../hooks/handleToUnitChange";

import convert from "convert-units";
import converter from "../lib/converter";

const ToComponent = () => {
  const { state } = useAppContext();

  const elements = state.toUnit.map((unit: string, i: number) => {
    const options = convert().from(unit).possibilities();
    const result = converter(
      state.fromValue,
      state.fromUnit,
      state.fromUnit[0],
      state.toUnit
    );

    return (
      <React.Fragment key={i}>
        <Text>{result[i]}</Text>

        <PickerComponent
          onChange={handleToUnitChange}
          options={options}
          unit={unit}
          i={i}
        />

        {state.toUnit.length > 1 && <RemoveUnit i={i} type={"to"} />}
        {/* <Text>{result[i]}</Text> */}
      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

export default ToComponent;
