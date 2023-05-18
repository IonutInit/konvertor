import { View, Text } from "react-native";

import convert from "convert-units";

const from = ["m", "ft"];
const value = [20, 20];

const to = ["mm"];

const Settings = () => {
  const getResult = () => {
    let result = 0;

    for (let i = 0; i < from.length; i++) {
      result += convert(value[i]).from(`${from[i]}`).to(`${to[0]}`);
    }
    return result;
  };

  let result = 0;

  for (let i = 0; i < from.length; i++) {
    result += convert(value[i]).from(`${from[i]}`).to(`${to[0]}`);
  }

  console.log(result);

  return (
    <View>
      <Text>Hello Settings</Text>
    </View>
  );
};

export default Settings;
