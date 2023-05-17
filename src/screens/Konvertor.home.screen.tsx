import { View, Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

const Konvertor = () => {  
  const {state, dispatch} = useAppContext()

  const handlePress = () => {
    dispatch({
      type: "toggle_konvertor"
    })
  }

  const measure = state.measureType

  return (
    <View>
      <Pressable onPress={handlePress}>
        <Text>Back</Text>
      </Pressable>
      <Text>{measure}</Text>
    </View>
  );
};

export default Konvertor;
