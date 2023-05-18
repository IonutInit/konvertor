import { Text, StyleSheet } from "react-native";
import React from "react";

import useAppContext from "../context/useAppContext";

import Input from "./Input";
import PickerComponent from "./Picker";

import handleInputChange from "../lib/handleInputChange";
import handleFromUnitChange from "../lib/handleFromUnitChange";

import convert from "convert-units";

const FromComponent = () => {
  const { state, dispatch } = useAppContext();

  const elements = state.fromUnit.map((unit: string, i: number) => {
    const options = convert().from(unit).possibilities();

    return (
      <React.Fragment key={i}>
        <Text>FROM: </Text>

        <PickerComponent
          onChange={handleFromUnitChange}
          options={options}
          unit={unit}
          i={i}
        />

        <Input
          handleInputChange={(input: string) =>
            handleInputChange(dispatch, input, i)
          }
        />

      </React.Fragment>
    );
  });

  return <>{elements}</>;
};

const styles = StyleSheet.create({
  component: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
});

export default FromComponent;
