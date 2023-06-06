import { View, ScrollView, Text, Pressable, StyleSheet, KeyboardAvoidingView } from "react-native";
import { useEffect, useState } from "react";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackToOptions";

import unitList from "../data/unitList";

import FromComponent from "../components/FromComponent";
import UniversalPicker from "../components/UniversalPicker";
import UniversalPickerUnit from "../components/UniversalPickerUnit";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import AddToFavourites from "../components/AddToFavourites";
import Divider from "../components/Divider";

import convert from "convert-units";

import getCalculatorData from "../lib/getCalculatorData";
import handleDescriptionText from "../lib/handleDescriptionText";

import {
  calculateBmi,
  calculateArea,
  calculateSpeed,
  calculateDensity,
  calculateWeightLoss,
} from "../lib/calculators";

import PickerComponent from "../components/Picker";
import getTheme from "../context/theme";

import platform from "../data/platform";

const Calculators = () => {
  const {
    state: {
      fromUnit,
      fromValue,
      toUnit,
      konvertor,
      universalPicker,
      settings,
    },
    state,
    dispatch,
  } = useAppContext();

  const [unitData] = unitList.filter((unit) => unit.name === konvertor);
  const { measureType } = unitData;

  const theme = getTheme();

  useEffect(() => {
    getCalculatorData(dispatch, konvertor, settings.metric);
  }, []);

  const calculatorData = {
    from0: fromValue[0],
    value0: fromUnit[0],
    from1: fromValue[1],
    value1:fromUnit[1],
    to: toUnit[0]
  }
 

  const getResult = (calculatorType: string) => {
    // if (calculatorType === "bmi") {
    //   return calculateBmi(calculatorData);
    // }

    if(calculatorType === "bmi") {
      return calculateBmi(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1])
    }


    if (calculatorType === "areaCalc" && toUnit.length !== 0) {
      return calculateArea(
        fromValue[0],
        fromUnit[0],
        fromValue[1],
        fromUnit[1],
        toUnit[0]
      );
    }

    if (calculatorType === "speedCalc" && toUnit.length !== 0) {
      return calculateSpeed(
        fromValue[0],
        fromUnit[0],
        fromValue[1],
        fromUnit[1],
        toUnit[0]
      );
    }

    if (calculatorType === "densityCalc" && toUnit.length !== 0) {
      return calculateDensity(
        fromValue[0],
        fromUnit[0],
        fromValue[1],
        fromUnit[1],
        toUnit[0]
      );
    }
    if (calculatorType === "weightLoss" && toUnit.length !== 0) {
      return calculateWeightLoss(
        fromValue[0],
        fromUnit[0],
        fromValue[1],
        fromUnit[1]
      );
    }
  };

  const result = getResult(konvertor);

  const bmiHeigthFilter = ["cm", "in", "ft", "ft-us", "yd", "m"];
  const bmiWeigthFilter = ["oz", "lb", "kg"];

  const bmiFilter = ["cm", "in", "ft", "ft-us", "yd", "m", "oz", "lb", "kg"];

  console.log(state);

  const getPickerPosition = (type: string, i: number) => {
    if (type === "from" && i === 1) {
      return -125
    }
    return 0
  }

  return (
    <KeyboardAvoidingView 
    behavior={platform === "ios" ? "padding" : "height"}    
    contentContainerStyle={styles.scrollContainer}
    keyboardVerticalOffset={100}
    >
      <View style={styles.header}>
        <BackFromKonverter />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{unitData.displayName}</Text>
        </View>
      </View>

      <View style={styles.descriptionOuterContainer}>
        <View
          style={[
            styles.descriptionInnerContainer,
            { backgroundColor: theme.mainColour },
          ]}>
          <Text style={[styles.descriptionText, { color: theme.gray1 }]}>
            {handleDescriptionText(fromUnit[0], true, true)}
          </Text>
          <Text style={[styles.descriptionText, { color: theme.gray1 }]}>
            {handleDescriptionText(fromUnit[1], true, true)}
          </Text>
          {!["bmi", "weightLoss"].includes(unitData.name) && (
            <View>
              <View
                style={[
                  { height: 1 },
                  { width: "100%" },
                  { backgroundColor: theme.gray1 },
                  { marginVertical: 3 },
                ]}></View>
              <Text style={[styles.descriptionText, { color: theme.gray1 }]}>
                {handleDescriptionText(toUnit, true, true)}
              </Text>
            </View>
          )}
        </View>
      </View>

      <View>
        {fromValue.map((from, i) => {
          return (
            <View key={i} style={styles.firstComponent}>
              <View style={styles.componentHeader}>
                <View style={styles.measureNameComponent}>
                  <Text style={styles.measureNameText}>
                    {unitData.measureName![i]}
                  </Text>
                </View>
                <AddUnit type="from" componentKey={i} />
              </View>
              <FromComponent
                measureType={measureType![i][0]}
                componentKey={i}
                filter={konvertor === "bmi" ? bmiFilter : []}
              />

              {platform === "ios" &&
                universalPicker.type !== "" &&
                universalPicker.activeFromComponent === i && (
                  <View style={[
                    {zIndex: universalPicker.calculatorTo ? 3 : 1}, //doesn't work
                    {zIndex: universalPicker.activeFromComponent === 0 ? 2 : 1},
                    styles.universalPickerContainer,
                    {
                      transform: [
                        { translateX: -125 },
                        { translateY: (universalPicker.type === "from" ? -125 : 0) },
                      ],
                    },
                    
                  ]}>
                    <UniversalPicker componentKey={i} top={0} filter={konvertor === "bmi" ? bmiFilter : []}/>
                  </View>
                )}
            </View>
          );
        })}
      </View>

      <View style={styles.toOuterContainer}>
        <View
          style={[
            styles.toContainer,
            { borderColor: theme.gray2, shadowColor: theme.gray2 },
          ]}>
            <Divider />
          <Text style={styles.result}>
            {Number(result).toFixed(settings.decimals)}
          </Text>
          {toUnit[0] !== "mVA" && (
            <UniversalPickerUnit unit={toUnit[0]} i={0} type={"to"} />
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
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
  descriptionOuterContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  descriptionInnerContainer: {
    width: "90%",
    minHeight: 50,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  descriptionText: {
    fontWeight: "bold",
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
  universalPickerContainer: {
    // backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: 1,
    flexDirection: "column",
  },
  toOuterContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  toContainer: {
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 20,
    width: "80%",
    paddingVertical: 15,
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  result: {
    fontSize: 24,
    paddingBottom: 5,
    paddingTop: 5,
    marginBottom: 5,
  },
});

export default Calculators;
