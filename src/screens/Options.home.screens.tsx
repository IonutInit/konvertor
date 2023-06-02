import {
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";
import {useState, useEffect} from "react"

import useAppContext from "../context/useAppContext";
import handleOptionPress from "../hooks/handleOptionPress";
import ToggleExtendedList from "../components/ToggleExtendedList";

import handleFavouriteText from "../lib/handleFavouriteText";

import unitList from "../data/unitList";
import MeasurementIcons from "../components/svgs/MeasurementIcons";

import getLocalData from "../lib/getLocalData";
import { favouritesKey } from "../data/storageKeys";

import getTheme from "../context/theme";

import { FavouriteType } from "../../types";

import typing from "../lib/typing";

const Options = () => {
  const { state: {favourites, init, settings}, state, dispatch } = useAppContext();
  const theme = getTheme();

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

const whatFavouritesToMap = init === 0 ? favouritesFromStorage : favourites;

  // console.log(typing("gfgh 5 m 2 cm 5 in 3 zz inx 4"))

  const filteredUnitList = unitList.filter(
    (unit) => settings.extendedList || unit.primary
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

<ScrollView contentContainerStyle={styles.favScrollContainer} horizontal showsHorizontalScrollIndicator={false}>
  {whatFavouritesToMap.map((fav, index) => {

    const [findIconType] = unitList.filter((unit) => fav.measureType[0].toString() === unit.name)
    // console.log(findIconType.name)

  return ( 
    <View style={styles.favOuterContainer} key={index}>
          <View  style={[styles.favContainer, {backgroundColor: theme.mainColour}]}>
            <View style={styles.favIconContainer}>
               <MeasurementIcons type={findIconType.name} mainColour={theme.gray1} size={30}/>
               <View style={styles.favTextContainer}>
                <Text style={[styles.favText, { color: theme.gray1 }]}>
                  {handleFavouriteText(fav.from[0], [fav.from[0], fav.to])}
                </Text>
                <Text style={[styles.favText, { color: theme.gray1 }]}>
                  {handleFavouriteText(fav.to, [fav.from[0], fav.to])}
                </Text>
              </View>
            </View>         

  </View>
    </View>     
  );
})}
</ScrollView>

      <View style={styles.outerPressableContainer}>
        {filteredUnitList.map((unit) => (
          <Pressable
            key={unit.name}
            onPress={() =>
              handleOptionPress(dispatch, state, unit.name, unit.displayName)
            }
            style={[styles.pressableMeasure, { backgroundColor: theme.gray1 }]}>
            <View style={styles.innerPressableContainer}>
              <MeasurementIcons type={unit.name} />

              <View style={styles.textContainer}>
                <Text style={styles.text}>{unit.displayName}</Text>
              </View>
            </View>
          </Pressable>
        ))}
      </View>

      <View style={styles.toggleContainer}>
        <ToggleExtendedList />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {},
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
    backgroundColor: "red",
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
  }
});

export default Options;
