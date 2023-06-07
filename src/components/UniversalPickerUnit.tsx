import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Pressable,
  Text,
  StyleSheet,
  LayoutAnimation,
} from "react-native";

import useAppContext from "../context/useAppContext";

import getTheme from "../context/theme";
import Konvertor from "../screens/Konvertor.home.screen";

type UniversalPickerUnitProps = {
  unit: string;
  i: number;
  type: "from" | "to";
  componentKey?: number;
};

const UniversalPickerUnit = ({
  unit,
  i,
  type,
  componentKey = 0,
}: UniversalPickerUnitProps) => {
  const {
    state: { universalPicker, fromUnit, konvertor },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

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
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setLargeContainer(true);
  };

  const handlePressOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setLargeContainer(false);
  };

  const workUniversalPicker = () => {
    let calculatorTo = false;

    if (type === "to" && konvertor !== "konvertor") {
      calculatorTo = true;
    }

    dispatch({
      type: "work_universal_picker",
      payload: {
        type,
        index: i,
        position: position || [],
        activeFromComponent: componentKey,
        calculatorTo,
      },
    });
  };

  const handleLongPress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    if (fromUnit[componentKey].length > 1) {
      dispatch({
        type: `remove_${type.toUpperCase()}_value`,
        payload: [componentKey, i],
      });
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.gray2, shadowColor: theme.gray3 },
        !largeContainer
          ? styles.containerNormalSize
          : styles.containerLargeSize,
      ]}>
      <Pressable
        onPress={() => workUniversalPicker()}
        onLongPress={handleLongPress}
        onPressIn={handlePresIn}
        onPressOut={handlePressOut}>
        <Text
          style={
            universalPicker.type === ""
              ? [styles.text, { color: theme.mainColour }]
              : [styles.overlaidText, { color: theme.gray1 }]
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
    width: 88,
    height: 33,
  },
  container: {
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
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
    textAlign: "center",
  },
});

export default UniversalPickerUnit;
