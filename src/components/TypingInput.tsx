import React, { useState } from "react";
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

import { isPad } from "../data/platform";

type TypingResult = {
  success: boolean;
  message: string;
  fromUnits?: string[];
  fromValues?: string[];
  measureType?: string | null;
  measureName?: string;
  toUnits?: any; //!!!
};

const examples = [
  "Ex: 1 m to ft",
  "Ex: 3 kg 245 gr to lb",
  "Press on the icon button if you want to make these messages disappear",
  "Convert your day into a good day!",
  "Check out the setting page for more instruction on the available features.",
  "This is an experimental feature, so expect some misses :)",
];

const TypingInput = () => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

  const [typingInput, setTypingInput] = useState("");
  const [homeTypingMessage, setHomeTypingMessage] = useState(false);
  const [keyboardSize, setKeyboardSize] = useState(32);

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

      // temporary measure: it will not return the proper units, but at least won't crash
      const toUnit = result.toUnits!.includes("km2", "m2", "mm2", "km3", "m3", "mm3") ? [result.toUnits!] : result.toUnits!

      dispatch({
        type: "dispatch_typing",
        payload: {
          konvertor: "konvertor",
          fromUnit: [result.fromUnits!, []],
          fromValue: [result.fromValues!, []],
          measureType: [[result.measureType!], []],
          measureName: [result.measureName!],
          toUnit,
          // toUnit: result.toUnits!,
          // toUnit: result.toUnits!.length > 1 ? [result.toUnits!] : result.toUnits!
        },
      });
      setKeyboardSize(32);
    }, 0);
  };

  return (
    <View style={styles.typingContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.keyboardIconContainer}>
          <Pressable
            onPress={() =>
              dispatch({
                type: "toggle_typing_input_messages",
              })
            }>
            <KeyboardIcon
              size={keyboardSize}
              mainColour={settings.typingInputMessages ? "#D1D1D1" : "#C8C8C8"}
            />
          </Pressable>
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

      {!homeTypingMessage && settings.typingInputMessages && (
        <View style={styles.exampleTextContainer}>
          <Text style={[styles.exampleText, { color: theme.gray2 }]}>
            {examples[Math.floor(Math.random() * examples.length)]}
          </Text>
        </View>
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
    marginBottom: 20,
    width: "100%",
    height: 50,
    alignContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  typingInput: {
    width: "90%",
    height: 40,
    fontSize: 18,
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 10,
    color: "grey",
  },
  typingMessageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardIconContainer: {
    position: "absolute",
    left: isPad ? "6%" : "7%",
    zIndex: 1,
  },
  clearTextIconContainer: {
    position: "absolute",
    left: isPad ? "90%" : "85%",
    zIndex: 1,
  },
  typingMessage: {
    fontSize: 10,
    fontWeight: "bold",
  },
  exampleTextContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    width: "80%",
    textAlign: "center",
    justifyContent: "center",
  },
  exampleText: {
    marginTop: 5,
    fontStyle: "italic",
    textAlign: "center",
  },
});

export default TypingInput;
