import React from 'react';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'
import EmoticonIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ROUTES } from '../constants'



const Setting = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header headerText='SETTINGS' />
            <ScrollView>
                <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 10, paddingLeft: 30, color: "white" }}>Profile</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate(ROUTES.ACCOUNTINFORMATION)}>
                        <Ionicons name="person" size={30} color="#000" style={{ marginLeft: 20 }} />
                        <Text style={styles.text}>Account Information</Text>
                        <Ionicons name="chevron-forward" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 1, opacity: 0.3, marginLeft: 20, marginRight: 20 }} />
                    <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate(ROUTES.CHANGEPASSWORD)}>
                        <Ionicons name="ios-key" size={30} color="#000" style={{ marginLeft: 20 }} />
                        <Text style={styles.text}>Change Password</Text>
                        <Ionicons name="chevron-forward" size={30} color="#000" />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 10, paddingLeft: 30, color: "white" }}>Features</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate(ROUTES.MEDICALHISTORY)}>
                        <Icons name="book-medical" size={30} color="#000" style={{ marginLeft: 20 }} />
                        <Text style={styles.text}>Medical History</Text>
                        <Ionicons name="chevron-forward" size={30} color="#000" style={{ marginLeft: 25 }} />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 1, opacity: 0.3, marginLeft: 20, marginRight: 20 }} />
                    <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate(ROUTES.SYMPTOMS)}>
                        <EmoticonIcons name="emoticon-sick" size={35} color="#000" style={{ marginLeft: 10 }} />
                        <Text style={styles.text}>Symptoms</Text>
                        <Ionicons name="chevron-forward" size={30} color="#000" style={{ marginLeft: 50 }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 10, paddingLeft: 30, color: "white" }}>Privacy And Notifications</Text>
                <View style={styles.card}>
                    <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate(ROUTES.PRIVACY)}>
                        <EmoticonIcons name="security" size={35} color="#000" style={{ marginLeft: 10 }} />
                        <Text style={styles.text}>Privacy & Policy</Text>
                        <Ionicons name="chevron-forward" size={30} color="#000" />
                    </TouchableOpacity>
                    <View style={{ borderWidth: 1, opacity: 0.3, marginLeft: 20, marginRight: 20 }} />
                    <TouchableOpacity style={styles.cardHeader} onPress={() => navigation.navigate(ROUTES.NOTIFICATION)}>
                        <Ionicons name="notifications" size={35} color="#000" style={{ marginLeft: 10 }} />
                        <Text style={styles.text}>Notification</Text>
                        <Ionicons name="chevron-forward" size={30} color="#000" style={{ marginLeft: 50 }} />
                    </TouchableOpacity>
                </View>
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        backgroundColor: "rgba(255, 255, 255, 0.5);",
        borderRadius: 15,
        margin: 20,
        height: 150,
    },
    cardHeader: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        // margin: 20,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        padding: 20,
        paddingLeft: 40,
        // textAlign: "center",
    }
})

export default Setting;