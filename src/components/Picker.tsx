import { Picker } from "@react-native-picker/picker";
import { StyleSheet } from "react-native";
import { Dispatch } from "react";

import useAppContext from "../context/useAppContext";

import { ActionType } from "../../types";

import convert from "convert-units";

type PickerComponentProps = {
  onChange: (
    dispatch: Dispatch<ActionType>,
    option: string,
    iterator: number
  ) => void;
  options: string[];
  unit: string;
  i?: number;
};

const PickerComponent = ({ onChange, options, unit, i }: PickerComponentProps) => {
  const { state, dispatch } = useAppContext();

  //const options = convert().from(state.toUnit[0]).possibilities();

  const handleValueChange = (option: string) => {
    onChange(dispatch, option, i!);
  };

  return (
    <Picker
      style={styles.picker}
      selectedValue={unit}
      onValueChange={handleValueChange}
      itemStyle={styles.pickerItem}>
      {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 100,
    // height: 100,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  pickerItem: {
    fontSize: 12,
  },
});

export default PickerComponent;
