import React, { useState, useEffect } from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";
import typing from "../lib/typing";
import getTheme from "../context/theme";

type TypingResult = {
  success: boolean;
  message: string;
  fromUnits?: string[];
  fromValues?: string[];
  measureType?: string | null;
  measureName?: string;
  toUnits?: string;
};

const TypingInput = () => {
  const { state, dispatch } = useAppContext();

  const theme = getTheme();

  const [typingInput, setTypingInput] = useState("")
  const [typingMessage, setTypingMessage] = useState("");
  let typingTimer: NodeJS.Timeout | null = null;

  const handleTextChange = (input: string) => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    setTypingInput(input);
  };

  const handleBlur = () => {
    typingTimer = setTimeout(() => {
      const result: TypingResult | "" = typing(typingInput);

      const success = result.success;

      if (!success) {
        setTypingMessage(result.message);
        return null
      } 

       dispatch({
        type: "dispatch_typing",
        payload: {
          konvertor: "konvertor",
          fromUnit: [result.fromUnits!, []]
,          fromValue: [result.fromValues!, []],
          measureType: [[result.measureType!], []]
,          measureName: [result.measureName!],
          toUnit: [result.toUnits!],
        },
      });
    }, 100);
  };

  return (
    <View style={styles.typingContainer}>
      <TextInput
        style={[styles.typingInput, { borderColor: theme.gray2 }]}
        onChangeText={(input) => handleTextChange(input)}
        onBlur={handleBlur}
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
