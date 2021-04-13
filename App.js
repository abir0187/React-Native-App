import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [outputText, setOutputText] = useState('BBBB!');

    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.textBox} />

                <Text>{outputText}</Text>
                <Button title="Change text" onPress={() => {
                    setOutputText('The text bbbbb')
                }}/>
            </View>
            <View/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textBox: {
        backgroundColor:'white',
        borderWidth: 1,
        width: 200
    }
});
