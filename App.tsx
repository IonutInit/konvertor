import { NavigationContainer} from "@react-navigation/native"

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import convert from 'convert-units';
import NavigationTabs from "./src/screens/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})