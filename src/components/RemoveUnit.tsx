import { View, Text, Pressable, StyleSheet } from "react-native";
import useAppContext from "../context/useAppContext";

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
        <Text style={styles.text}>{!arrayLength ? "" : "X"}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  removeContainer: {
    width: 20,
    alignItems: "center",
  },
  text: {
    // fontSize: 18,
  },
});

export default RemoveUnit;
