import { View, Text, StyleSheet, TextInput } from 'react-native'
import axios from "axios";
import React, { useState } from 'react';
const Symptoms = () => {
    const [symptoms, setSymptoms] = useState([]);

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'fb26e5c0d6msh6cd1aa2f5b4f59fp1c0b23jsne6ee53181bcb',
    //         'X-RapidAPI-Host': 'healthwise.p.rapidapi.com'
    //     }
    // };

    // fetch('https://healthwise.p.rapidapi.com/body', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    //     .catch(err => console.error(err));

    return (
        <View style={styles.page}>
            <View>
                <TextInput />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    }
})
export default Symptoms