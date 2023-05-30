import { TextInput, StyleSheet } from "react-native";

type InputProps = {
  handleInputChange: (input: string) => void;
  value: string;
  i: number;
};

const Input = ({ handleInputChange, value, i }: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      onChangeText={(input) => handleInputChange(input)}
      keyboardType="numeric"
      key={i}
      value={value}
     editable
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
