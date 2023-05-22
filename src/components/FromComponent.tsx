import { Text, StyleSheet, View, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

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

const FromComponent = ({measureType}: {measureType: string}) => {
  const {
    state: { fromUnit },
    dispatch,
  } = useAppContext();

  const elements = fromUnit.map((unit: string, i: number) => {
    const options = convert().possibilities(measureType.toLowerCase())

    return (
      <React.Fragment key={i}>
        <View style={styles.container}>
          <Input
            handleInputChange={(input: string) =>
              handleInputChange(dispatch, input, i)
            }
          />

          {/* {platform === "android" && (
            <FromPicker 
              onChange={handleFromUnitChange}
              options={options}
              unit={unit}
              i={i}
              />
          )} */}

          {platform === "android" && (
            <PickerComponent
              onChange={handleFromUnitChange}
              options={options}
              unit={unit}
              i={i}
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

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
});

export default FromComponent;
