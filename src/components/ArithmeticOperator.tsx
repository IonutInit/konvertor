import { Pressable, Text } from "react-native";

import useAppContext from "../context/useAppContext";

const ArithmeticOperator = () => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable
      onPress={() =>
        dispatch({
          type: "toggle_addition",
        })
      }>
      <Text>{state.addition ? "+" : "-"}</Text>
    </Pressable>
  );
};

export default ArithmeticOperator;
