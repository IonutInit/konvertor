import { TextInput, StyleSheet } from "react-native";

type InputProps = {
  handleInputChange: (input: string) => void;
  value: string;
};

const Input = ({ handleInputChange, value }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={(input) => handleInputChange(input)}
      keyboardType="numeric"
      placeholder={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "30%",
    // height: 50,
    fontSize: 24,
    marginLeft: 25,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
});

export default Input;
