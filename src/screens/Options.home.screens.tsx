import { View, Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

import unitList from "../data/unitList";

const Options = () => {
  const {state: {extendedList}, dispatch} = useAppContext()

  const handlePress = (measure: string) => {
    dispatch({
      type: "toggle_konvertor"
    })
    dispatch({
      type: "change_measure",
      payload: measure,
    })
  }

  return (
    <View>
      {unitList.map(unit => (
        <Pressable onPress={() => handlePress(unit.measure)}>
          <Text key={unit.measure}>{extendedList || unit.primary ? unit.measure : null}</Text>
        </Pressable>
        
      ))}
    </View>
  );
};

export default Options;
