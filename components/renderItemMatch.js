import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function RenderItemMatch({ item, index }) {

    var googleResMatch = require('../screens/Analyze');
    return (
        <View>
            {index % 2 != 0 ?
                <View style={styles.item}>
                    <Text>{item}</Text>
                    {
                        check({ item }, googleResMatch) == true ? <Text>Hello</Text> : console.log("Bye")
                    }

                </View>
                :
                console.log("It's a key.")
            }
        </View>
    );

}

function check(item, googleResMatch) {
    for (let match = 0; match < googleResMatch.length; match++) {
        if (item == googleResMatch[match]) {
            return true;
        }
    }
    return false;
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
