import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = React.useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="new todo..."
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        onPress={() => submitHandler(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
