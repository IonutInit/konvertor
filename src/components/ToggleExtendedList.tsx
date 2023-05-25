import { View, Pressable, Text, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import functionalIcons from "../iconMaps/functionalIconsMap";

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
        <Image
          source={
            settings.extendedList
              ? functionalIcons.lessButton
              : functionalIcons.moreButton
          }
          style={styles.icon}
        />

        {/* <Text style={styles.text}>
          Show {settings.extendedList ? "less" : "more"}
        </Text> */}
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  pressable: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 130,
    height: 40,
  },
});

export default ToggleExtendedList;
