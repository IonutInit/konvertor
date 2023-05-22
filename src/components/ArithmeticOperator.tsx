import { Pressable, Text, StyleSheet } from "react-native";

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
      <Text style={styles.text}>{state.addition ? "+" : "-"}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 32,
  },
});

export default ArithmeticOperator;
