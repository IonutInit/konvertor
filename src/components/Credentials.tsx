import { View, ScrollView, Text, StyleSheet } from "react-native";

const Credentials = () => {
  return (
    <View style={styles.credentialsContainer}>
      <View style={styles.titleContainer}>
        <View style={{ paddingBottom: 10 }}>
          <Text style={styles.credentialsTitle}>Konvertor</Text>
        </View>
        <View style={{ paddingBottom: 5 }}>
          <Text>&#169; 2023 Ionut Cojocaru</Text>
        </View>
        <Text style={styles.credentialsSubtitle}>
          A simple but smart unit conversion app
        </Text>
      </View>

      <Text style={styles.credentialsText}>
        Use this app to convert not just one, but multiple values at once. For
        example, you can now convert feet and inches directly into meters, or
        meters and milimeteres. Just use the Add button to add your desired
        measurement units that need converted or from or to.
      </Text>

      <Text style={styles.credentialsText}>
        Not only that, but you can you use it as a small calculator. Toggle
        between the + and - sign at the top of the screen, to add or subtract
        the FROM values.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  credentialsContainer: {
    paddingTop: 30,
  },
  titleContainer: {
    alignItems: "center",
  },
  credentialsTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  credentialsSubtitle: {
    fontSize: 18,
    fontStyle: "italic",
    paddingBottom: 10,
  },
  credentialsText: {
    paddingHorizontal: 20,
    paddingBottom: 15,
  },
});

export default Credentials;
