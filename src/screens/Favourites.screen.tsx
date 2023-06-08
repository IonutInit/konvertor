import React, { useState, useEffect } from "react";

import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";

import getLocalData from "../lib/getLocalData";
import { favouritesKey } from "../data/storageKeys";

import useAppContext from "../context/useAppContext";

import BackButton from "../components/svgs/BackButton";
import RemoveFavourite from "../components/RemoveFavourite";

import handleFavouriteText from "../lib/handleFavouriteText";
import handleFavouriteDispatch from "../lib/handleFavouriteDispatch";

import useGetInFocus from "../hooks/useGetInFocus";

import NoFavourites from "../components/NoFavourites";

import unitList from "../data/unitList";

import MeasurementIcons from "../components/svgs/MeasurementIcons";

import getTheme from "../context/theme";

import { FavouriteType } from "../../types";

const Favourites = ({ navigation }: any) => {
  const {
    state: { favourites, init },
    dispatch,
  } = useAppContext();

  const [favouritesFromStorage, setFavouritesFromStorage] = useState<
    FavouriteType[]
  >([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const data = await getLocalData(favouritesKey);
      if (data) {
        setFavouritesFromStorage(data as FavouriteType[]);
      }
    };
    fetchFavourites();
  }, []);

  useGetInFocus(navigation, dispatch, "Favourites");

  const whatToMap = init === 0 ? favouritesFromStorage : favourites;

  const handleLaunchFavourite = (
    measureType: string[],
    measureName: string[],
    fromUnit: string[][],
    toUnit: string
  ) => {
    handleFavouriteDispatch(
      dispatch,
      measureType,
      measureName,
      fromUnit,
      toUnit
    );
    navigation.jumpTo("Home");
  };

  const theme = getTheme();

  if (whatToMap.length === 0) {
    return <NoFavourites />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.jumpTo("Home")}>
          <BackButton />
        </Pressable>
      </View>

      <View>
        {whatToMap.map((fav, index) => {
          const [findName] = unitList.filter(
            (unit) => fav.measureType[0].toString() === unit.name
          );

          return (
            <View
              style={[
                styles.favourite,
                {
                  backgroundColor: theme.mainColour,
                  borderColor: theme.mainColour,
                },
              ]}
              key={index}>
              <Pressable
                onPress={() =>
                  handleLaunchFavourite(
                    fav.measureType[0],
                    [findName.name],
                    fav.from,
                    fav.to[0]
                  )
                }
                style={styles.favouriteInnerContainer}>
                <MeasurementIcons
                  type={fav.measureType[0][0]}
                  mainColour={theme.gray1}
                  secondaryColour={theme.gray1}
                />
                <View>
                  <Text style={[styles.favouriteText, { color: theme.gray1 }]}>
                    {handleFavouriteText(fav.from[0], [fav.from[0], fav.to])}
                  </Text>
                  <Text style={[styles.favouriteText, { color: theme.gray1 }]}>
                    {handleFavouriteText(fav.to, [fav.from[0], fav.to])}
                  </Text>
                </View>
              </Pressable>

              {/* avoiding the bug that if favourites in state is empty, all get favourites from storage get removed at once -- see reducer */}
              {favourites.length !== 0 && <RemoveFavourite i={index} />}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignContent: "flex-start",
    padding: 15,
  },
  favourite: {
    width: 250,
    height: 80,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3, // for Android shadow
  },
  favouriteInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  favouriteText: {
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Favourites;
