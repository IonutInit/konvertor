import {
  View,
  Pressable,
  Text,
  StyleSheet,
  LayoutAnimation,
} from "react-native";
import { useRef, useState, useEffect } from "react";

import useAppContext from "../context/useAppContext";

import theme from "../theme";

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
  const [largeContainer, setLargeContainer] = useState(false);

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

  const handlePresIn = () => {
    setLargeContainer(true);
  };

  const handlePressOut = () => {
    setLargeContainer(false);
  };

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
    <View
      style={[
        styles.container,
        !largeContainer
          ? styles.containerNormalSize
          : styles.containerLargeSize,
      ]}>
      <Pressable
        onPress={() => workUniversalPicker()}
        onLongPress={() =>
          dispatch({ type: `remove_${type.toUpperCase()}_value`, payload: i })
        }
        onPressIn={handlePresIn}
        onPressOut={handlePressOut}>
        <Text
          style={
            universalPicker.type === "" ? styles.text : styles.overlaidText
          }
          ref={pickerUnitRef}>
          {unit}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  containerNormalSize: {
    width: 80,
    height: 30,
  },
  containerLargeSize: {
    width: 120,
    height: 45,
  },
  container: {
    backgroundColor: theme.gray2,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    shadowColor: theme.gray3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 5,
  },
  text: {
    fontSize: 24,
    textAlign: "center",
  },
  overlaidText: {
    fontSize: 24,
    color: "#F2F2F2",
  },
});

export default UniversalPickerUnit;
