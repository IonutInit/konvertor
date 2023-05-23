import { Pressable, Text, StyleSheet, LayoutAnimation } from "react-native";
import { useRef, useState, useEffect } from "react";

import useAppContext from "../context/useAppContext";

type UniversalPickerUnitProps = {
  unit: string;
  i: number;
  type: "from" | "to";
};

const UniversalPickerUnit = ({ unit, i, type }: UniversalPickerUnitProps) => {
  const {
    state: { universalPicker },
    dispatch,
  } = useAppContext();

  const pickerUnitRef = useRef<Text>(null);
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const getPosition = () => {
      if (pickerUnitRef.current) {
        pickerUnitRef.current.measure((x, y, width, height, pageX, pageY) => {
          setPosition([pageX, pageY]);
        });
      }
    };

    getPosition();
  }, []);

  const workUniversalPicker = () => {
    dispatch({
      type: "work_universal_picker",
      payload: {
        type,
        index: i,
        position: position || [],
      },
    });
  };

  return (
    <Pressable onPress={() => workUniversalPicker()}>
      <Text
        style={universalPicker.type === "" ? styles.text : styles.overlaidText}
        ref={pickerUnitRef}>
        {unit}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
  overlaidText: {
    fontSize: 24,
    color: "#F2F2F2",
  },
});

export default UniversalPickerUnit;
