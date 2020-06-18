import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  Button,
  View,
  TouchableOpacity,
  Image,
} from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        borderWidth: 3,
        borderColor: "maroon",
      }}
    >
      <TextInput
        style={styles.input}
        placeholder="Add New Todo"
        onChangeText={changeHandler}
      />
      <TouchableOpacity
        onPress={() => submitHandler(text)}
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../assets/plus.png")}
          tintColor="black"
          style={{ height: 30, width: 30 }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 10,
    width: 290,
  },
});
