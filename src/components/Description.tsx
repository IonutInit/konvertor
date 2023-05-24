import { View, Text, StyleSheet } from "react-native";

import useAppContext from "../context/useAppContext";

import theme from "../theme";
import handleDescriptionText from "../lib/handleDescriptionText";

const Description = () => {
  const {
    state: { fromUnit, toUnit },
  } = useAppContext();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>{handleDescriptionText(fromUnit, true)}</Text>
        <Text style={styles.text}>TO {handleDescriptionText(toUnit, false)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  innerContainer: {
    width: "100%",
    minHeight: 50,
    backgroundColor: theme.gray3,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  text: {
    color: theme.gray1
  }
});

export default Description;