import { View, Text, Pressable, Image, StyleSheet } from "react-native";
import useAppContext from "../context/useAppContext";

import functionalIcons from "../iconMaps/functionalIconsMap";

type RemoveUnitProps = {
  type: "to" | "from";
  i: number;
};

const RemoveUnit = ({ type, i }: RemoveUnitProps) => {
  const { state, dispatch } = useAppContext();

  const arrayLength = state[`${type}Unit`].length > 1;

  return (
    <View style={styles.removeContainer}>
      <Pressable
        onPress={() =>
          dispatch({ type: `remove_${type.toUpperCase()}_value`, payload: i })
        }
        disabled={!arrayLength}>
        {arrayLength && (
          <Image source={functionalIcons.removeButton2} style={styles.icon} />
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
  text: {
    // fontSize: 18,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default RemoveUnit;
