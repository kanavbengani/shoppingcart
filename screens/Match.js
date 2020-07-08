import React, { useState, useEffect } from "react";
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
    TouchableOpacity
} from "react-native";
import RenderItemMatch from '../components/renderItemMatch';

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

var googleResponseMatch = require('./Analyze').googleResArr;
var todoArrMatch = require('./UI').todoArr;

export default function UI({ navigation }) {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.list}>
                    <FlatList
                        data={todoArrMatch}
                        renderItem={({ item, index }) =>
                            <RenderItemMatch item={item} index={index} />
                        }
                    />
                </View>
            </ScrollView>
        </View>
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
    list: {
        borderWidth: 5,
        borderColor: "maroon",
        marginTop: 20,
        height: 600,
        width: 350,
        padding: 10,
        justifyContent: "center",
    },
    button: {
        flex: 1,
        justifyContent: "center",
        marginLeft: (screenWidth - 200) / 2,
        marginRight: (screenWidth - 200) / 2,
        marginTop: 50,
    },
});
