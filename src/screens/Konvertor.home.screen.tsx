import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackFromKonvertor";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";
import AddUnit from "../components/AddUnit";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();

  //console.log(state);

  return (
    <ScrollView>
      <View style={styles.header}>
        <BackFromKonverter />

        <Pressable
          onPress={() =>
            dispatch({
              type: "toggle_addition",
            })
          }>
          <Text>{state.addition ? "+" : "-"}</Text>
        </Pressable>

        <AddUnit type="from" />
      </View>

      <Text style={styles.title}>{state.measureType}</Text>

      <FromComponent />

      <ToComponent />

      <AddUnit type="to" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default Konvertor;
