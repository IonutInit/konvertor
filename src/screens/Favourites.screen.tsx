import {
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

import { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";
import storageKey from "../data/storageKey";

import useAppContext from "../context/useAppContext";

import RemoveFavourite from "../components/RemoveFavourite";

import handleFavouriteText from "../lib/handleFavouriteText";

import Divider from "../components/Divider";
import favouritesIcon from "../assets/favourited.png";
import NoFavourites from "../components/NoFavourites";

import iconMap from "../iconMaps/iconMap";

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
    return (
      <View style={styles.noFavouritesContainer}>
        <Text style={styles.noFavouritesTitle}>No favourites yet</Text>
        <Divider />
        <Text style={styles.noFavouritesText}>
          Use the heart symbol at the top of any configuration you chose to save
          them for fast future use.
        </Text>
        <Image
          source={favouritesIcon}
          style={styles.icon}
          resizeMode="contain"
        />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {whatToMap.map((fav, index) => (
          <View style={styles.favourite} key={index}>
            <Pressable
              onPress={() =>
                handleLaunchFavourite(fav.measureType, fav.from, fav.to)
              }
              style={styles.favouriteInnerContainer}>
              <Image source={iconMap[fav.measureType]} style={styles.icon} />
              <View>
                <Text>{handleFavouriteText(fav.from)}</Text>
                <Text>{handleFavouriteText(fav.to)}</Text>
              </View>
            </Pressable>

            <RemoveFavourite i={index} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 30,
  },
  favourite: {
    width: 250,
    height: 80,
    marginVertical: 3,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.mainColour,
    justifyContent: "center",
  },
  favouriteInnerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
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

export default Favourites;
