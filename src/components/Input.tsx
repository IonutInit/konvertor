import { TextInput } from "react-native";

type InputProps = {
  handleInputChange: (input: string) => void;
};

const Input = ({ handleInputChange }: InputProps) => {
  return (
    <TextInput
      onChangeText={(input) => handleInputChange(input)}
      keyboardType="numeric"
    />
  );
};

export default Input;
