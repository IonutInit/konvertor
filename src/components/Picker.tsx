import { Picker } from "@react-native-picker/picker";
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

const PickerComponent = ({
  onChange,
  options,
  unit,
  i,
}: PickerComponentProps) => {
  const { dispatch } = useAppContext();

  const handleValueChange = (option: string) => {
    onChange(dispatch, option, i);
  };

  return (
    <Picker
      selectedValue={unit}
      onValueChange={handleValueChange}>
      {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
  );
};

export default PickerComponent;
