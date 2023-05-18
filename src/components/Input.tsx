import { TextInput, StyleSheet } from "react-native";

type InputProps = {
  handleInputChange: (input: string) => void;
};

const Input = ({ handleInputChange }: InputProps) => {
  return (
    <TextInput
    style={styles.input}
      onChangeText={(input) => handleInputChange(input)}
      keyboardType="numeric"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 90,
    height: 50,
    fontSize: 24,
    marginLeft: 24,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  }
})

export default Input;
