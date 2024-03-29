import {
  View,
  Pressable,
  Image,
  StyleSheet,
  LayoutAnimation,
} from "react-native";
import { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { favouritesKey } from "../data/storageKeys";

import useAppContext from "../context/useAppContext";

import handleAddToFavourites from "../hooks/handleAddToFavourites";
import handleRemoveFavourite from "../hooks/handleRemoveFavourite";

import * as React from "react";

import FavouritesIcon from "./svgs/FavouriteIcon";

const AddToFavourites = () => {
  const { state, dispatch } = useAppContext();

  const [size, setSize] = useState(32);

  const favoriteIndex = state.favourites.findIndex(
    (favorite) =>
      favorite.from.toString() === state.fromUnit.toString() &&
      favorite.to.toString() === state.toUnit.toString()
  );

  const handlePresIn = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSize(48);
  };

  const handlePressOut = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSize(32);
  };

  // to prevent addition of duplicates
  const handleOnPress = (i: number) => {
    if (i === -1) {
      handleAddToFavourites(dispatch, state);
    }
    handleRemoveFavourite(dispatch, favoriteIndex);
  };

  useEffect(() => {
    const retrieveData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(favouritesKey);
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
        onPressIn={handlePresIn}
        onPressOut={handlePressOut}>
        <FavouritesIcon isFavourite={favoriteIndex !== -1} size={size}/>
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
