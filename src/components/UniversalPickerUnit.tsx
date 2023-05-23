import { Pressable, Text, StyleSheet } from "react-native";

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
      <Text style={styles.text}>{unit}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  }
})

export default UniversalPickerUnit;
