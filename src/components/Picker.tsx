import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { Dispatch } from "react";

import useAppContext from "../context/useAppContext";

import { ActionType } from "../../types";

import convert from "convert-units";
import platform from "../data/platform";
import { revertVerbosity } from "../hooks/handleVerbosity";

type PickerComponentProps = {
  componentKey: number;
  onChange: (
    componentKey: number,
    dispatch: Dispatch<ActionType>,
    option: string,
    iterator: number,
    measureType: string,
    verbosity: boolean
  ) => void;
  options: string[];
  unit?: string;
  i?: number;
  measureType: string;
  verbosity: boolean;
};

const PickerComponent = ({
  componentKey,
  onChange,
  options,
  unit,
  i,
  measureType,
  verbosity,
}: PickerComponentProps) => {
  const { state, dispatch } = useAppContext();

  //const options = convert().from(state.toUnit[0]).possibilities();

  const handleValueChange = (option: string) => {
    onChange(componentKey, dispatch, option, i!, measureType, verbosity);
  };

  // to use for android once you get the android picker sorted label={label(option, measureType)}
  const label = (option: string, measureType: string) => {
    if (platform === "android") {
      return revertVerbosity(option, verbosity, measureType);
    }
    return option;
  };

   return (
    <Picker
      style={styles.picker}
      selectedValue={unit}
      onValueChange={handleValueChange}
      itemStyle={styles.pickerItem}>
      {options.map((option: string) => (
        <Picker.Item
          key={option}
          label={label(option, measureType)}
          value={option}
        />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: "30%",
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    marginLeft: 20,
  },
  pickerItem: {
    fontSize: 24,
  },
});

export default PickerComponent;
