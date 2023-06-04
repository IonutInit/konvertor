import { StyleSheet } from "react-native";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/unitDescription";
import { handleVerbosity, revertVerbosity } from "../hooks/handleVerbosity";

import getTheme from "../context/theme";

import { ActionType } from "../../types";
import Konvertor from "../screens/Konvertor.home.screen";

const UniversalPicker = ({ componentKey }: { componentKey: number }) => {
  const {
    state: { konvertor, fromUnit, toUnit, universalPicker, measureType, settings },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

  const { type, position, index } = universalPicker;

  const allOptions = convert().from(fromUnit[componentKey][0]).possibilities();
  // const nextOption = getNextUnit(
  //   toUnit[universalPicker.index!],
  //   description[measureType[componentKey][0].toString()]
  // );
  const options = toUnit.length > 1 ? allOptions : allOptions;

  const optionsToDisplay = handleVerbosity(options, settings.verbose);

  const handleChange = (option: string | string[], type: string) => {
    if (type === "from") {
      dispatch({
        type: "change_FROM_unit",
        payload: {
          componentKey,
          value: option as string,
          iterator: universalPicker.index!,
        },
      });
    }

    if (type === "to") {
      dispatch({
        type: "change_TO_unit",
        payload: {
          componentKey,
          value: option as string,
          iterator: universalPicker.index!,
        },
      });
    }

    dispatch({
      type: "work_universal_picker",
      payload: {
        type: "",
        index: -1,
        position: [],
        activeFromComponent: 0,
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
        <Picker.Item
          key={option}
          label={option}
          // value={option}
          value={revertVerbosity(
            option,
            settings.verbose,
            (konvertor === "konvertor" ? measureType[0][0] : convert().describe(fromUnit[componentKey]).measure)
            //because measureToe takes a different meaning with calculators....
          )}
        />
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
