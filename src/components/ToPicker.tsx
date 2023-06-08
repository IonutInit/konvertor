import React, { Dispatch } from "react";

import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import { ActionType } from "../../types";

type PickerComponentProps = {
  onChange: (
    dispatch: Dispatch<ActionType>,
    option: string,
    iterator: number,
    verbosity: boolean,
    measureType: string
  ) => void;
  options: string[];
  unit: string;
  i: number;
  measureType: string;
  verbosity: boolean;
};

const ToPicker = ({
  onChange,
  options,
  unit,
  i,
  verbosity,
  measureType,
}: PickerComponentProps) => {
  const { dispatch } = useAppContext();

  return (
    <Picker
      style={styles.picker}
      selectedValue={unit}
      onValueChange={(option) =>
        onChange(dispatch, option, i, verbosity, measureType)
      }
      itemStyle={styles.pickerItem}>
      {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 130,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 10,
  },
  pickerItem: {
    fontSize: 8,
  },
});

export default ToPicker;
