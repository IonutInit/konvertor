import { Text, StyleSheet, View, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import React from "react";

import useAppContext from "../context/useAppContext";

import Input from "./Input";
import PickerComponent from "./Picker";
import RemoveUnit from "./RemoveUnit";
import UniversalPickerUnit from "./UniversalPickerUnit";

import handleInputChange from "../hooks/handleInputChange";
import handleFromUnitChange from "../hooks/handleFromUnitChange";

import convert from "convert-units";
import platform from "../data/platform";

const FromComponent = () => {
  const { state, dispatch } = useAppContext();

  const elements = state.fromUnit.map((unit: string, i: number) => {
    const options = convert().from(unit).possibilities();

    // const workUniversalPicker = () => {
    //   dispatch({
    //     type: "work_universal_picker",
    //     payload: {
    //       type: "from",
    //       index: i,
    //     },
    //   });
    // };

    return (
      <React.Fragment key={i}>
        <View style={styles.container}>
          <Input
            handleInputChange={(input: string) =>
              handleInputChange(dispatch, input, i)
            }
          />

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

          {state.fromUnit.length > 1 && <RemoveUnit i={i} type={"from"} />}
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
  },
  close: {
    width: "10%",
  },
});

export default FromComponent;
