import React, { useState } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TodoItem({ item, pressHandler }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
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
  },
});
