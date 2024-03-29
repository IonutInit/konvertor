import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  PanResponder,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import getLocalData from "../hooks/getLocalData";
import { settingsKey } from "../data/storageKeys";

import ToggleButton from "../components/ToggleButton";
import { Picker } from "@react-native-picker/picker";
import Credentials from "../components/Credentials";

import BackButton from "../components/svgs/BackButton";
import AddButton from "../components/svgs/AddButton";

import useAppContext from "../context/useAppContext";

import useGetInFocus from "../hooks/useGetInFocus";

import getTheme from "../context/theme";
import themeNames from "../context/themeNames";

import { SettingsType } from "../../types";

const Settings = ({ navigation }: any) => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();

  const [storedSettings, setStoredSettings] = useState<SettingsType>(settings);
  const [themePicker, setThemePicker] = useState(false);

  const theme = getTheme();

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      const swipeThreshold = 50;

      if (gestureState.dx > swipeThreshold) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        dispatch({
          type: "change_konvertor",
          payload: "",
        });
        dispatch({
          type: "change_tab",
          payload: "Home",
        });
        navigation.jumpTo("Home");
        return true;
      }
      return false;
    },
  });

  useEffect(() => {
    const fetchSettings = async () => {
      const data = await getLocalData(settingsKey);
      if (!data) {
        setStoredSettings(settings);
      }

      if (data) {
        dispatch({
          type: "initialise_settings",
          payload: data as SettingsType,
        });
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

  useGetInFocus(navigation, dispatch, "Settings");

  const themes = Object.values(themeNames);

  const handlePicker = () => {
    dispatch({
      type: "change_decimals",
      payload: "plus",
    });
    setThemePicker(false);
  };

  const handleThemePicker = (value: string) => {
    dispatch({
      type: "change_theme",
      payload: value,
    });
    setThemePicker(false);
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      {...panResponder.panHandlers}>
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
            tinyExplanation={[
              "Starts from metric to imperial",
              "Starts from imperial to metric",
            ]}
          />
          <ToggleButton
            title={"Verbosity"}
            text={["long", "short"]}
            settingType="verbose"
            settingValue={settings.verbose}
            tinyExplanation={[
              "Units are not abbreviated",
              "Units are abbreviated",
            ]}
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

          <Pressable onPress={handlePicker} disabled={settings.decimals === 4}>
            <AddButton disabled={settings.decimals === 4} />
          </Pressable>
        </View>
      </View>

      <View style={styles.themesContainer}>
        <Text style={[styles.title, { paddingBottom: 10 }]}>Theme</Text>
        <Pressable
          style={[styles.themesButton, { backgroundColor: theme.mainColour }]}
          onPress={() => setThemePicker(true)}>
          <Text style={[styles.themeText, { color: theme.gray1 }]}>
            {themes[settings.theme]}
          </Text>
        </Pressable>

        {themePicker && (
          <View style={styles.pickerContainer}>
            <Picker
              style={[styles.picker, { backgroundColor: theme.gray1 }]}
              selectedValue={themes[settings.theme]}
              onValueChange={(value) => handleThemePicker(value)}>
              {themes.map((theme) => (
                <Picker.Item key={theme} label={theme} value={theme} />
              ))}
            </Picker>
          </View>
        )}
      </View>

      <View>
        <Credentials />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginVertical: 5,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "#ccc",
    marginHorizontal: 10,
    paddingVertical: 5,
  },
  decimalsTextContainer: {
    paddingHorizontal: 30,
    fontSize: 32,
  },
  title: {
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  themesContainer: {
    paddingTop: 15,
    zIndex: 1,
    width: "100%",
    alignItems: "center",
  },
  themesButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 180,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    marginBottom: 5,
  },
  themeTitle: {
    paddingBottom: 5,
  },
  themeText: {},
  pickerContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  picker: {
    width: "80%",
    zIndex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});

export default Settings;
