import { Text, StyleSheet, View, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";

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

import displaySwitchedValues from "../lib/displaySwitchedValues"

import {handleVerbosity, revertVerbosity} from "../hooks/handleVerbosity";
import getPickerUnit from "../hooks/getPickerUnit";

const FromComponent = ({ measureType }: { measureType: string }) => {
  const {
    state: { fromUnit, fromValue, settings },
    dispatch,
  } = useAppContext();


  const elements = fromUnit.map((unit: string, i: number) => {

    const options = convert().possibilities(measureType);

    const optionsToDisplay = handleVerbosity(options, settings.verbose)



    return (
      <React.Fragment key={i}>
        <View style={styles.container}>
          <Input
            handleInputChange={(input: string) =>
              handleInputChange(dispatch, input, i)
            }
            i={i}
            // value={i === 0 ? "1" : "0"}
            value={displaySwitchedValues(
              fromValue[i] as number,
              settings.decimals
            ).toString()}
          />

          {platform !== "ios" && (
            <PickerComponent
              onChange={handleFromUnitChange}
              options={optionsToDisplay}
              unit={getPickerUnit(fromUnit[0], measureType)}
              i={i}
              measureType={measureType}
              verbosity={settings.verbose}
            />
          )}

          {platform === "ios" && (
            <UniversalPickerUnit unit={unit} i={i} type="from" />
          )}

          <RemoveUnit i={i} type={"from"} />
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
