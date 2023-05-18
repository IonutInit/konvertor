import { NavigationContainer } from "@react-navigation/native";
import { useReducer, Reducer } from "react";

import { AppContextProvider } from "./src/context/AppContext";

import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

import NavigationTabs from "./src/navigation/Navigation";

import reducer from "./src/context/reducer";
import appState from "./src/data/appState";

export default function App() {
  const [state, dispatch] = useReducer(reducer, appState);

  return (
    <AppContextProvider state={state} dispatch={dispatch}>
      <NavigationContainer>
        <NavigationTabs />
      </NavigationContainer>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
