import * as React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import handleOptionPress from "../hooks/handleOptionPress";

import MeasurementIcons from "./svgs/MeasurementIcons";

import getTheme from "../context/theme";

const OptionsOnHome = ({ unit, commonStyles }) => {
  const { state, dispatch } = useAppContext();

  const theme = getTheme();

  return (
    <Pressable
      key={unit.name}
      onPress={() =>
        handleOptionPress(dispatch, state, unit.name, unit.displayName!)
      }
      style={[commonStyles.pressableMeasure, { backgroundColor: theme.gray1 }]}>
      <View style={commonStyles.innerPressableContainer}>
        <View style={styles.iconPlacement}>
          <MeasurementIcons type={unit.name} />
        </View>

        <View style={commonStyles.textContainer}>
          <Text style={styles.text}>{unit.displayName}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 3,
  },
  iconPlacement: {
    position: "absolute",
    top: 5,
  },
});

export default OptionsOnHome;
