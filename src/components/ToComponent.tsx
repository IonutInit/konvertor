import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import ToPicker from "./ToPicker";
import RemoveUnit from "./RemoveUnit";
import UniversalPickerUnit from "./UniversalPickerUnit";
import Divider from "./Divider";

import handleToUnitChange from "../hooks/handleToUnitChange";

import platform from "../data/platform";

// import convert from "convert-units";
import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts";
import converter from "../lib/converter";

import getNextUnit from "../lib/getNextUnit";
import displaySwitchedValues from "../lib/displaySwitchedValues";
import { handleVerbosity } from "../hooks/handleVerbosity";
import getPickerUnit from "../hooks/getPickerUnit";
import description from "../data/unitDescription";

import { DescriptionType } from "../data/unitDescription";

const ToComponent = () => {
  const {
    state: { toUnit, fromUnit, fromValue, measureType, settings, addition },
  } = useAppContext();

  const workingMeasureType = measureType[0].toString();

  // console.log(toUnit);

  const elements = toUnit.map((unit: string, i: number) => {
    const allOptions = convert()
      .from(toUnit[toUnit.length - 1])
      .possibilities();
    let nextOption = getNextUnit(
      toUnit[toUnit.length - 1],
      (description as DescriptionType)[measureType[0].toString()]
    );

    platform === "android" ? (nextOption = allOptions) : nextOption;
    //doesn't work on android???
    //bug at the first allOptions (shold be nextOption)

    let options = toUnit.length > 1 ? nextOption : allOptions;

    const optionsToDisplay = handleVerbosity(options, settings.verbose);

    const result = converter(
      addition,
      fromValue[0],
      fromUnit[0],
      fromUnit[0][0],
      toUnit
    );

    return (
      <View
        key={i}
        style={[styles.container, platform === "ios" ? { width: 100 } : null]}>
        <Divider />

        <View style={styles.pickerContainer}>
          <View style={styles.resultContainer}>
            <Text style={styles.result}>
              {displaySwitchedValues(result[i], settings.decimals)}
            </Text>
          </View>

          {platform !== "ios" && (
            <ToPicker
              onChange={handleToUnitChange}
              options={optionsToDisplay}
              unit={getPickerUnit(toUnit[0], workingMeasureType)}
              i={i}
              measureType={workingMeasureType}
              verbosity={settings.verbose}
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
    marginHorizontal: 5,
    alignItems: "center",
    // alignContent: "space-between"
  },
  pickerContainer: {
    alignItems: "center",
  },
  resultContainer: {},
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
