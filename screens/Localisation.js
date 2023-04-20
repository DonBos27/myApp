import { useEffect, useState } from 'react';
import axios from 'axios'
import { Text, StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Header from '../components/header';
import * as Location from 'expo-location';
import BetterImage from 'react-native-better-image';
import Background from '../images/background.jpg';

const Localisation = () => {
    const [lat, setLat] = useState();
    const [long, setLong] = useState();
    const [places, setPlaces] = useState([]);
    const [location, setLocation] = useState({});
    const [errorMsg, setErrorMsg] = useState('Error loading image');

    const printCurrentPosition = () => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status === 'granted') {
                console.log('Permission to access location was granted');
            }
            else {
                console.log('Permission to access location was denied');
            }

            const loc = await Location.getCurrentPositionAsync();
            console.log(loc);
            setLocation(loc);
            setLat(loc.coords.latitude);
            setLong(loc.coords.longitude);
        })()
    }

    useEffect(() => {
        printCurrentPosition();

    }, []);

    useEffect(() => {
        fetchNearbyPlaces()
    }, [lat, long]);


    const fetchNearbyPlaces = () => {
        var config = {
            method: 'get',
            url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat}%2C${long}&radius=5000&type=hospital&key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`,
            headers: {}
        };
        (axios(config)).then(function (response) {
            console.log('response: ', response.data.results);
            setPlaces(response.data.results);
        }).catch(function (error) {
            console.log('response: ', error);
        });
    }
    return (
        <View style={styles.page}>
            <Header headerText='LOCALISATION' />
            <ScrollView>
                {places.length > 0 && places.map((place, index) => (
                    <View style={styles.card} key={index}>
                        <BetterImage
                            viewStyle={place.photos && styles.image}
                            source={{
                                uri:
                                    place.photos &&
                                    `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=${place.photos.map(
                                        (photo) => photo.photo_reference
                                    )} &key=AIzaSyBkue_ZXAlaDnMZcISiXRkgn0NGDLCSxGY`,
                            }}
                            onError={errorMsg}
                        />
                        <Text style={styles.name}>{place.name}</Text>
                        <Text style={styles.address}>{place.vicinity}</Text>
                        <View style={{ borderWidth: 1, opacity: 0.3, marginLeft: 30, marginRight: 30, marginTop: 20, borderColor: 'black' }} />
                        {place.opening_hours && place.opening_hours.open_now === true ? <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 30, color: 'blue', marginBottom: 10 }}>Open</Text> : <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 30, color: 'red', marginBottom: 10 }}>Closed</Text>}
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    card: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: "lightgray",
        borderRadius: 10,
        marginTop: 20,
        marginLeft: 8,
        marginRight: 8,
    },
    image: {
        flex: 1,
        height: 200,
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        marginTop: 20,
    },
    address: {
        fontSize: 15,
        color: "black",
        textAlign: "center",
        marginTop: 10,
    },
})
export default Localisation;