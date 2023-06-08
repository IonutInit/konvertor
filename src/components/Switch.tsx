import React, { useState } from "react";

import { Pressable, LayoutAnimation } from "react-native";
import useAppContext from "../context/useAppContext";
import SwitchButton from "./svgs/SwitchButton";

const Switch = () => {
  const { state, dispatch } = useAppContext();

  const [size, setSize] = useState(32);

  const handleSwitch = () => {
    dispatch({
      type: "switch",
      payload: {
        sourceFromUnit: state.fromUnit[0],
        sourceToUnit: state.toUnit,
      },
    });
  };

  const handlePressIn = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSize(40);
  };

  const handlePressOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSize(32);
  };

  return (
    <Pressable
      onPress={handleSwitch}
      disabled={state.fromUnit[0].length > 3}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}>
      <SwitchButton isActive={state.fromUnit[0].length <= 3} size={size} />
    </Pressable>
  );
};

export default Switch;
