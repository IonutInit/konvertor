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

import sampleIcon from "../assets/sample_icon.png";

import { FavouriteType } from "../../types";

const Favourites = ({ navigation }: any) => {
  const [favourites, setFavourites] = useState<FavouriteType[]>([]);

  const {
    // state: { favourites },
    dispatch,
  } = useAppContext();

  const getData = async (): Promise<FavouriteType | null> => {
    try {
      const favouritesJSON = await AsyncStorage.getItem(storageKey);
      if (favouritesJSON) {
        return JSON.parse(favouritesJSON);
      }
    } catch {}

    return null;
  };

  useEffect(() => {
    const fetchFavourites = async() => {
      const data = await getData();
      if (data) {
        setFavourites(data);
      }
    };
    fetchFavourites();
  }, []);

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

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {favourites.map((fav, index) => (
          <View style={styles.favourite} key={index}>
            <Pressable
              onPress={() =>
                handleLaunchFavourite(fav.measureType, fav.from, fav.to)
              }
              style={styles.favouriteInnerContainer}>
              <Image source={sampleIcon} style={styles.icon} />
              <View>
                <Text>{fav.from}</Text>
                <Text>{fav.to}</Text>
                {/* <Text>{handleFavouriteText(fav.from)} -&gt;</Text>
                <Text>{handleFavouriteText(fav.to)}</Text> */}
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
    borderColor: "grey",
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
});

export default Favourites;
