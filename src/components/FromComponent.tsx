import { Text, StyleSheet } from "react-native";
import React from "react";
import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import Input from "./Input";
import PickerComponent from "./Picker";

import handleInputChange from "../lib/handleInputChange";
import handleToUnitChange from "../lib/handleToUnitChange";

import convert from "convert-units";

const FromComponent = () => {
  const { state, dispatch } = useAppContext();

  console.log(state);

  const elements = state.fromUnit.map((unit: string, i: number) => {
    const options = convert().from(unit).possibilities();

    return (
      <React.Fragment key={i}>
        <Text>FROM: </Text>
        {/* <Picker selectedValue={unit} onValueChange={(option) => handleToUnitChange(dispatch, option, i)}>
          {options.map((option: string) => (
            <Picker.Item key={option} label={option} value={option} />
          ))}
        </Picker> */}

        <PickerComponent
          handleToUnitChange={handleToUnitChange}
          options={options}
          unit={unit}
          i={i}
        />

        <Input
          handleInputChange={(input: string) =>
            handleInputChange(dispatch, input, i)
          }
        />

        <Text>{state.fromValue[i]}</Text>
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
