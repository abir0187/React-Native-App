import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [allGoals, setAllGoals] = useState([]);


    const goalInputHandler = (enteredText) => {
      setEnteredGoal(enteredText);
    };

    const handleGoals = () => {
        setAllGoals(currentGoals => [...currentGoals, enteredGoal]);
    };


    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.textBox} onChangeText={goalInputHandler} value={enteredGoal}/>
                <View style={{paddingTop: 5}}>
                    <Button title="Add Goals" onPress={handleGoals} />
                </View>

                <View>
                    {allGoals.map((goal)=><Text>{goal}</Text>)}
                </View>
            </View>
            <View/>
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
        backgroundColor:'white',
        borderWidth: 1,
        width: 200
    }
});
