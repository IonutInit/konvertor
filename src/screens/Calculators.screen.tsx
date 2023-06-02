import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackToOptions";

import unitList from "../data/unitList";

import FromComponent from "../components/FromComponent";
import UniversalPicker from "../components/UniversalPicker";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import AddToFavourites from "../components/AddToFavourites";

import getCalculatorData from "../lib/getCalculatorData";

import { calculateBmi } from "../lib/calculators";

import PickerComponent from "../components/Picker";
import getTheme from "../context/theme";

import platform from "../data/platform";
// import UniversalPicker from "../components/UniversalPicker";
// import description from "../data/unitDescription";

import getFromAddition from "../lib/getFromAddition_temp";

const Calculators = () => {
  const {
    state: { fromUnit, fromValue, konvertor, universalPicker }, state,
    dispatch,
  } = useAppContext();

  const [unitData] = unitList.filter((unit) => unit.name === konvertor);
  const { measureType } = unitData;

  const theme = getTheme();

  useEffect(() => {
    getCalculatorData(dispatch, konvertor);
  }, []);


  
   //console.log(state);
  // const getResult = (calculatorType: string) => {
  //   if(calculatorType === "bmi") {
  //     return calculateBmi(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1])
  //   }
  // }
  // const result = getResult(konvertor)

  // const weigth = getFromAddition(fromValue[0], fromUnit[0], "kg");
  // const height = getFromAddition(fromValue[1], fromUnit[1], "m");
  // const bmi = weigth / height ** 2;

  const bmiHeigthFilter = ["cm", "in", "ft", "ft-us", "yd", "m"];
  const bmiWeigthFilter = ["oz", "lb", "kg"];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <BackFromKonverter />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{unitData.displayName}</Text>
        </View>
      </View>

      <View>
        {measureType?.map((fromUnit, i) => {

          return (
            <View key={i} style={styles.firstComponent}>
              <View style={styles.componentHeader}>
                <View style={styles.measureNameComponent}>
                  <Text style={styles.measureNameText}>
                    {unitData.measureName![i]}
                  </Text>
                </View>
                <AddUnit type="from" componentKey={i}/>
              </View>
              <FromComponent
                measureType={measureType![i][0]}
                componentKey={i}
               
              />

              <>
                <View style={styles.universalPickerContainer}>
                  {platform === "ios" &&
                    universalPicker.type !== "" &&
                     <UniversalPicker componentKey={i} 
                    />}
                </View>
              </>
            </View>
          );
        })}
      </View>

      {/* <View style={styles.resultOuterContainer}>
        <View style={[styles.resultContainerBmi, {backgroundColor: theme.mainColour}]}>
        <Text style={[styles.resultsTextBmi, {color: theme.gray1}]}>{result}</Text>
      </View>
</View> */}

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
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
  resultContainerBmi: {
    marginBottom: 40,
    width: 200,
    maxHeight: 50,
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  resultsTextBmi: {
    fontSize: 24,
    fontWeight: "bold",
  },
  universalPickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -125 }, { translateY: -200 }],
    zIndex: 1,
  },
});

export default Calculators;
