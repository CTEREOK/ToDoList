import React, { useState } from "react";
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';

export default function From({ addHandler }) {
    const [text, setValue] = useState("");

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Впишите задачу"/>
            <Button color="#2F4F4F" onPress={() => addHandler(text)} title="Добавить задачу"/>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        alignItems: 'center',
        width: "60%",
        marginLeft: "20%",
        marginTop: 20,
        marginBottom: 20,
    }, 
});