import { Text, Pressable } from "react-native";

import useAppContext from "../context/useAppContext";

const BackFromKonverter = () => {
  const { dispatch } = useAppContext();

  const handleBack = () => {
    dispatch({
      type: "toggle_konvertor",
    });
  };

  return (
    <Pressable onPress={handleBack}>
      <Text>Back</Text>
    </Pressable>
  );
};

export default BackFromKonverter;
