import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import getLocalData from "../lib/getLocalData";
import { settingsKey } from "../data/storageKeys";

import SliderComponent from "../components/SliderComponent";
import ToggleButton from "../components/ToggleButton";
import Credentials from "../components/Credentials";

import BackButton from "../components/svgs/BackButton";

import useAppContext from "../context/useAppContext";

import getTheme from "../context/theme";

import { SettingsType } from "../../types";

const Settings = ({ navigation }: any) => {
  const {
    state: { settings },
    state,
    dispatch,
  } = useAppContext();

  const [storedSettings, setStoredSettings] = useState<SettingsType>(settings);

  const theme = getTheme();

  console.log(state);

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getLocalData(settingsKey);
      if (!data) {
        setStoredSettings(settings);
      } else {
        setStoredSettings(data as SettingsType);
      }
    };
    fetchSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        const jsonValue = JSON.stringify(storedSettings);
        await AsyncStorage.setItem(settingsKey, jsonValue);
        dispatch({
          type: "initialise_settings",
          payload: storedSettings,
        });
      } catch (e) {}
    };
    saveSettings();
  }, [storedSettings, dispatch]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.jumpTo("Home")}>
          <BackButton />
        </Pressable>
      </View>

      <View style={styles.toogleButtonsOuterContainer}>
        <View style={styles.ToggleButtonInnerContainer}>
          <ToggleButton
            title={"Default System"}
            text={["metric", "imperial"]}
            settingType="metric"
            settingValue={settings.metric}
          />
          <ToggleButton
            title={"Verbosity"}
            text={["short", "long"]}
            settingType="verbose"
            settingValue={settings.verbose}
          />
        </View>
      </View>

      <View style={styles.sliderContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>Decimals: {settings.decimals}</Text>
        </View>

        <SliderComponent
          settingType="decimals"
          settingValue={settings.decimals}
        />
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.title}>Accuracy</Text>
        </View>

        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
      </View>

      <View style={styles.sliderContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>
            {theme.name}
            {/* From: {settings.metric ? "metric" : "imperial"} to{" "}
            {!settings.metric ? "metric" : "imperial"} */}
          </Text>
        </View>

        <SliderComponent settingType="theme" settingValue={settings.theme} />

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
    width: "90%",
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
