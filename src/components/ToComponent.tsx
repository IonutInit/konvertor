import React from "react";
import { View, Text, StyleSheet } from "react-native";

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

    const decimals = i === result.length - 1 ? state.settings.decimals : 0;

    return (
      <View key={i} style={styles.container}>
        <Text style={styles.result}>{result[i].toFixed(decimals)}</Text>

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

        <RemoveUnit i={i} type={"to"} />
      </View>
    );
  });

  return <>{elements}</>;
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: "center",
  },
  result: {
    fontSize: 24,
  },
});

export default ToComponent;
