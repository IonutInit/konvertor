import { View, Pressable, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import back from "../assets/back.png";

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
        <Image source={back} style={styles.icon} resizeMode="contain" />
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
