import { Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

import ArithmeticOperatorButton from "./svgs/ArithmeticOperatorButton";

const ArithmeticOperator = () => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable
      onPress={() =>
        dispatch({
          type: "toggle_addition",
        })
      }>
      <ArithmeticOperatorButton isAddition={state.addition} />
    </Pressable>
  );
};

export default ArithmeticOperator;
