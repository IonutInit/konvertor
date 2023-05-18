import { Picker } from "@react-native-picker/picker";
import { Dispatch } from "react";

import useAppContext from "../context/useAppContext";

import { ActionType } from "../../types";

type PickerComponentProps = {
  handleToUnitChange: (
    dispatch: Dispatch<ActionType>,
    option: string,
    iterator: number
  ) => void;
  options: string[];
  unit: string;
  i: number;
};

const PickerComponent = ({
  handleToUnitChange,
  options,
  unit,
  i,
}: PickerComponentProps) => {
  const { dispatch } = useAppContext();

  return (
    <Picker
      selectedValue={unit}
      onValueChange={(option) => handleToUnitChange(dispatch, option, i)}>
      {options.map((option: string) => (
        <Picker.Item key={option} label={option} value={option} />
      ))}
    </Picker>
  );
};

export default PickerComponent;
