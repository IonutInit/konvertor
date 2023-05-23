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
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <BackToOptions />
          <ArithmeticOperator />
          <AddUnit type="from" />
        </View>

        <Title title={state.measureType} />

        <FromComponent measureType={state.measureType} />

        <View style={styles.content}>
          <View style={styles.flexContainer}>
            <View style={styles.toContainer}>
              <View style={styles.toPickerContainer}>
                <ToComponent />
              </View>
             
              <View style={styles.addTo}>
                {state.toUnit.length < 2 && <AddUnit type="to" />}
              </View>
            </View>
          </View>
        </View>

        {platform === "ios" && state.universalPicker.type !== "" && (
              <UniversalPicker />        
        )}

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  content: {
    flex: 1,
    position: "relative",
  },
  flexContainer: {
    flex: 1,
  },
  toContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    alignItems: "center",
    paddingBottom: 10,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  toPickerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  addTo: {
    marginLeft: "auto",
  },
});

export default Konvertor;
