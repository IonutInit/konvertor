import * as React from "react";

import { Pressable, LayoutAnimation } from "react-native";
import { useState } from "react";

import useAppContext from "../context/useAppContext";

import ArithmeticOperatorButton from "./svgs/ArithmeticOperatorButton";

const ArithmeticOperator = () => {
  const { state, dispatch } = useAppContext();

  const [size, setSize] = useState(40);

  const handlePressIn = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSize(48);
  };

  const handlePressOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSize(40);
  };

  return (
    <Pressable
      onPress={() =>
        dispatch({
          type: "toggle_addition",
        })
      }
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <ArithmeticOperatorButton isAddition={state.addition} size={size} />
    </Pressable>
  );
};

export default ArithmeticOperator;
