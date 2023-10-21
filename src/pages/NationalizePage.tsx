import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import axios from "axios";

const NationalizePage = () => {
    const [nationality, setNationality] = useState('A');
    const [userName, setUserName] = useState('');


    const handleSubmit = () => {
        axios.get(`https://api.nationalize.io?name=${userName}`).then((res) => {
            console.log(res.data.country[0].country_id);
        })
    }

    return (
        <View style={style.mainContainer}>
            <Text style={style.mainText}>
                {nationality}
            </Text>
            <View>
                <TextInput style={style.input} value={userName} onChangeText={setUserName} />
            </View>
            <Button title="Submit" onPress={handleSubmit}></Button>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainText: {
        fontSize: 80,
        fontWeight: "700",
        color: "red"
    },
    input: {
        borderWidth: 1,
        height: 40,
        margin: 12,
        padding: 10,
        width: 200
    }
})

export default NationalizePage;