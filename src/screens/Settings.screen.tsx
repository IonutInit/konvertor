import { View, ScrollView, Text, StyleSheet } from "react-native";

import SliderComponent from "../components/Slider";
import Credentials from "../components/Credentials";

import useAppContext from "../context/useAppContext";

const Settings = () => {
  const {
    state: { settings },
  } = useAppContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View style={styles.settingsContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>Decimals: {settings.decimals}</Text>
        </View>

        <SliderComponent settingType="decimals" />
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.title}>Accuracy</Text>
        </View>

        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.settingsContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>
            From: {settings.metric ? "metric" : "imperial"} to{" "}
            {!settings.metric ? "metric" : "imperial"}
          </Text>
        </View>

        <SliderComponent settingType="metric" />

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.title}>Preferred conversion type</Text>
        </View>

        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
      </View> */}

      <Credentials />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  settingsContainer: {
    width: "80%",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    width: "80%",
    backgroundColor: "grey",
    marginTop: 5,
  },
});

export default Settings;
