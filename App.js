import React, {useState} from 'react';
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [allGoals, setAllGoals] = useState([]);

    const handleGoals = () => {
        setAllGoals(currentGoals => [...currentGoals, {key: Math.random().toString(), value: enteredGoal}]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput style={styles.textBox} onChangeText={setEnteredGoal} value={enteredGoal}/>
                <View style={{paddingLeft: 5}}>
                    <Button title="Add" onPress={handleGoals}/>
                </View>
            </View>

            <FlatList
                style={styles.column}
                data={allGoals}
                renderItem={currentItem => (
                    <View >
                        <Text> {currentItem.item.value} </Text>
                    </View>
                )}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 40
    },

    textBox: {
        backgroundColor: 'white',
        borderBottomWidth: 1,
        width: 200
    },

    row: {
        flexDirection: 'row',
        marginRight: 5
    },

    column: {
        width: 250,
        paddingTop: 5,
        flexDirection: 'column',
        textAlign: 'left'
    }

});
