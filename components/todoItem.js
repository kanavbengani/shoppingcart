import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function TodoItem({ item, pressHandler }) {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </View >

  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: "maroon",
    borderWidth: 3,
    borderStyle: "solid",
    borderRadius: 10,
    color: "black",
    fontWeight: "bold",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
