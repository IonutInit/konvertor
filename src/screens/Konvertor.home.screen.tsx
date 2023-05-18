import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";

import convert from "convert-units";

import useAppContext from "../context/useAppContext";

import BackFromKonverter from "../components/BackFromKonvertor";
import OptionsList from "../components/OptionsList";

import Input from "../components/Input";
import FromComponent from "../components/FromComponent";
import ToComponent from "../components/ToComponent";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();
  const [number, setNumber] = useState(1);

  // const handleInputChange = (input: string) => {
  //   const cleanedText = input.replace(/^0+/, "");
  //   setNumber(Number(cleanedText));
  // };

  const addFrom = () => {
    dispatch({
      type: "add_FROM_unit",
      payload: state.fromUnit[0],
    });
  };

  // const measure = state.measureType;
  // const result = convert(number)
  //   .from(`${state.fromUnit}`)
  //   .to(`${state.toUnit}`);

  return (
    <View>
      <BackFromKonverter />

      <Text>{state.measureType}</Text>

      <FromComponent />

      <Pressable onPress={addFrom}>ADD</Pressable>

      <ToComponent />

      {/* <Text>{result.toFixed(state.decimals)}</Text> */}

      {/* <Input handleInputChange={handleInputChange} /> */}

      {/* {state.optionsState !== "" && <OptionsList />} */}
    </View>
  );
};

export default Konvertor;
