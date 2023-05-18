import { View, Text, Pressable, TextInput } from "react-native";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackFromKonvertor";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();

  const addUnit = (type: "to" | "from") => {
    dispatch({
      type: `add_${type.toUpperCase()}_unit` as const,
      payload: state.toUnit[0],
    });
  };
  
  console.log(state)

  return (
    <View>
      <BackFromKonverter />

      <Text>{state.measureType}</Text>

      <FromComponent />

      <Pressable onPress={() => addUnit("from")}>
        <Text>ADD</Text>
      </Pressable>

      <Text>--------------</Text>
      <Text>--------------</Text>
      <Text>--------------</Text>
      <Text>--------------</Text>

      <ToComponent />
      <Pressable onPress={() => addUnit("to")}>
        <Text>ADD</Text>
      </Pressable>

    </View>
  );
};

export default Konvertor;
