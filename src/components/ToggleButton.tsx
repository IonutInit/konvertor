import * as React from "react";

import { View, Text, StyleSheet } from "react-native";
import Toggle from "react-native-toggle-element";

import useAppContext from "../context/useAppContext";

import getTheme from "../context/theme";

type ToggleButtonPropsType = {
  title: string;
  text: string[];
  settingType: string;
  settingValue: boolean;
  tinyExplanation: string[];
};

const ToggleButton = ({
  title,
  text,
  settingType,
  settingValue,
  tinyExplanation,
}: ToggleButtonPropsType) => {
  const { dispatch } = useAppContext();

  const theme = getTheme();

  const handlePress = (settingType: string) => {
    dispatch({
      type: "change_settings",
      payload: {
        settingType,
        settingValue: !settingValue,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Toggle
        value={settingValue}
        onPress={() => handlePress(settingType)}
        leftTitle=""
        rightTitle=""
        trackBar={{
          ...styles.trackBar,
          activeBackgroundColor: theme.mainColour,
          inActiveBackgroundColor: theme.mainColour,
        }}
        thumbButton={{
          ...styles.thumbButton,
          activeBackgroundColor: theme.secondaryColour,
          inActiveBackgroundColor: theme.secondaryColour,
        }}
      />
      <Text style={styles.text}>{settingValue ? text[0] : text[1]}</Text>
      <Text style={styles.tinyExplanation}>
        {settingValue ? tinyExplanation[0] : tinyExplanation[1]}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  trackBar: {
    width: 100,
    height: 30,
  },
  thumbButton: {
    width: 40,
    height: 40,
    radius: 25,
  },
  title: {
    marginBottom: 15,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  text: {
    paddingTop: 10,
    fontWeight: "bold",
  },
  tinyExplanation: {
    marginTop: 2,
    fontSize: 10,
    fontStyle: "italic",
  },
});

export default ToggleButton;
