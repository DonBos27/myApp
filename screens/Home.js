import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Pills from '../images/tablet_capsule.gif'
import Report from '../images/medicalReport.gif'
import Doctor from '../images/medicalAppoint.gif'
import { ROUTES } from '../constants'
import Unorderedlist from 'react-native-unordered-list';


const Home = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header headerText='HOME' />
            <ScrollView>
                <Text style={{ fontSize: 30, fontWeight: '600', textAlign: "center", paddingTop: 10, color: "white" }}>Medical Features</Text>
                <View style={styles.features}>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.APPOINTMENT)}>
                        <Image source={Doctor} style={styles.img} />
                        <Text style={{ marginLeft: 0, marginTop: 10, color: "white", fontWeight: "600", }}>APPOINTMENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.PILLS)}>
                        <Image source={Pills} style={styles.img} />
                        <Text style={{ marginLeft: 0, marginTop: 10, color: "white", fontWeight: "600", }}>MEDICATIONS</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.MEDINFO)}>
                        <Image source={Report} style={styles.img} />
                        <Text style={{ marginLeft: 5, marginTop: 10, color: "white", fontWeight: "600", }}>INFORMATION</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, paddingLeft: 40, color: "white" }}>Pills Reminder</Text>
                <TouchableOpacity style={styles.cardPills} onPress={() => navigation.navigate(ROUTES.PILLS)}>
                    <Text style={{ fontSize: 20, fontWeight: '600', paddingTop: 20, paddingLeft: 40, color: "black" }}>Pills Reminder</Text>
                    <Unorderedlist style={{ fontSize: 18, fontWeight: '600', paddingTop: 25, paddingLeft: 40 }} color="red"><Text style={{ fontSize: 15, fontWeight: '600', paddingTop: 25, paddingLeft: 0, color: "black" }}>Take your pills on time</Text></Unorderedlist>
                    <Unorderedlist style={{ fontSize: 18, fontWeight: '600', paddingTop: 10, paddingLeft: 40 }} color="red"><Text style={{ fontSize: 15, fontWeight: '600', paddingTop: 10, paddingLeft: 0, color: "black" }}>Set your reminder</Text></Unorderedlist>
                    <Unorderedlist style={{ fontSize: 18, fontWeight: '600', paddingTop: 10, paddingLeft: 40 }} color="red"><Text style={{ fontSize: 15, fontWeight: '600', paddingTop: 10, paddingLeft: 0, color: "black" }}>A good way to keep and track your medication by adding it</Text></Unorderedlist>
                </TouchableOpacity>
                <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, paddingLeft: 40, color: "white" }}>Medical Appointment</Text>
                <TouchableOpacity style={styles.cardPills2} onPress={() => navigation.navigate(ROUTES.APPOINTMENT)}>
                    <Text style={{ fontSize: 20, fontWeight: '600', paddingTop: 20, paddingLeft: 40, color: "black" }}>Medical Appointment</Text>
                    <Unorderedlist style={{ fontSize: 18, fontWeight: '600', paddingTop: 25, paddingLeft: 40 }} color="red"><Text style={{ fontSize: 15, fontWeight: '600', paddingTop: 25, paddingLeft: 0, color: "black" }}>Book your appointment</Text></Unorderedlist>
                    <Unorderedlist style={{ fontSize: 18, fontWeight: '600', paddingTop: 10, paddingLeft: 40 }} color="red"><Text style={{ fontSize: 15, fontWeight: '600', paddingTop: 10, paddingLeft: 0, color: "black" }}>Set your reminder</Text></Unorderedlist>
                    <Unorderedlist style={{ fontSize: 18, fontWeight: '600', paddingTop: 10, paddingLeft: 40 }} color="red"><Text style={{ fontSize: 15, fontWeight: '600', paddingTop: 10, paddingLeft: 0, color: "black" }}>A good way to keep and track your appointment by adding it</Text></Unorderedlist>
                </TouchableOpacity>
            </ScrollView>
        </View >
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    features: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: "50%",
        marginRight: 38,
    },
    cardPills: {
        width: 350,
        height: 180,
        backgroundColor: "#fff",
        borderRadius: 25,
        marginLeft: 30,
        marginTop: 20,
    },
    cardPills2: {
        width: 350,
        height: 180,
        backgroundColor: "#fff",
        borderRadius: 25,
        marginLeft: 30,
        marginTop: 20,
        marginBottom: 20,
    },

})
export default Home;