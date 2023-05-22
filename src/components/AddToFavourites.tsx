import { View, Pressable, Image, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import favourites from "../assets/favourites.png";
import favourited from "../assets/favourited.png";

const AddToFavourites = () => {
  const { state, dispatch } = useAppContext();

  const isFavourited = state.favourites.some(
    //use of some fixes the diabled type complications below
    (favorite) =>
      favorite.from === state.fromUnit && favorite.to === state.toUnit
  );

  const handleAddToFavourites = () => {
    dispatch({
      type: "add_to_favourites",
      payload: {
        from: state.fromUnit,
        to: state.toUnit,
      },
    });
  };

  return (
    <View style={styles.iconContainer}>
      <Pressable onPress={handleAddToFavourites} disabled={isFavourited}>
        <Image
          source={isFavourited ? favourited : favourites}
          style={styles.icon}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 20,
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default AddToFavourites;
