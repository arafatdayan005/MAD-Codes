import { StatusBar } from 'expo-status-bar';
import react,{ useState } from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

const CounterPage = () => {
    const [counter, setCounter] = useState(0);

    const increseHandler = () => {
        setCounter(counter+1)
    }

    const decreseHandler = () => {
        setCounter(counter-1)
    }
    const reset = () => {
        setCounter(0)
    }

    return (
        <View style={styles.container}>
            <Text>{counter}</Text>
            <View>
                <Button title='Increse' onPress={increseHandler}></Button>
                <Button title='Decrese' onPress={decreseHandler}></Button>
                <Button title='Reset' onPress={reset}></Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default CounterPage;
