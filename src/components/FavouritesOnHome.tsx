import * as React from "react";
import { ScrollView, View, Pressable, Text, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import handleFavouriteDispatch from "../lib/handleFavouriteDispatch";
import handleFavouriteText from "../hooks/handleFavouriteText";

import MeasurementIcons from "./svgs/MeasurementIcons";

import getTheme from "../context/theme";

import { FavouriteType } from "../../types";

type FavouritesOnHomeType = {
  whatFavouritesToMap: FavouriteType[];
  unitList: any; // !!!
};

const FavouritesOnHome = ({
  whatFavouritesToMap,
  unitList,
}: FavouritesOnHomeType) => {
  const { dispatch } = useAppContext();

  const theme = getTheme();

  const handleLaunchFavourite = (
    measureType: string[],
    measureName: string[],
    fromUnit: string[][],
    toUnit: string
  ) => {
    dispatch({
      type: "change_konvertor",
      payload: "konvertor",
    });

    handleFavouriteDispatch(
      dispatch,
      measureType,
      measureName,
      fromUnit,
      toUnit
    );
  };

  return (
    <ScrollView
      contentContainerStyle={styles.favScrollContainer}
      horizontal
      showsHorizontalScrollIndicator={false}>
      {whatFavouritesToMap.map((fav, index) => {
        const [findName] = unitList.filter(
          (unit) => fav.measureType[0].toString() === unit.name
        );

        return (
          <View style={styles.favOuterContainer} key={index}>
            <View
              style={[
                styles.favContainer,
                { backgroundColor: theme.mainColour },
              ]}>
              <Pressable
                onPress={() =>
                  handleLaunchFavourite(
                    fav.measureType[0],
                    [findName.name],
                    fav.from,
                    fav.to[0]
                  )
                }>
                <View style={styles.favIconContainer}>
                  <MeasurementIcons
                    type={findName.name}
                    mainColour={theme.gray1}
                    size={30}
                  />
                  <View style={styles.favTextContainer}>
                    <Text style={[styles.favText, { color: theme.gray1 }]}>
                      {handleFavouriteText(fav.from[0], [fav.from[0], fav.to])}
                    </Text>
                    <Text style={[styles.favText, { color: theme.gray1 }]}>
                      {handleFavouriteText(fav.to, [fav.from[0], fav.to])}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  favScrollContainer: {
    paddingTop: 20,
  },

  favOuterContainer: {
    flexDirection: "row",
    gap: 10,
  },

  favContainer: {
    width: 85,
    height: 90,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: "gray",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3, // for Android shadow
  },
  favIconContainer: {
    position: "absolute",
    top: 5,
    left: 10,
  },
  favTextContainer: {
    paddingTop: 5,
    paddingLeft: 1,
  },
  favText: {
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default FavouritesOnHome;
