import { View, Text, Pressable, TextInput } from "react-native";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackFromKonvertor";

import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();

  const addFrom = () => {
    dispatch({
      type: "add_FROM_unit",
      payload: state.fromUnit[0],
    });
  };

  return (
    <View>
      <BackFromKonverter />

      <Text>{state.measureType}</Text>

      <FromComponent />

      <Pressable onPress={addFrom}>
        <Text>ADD</Text>
      </Pressable>

      <ToComponent />

      {/* <Text>{result.toFixed(state.decimals)}</Text> */}
    </View>
  );
};

export default Konvertor;
