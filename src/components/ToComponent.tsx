import { Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

import handleOptionsList from "../lib/handleOptionsList";

const ToComponent = () => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable>
      <Text onPress={() => handleOptionsList(dispatch, "to")}>
        TO: {state.toUnit}
      </Text>
    </Pressable>
  );
};

export default ToComponent;
