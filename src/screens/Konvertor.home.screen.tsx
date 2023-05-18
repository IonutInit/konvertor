import {
  View,
  ScrollView,
  Text,
  Pressable,
  StyleSheet,
  Image,
} from "react-native";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackFromKonvertor";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";

import add from "../assets/add.png";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();

  const addUnit = (type: "to" | "from") => {
    dispatch({
      type: `add_${type.toUpperCase()}_unit` as const,
      payload: state.toUnit[0],
    });
  };

  console.log(state);

  return (
    <ScrollView>
      <View style={styles.header}>
        <BackFromKonverter />
        <Pressable onPress={() => addUnit("from")}>
          <Image source={add} style={styles.icon} resizeMode="contain" />
        </Pressable>
      </View>

      <Text style={styles.title}>{state.measureType}</Text>

      <FromComponent />

      <ToComponent />
      <Pressable onPress={() => addUnit("to")}></Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  icon: {
    width: 32,
    height: 32,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
});

export default Konvertor;
