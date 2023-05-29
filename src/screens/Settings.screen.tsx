import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";

import SliderComponent from "../components/SliderComponent";
import ToggleButton from "../components/ToggleButton";
import Credentials from "../components/Credentials";

import BackButton from "../components/svgs/BackButton";

import useAppContext from "../context/useAppContext";

const Settings = ({ navigation }: any) => {
  const {
    state: { settings },
  } = useAppContext();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.jumpTo("Home")}>
          <BackButton />
        </Pressable>
      </View>

      <View style={styles.toogleButtonsOuterContainer}>
        <View style={styles.ToggleButtonInnerContainer}>
          <ToggleButton text={"System"} />
          <ToggleButton text={"Verbosity"} />
        </View>
      </View>

      <View style={styles.sliderContainer}>
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

      <View style={styles.sliderContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>
            Theme name
            {/* From: {settings.metric ? "metric" : "imperial"} to{" "}
            {!settings.metric ? "metric" : "imperial"} */}
          </Text>
        </View>

        <SliderComponent settingType="theme" />

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.title}>Theme</Text>
          {/* <Text style={styles.title}>Preferred conversion type</Text> */}
        </View>

        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
      </View>

      <Credentials />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignContent: "flex-start",
    padding: 15,
  },
  toogleButtonsOuterContainer: {
    paddingTop: 30,
    width: "80%",
  },
  ToggleButtonInnerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  sliderContainer: {
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
