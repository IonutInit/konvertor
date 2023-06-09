import React, { useRef, useState } from "react";
import { TextInput, StyleSheet, Keyboard } from "react-native";

import getTheme from "../context/theme";

type InputProps = {
  componentKey: number;
  handleInputChange: (input: string) => void;
  value: string;
  i: number;
};

const Input = ({ handleInputChange, value, i }: InputProps) => {  
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [interactedWith, setInteractedWith] = useState(0)

  const theme = getTheme()

  // TESTING OUT A TIMER
  // clears any existing timers
  const handleInputFocus = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // starts a new timer to hide the keyboard after 5 seconds
    timerRef.current = setTimeout(() => {
      Keyboard.dismiss();
    }, 2500);
       setInteractedWith(() => interactedWith + 1)
  };

  const handleInputChangeText = (input: string) => {
    // clears any existing timers when the input text changes
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
      setInteractedWith(() => interactedWith + 1)
    handleInputChange(input);
  };
  //--------------------------------------

  // hides the keyboard when the "return" key is pressed
  const handleInputSubmitEditing = () => {
    Keyboard.dismiss();
  };

   return (
    <TextInput
      style={styles.input}
      onChangeText={(input) => handleInputChangeText(input)}
      onFocus={handleInputFocus}
      onSubmitEditing={handleInputSubmitEditing}
      keyboardType="numeric"
      key={i}
      value={interactedWith === 1 ? "" : value}
      returnKeyType="done"
      editable
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "30%",
    fontFamily: "Museo",
    fontSize: 24,
    marginLeft: 25,
    // borderBottomWidth: 1,
  },
});

export default Input;
