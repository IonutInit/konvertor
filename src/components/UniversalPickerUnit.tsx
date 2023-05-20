import { Pressable, Text } from "react-native";

import useAppContext from "../context/useAppContext";

type UniversalPickerUnitProps = {
  unit: string;
  i: number;
  type: "from" | "to";
};

const UniversalPickerUnit = ({ unit, i, type }: UniversalPickerUnitProps) => {
  const { dispatch } = useAppContext();

  const workUniversalPicker = () => {
    dispatch({
      type: "work_universal_picker",
      payload: {
        type,
        index: i,
      },
    });
  };

  return (
    <Pressable onPress={() => workUniversalPicker()}>
      <Text>{unit}</Text>
    </Pressable>
  );
};

export default UniversalPickerUnit;
