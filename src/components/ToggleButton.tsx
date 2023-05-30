import { View, Text, StyleSheet, Image } from "react-native";
import { useState } from "react";
import Toggle from "react-native-toggle-element";

// import ToggleButtonIcons from "./svgs/ToggleButtonIcons";

import metric from "../assets/functionalIcons/metricSystem.png";
import imperial from "../assets/functionalIcons/imperialSystem.png";

import getTheme from "../context/theme";

type ToggleButtonPropsType = {
  text: string;
};

const ToggleButton = ({ text }: ToggleButtonPropsType) => {
  const [toggleValue, setToggleValue] = useState(false);
  const theme = getTheme()

  return (
    <View style={styles.container}>
      <Toggle
        value={toggleValue}
        onPress={() => setToggleValue(!toggleValue)}
        leftComponent={
          toggleValue && (
            <Image source={metric} style={{ height: 20, width: 17 }} />
          )
        }
        rightComponent={
          !toggleValue && (
            <Image source={imperial} style={{ height: 20, width: 17 }} />
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
          // inActiveColor: theme.orange1,
        }}
      />
      <Text style={styles.text}>{text}</Text>
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
    width: 120,
    height: 40,
  },
  thumbButton: {
    width: 50,
    height: 50,
    radius: 25,
  },
  text: {
    paddingTop: 20,
  },
});

export default ToggleButton;
