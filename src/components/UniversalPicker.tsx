import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/unitDescription";

const UniversalPicker = () => {
  const {
    state: { fromUnit, toUnit, universalPicker, measureType },
    dispatch,
  } = useAppContext();

  const { type, position, index } = universalPicker;

  const allOptions = convert().from(fromUnit[0]).possibilities();
  const nextOption = getNextUnit(
    toUnit[universalPicker.index!],
    description[measureType]
  );
  const options = toUnit.length > 1 ? nextOption : allOptions;

  const handleChange = (option: string, type: string) => {
    dispatch({
      type: `change_${type.toUpperCase()}_unit`,
      payload: {
        value: option,
        iterator: universalPicker.index!,
      },
    });

    dispatch({
      type: "work_universal_picker",
      payload: {
        type: "",
        index: -1,
        position: [],
      },
    });
  };

  return (
    <Picker
      style={[styles.picker, { top: 15 }, { left: 170 }]}
      selectedValue={
        type === "from"
          ? fromUnit[universalPicker.index!]
          : toUnit[universalPicker.index!]
      }
      onValueChange={(option) => handleChange(option, type)}>
      {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    position: "absolute",
    height: 300,
    left: 200,
    right: 0,
    bottom: 0,
  },
});

export default UniversalPicker;
