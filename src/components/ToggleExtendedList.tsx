import { View, Pressable, Text, Image, StyleSheet, LayoutAnimation } from "react-native";

import useAppContext from "../context/useAppContext";

import getTheme from "../context/theme";

const ToggleExtendedList = () => {
  const {
    state: { settings },
    dispatch,
  } = useAppContext();

  const theme = getTheme();

  const handleToggleExtendedList = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    dispatch({
      type: "toggle_extendedList",
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.pressable, { backgroundColor: theme.mainColour }]}
        onPress={handleToggleExtendedList}>
        <Text
          style={[
            { color: theme.gray1 },
            { fontWeight: "bold" },
            { letterSpacing: 0.5 },
          ]}>
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
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ToggleExtendedList;
