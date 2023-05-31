import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/unitDescription";
import { handleVerbosity, revertVerbosity } from "../hooks/handleVerbosity";

import getTheme from "../context/theme";

const UniversalPicker = () => {
  const {
    state: { fromUnit, toUnit, universalPicker, measureType, settings },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

  const { type, position, index } = universalPicker;

  const allOptions = convert().from(fromUnit[0]).possibilities();
  const nextOption = getNextUnit(
    toUnit[universalPicker.index!],
    description[measureType]
  );
  const options = toUnit.length > 1 ? nextOption : allOptions;

const optionsToDisplay = handleVerbosity(options, settings.verbose)

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
      style={[
        styles.picker,
        { top: 150 },
        { left: 0 },
        { backgroundColor: theme.gray1, shadowColor: theme.gray3 },
      ]}
      selectedValue={
        type === "from"
          ? fromUnit[universalPicker.index!]
          : toUnit[universalPicker.index!]
      }
      onValueChange={(option) => handleChange(option, type)}>
        
      {optionsToDisplay.map((option: string) => (
        <Picker.Item key={option} label={option} value={revertVerbosity(option, settings.verbose, measureType)} />
      ))}
    </Picker>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 5,
  },
});

export default UniversalPicker;
