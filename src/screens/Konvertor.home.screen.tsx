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
} from "react-native";

import useAppContext from "../context/useAppContext";

import platform from "../data/platform";

import BackToOptions from "../components/BackToOptions";
import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import ArithmeticOperator from "../components/ArithmeticOperator";
import Switch from "../components/Switch";
import Title from "../components/Title";
import UniversalPicker from "../components/UniversalPicker";
import Description from "../components/Description";

import getTheme from "../context/theme";

import convert from "../lib/converter-library/lib";
import "../lib/converter-library/convert.d.ts";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();

  const toUnitadditions = platform === "android" ? 2 : 3;

  const theme = getTheme();

  const defaultComponentKey = 0;

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

  // console.log(state);

  //console.log(convert(2).from("stone").to("kg"))

  return (
    <KeyboardAvoidingView
      behavior={platform === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={100}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        {...panResponder.panHandlers}>
        <View style={styles.header}>
          <BackToOptions />
          <ArithmeticOperator />
          <Switch />
        </View>

        <Title title={state.measureName[0].toString()} />

        <View style={styles.descriptionContainer}>
          <Description />
          <AddUnit type="from" />
        </View>

        <FromComponent
          measureType={state.measureType[0].toString()}
          componentKey={defaultComponentKey}
        />

        <View style={styles.toOuterContainer}>
          <View
            style={[
              styles.toContainer,
              { borderColor: theme.gray2, shadowColor: theme.gray2 },
            ]}>
            <View style={styles.toPickerContainer}>
              <ToComponent />
            </View>

            <View style={styles.addTo}>
              {state.toUnit.length < toUnitadditions && <AddUnit type="to" />}
            </View>
          </View>
        </View>

        {platform === "ios" && state.universalPicker.type !== "" && (
          <View style={styles.universalPickerContainer}>
            <UniversalPicker componentKey={defaultComponentKey} />
          </View>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  descriptionContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 13,
  },
  toOuterContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  toContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    marginBottom: 5,
    width: "98%",
    paddingTop: 15,
    borderWidth: 1,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
    shadowRadius: 2,
  },
  toPickerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
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
  addTo: {
    marginLeft: "auto",
  },
});

export default Konvertor;
