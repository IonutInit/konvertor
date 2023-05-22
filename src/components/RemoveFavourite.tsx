import { Text, Pressable, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

type RemoveFavouriteType = {
  i: number;
};

const RemoveFavourite = ({ i }: RemoveFavouriteType) => {
  const { dispatch } = useAppContext();

  const handleRemoveFavourite = (i: number) => {
    dispatch({
      type: "remove_favourite",
      payload: i,
    });
  };

  return (
    <Pressable
      style={styles.closeButton}
      onPress={() => handleRemoveFavourite(i)}>
      <Text>X</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});

export default RemoveFavourite;
