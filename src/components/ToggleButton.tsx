import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import Toggle from "react-native-toggle-element";

import useAppContext from "../context/useAppContext";

// import ToggleButtonIcons from "./svgs/ToggleButtonIcons";

import metric from "../assets/functionalIcons/metricSystem.png";
import imperial from "../assets/functionalIcons/imperialSystem.png";

import getTheme from "../context/theme";

type ToggleButtonPropsType = {
  title: string,
  text: string[];
  settingType: string,
};

const ToggleButton = ({ title, text, settingType }: ToggleButtonPropsType) => {
  const {dispatch, state: {settings}} = useAppContext()

  const [settingValue, setSettingValue] = useState(settings[settingType]);

  const theme = getTheme()

  const handlePress = (settingType: string) => {
    setSettingValue(!settingValue)
    dispatch({
      type: "change_settings",
      payload: {
        settingType,
        settingValue,
      }
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Toggle
        value={!!settingValue}
        onPress={() => handlePress(settingType)}
        leftComponent={
          settingValue && (
            <Image source={imperial} style={{ height: 20, width: 17 }} />
          )
        }
        rightComponent={
          !settingValue && (
            <Image source={metric} style={{ height: 20, width: 17 }} />
          )
        }
        // leftComponent={toggleValue && <ToggleButtonIcons type="metric" /> }
        // rightComponent={!toggleValue && <ToggleButtonIcons type="imperial" />}
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
          inActiveBackgroundColor: theme.secondaryColour
          //inActiveColor: theme.secondaryColour,
        }}
      />
      <Text style={styles.text}>{settingValue ? text[0] : text[1]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingTop: 30,
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
  },
});

export default ToggleButton;
