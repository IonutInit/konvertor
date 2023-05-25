import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/unitDescription";

import theme from "../theme";

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
      style={[styles.picker, { top: 150 }, { left: 0 }]}
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
    width: "80%",

    backgroundColor: theme.gray1,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    shadowColor: theme.gray3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 5,
  },
});

export default UniversalPicker;
