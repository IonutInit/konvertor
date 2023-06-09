import * as React from "react";

import { Pressable, LayoutAnimation } from "react-native";

import useAppContext from "../context/useAppContext";

import addUnit from "../hooks/addUnit";

import AddButton from "./svgs/AddButton";

type AddUnitProps = {
  type: "to" | "from";
  componentKey?: number;
};

const AddUnit = ({ type, componentKey = 0 }: AddUnitProps) => {
  const { state, dispatch } = useAppContext();

  const handlePress = () => {
    addUnit(dispatch, state, type, componentKey);
  };

  return (
    <Pressable onPress={handlePress}>
      <AddButton />
    </Pressable>
  );
};

export default AddUnit;
