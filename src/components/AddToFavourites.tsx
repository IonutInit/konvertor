import { View, Pressable, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKey from "../data/storageKey";

import useAppContext from "../context/useAppContext";

import handleAddToFavourites from "../hooks/handleAddToFavourites";
import handleRemoveFavourite from "../hooks/handleRemoveFavourite";

import functionalIcons from "../iconMaps/functionalIconsMap";

import FavouritesIcon from "./svgs/FavouriteIcon";

const AddToFavourites = () => {
  const { state, dispatch } = useAppContext();

  const favoriteIndex = state.favourites.findIndex(
    (favorite) =>
      favorite.from.toString() === state.fromUnit.toString() &&
      favorite.to.toString() === state.toUnit.toString()
  );

  // to prevent addition of duplicates
  const handleOnPress = (i: number) => {
    if (i === -1) {
      handleAddToFavourites(dispatch, state);
    }
  };

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(storageKey);
        const storedFavourites = JSON.parse(jsonValue!);

        if (storedFavourites) {
          dispatch({
            type: "initialise_favourites",
            payload: storedFavourites,
          });
        }
      } catch (e) {}
    };
    retrieveData();
  }, []);

  return (
    <View style={styles.iconContainer}>
      <Pressable
        onPress={() => handleOnPress(favoriteIndex)}
        onLongPress={() => handleRemoveFavourite(dispatch, favoriteIndex)}
        // disabled={favoriteIndex !== -1}
      >
        <FavouritesIcon isFavourite={favoriteIndex !== -1} />
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
