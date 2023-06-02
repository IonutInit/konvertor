import { Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

import addUnit from "../hooks/addUnit";

import AddButton from "./svgs/AddButton";

type AddUnitProps = {
  type: "to" | "from";
  componentKey?: number;
};

const AddUnit = ({ type, componentKey = 0 }: AddUnitProps) => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable onPress={() => addUnit(dispatch, state, type, componentKey)}>
      <AddButton />
    </Pressable>
  );
};

export default AddUnit;
