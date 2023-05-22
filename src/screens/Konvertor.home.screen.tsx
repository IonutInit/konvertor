import { View, ScrollView, Text, Pressable, StyleSheet, KeyboardAvoidingView } from "react-native";

import useAppContext from "../context/useAppContext";

import BackToOptions from "../components/BackToOptions";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";
import ArithmeticOperator from "../components/ArithmeticOperator";
import Title from "../components/Title";

import platform from "../data/platform";
import UniversalPicker from "../components/UniversalPicker";

const Konvertor = () => {
  const { state } = useAppContext();

  console.log(state);

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <View style={styles.header}>
          <BackToOptions />
          <ArithmeticOperator />
          <AddUnit type="from" />
        </View>

        <Title title={state.measureType} />

        <FromComponent measureType={state.measureType}/>

        <ScrollView>
          {/* Other content goes here */}
        </ScrollView>

        <View style={styles.toContainer}>
          <View style={styles.toPickerContainer}>
                <ToComponent />
          </View>
      
          <View style={styles.addTo}>
            {state.toUnit.length < 2 && <AddUnit type="to" />}
          </View>
        </View>

        {platform === "ios" && state.universalPicker.type !== "" && (
          <UniversalPicker />
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  toContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingBottom: 10,
  },
  toPickerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  addTo: {
    marginLeft: "auto",
  }
});

export default Konvertor;