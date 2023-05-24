import { Pressable, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import functionalIcons from "../iconMaps/functionalIconsMap";

type RemoveFavouriteType = {
  i: number;
};

const RemoveFavourite = ({ i }: RemoveFavouriteType) => {
  const {
    dispatch,
    state: { favourites },
  } = useAppContext();

  const handleRemoveFavourite = (i: number) => {
    dispatch({
      type: "remove_favourite",
      payload: i,
    });
  };

  return (
    <Pressable
      style={styles.closeButton}
      onPress={() => handleRemoveFavourite(i)}
      //avoiding the bug that if favourites in state is empty, all get favourites from storage get removed at once -- see reducer
      disabled={favourites.length === 0}>
      <Image source={functionalIcons.removeButton1} style={styles.icon} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 7,
    right: 7,
  },
  icon: {
    width: 28,
    height: 28,
  },
});

export default RemoveFavourite;
