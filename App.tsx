import { NavigationContainer } from "@react-navigation/native";
import { useReducer, useState, useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AppContextProvider } from "./src/context/AppContext";

import { StatusBar } from "expo-status-bar";

import NavigationTabs from "./src/navigation/Navigation";

import reducer from "./src/context/reducer";
import appState from "./src/data/appState";

export default function App() {
  // const [fontsLoaded] = useFonts({
  //   "Museo": require("./src/assets/fonts/Museo.otf"),
  //   "Ape": require("./src/assets/fonts/ApeMount.otf")
  // })

  const [state, dispatch] = useReducer(reducer, appState);

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

  return (
    <AppContextProvider state={state} dispatch={dispatch}>
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </AppContextProvider>
  );
}
