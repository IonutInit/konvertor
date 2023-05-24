import React from "react";
import { View, Text, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import ToPicker from "./ToPicker";
import RemoveUnit from "./RemoveUnit";
import UniversalPickerUnit from "./UniversalPickerUnit";
import Divider from "./Divider";

import handleToUnitChange from "../hooks/handleToUnitChange";

import platform from "../data/platform";

import convert from "convert-units";
import converter from "../lib/converter";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/unitDescription";

const ToComponent = () => {
  const { state } = useAppContext();

  const elements = state.toUnit.map((unit: string, i: number) => {
    const allOptions = convert()
      .from(state.toUnit[state.toUnit.length - 1])
      .possibilities();
    const nextOption = getNextUnit(
      state.toUnit[state.toUnit.length - 1],
      description[state.measureType]
    );

    const options = state.toUnit.length > 1 ? allOptions : allOptions; //bug at the first allOptions (shold be nextOption)

    const result = converter(
      state.addition,
      state.fromValue,
      state.fromUnit,
      state.fromUnit[0],
      state.toUnit
    );

    const decimals = i === result.length - 1 ? state.settings.decimals : 0;

    return (
      <View
        key={i}
        style={[styles.container, platform === "ios" ? { width: 100 } : null]}>
        <Divider />

        <View style={styles.pickerContainer}>
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
        </View>

        <View style={styles.removeUnitContainer}>
          <RemoveUnit i={i} type={"to"} />
        </View>
      </View>
    );
  });

  return <>{elements}</>;
};

const styles = StyleSheet.create({
  container: {
    // padding: 5,
    marginHorizontal: 10,
    alignItems: "center",
    // alignContent: "space-between"
  },
  pickerContainer: {
    alignItems: "center",
  },
  result: {
    fontSize: 24,
    paddingBottom: 5,
    paddingTop: 5,
  },
  removeUnitContainer: {
    height: 30,
    paddingTop: 5,
    marginBottom: 10,
  },
});

export default ToComponent;
