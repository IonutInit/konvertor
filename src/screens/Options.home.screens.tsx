import { View, Text, Pressable } from "react-native";
import { useEffect } from "react";

import useAppContext from "../context/useAppContext";

import unitList from "../data/unitList";

const Options = () => {
  const {
    state: { extendedList },
    state,
    dispatch,
  } = useAppContext();

  const handlePress = (measure: string) => {
    const [defaultFrom, defaultTo] = state.metric ? [0, 1] : [1, 0];
    const targetUnit = unitList.find((unit) => unit.measure === measure)!;

    dispatch({
      type: "toggle_konvertor",
    });

    dispatch({
      type: "change_measure",
      payload: measure,
    });

    dispatch({
      type: "add_FROM_unit",
      payload: targetUnit.default[defaultFrom],
    });

    dispatch({
      type: "add_TO_unit",
      payload: targetUnit.default[defaultTo],
    });
  };

  return (
    <View>
      {unitList.map((unit) => (
        <Pressable key={unit.measure} onPress={() => handlePress(unit.measure)}>
          <Text>{extendedList || unit.primary ? unit.measure : null}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Options;
