import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  StyleSheet,
  FlatList,
  ToolbarAndroid,
  ScrollView,
  Dimensions,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import TodoItem from "../components/todoItem";
import AddTodo from "../components/addTodo";
import { TouchableOpacity } from "react-native-gesture-handler";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function Home({ navigation }) {
  const pressHandlerDelete = () => {
    navigation.push("Camera");
  };

  const [todos, setTodos] = useState([
    // { text: "buy coffee", key: "1" },
    // { text: "create an app", key: "2" },
    // { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length != 0) {
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random().toString() }, ...prevTodos];
      });
    } else {
      Alert.alert("Nothing Entered!", "Type some text before hitting add.", [
        { text: "OK", onPress: () => console.log("Alert Closed!") },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps={"handled"}>
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                // contentContainerStyle={{ flexgrow: 0.7, alignItems: "center" }}
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} pressHandler={pressHandler} />
                )}
              />
            </View>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={pressHandlerDelete}
              style={{
                backgroundColor: "maroon",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Text style={{ color: "white" }}>Camera</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  content: {
    // padding: 40,
  },
  list: {
    borderWidth: 5,
    borderColor: "maroon",
    marginTop: 20,
    height: 600,
    width: 350,
    padding: 10,
    // alignItems: "center",
    justifyContent: "center",
  },
  button: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    // marginBottom: 36,
    marginLeft: (screenWidth - 200) / 2,
    marginRight: (screenWidth - 200) / 2,
    marginTop: 50,
  },
});
