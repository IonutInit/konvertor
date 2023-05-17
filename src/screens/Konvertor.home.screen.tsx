import { View, Text, Pressable, TextInput } from "react-native";
import { useState } from "react";

import convert from "convert-units";

import useAppContext from "../context/useAppContext";

import OptionsList from "../components/OptionsList";

import { OptionsStateType } from "../../types";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();
  const [number, setNumber] = useState(1);
  const [activateOptions, setActivateOptions] = useState(false);

  const handleInputChange = (input: string) => {
    // Remove any non-numeric characters
    //const cleanedText = text.replace(/[^0-9]/g, '').replace(/^0+/, '');
    const cleanedText = input.replace(/^0+/, "");
    setNumber(Number(cleanedText));
  };

  const handleBack = () => {
    dispatch({
      type: "toggle_konvertor",
    });
  };

  const handleOptionsList = (optionType: OptionsStateType) => {
    dispatch({
      type: "change_options_state",
      payload: optionType,
    });
  };

  const measure = state.measureType;
  const result = convert(number)
    .from(`${state.fromUnit}`)
    .to(`${state.toUnit}`);

  return (
    <View>
      <Pressable onPress={handleBack}>
        <Text>Back</Text>
      </Pressable>
      <Text>{measure}</Text>

      <Pressable onPress={() => handleOptionsList("from")}>
        <Text>FROM: {state.fromUnit}</Text>
      </Pressable>

      <Pressable>
        <Text onPress={() => handleOptionsList("to")}>TO: {state.toUnit}</Text>
      </Pressable>

      <Text>{result.toFixed(state.decimals)}</Text>

      <TextInput
        keyboardType="numeric"
        //value={number}
        onChangeText={handleInputChange}
      />
      {state.optionsState !== "" && <OptionsList />}
    </View>
  );
};

export default Konvertor;
