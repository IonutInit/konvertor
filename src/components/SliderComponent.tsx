import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import { StyleSheet, View, Image } from "react-native";

import useAppContext from "../context/useAppContext";

import sliderThumbs from "../iconMaps/sliderThumbMaps";

import getTheme from "../context/theme";

type SliderComponentPropType = {
  settingType: string;
};

const SliderComponent = ({
  settingType,
}: // title,
// description,
SliderComponentPropType) => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();
  const [value, setValue] = useState(settings.decimals * 10);
  const theme = getTheme()

  const handleValueChange = (newValue: number) => {
    setValue(Math.floor(newValue));

    const settingValue = Math.floor(newValue / 10);
    //settingType === "decimals" ? Math.floor(newValue / 10) : newValue > 23;

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

// const SliderComponent = () => {
//     return(
//         <Slider
//   style={styles.slider}
//   minimumValue={0}
//   maximumValue={1}
//   minimumTrackTintColor="#FFFFFF"
//   maximumTrackTintColor="#000000"
// />
//     )
// }

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
