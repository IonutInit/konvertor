import * as React from "react";

import { View, Text, Image, StyleSheet } from "react-native";

import Divider from "./Divider";

import FavouritesIcon from "./svgs/FavouriteIcon";

const NoFavourites = () => {
  return (
    <View style={styles.noFavouritesContainer}>
      <Text style={styles.noFavouritesTitle}>No favourites here!</Text>
      <Divider />
      <Text style={styles.noFavouritesText}>
        Use the heart symbol at the top of any configuration you chose to save
        them for fast future use.
      </Text>
      <FavouritesIcon isFavourite />
    </View>
  );
};

const styles = StyleSheet.create({
  noFavouritesContainer: {
    alignItems: "center",
    paddingTop: 30,
  },
  noFavouritesTitle: {
    fontSize: 24,
  },
  noFavouritesText: {
    marginVertical: 10,
    paddingHorizontal: 40,
  },
});

export default NoFavourites;
