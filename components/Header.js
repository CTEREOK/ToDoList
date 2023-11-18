import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.text}>Список дел</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        paddingTop: 20,
        paddingDown: 20,
        height: 100,
        backgroundColor: '#2F4F4F',
    },
    text: {
        fontSize: 36,
        color: 'white',
        fontStyle: 'bold',
        textAlign: "center",
    },
});