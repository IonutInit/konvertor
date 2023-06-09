import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
} from "react-native";

import useAppContext from "../context/useAppContext";
import ToggleExtendedList from "../components/ToggleExtendedList";

import unitList from "../data/unitList";

import FavouritesOnHome from "../components/FavouritesOnHome";
import OptionsOnHome from "../components/OptionsOnHome";
import FavOptionOnHome from "../components/FavOptionOnHome";
import TypingInput from "../components/TypingInput";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { favouritesKey } from "../data/storageKeys";

import { FavouriteType } from "../../types";

const commonStyles = {
  pressableMeasure: {
    width: 85,
    height: 90,
    margin: 5,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3, // for Android shadow
  },
  innerPressableContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
    textContainer: {
      marginBottom: 8,
    },
};

const Options = () => {
  const {
    state: { favourites, init, settings },
    dispatch,
  } = useAppContext();

  // automatic scrolling
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (scrollViewRef.current) {
      if (settings.extendedList) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      } else {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }
    }
  }, [settings.extendedList]);

  const handleOnContentSizeChange = () => {
    if (scrollViewRef.current) {
      if (settings.extendedList) {
        scrollViewRef.current.scrollToEnd({ animated: true });
      } else {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
      }
    }
  };
  //---------------------------------

  const [favouritesFromStorage, setFavouritesFromStorage] = useState<
    FavouriteType[]
  >([]);

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

  const whatFavouritesToMap = init === 0 ? favouritesFromStorage : favourites;

  const filteredUnitList = unitList.filter(
    (unit) => settings.extendedList || unit.primary
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      onContentSizeChange={handleOnContentSizeChange}>
      {settings.favouritesOnHome && (
        <FavouritesOnHome
          whatFavouritesToMap={whatFavouritesToMap}
          unitList={unitList}
        />
      )}

      {!settings.favouritesOnHome && <TypingInput />}

      <View style={styles.outerPressableContainer}>
        {filteredUnitList.map((unit, index) => (
          <View key={index}>
            {unit.name !== "favouritesButton" && (
              <OptionsOnHome unit={unit} commonStyles={commonStyles} />
            )}

            {unit.name === "favouritesButton" &&
              whatFavouritesToMap.length !== 0 && (
                <FavOptionOnHome commonStyles={commonStyles} />
              )}
          </View>
        ))}
      </View>

      <View style={styles.toggleContainer}>
        <ToggleExtendedList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  outerPressableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 15,
    paddingTop: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  toggleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
});

export default Options;
