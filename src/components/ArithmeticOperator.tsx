import { Pressable, Image } from "react-native";

import useAppContext from "../context/useAppContext";

import functionalIcons from "../iconMaps/functionalIconsMap";

const ArithmeticOperator = () => {
  const { state, dispatch } = useAppContext();

  return (
    <Pressable
      onPress={() =>
        dispatch({
          type: "toggle_addition",
        })
      }>
      <Image
        source={
          state.addition
            ? functionalIcons.additionButton
            : functionalIcons.subtractionButton
        }
      />
    </Pressable>
  );
};

export default ArithmeticOperator;
