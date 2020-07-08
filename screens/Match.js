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

    const goToHome = () => {
        navigation.popToTop();
    };

    return (
        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={todoArrMatch}
                    renderItem={({ item, index }) =>
                        <RenderItemMatch item={item} index={index} />
                    }
                />

            </View>
            <TouchableOpacity style={styles.button} onPress={goToHome}>
                <Text style={{ color: 'white' }}>Go Back to Home!</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Testing</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "#fff",
        alignItems: "center",
        backgroundColor: "white",
        justifyContent: "space-around"
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
        borderColor: 'maroon',
        borderWidth: 2,
        borderRadius: 10,
        height: 50,
        width: screenWidth / 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'maroon',
    },
});
