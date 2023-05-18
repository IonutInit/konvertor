import React from "react";
import { Text } from "react-native";

import useAppContext from "../context/useAppContext";

import PickerComponent from "./Picker";

import handleToUnitChange from "../hooks/handleToUnitChange";

import convert from "convert-units";
//import converter from "../lib/converter";
import { getFrom, getTo } from "../lib/converter";

const ToComponent = () => {
  const { state } = useAppContext();
  //const result = converter(state.fromValue, state.fromUnit, state.toUnit)

  const elements = state.toUnit.map((unit: string, i: number) => {
    const options = convert().from(unit).possibilities();
    return (
      <React.Fragment key={i}>
        <Text>TO</Text>

        <PickerComponent
          onChange={handleToUnitChange}
          options={options}
          unit={unit}
          i={i}
        />

        {/* <Text>{result[i]}</Text> */}
      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

export default ToComponent;
