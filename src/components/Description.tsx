import { View, Text, Pressable, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import addUnit from "../hooks/addUnit";

import theme from "../theme";
import handleDescriptionText from "../lib/handleDescriptionText";

const Description = () => {
  const { state, dispatch } = useAppContext();

  const { fromUnit, toUnit } = state;

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        onPress={() => addUnit(dispatch, state, "from")}>
        <Text style={styles.text}>{handleDescriptionText(fromUnit, true)}</Text>
        <Text style={styles.text}>
          TO {handleDescriptionText(toUnit, false)}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 15,
  },
  innerContainer: {
    width: "100%",
    minHeight: 50,
    backgroundColor: theme.mainColour,
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
  text: {
    color: theme.gray1,
  },
});

export default Description;
