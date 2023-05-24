import { View, StyleSheet } from "react-native";

const Divider = () => {
  return (
    <>
      <View style={styles.divider}></View>
      <View style={styles.divider}></View>
    </>
  );
};

const styles = StyleSheet.create({
  divider: {
    height: 1,
    width: "80%",
    backgroundColor: "grey",
    marginTop: 5,
  },
});

export default Divider;
