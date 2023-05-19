import { View, Text, StyleSheet } from "react-native";

import SliderComponent from "../components/Slider";

import useAppContext from "../context/useAppContext";

import settingOptions from "../data/settingOptions";

const Settings = () => {
  const {
    state: { settings },
  } = useAppContext();

  const settingState = Object.values(settings);

  return (
    <View style={styles.container}>
      {settingOptions.map((setting, index) => {
        const localState = settingState[index];

          return (
          <View style={styles.sliderRow}>
            <View style={styles.textContainer}>
              {!localState && <Text style={styles.text}>{setting.leftText}</Text>}
            </View>

            <SliderComponent
              key={index}
              settingType={setting.settingType}
              title={setting.title}
              description={setting.description}
            />

            <View>
              {localState && <Text style={styles.text}>{setting.rightText}</Text>}
            </View>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  textContainer: {
    width: 50,
  },
  text: {
    marginRight: 10,
  },
});

export default Settings;
