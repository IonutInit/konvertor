import * as React from "react";

import {
  View,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  PanResponder,
  LayoutAnimation,
  Modal,
} from "react-native";
import { useEffect, useState } from "react";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackToOptions";

import unitList from "../data/unitList";

import FromComponent from "../components/FromComponent";
import UniversalPicker from "../components/UniversalPicker";
import UniversalPickerUnit from "../components/UniversalPickerUnit";
import AddUnit from "../components/AddUnit";
import Divider from "../components/Divider";

import getCalculatorData from "../lib/getCalculatorData";
import handleDescriptionText from "../lib/handleDescriptionText";

// import calculatorWork from "../lib/calculatorWork"

import {
  calculateBmi,
  calculateArea,
  calculateSpeed,
  calculateDensity,
  calculateWeightLoss,
} from "../lib/calculatorWork";

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

  const [isToPicker, setIsToPicker] = useState(false);
  const [calculatorData, setCalculatorData] = useState(null)

  // similar functionality as in other screens, make into a hook
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponderCapture: (_, gestureState) => {
      const swipeThreshold = 50;

      if (gestureState.dx > swipeThreshold) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        dispatch({
          type: "change_konvertor",
          payload: "",
        });
        dispatch({
          type: "change_tab",
          payload: "Home",
        });
        return true;
      }
      return false;
    },
  });
  //------------------------

  const [unitData] = unitList.filter((unit) => unit.name === konvertor);
  const { measureType } = unitData;

  const theme = getTheme();

  useEffect(() => {
    getCalculatorData(dispatch, konvertor, settings.metric)
  }, []);

  // const calculatorData = {
  //   from0: fromValue[0],
  //   unit0: fromUnit[0],
  //   from1: fromValue[1],
  //   unit1: fromUnit[1],
  //   to: toUnit[0],
  // };

  const calculatorWork = (calculatorType: string) => {
    // if (calculatorType === "bmi") {
    //   return calculateBmi(calculatorData);
    // }

    if (calculatorType === "bmi") {
      return calculateBmi(fromValue[0], fromUnit[0], fromValue[1], fromUnit[1]);
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

  // const result = calculatorWork(calculatorData, konvertor);
  const result = calculatorWork(konvertor)

  const bmiFilter = ["cm", "in", "ft", "ft-us", "m", "oz", "lb", "kg"];

  const resultToDisplay = () => {
    if (konvertor === "bmi") {
      return Number(result).toFixed(1);
    }
    if (konvertor === "weightLoss") {
      const value = Number(result).toFixed(1);
      if (Number(value) === 0) {
        return "No change";
      }
      const description = Number(value) > 0 ? "lost" : "gained";
      return `${Math.abs(Number(value))}% ${description}`;
    }

    return Number(result).toFixed(settings.decimals);
  };

  return (
    <KeyboardAvoidingView
      behavior={platform === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={100}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        {...panResponder.panHandlers}>
        <View style={styles.contentContainer}>
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
                  <Text
                    style={[styles.descriptionText, { color: theme.gray1 }]}>
                    {handleDescriptionText(toUnit, true, true)}
                  </Text>
                </View>
              )}
            </View>
          </View>

          <View>
            {fromValue.map((_, i) => {
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
                    universalPicker.activeFromComponent === i &&
                    !universalPicker.calculatorTo && (
                      <View
                        style={[
                          styles.universalPickerContainer,
                          {
                            transform: [
                              { translateX: -125 },
                              {
                                translateY:
                                  universalPicker.type === "from" ? -125 : 0,
                              },
                            ],
                            zIndex: universalPicker.calculatorTo ? 3 : 1,
                          },
                        ]}>
                        <UniversalPicker
                          componentKey={i}
                          top={0}
                          filter={konvertor === "bmi" ? bmiFilter : []}
                        />
                      </View>
                    )}
                </View>
              );
            })}
          </View>

          <Modal visible={universalPicker.calculatorTo} transparent>
            <View style={styles.modalContainer}>
              <UniversalPicker componentKey={0} top={0} />
            </View>
          </Modal>
        </View>

        <View style={styles.toOuterContainer}>
          <View
            style={[
              styles.toContainer,
              { borderColor: theme.gray2, shadowColor: theme.gray2 },
            ]}>
            <Divider />
            <Text style={styles.result}>{resultToDisplay()}</Text>
            {toUnit[0] !== "mVA" && (
              <Pressable onPress={() => setIsToPicker(true)}>
                <UniversalPickerUnit
                  unit={toUnit[0]}
                  i={0}
                  type={"to"}
                  calculatorTo={true}
                />
              </Pressable>
            )}
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {},
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
    fontWeight: "bold",
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
  contentContainer: {},
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
    justifyContent: "flex-end",
    alignItems: "center",
  },
  universalPickerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    position: "absolute",
    top: "50%",
    left: "50%",
    flexDirection: "column",
  },
  toOuterContainer: {
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
    fontFamily: "Museo",
    paddingBottom: 5,
    paddingTop: 5,
    marginBottom: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 8,
  },
  closeButtonText: {
    color: "black",
    fontWeight: "bold",
  },
});

export default Calculators;
