import {
  View,
  ScrollView,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

import useAppContext from "../context/useAppContext";

import handleMeasurementPress from "../hooks/handleMeasurementPress";

import BMI from "./BMI.screen";
import WeightLoss from "./WeightLoss.screen";

import ToggleExtendedList from "../components/ToggleExtendedList";

import unitList from "../data/unitList";

import sampleIcon from "../assets/sample_icon.png";

const Options = () => {
  const { state, dispatch } = useAppContext();

  const filteredUnitList = unitList.filter(
    (unit) => state.settings.extendedList || unit.primary
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.outerPressableContainer}>
        {filteredUnitList.map((unit) => (
          <Pressable
            key={unit.measure}
            onPress={() =>
              handleMeasurementPress(dispatch, state, unit.measure)
            }
            style={styles.pressableMeasure}>
            <View style={styles.innerPressableContainer}>
              <Image source={sampleIcon} style={styles.icon} />
              <Text style={styles.text}>{unit.measure}</Text>
            </View>
          </Pressable>
        ))}

        <View style={styles.toggleContainer}>
          <ToggleExtendedList />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  outerPressableContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  pressableMeasure: {
    width: 90,
    height: 90,
    backgroundColor: "#F3F3F3",
    margin: 3,
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
  text: {
    fontSize: 14,
  },
  icon: {
    width: 45,
    height: 45,
  },
  toggleContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

export default Options;
