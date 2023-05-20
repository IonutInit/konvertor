import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

import getNextUnit from "../lib/getNextUnit";
import description from "../data/description";

const UniversalPicker = () => {
  const {
    state: { fromUnit, toUnit, universalPicker, measureType },
    dispatch,
  } = useAppContext();

  const { type } = universalPicker;

  const allOptions = convert().from(fromUnit[0]).possibilities();
  const nextOption = getNextUnit(
    toUnit[universalPicker.index!],
    description[measureType.toLowerCase()]
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
      },
    });
  };

  return (
    <Picker
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

export default UniversalPicker;
