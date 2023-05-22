import { View, Text, StyleSheet } from "react-native";

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
      </View>

      <Text style={styles.credentialsSubtitle}>
        A simple but smart unit conversion app
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
  },
});

export default Credentials;
