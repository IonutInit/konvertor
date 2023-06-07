import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

import useAppContext from "../context/useAppContext";

import typing from "../lib/typing";

import getTheme from "../context/theme";

type TypingResult = {
  success: boolean;
  message: string;
  fromUnits?: string[];
  fromValues?: string[];
  measureType?: string | null;
  toUnits?: string;
};

const TypingInput = () => {
  const {state, dispatch} = useAppContext()

  const theme = getTheme();

  const [typingMessage, setTypingMessage] = useState("");
  let typingTimer: NodeJS.Timeout | null = null;

  const handleTextChange = (input: string) => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    

    typingTimer = setTimeout(() => {
      const result: TypingResult | "" = typing(input);

      const success = result.success
      
      if(!success) {
        setTypingMessage(() => result.message);
      }

      const fromUnit = [result.fromUnits!, []]
      const fromValue = [result.fromValues!, []]
      const measureType = [[result.measureType!], []]
      const measureName = [measureType[0][0].replace(/^\w/, (c) => c.toUpperCase())]
      const toUnit = [result.toUnits!]
   
    dispatch({
      type: "dispatch_typing",
      payload: {
        fromUnit,
        fromValue,
        measureType,
        measureName,
        toUnit,
      }
    })  

    // dispatch({
    //   type: "change_konvertor",
    //   payload: "konvertor"
    // })
    }, 1000);
  };

  return (
    <View style={styles.typingContainer}>
      <TextInput
        style={[styles.typingInput, { borderColor: theme.gray2 }]}
        onChangeText={(input) => handleTextChange(input)}
        placeholder="2 ft 3 in to m"
        returnKeyType="done"
      />
      <Text style={styles.typingMessage}>{typingMessage}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typingContainer: {
    paddingTop: 20,
    marginBottom: 10,
    width: "100%",
    height: 50,
    alignContent: "center",
    alignItems: "center",
  },
  typingInput: {
    width: "90%",
    height: 40,
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "black",
  },
  typingMessage: {
    marginTop: 5,
  },
});

export default TypingInput;
