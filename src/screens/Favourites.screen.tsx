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

import favouritesIconMap from "../iconMaps/favouritesIconsMap";

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
      <NoFavourites />
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
              <Image source={favouritesIconMap[fav.measureType]} style={styles.icon} />
              <View>
                <Text style={styles.favouriteText}>{handleFavouriteText(fav.from)}</Text>
                <Text style={styles.favouriteText}>{handleFavouriteText(fav.to)}</Text>
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
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 10,
  },
});

export default Favourites;
