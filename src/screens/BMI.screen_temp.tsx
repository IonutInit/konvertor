import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { useEffect } from "react";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackToOptions";

import unitList from "../data/unitList";

import FromComponent from "../components/FromComponent";
import UniversalPicker from "../components/UniversalPicker";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import AddToFavourites from "../components/AddToFavourites";

import PickerComponent from "../components/Picker";

import platform from "../data/platform";
// import UniversalPicker from "../components/UniversalPicker";
// import description from "../data/unitDescription";

import getFromAddition from "../lib/getFromAddition_temp";

const BMI = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    dispatch({
      type: "add_FROM_unit",
      payload: {
        unit: "kg",
        componentKey: 0,
      },
    });
    dispatch({
      type: "add_FROM_unit",
      payload: {
        unit: "m",
        componentKey: 1,
      },
    });
  }, []);

  console.log(state);

  // const weigth = getFromAddition(state.fromValue[0], state.fromUnit[0], "kg");
  // const height = getFromAddition(state.fromValue[1], state.fromUnit[1], "m");
  // const bmi = weigth / height ** 2;

  return (
    <ScrollView>
      <View style={styles.header}>
        <BackFromKonverter />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>BMI</Text>
        </View>
      </View>

      <View style={styles.firstComponent}>
        <View style={styles.componentHeader}>
          <View style={styles.measureNameComponent}>
            <Text style={styles.measureNameText}>Mass</Text>
          </View>
          <AddUnit type="from" />
        </View>
        <FromComponent measureType="mass" componentKey={0} />
      </View>

      <View>
        <View style={styles.componentHeader}>
          <View style={styles.measureNameComponent}>
            <Text style={styles.measureNameText}>Heigth</Text>
          </View>
          <AddUnit type="from" componentKey={1} />
        </View>
        <FromComponent measureType="length" componentKey={1} />
      </View>

<View style={styles.resultOuterContainer}>
        <View style={styles.resultContainer}>
        {/* <Text>{bmi}</Text> */}
      </View>
</View>


      {platform === "ios" && state.universalPicker.type !== "" && (
        <UniversalPicker componentKey={0}/>
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
    width: "90%",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  firstComponent: {
    paddingBottom: 30,
  },
  componentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  measureNameComponent: {
    width: "90%",
    alignItems: "center",
  },
  measureNameText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resultOuterContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  resultContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  }
});

export default BMI;
