import { Pressable } from "react-native";
import useAppContext from "../context/useAppContext";
import SwitchButton from "./svgs/SwitchButton";

const Switch = () => {
  const { state, dispatch } = useAppContext();

  const handleSwitch = () => {
    dispatch({
      type: "switch",
      payload: {
        sourceFromUnit: state.fromUnit[0],
        sourceToUnit: state.toUnit,
      },
    });
  };

  return (
    <Pressable onPress={handleSwitch} disabled={state.fromUnit[0].length <= 3}>
      <SwitchButton isActive={state.fromUnit[0].length <= 3}/>
    </Pressable>
  );
};

export default Switch;
