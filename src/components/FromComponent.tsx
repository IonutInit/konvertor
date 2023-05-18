import { Text, Pressable, StyleSheet } from "react-native";
import {useState} from "react";

import useAppContext from "../context/useAppContext";

import Input from "./Input";

import handleOptionsList from "../lib/handleOptionsList";
import handleInputChange from "../lib/handleInputChange";

const FromComponent = () => {
  const { state, dispatch } = useAppContext();
 
  const numberOfElements = state.fromUnit.length;


  const elements = Array.from({ length: numberOfElements }, (_, i) => (
    <>
      <Pressable
        key={i}
        onPress={() => handleOptionsList(dispatch, "from")}
        style={styles.component}>
        <Text>FROM: {state.fromUnit[i]}</Text>
      </Pressable>

      <Input handleInputChange={(input: string) => handleInputChange(dispatch, input, i)}/>
      
      <Text>{state.fromValue[i]}</Text>
    </>
  ));

  return <>{elements}</>;
};


const styles = StyleSheet.create({
  component: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 5,
    padding: 10,
  },
});

export default FromComponent;
