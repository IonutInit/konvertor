import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { Dispatch } from "react";

import useAppContext from "../context/useAppContext";

import { ActionType } from "../../types";

type PickerComponentProps = {
  onChange: (
    dispatch: Dispatch<ActionType>,
    option: string,
    iterator: number
  ) => void;
  options: string[];
  unit: string;
  i: number;
};

// const pickerWidth = []

const ToPicker = ({ onChange, options, unit, i }: PickerComponentProps) => {
  const {
    state: { toUnit },
    dispatch,
  } = useAppContext();

  return (
    <Picker
      style={styles.picker}
      selectedValue={unit}
      onValueChange={(option) => onChange(dispatch, option, i)}
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
