import * as React from "react";

import { View, Pressable, StyleSheet } from "react-native";
import useAppContext from "../context/useAppContext";

import RemoveIcon from "./svgs/RemoveIcon";
import getTheme from "../context/theme";

type RemoveUnitProps = {
  componentKey?: number;
  type: "to" | "from";
  i: number;
};

const RemoveUnit = ({ componentKey, type, i }: RemoveUnitProps) => {
  const {
    state: { fromUnit, toUnit },
    dispatch,
  } = useAppContext();
  const theme = getTheme();

  let arrayLength = true;

  if (type === "from") {
    arrayLength = fromUnit[componentKey!].length > 1;
  }

  if (type === "to") {
    arrayLength = toUnit.length > 1;
  }

  return (
    <View style={styles.removeContainer}>
      <Pressable
        onPress={() =>
          dispatch({
            type: `remove_${type.toUpperCase()}_value`,
            payload: [componentKey!, i],
          })
        }
        disabled={!arrayLength}>
        {arrayLength && (
          <RemoveIcon
            size={30}
            background={theme.gray2}
            symbolColour={theme.mainColour}
          />
        )}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  removeContainer: {
    width: 40,
    heigth: 40,
    alignItems: "center",
    marginRight: 10,
  },
});

export default RemoveUnit;
