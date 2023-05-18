import { View } from "react-native";
import { useState } from "react";

import { Picker } from "@react-native-picker/picker";

import useAppContext from "../context/useAppContext";

import convert from "convert-units";

const OptionsList = () => {
  const { state, dispatch } = useAppContext();
  const [selectedOption, setSelectedOption] = useState(
    state[`${state.optionsState}Unit`]
  );

  const options = convert().from(`${state.fromUnit}[0]`).possibilities();
  const type =
    state.optionsState === "from" ? "change_FROM_unit" : "change_TO_unit";

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    dispatch({
      type,
      payload: option,
    });
    dispatch({
      type: "change_options_state",
      payload: "",
    });
  };

  return (
    <View>
      <Picker selectedValue={selectedOption} onValueChange={handleOptionChange}>
        {options.map((option: string) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
    </View>
  );
};

export default OptionsList;
