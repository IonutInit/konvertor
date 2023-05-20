import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

const UniversalPicker = () => {
  const {
    state: { fromUnit, toUnit, universalPicker },
    dispatch,
  } = useAppContext();

  const { type } = universalPicker;

  const options = convert().from(fromUnit[0]).possibilities();

  const handleChange = (option: string, type: string) => {
    dispatch({
      type: `change_${type.toUpperCase()}_unit`,
      payload: {
        value: option,
        iterator: universalPicker.index,
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
          ? fromUnit[universalPicker.index]
          : toUnit[universalPicker.index]
      }
      onValueChange={(option) => handleChange(option, type)}>
      {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
  );
};

export default UniversalPicker;
