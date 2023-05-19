import React, { useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { StyleSheet, View, Text } from "react-native";

import useAppContext from "../context/useAppContext";

type SliderComponentPropType = {
  settingType: string;
  title: string;
  description: string;
};

const SliderComponent = ({
  settingType,
  title,
  description,
}: SliderComponentPropType) => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();
  const [value, setValue] = useState(settings.decimals * 10);

  const handleValueChange = (newValues: number[]) => {
    const newValue = newValues[0];
    setValue(Math.floor(newValue));

    const settingValue =
      settingType === "decimals" ? Math.floor(newValue / 10) : newValue > 23;

    dispatch({
      type: "change_settings",
      payload: {
        settingType,
        settingValue,
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Slider
        maximumValue={49}
        value={value}
        onValueChange={handleValueChange}
      />
      <Text>{description}</Text>
      <Text>-----------------</Text>
      <Text>-----------------</Text>
      <Text>-----------------</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 300,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
});

export default SliderComponent;
