import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import BackToOptions from "../components/BackToOptions";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import AddToFavourites from "../components/AddToFavourites";
import ArithmeticOperator from "../components/ArithmeticOperator";

import platform from "../data/platform";
import UniversalPicker from "../components/UniversalPicker";

const Konvertor = () => {
  const { state } = useAppContext();

  console.log(state);

  return (
    <ScrollView>
      <View style={styles.header}>
        <BackToOptions />
        <ArithmeticOperator />
        <AddUnit type="from" />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{state.measureType}</Text>
        <AddToFavourites />
      </View>

      <FromComponent measureType={state.measureType}/>

      <ToComponent />

      <AddUnit type="to" />

      {platform === "ios" && state.universalPicker.type !== "" && (
        <UniversalPicker />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default Konvertor;
