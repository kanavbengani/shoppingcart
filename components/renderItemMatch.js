import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function RenderItemMatch({ item, index }) {

    var googleResMatch = require('../screens/Analyze');
    return (
        <View>
            {index % 2 != 0 ?
                <View style={styles.item}>
                    <Text>{item}</Text>
                    {
                        check({ item }, googleResMatch) == true ? <Image source={require('../assets/Checkmark.png')} style={{ width: 25, height: 25 }} /> : console.log("Bye")
                    }

                </View>
                :
                console.log("It's a key.")
            }
        </View>

    );

}

function check(item, googleResMatch) {
    for (let match = 0; match < googleResMatch['googleResArr'].length; match++) {
        if (googleResMatch['googleResArr'][match].includes(item.item) == true) {  //item.item == googleResMatch[name][match]
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
