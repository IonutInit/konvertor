import { View, Pressable, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import functionalIcons from "../iconMaps/functionalIconsMap";

const BackToOptions = () => {
  const { dispatch } = useAppContext();

  const handleBack = () => {
    dispatch({
      type: "change_konvertor",
      payload: "",
    });
  };

  return (
    <View>
      <Pressable onPress={handleBack}>
        <Image
          source={functionalIcons.backButton}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
  },
});

export default BackToOptions;
