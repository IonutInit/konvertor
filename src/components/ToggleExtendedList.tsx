import { View, Pressable, Text, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import theme from "../theme";

const ToggleExtendedList = () => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();

  const handleToggleExtendedList = () => {
    dispatch({
      type: "toggle_extendedList",
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.pressable} onPress={handleToggleExtendedList}>
        <Text style={styles.text}>
          Show {settings.extendedList ? "less" : "more"}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pressable: {
    width: 130,
    height: 40,
    backgroundColor: theme.mainColour,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: theme.gray1
  }
});

export default ToggleExtendedList;
