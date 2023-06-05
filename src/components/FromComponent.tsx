import { Text, StyleSheet, View, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState, useEffect } from "react";

import useAppContext from "../context/useAppContext";

import Input from "./Input";
// import FromPicker from "./FromPicker";
import PickerComponent from "./Picker";
import RemoveUnit from "./RemoveUnit";
import UniversalPickerUnit from "./UniversalPickerUnit";

import handleInputChange from "../hooks/handleInputChange";
import handleFromUnitChange from "../hooks/handleFromUnitChange";

import convert from "convert-units";
import platform from "../data/platform";

import displaySwitchedValues from "../lib/displaySwitchedValues";

import { handleVerbosity, revertVerbosity } from "../hooks/handleVerbosity";
import getPickerUnit from "../hooks/getPickerUnit";

type FromComponentProps = {
  measureType: string;
  componentKey: number;
  filter?: string[];
};

const FromComponent = ({
  measureType,
  componentKey,
  filter = [],
}: FromComponentProps) => {
  const {
    state: { fromUnit, fromValue, settings, universalPicker },
    dispatch,
  } = useAppContext();


  const elements = fromUnit[componentKey].map((unit: string, i: number) => {

 
    const options = convert().possibilities(measureType);

    const filteredOptions = filter.length !== 0 ? filter : options;

    const optionsToDisplay = handleVerbosity(filteredOptions, settings.verbose);

        console.log(unit)
       //DO NOT DELETE THIS

    return (
      <React.Fragment key={i}>
        <View style={styles.container}>
          <Input
            componentKey={componentKey}
            handleInputChange={(input: string) =>
              handleInputChange(componentKey, dispatch, input, i)
            }
            i={i}
            // value={i === 0 ? "1" : "0"}
            value={displaySwitchedValues(
              fromValue[componentKey][i] as number,
              settings.decimals
            ).toString()}
          />

          {platform !== "ios" && (
            <PickerComponent
              componentKey={componentKey}
              onChange={handleFromUnitChange}
              options={optionsToDisplay}
              unit={getPickerUnit(fromUnit[componentKey][0], measureType)} //if it has value [1], at least it works when value is updated
              i={i}
              measureType={measureType}
              verbosity={settings.verbose}
            />
          )}

          {platform === "ios" && (
            <UniversalPickerUnit
              unit={unit}
              i={i}
              type="from"
              componentKey={componentKey}
            />
          )}

          <RemoveUnit componentKey={componentKey} i={i} type={"from"} />
        </View>
      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

const marginVertical = platform === "android" ? 5 : 13;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginHorizontal: 10,
    paddingVertical: 5,
  },
});

export default FromComponent;
