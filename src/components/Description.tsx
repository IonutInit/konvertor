import * as React from "react";

import {
  View,
  Text,
  Pressable,
  StyleSheet,
  LayoutAnimation,
} from "react-native";

import useAppContext from "../context/useAppContext";

import addUnit from "../hooks/addUnit";

import getTheme from "../context/theme";
import handleDescriptionText from "../lib/handleDescriptionText";

const Description = () => {
  const { state, dispatch } = useAppContext();

  const { fromUnit, toUnit } = state;

  const theme = getTheme();

  const handlePress = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    addUnit(dispatch, state, "from", 0);
  };

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={[styles.innerContainer, { backgroundColor: theme.mainColour }]}
        onPress={handlePress}
        disabled={fromUnit[1].length > 0}>
        <Text style={[{ color: theme.gray1 }, { fontWeight: "bold" }]}>
          {handleDescriptionText(fromUnit[0], true, true)}
        </Text>
        <Text style={[{ color: theme.gray1 }, { fontWeight: "bold" }]}>
          TO {handleDescriptionText(toUnit, true, false)}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: "95%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  innerContainer: {
    width: "100%",
    minHeight: 50,
    alignContent: "center",
    justifyContent: "center",
    // borderColor: theme.mainColour,
    // borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    // shadowColor: theme.mainColour,
    // shadowOffset: { width: -1, height: -2 },
    // shadowOpacity: 0.4,
    // shadowRadius: 2,
    // marginBottom: 5,
  },
});

export default Description;
