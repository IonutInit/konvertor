import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
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

import convert from "convert-units"

import getCalculatorData from "../lib/getCalculatorData";
import handleDescriptionText from "../lib/handleDescriptionText";

import { calculateBmi, calculateArea, calculateSpeed, calculateDensity, calculateWeightLoss } from "../lib/calculators";

import PickerComponent from "../components/Picker";
import getTheme from "../context/theme";

import platform from "../data/platform";

const Calculators = () => {
  const {
    state: { fromUnit, fromValue, toUnit, konvertor, universalPicker, settings },
    state,
    dispatch,
  } = useAppContext();

  const [unitData] = unitList.filter((unit) => unit.name === konvertor);
  const { measureType } = unitData;

  const theme = getTheme();

  useEffect(() => {
    getCalculatorData(dispatch, konvertor);
  }, []);

  const getResult = (calculatorType: string) => {
    if(calculatorType === "bmi") {
      return calculateBmi(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1])
    }
    if(calculatorType === "areaCalc" && toUnit.length !== 0) {    
          return calculateArea(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1], toUnit[0])   
    }

    if(calculatorType === "speedCalc" && toUnit.length !== 0) {    
      return calculateSpeed(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1], toUnit[0])   
}

if(calculatorType === "densityCalc" && toUnit.length !== 0) {    
  return calculateDensity(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1], toUnit[0])   
}
if(calculatorType === "weightLoss" && toUnit.length !== 0) {    
  return calculateWeightLoss(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1])   
}
  }


  const result = getResult(konvertor)



  const bmiHeigthFilter = ["cm", "in", "ft", "ft-us", "yd", "m"];
  const bmiWeigthFilter = ["oz", "lb", "kg"];

  const bmiFilter = ["cm", "in", "ft", "ft-us", "yd", "m", "oz", "lb", "kg"];

  console.log(state)

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.header}>
        <BackFromKonverter />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{unitData.displayName}</Text>
        </View>
      </View>

      
      <View style={styles.descriptionOuterContainer}>
              <View style={[styles.descriptionInnerContainer, {backgroundColor: theme.mainColour}]}>
        <Text style={[styles.descriptionText, {color: theme.gray1}]}>{handleDescriptionText(fromUnit[0], true, true)}</Text>
        <Text style={[styles.descriptionText, {color: theme.gray1}]}>{handleDescriptionText(fromUnit[1], true, true)}</Text>
       { !["bmi", "weightLoss"].includes(unitData.name) &&
       <View>
               <View style={[{height: 1}, {width: "100%"}, {backgroundColor: theme.gray1}]}></View>
        <Text style={[styles.descriptionText, {color: theme.gray1}]}>{handleDescriptionText(toUnit, true, true)}</Text>
       </View>
}
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
              />
               
                  {platform === "ios" &&
                    universalPicker.type !== "" &&
                    universalPicker.activeFromComponent === i && (
                       <View style={styles.universalPickerContainer}>
                      <UniversalPicker componentKey={i} />
                       </View>  
                    )}             
     
            </View>
          );
        })}
      </View>


      <View style={styles.toOuterContainer}>
      {toUnit[0] !== "" && (
        <View style={styles.toContainer}>
          <Text style={styles.result}>{Number(result).toFixed(settings.decimals)}</Text>
          <UniversalPickerUnit unit={toUnit[0]} i={0} type={"to"} />
        </View>
      )}      
      </View>


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
  toOuterContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  toContainer: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    width: "95%",
    paddingTop: 15,
    borderWidth: 1,
    // borderColor: theme.gray1,
    borderRadius: 10,
    zIndex: 1,
    // shadowColor: theme.gray3,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.6,
    // shadowRadius: 2,
  },
  result: {
    fontSize: 32,
  },
});

export default Calculators;
