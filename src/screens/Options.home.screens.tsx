import {
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  StyleSheet,
  LayoutAnimation,
  TextInput,
} from "react-native";
import { useState, useEffect, useRef } from "react";

import useAppContext from "../context/useAppContext";
import handleOptionPress from "../hooks/handleOptionPress";
import ToggleExtendedList from "../components/ToggleExtendedList";

import handleFavouriteText from "../lib/handleFavouriteText";
import handleFavouriteDispatch from "../lib/handleFavouriteDispatch";

import unitList from "../data/unitList";
import MeasurementIcons from "../components/svgs/MeasurementIcons";
import FavouritesIcon from "../components/svgs/FavouriteIcon";

import TypingInput from "../components/TypingInput";

import AsyncStorage from "@react-native-async-storage/async-storage";
import getLocalData from "../lib/getLocalData";
import { favouritesKey } from "../data/storageKeys";

import getTheme from "../context/theme";

import { FavouriteType } from "../../types";

import typing from "../lib/typing";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Options = () => {
  const {
    state: { favourites, init, settings },
    state,
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

  const theme = getTheme();

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

  // console.log(state);

  // console.log(typing("zdf 2 cm2 5 cm2 m"));

  const filteredUnitList = unitList.filter(
    (unit) => settings.extendedList || unit.primary
  );

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      ref={scrollViewRef}
      onContentSizeChange={handleOnContentSizeChange}>
      {settings.favouritesOnHome && (
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
                          {handleFavouriteText(fav.from[0], [
                            fav.from[0],
                            fav.to,
                          ])}
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
      )}

      {!settings.favouritesOnHome && <TypingInput />}

      <View style={styles.outerPressableContainer}>
        {filteredUnitList.map((unit, index) => (
          <View key={index}>
            {unit.name !== "favouritesButton" && (
              <Pressable
                key={unit.name}
                onPress={() =>
                  handleOptionPress(
                    dispatch,
                    state,
                    unit.name,
                    unit.displayName!
                  )
                }
                style={[
                  styles.pressableMeasure,
                  { backgroundColor: theme.gray1 },
                ]}>
                <View style={styles.innerPressableContainer}>
                  <MeasurementIcons type={unit.name} />

                  <View style={styles.textContainer}>
                    <Text style={styles.text}>{unit.displayName}</Text>
                  </View>
                </View>
              </Pressable>
            )}

            {unit.name === "favouritesButton" &&
              whatFavouritesToMap.length !== 0 && (
                <Pressable
                  style={[
                    styles.pressableMeasure,
                    {
                      backgroundColor: !settings.favouritesOnHome
                        ? theme.mainColour
                        : theme.gray1,
                    },
                  ]}
                  onPress={() => {
                    LayoutAnimation.configureNext(
                      LayoutAnimation.Presets.spring
                    );
                    dispatch({
                      type: "toggle_favourites_on_home",
                    });
                  }}>
                  <View style={styles.innerPressableContainer}>
                    <FavouritesIcon
                      isFavourite
                      mainColour={
                        !settings.favouritesOnHome
                          ? theme.gray1
                          : theme.mainColour
                      }
                    />
                    <View style={styles.textContainer}>
                      <Text
                        style={[
                          {
                            color: !settings.favouritesOnHome
                              ? theme.gray1
                              : theme.mainColour,
                          },
                          { textAlign: "center" },
                        ]}>
                        {`${
                          !settings.favouritesOnHome ? "Show" : "Hide"
                        } Favourites`}
                      </Text>
                    </View>
                  </View>
                </Pressable>
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
  },
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
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    marginTop: 3,
  },
  text: {
    textAlign: "center",
    fontSize: 14,
    marginTop: 3,
  },
  icon: {
    width: 45,
    height: 45,
  },
  toggleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },

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

export default Options;
