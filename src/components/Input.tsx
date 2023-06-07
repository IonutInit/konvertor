import React, { useRef } from "react";
import { TextInput, StyleSheet, Keyboard } from "react-native";

type InputProps = {
  componentKey: number;
  handleInputChange: (input: string) => void;
  value: string;
  i: number;
};

const Input = ({ componentKey, handleInputChange, value, i }: InputProps) => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // TESTING OUT A TIMER
  // clearing any existing timers
  const handleInputFocus = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // starting a new timer to hide the keyboard after 5 seconds
    timerRef.current = setTimeout(() => {
      Keyboard.dismiss();
    }, 2500);
  };

  const handleInputChangeText = (input: string) => {
    // Clear any existing timers when the input text changes
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    handleInputChange(input);
  };
  //--------------------------------------

  // Hide the keyboard when the "return" key is pressed
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
      value={value}
      returnKeyType="done"
      editable
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "30%",
    // height: 50,
    fontSize: 24,
    marginLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default Input;