import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";

import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKey from "../data/storageKey";

import useAppContext from "../context/useAppContext";

import BackButton from "../components/svgs/BackButton";
import RemoveFavourite from "../components/RemoveFavourite";

import handleFavouriteText from "../lib/handleFavouriteText";

import NoFavourites from "../components/NoFavourites";

import MeasurementIcons from "../components/svgs/MeasurementIcons";

import theme from "../theme";

import { FavouriteType } from "../../types";

const Favourites = ({ navigation }: any) => {
  const [favouritesFromStorage, setFavouritesFromStorage] = useState<
    FavouriteType[]
  >([]);

  const {
    state: { favourites, init },
    dispatch,
  } = useAppContext();

  const getData = async (): Promise<FavouriteType[] | null> => {
    try {
      const favouritesJSON = await AsyncStorage.getItem(storageKey);
      if (favouritesJSON) {
        return JSON.parse(favouritesJSON);
      }
    } catch {}

    return null;
  };

  useEffect(() => {
    const fetchFavourites = async () => {
      const data = await getData();
      if (data) {
        setFavouritesFromStorage(data);
      }
    };
    fetchFavourites();
  }, []);

  const whatToMap = init === 0 ? favouritesFromStorage : favourites;

  const handleLaunchFavourite = (
    measureType: string,
    fromUnit: string[],
    toUnit: string[]
  ) => {
    dispatch({
      type: "change_konvertor",
      payload: "konvertor",
    });
    dispatch({
      type: "launch_favourite",
      payload: {
        measureType,
        fromUnit,
        toUnit,
      },
    });
    navigation.jumpTo("Home");
  };

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
        {whatToMap.map((fav, index) => (
          <View style={styles.favourite} key={index}>
            <Pressable
              onPress={() =>
                handleLaunchFavourite(fav.measureType, fav.from, fav.to)
              }
              style={styles.favouriteInnerContainer}>
              <MeasurementIcons
                type={fav.measureType}
                mainColour={theme.gray1}
                secondaryColour={theme.gray1}
              />
              <View>
                <Text style={styles.favouriteText}>
                  {handleFavouriteText(fav.from, [fav.from, fav.to])}
                </Text>
                <Text style={styles.favouriteText}>
                  {handleFavouriteText(fav.to, [fav.from, fav.to])}
                </Text>
              </View>
            </Pressable>

            {/* avoiding the bug that if favourites in state is empty, all get favourites from storage get removed at once -- see reducer */}
            {favourites.length !== 0 && <RemoveFavourite i={index} />}
          </View>
        ))}
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
    backgroundColor: theme.mainColour,
    marginVertical: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.mainColour,
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
    color: theme.gray1,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Favourites;
