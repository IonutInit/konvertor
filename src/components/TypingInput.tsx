import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  LayoutAnimation,
  Pressable,
} from "react-native";

import useAppContext from "../context/useAppContext";
import typing from "../lib/typing";
import getTheme from "../context/theme";

import KeyboardIcon from "../components/svgs/KeyboardIcon";
import RemoveIcon from "./svgs/RemoveIcon";

type TypingResult = {
  success: boolean;
  message: string;
  fromUnits?: string[];
  fromValues?: string[];
  measureType?: string | null;
  measureName?: string;
  toUnits?: string;
};

const examples = ["1 m ft", "3 kg 245 gr to lb"];

const TypingInput = () => {
  const { state, dispatch } = useAppContext();

  const theme = getTheme();

  const [typingInput, setTypingInput] = useState("");
  const [homeTypingMessage, setHomeTypingMessage] = useState(false);
  const [keyboardSize, setKeyboardSize] = useState(32);

  const [showExamples, setShowExamples] = useState(true);

  let typingTimer: NodeJS.Timeout | null = null;

  const handleTextChange = (input: string) => {
    if (typingTimer) {
      clearTimeout(typingTimer);
    }
    setTypingInput(input);
  };

  const handleClearText = () => {
    setTypingInput("");
  };

  const handleBlur = () => {
    typingTimer = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setKeyboardSize(32);
      const result: TypingResult | "" = typing(typingInput);

      const success = result.success;

      if (!success) {
        setHomeTypingMessage(true);
        setTimeout(() => {
          setHomeTypingMessage(false);
        }, 2000);
        return false;
      }

      dispatch({
        type: "dispatch_typing",
        payload: {
          konvertor: "konvertor",
          fromUnit: [result.fromUnits!, []],
          fromValue: [result.fromValues!, []],
          measureType: [[result.measureType!], []],
          measureName: [result.measureName!],
          toUnit: [result.toUnits!],
        },
      });

      setKeyboardSize(32);
    }, 100);
  };

  return (
    <View style={styles.typingContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.keyboardIconContainer}>
          <KeyboardIcon size={keyboardSize} mainColour={theme.gray2} />
        </View>

        <View style={styles.clearTextIconContainer}>
          <Pressable onPress={handleClearText}>
            <RemoveIcon
              size={homeTypingMessage ? 20 : 16}
              background={
                homeTypingMessage ? theme.secondaryColour : theme.gray2
              }
              symbolColour={theme.gray1}
            />
          </Pressable>
        </View>

        <TextInput
          style={[
            styles.typingInput,
            { borderColor: theme.gray2 },
            { paddingLeft: 40 },
          ]}
          value={typingInput}
          onChangeText={(input) => handleTextChange(input)}
          onBlur={handleBlur}
          onFocus={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            setKeyboardSize(28);
          }}
          placeholder="Type or speak"
          returnKeyType="done"
        />
      </View>

      {!homeTypingMessage && (
        <Text
          style={[
            { marginTop: 5 },
            { color: theme.gray2 },
            { fontStyle: "italic" },
          ]}>
          Ex: {examples[Math.floor(Math.random() * examples.length)]}
        </Text>
      )}

      {homeTypingMessage && (
        <View style={styles.typingMessageContainer}>
          <Text
            style={[
              styles.typingMessage,
              { marginTop: 5 },
              { color: theme.secondaryColour },
            ]}>
            Hm... I can't quite get that.
          </Text>
          <Text
            style={[
              styles.typingMessage,
              { marginBottom: 5 },
              { color: theme.secondaryColour },
            ]}>
            Please try again.
          </Text>
        </View>
      )}
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
    // backgroundColor: "red"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    // height: 40,
    // borderRadius: 8,
    // borderWidth: 1,
    // paddingHorizontal: 10,
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
  typingMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardIconContainer: {
    position: "absolute",
    left: "7%",
  },
  clearTextIconContainer: {
    position: "absolute",
    left: "85%",
    zIndex: 1,
  },
  typingMessage: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default TypingInput;
