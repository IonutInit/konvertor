import React, { useState, useEffect } from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, View, Image } from "react-native";

import useAppContext from "../context/useAppContext";

import sliderThumbs from "../iconMaps/sliderThumbMaps";

import getTheme from "../context/theme";

type SliderComponentPropType = {
  settingType: string;
  settingValue: number;
};

const SliderComponent = ({
  settingType,
  settingValue,
}: SliderComponentPropType) => {
  const { dispatch } = useAppContext();

  const theme = getTheme();

  const [value, setValue] = useState(settingValue);

  console.log(value);

  const handleValueChange = (newValue: number) => {
    const settingValue = Math.floor(newValue / 10);
    setValue(newValue);
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
      {/* <Text>{title}</Text> */}
      <Slider
        maximumValue={49}
        value={value}
        onValueChange={handleValueChange}
        minimumTrackTintColor={theme.gray3}
        maximumTrackTintColor={theme.gray3}
        thumbTintColor={theme.mainColour}
        //thumbImage={require("../assets/sliderThumbs/zero.png")}
      />
      {/* <Text>{description}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    maxWidth: 300,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "stretch",
    justifyContent: "center",
  },
  slider: {
    width: 200,
    height: 30,
  },
});

export default SliderComponent;
