import React from "react";
import {
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

import useAppContext from "../context/useAppContext";
import handleOptionPress from "../hooks/handleOptionPress";
import ToggleExtendedList from "../components/ToggleExtendedList";

import unitList from "../data/unitList";
import MeasurementIcons from "../components/svgs/MeasurementIcons";

import getTheme from "../context/theme";

const Options = () => {
  const { state, dispatch } = useAppContext();
  const theme = getTheme()

  const filteredUnitList = unitList.filter(
    (unit) => state.settings.extendedList || unit.primary
  );

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.outerPressableContainer}>
        {filteredUnitList.map((unit) => (
          <Pressable
            key={unit.name}
            onPress={() =>
              handleOptionPress(dispatch, state, unit.name, unit.displayName)
            }
            style={[styles.pressableMeasure, {backgroundColor: theme.gray1}]}>
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
});

export default Options;
