import { View, Pressable, Image, StyleSheet } from "react-native";
import { useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKey from "../data/storageKey";

import useAppContext from "../context/useAppContext";

import handleAddToFavourites from "../hooks/handleAddToFavourites";

import functionalIcons from "../iconMaps/functionalIconsMap";

const AddToFavourites = () => {
  const { state, dispatch } = useAppContext();

  const isFavourited = state.favourites.some(
    //the use of some fixes the diabled type complications below
    (favorite) =>
      favorite.from === state.fromUnit && favorite.to === state.toUnit
  );

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
      <Pressable onPress={() => handleAddToFavourites(dispatch, state)} disabled={isFavourited}>
        <Image
          source={isFavourited ? functionalIcons.isFavouriteButton : functionalIcons.favouriteButton}
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
