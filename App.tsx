import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useReducer, useState, useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AppContextProvider } from "./src/context/AppContext";

import { StatusBar } from "expo-status-bar";

import NavigationTabs from "./src/navigation/Navigation";

import reducer from "./src/context/reducer";
import appState from "./src/data/appState";

import AsyncStorage from "@react-native-async-storage/async-storage";
import getLocalData from "./src/lib/getLocalData";
import { settingsKey } from "./src/data/storageKeys";
// import getLocalData from "../lib/getLocalData";
// import { settingsKey } from "../data/storageKeys";

import platform from "./src/data/platform";

import useThemeContext from "./src/context/useThemeContext";

import { SettingsType } from "./types";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Museo": require("./src/assets/fonts/Museo.otf"),
  //   "Ape": require("./src/assets/fonts/ApeMount.otf")
  // })

  const settings = {
    extendedList: false,
    metric: true,
    decimals: 2,
    verbose: false,
    theme: 1,
  };

  const [state, dispatch] = useReducer(reducer, appState);
  const [storedSettings, setStoredSettings] = useState<SettingsType>(settings);

  const { theme } = useThemeContext();

  // useEffect(()=> {
  //   async function start() {
  //     await SplashScreen.preventAutoHideAsync();
  //   }
  //   start()
  // }, [])

  // if (!fontsLoaded) {
  //   return undefined
  // } else {
  //   SplashScreen.hideAsync()
  // }

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

   return (
    <AppContextProvider state={state} dispatch={dispatch}>
      <View
        style={{
          flex: 1,
          width: "100%",
          backgroundColor: theme.gray2,
          paddingVertical: platform === "web" ? 2 : 0,
        }}>
        <View
          style={{
            flex: 1,
            alignSelf: "center",
            width: platform === "web" ? 600 : "101%",
            borderWidth: 1,
            borderColor: theme.gray1,
            borderRadius: 10,
            shadowColor: theme.gray3,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.6,
            shadowRadius: 2,
          }}>
          <NavigationContainer>
            <NavigationTabs />
          </NavigationContainer>
        </View>
      </View>
    </AppContextProvider>
  );
}
