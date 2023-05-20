import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackFromKonvertor";

import unitList from "../data/unitList";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import AddToFavourites from "../components/AddToFavourites";

import platform from "../data/platform";
import UniversalPicker from "../components/UniversalPicker";
import description from "../data/description";

const BMI = () => {
  const { state, dispatch } = useAppContext();

  console.log(state, unitList[3]);

  return (
    <ScrollView>
      <View style={styles.header}>
        <BackFromKonverter />
        <AddUnit type="from" />
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>{state.measureType}</Text>
      </View>

      {/* <FromComponent /> */}

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

export default BMI;
