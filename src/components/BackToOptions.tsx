import { View, Pressable, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import BackButton from "./svgs/BackButton";

const BackToOptions = () => {
  const { dispatch } = useAppContext();

  const handleBack = () => {
    dispatch({
      type: "change_konvertor",
      payload: "",
    });
    dispatch({
      type: "change_tab",
      payload: "Home",
    })
  };

  return (
    <View>
      <Pressable onPress={handleBack}>
        <BackButton />
      </Pressable>
    </View>
  );
};

export default BackToOptions;
