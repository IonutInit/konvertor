import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";

import convert from "convert-units";

import useAppContext from "../context/useAppContext";

import unitList from "../data/unitList";

const Konvertor = () => {
  const { state, dispatch } = useAppContext();

  const handlePress = () => {
    dispatch({
      type: "toggle_konvertor",
    });
  };

  const measure = state.measureType;
  console.log(state);
  const result = convert(1).from(`${state.fromUnit}`).to(`${state.toUnit}`)
  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text>Back</Text>
      </Pressable>
      <Text>{measure}</Text>
      <Text>FROM: {state.fromUnit}</Text>
      <Text>TO: {state.toUnit}</Text>
      <Text>{result.toFixed(state.decimals)}</Text>
    </View>
  );
};

export default Konvertor;
