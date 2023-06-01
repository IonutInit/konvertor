import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { useState, useEffect, useLayoutEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import getLocalData from "../lib/getLocalData";
import { settingsKey } from "../data/storageKeys";

import SliderComponent from "../components/SliderComponent";
import ToggleButton from "../components/ToggleButton";
import { Picker } from "@react-native-picker/picker";
import Credentials from "../components/Credentials";

import BackButton from "../components/svgs/BackButton";
import AddButton from "../components/svgs/AddButton";

import useAppContext from "../context/useAppContext";

import useGetInFocus from "../hooks/useGetInFocus";

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

  //  useEffect(() => {
  //   const fetchSettings = async () => {
  //     const data = await getLocalData(settingsKey);
  //     if (!data) {
  //       setStoredSettings(settings);
  //     }

  //     if(data) {
  //       dispatch({
  //         type: "initialise_settings",
  //         payload: data as SettingsType,
  //       })
  //     }
  //   };
  //   fetchSettings();
  // }, []);

  // useEffect(() => {
  //   const saveSettings = async () => {
  //     try {
  //       const jsonValue = JSON.stringify(storedSettings);
  //       await AsyncStorage.setItem(settingsKey, jsonValue);
  //       dispatch({
  //         type: "initialise_settings",
  //         payload: storedSettings,
  //       });
  //     } catch (e) {}
  //   };
  //   saveSettings();
  // }, [storedSettings, dispatch]);

  // useGetInFocus(navigation, dispatch, "Settings")

  const themes = Object.values(getTheme().allThemes)

  console.log(themes)

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
            text={["long", "short"]}
            settingType="verbose"
            settingValue={settings.verbose}
          />
        </View>
      </View>


<View style={styles.decimalsOuterContainer}>
   <Text style={styles.title}>Decimals</Text>
      <View style={styles.decimalsContainer}>
        <Pressable
          onPress={() =>
            dispatch({
              type: "change_decimals",
              payload: "minus",
            })
          }
          disabled={settings.decimals === 0}>
          <AddButton type="minus" disabled={settings.decimals === 0} />
        </Pressable>

        <Text style={styles.decimalsTextContainer}>{settings.decimals}</Text>

        <Pressable
          onPress={() =>
            dispatch({
              type: "change_decimals",
              payload: "plus",
            })
          }
          disabled={settings.decimals === 4}>
          <AddButton disabled={settings.decimals === 4} />
        </Pressable>
      </View>
</View>

<View style={styles.themesContainer}>
  <Text style={styles.title}>Theme</Text>
  <Pressable>
    <Text>{themes[settings.theme]}</Text>
  </Pressable>
  
          {/* <Picker 
            onValueChange={(value) => dispatch({
              type: "change_theme",
              payload: value as string,
            })}
          >
          {themes.map((theme) => (
            <Picker.Item label={theme} />
          ))}
          </Picker> */}
</View>
   

      {/* <View style={styles.sliderContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>Decimals: {settings.decimals}</Text>
        </View>

        <SliderComponent
          settingType="decimals"
          // settingValue={settings.decimals}
        />
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.title}>Accuracy</Text>
        </View>

        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
      </View> */}

      {/* <View style={styles.sliderContainer}>
        <View style={{ paddingBottom: 20 }}>
          <Text>{theme.name}</Text>
        </View>

        <SliderComponent settingType="theme" settingValue={settings.theme} />

        <View style={{ paddingTop: 20 }}>
          <Text style={styles.title}>Theme</Text>
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
  decimalsOuterContainer: {
    width: "100%",
    alignContent: "center",
    alignItems: "center",
    paddingTop: 15,
  },
  decimalsContainer: {
    flexDirection: "row",
    width: "60%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    // backgroundColor: "red",
    // paddingVertical: 20,
  },
  decimalsTextContainer: {
    paddingHorizontal: 30,
    fontSize: 32,
  },
  sliderContainer: {
    width: "80%",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  themesContainer: {
    paddingTop: 15,
  },
  // divider: {
  //   height: 1,
  //   width: "80%",
  //   backgroundColor: "grey",
  //   marginTop: 5,
  // },
});

export default Settings;
