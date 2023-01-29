import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import Cancer from '../images/Cancer.jpg'
import Covid from '../images/covid19.jpg'
import HIV from '../images/HIV.jpg'
import community from '../images/community.jpg'
import Diabetes from '../images/diabetes.png'
import { ROUTES } from '../constants';



const Community = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 35, marginTop: 90, marginLeft: 30, fontWeight: "800", color: "white" }}>COMMUNITIES</Text>
                <Image source={community} style={{ width: 50, height: 50, borderRadius: 50, marginTop: -50, marginLeft: 330 }} />
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.features}>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.CANCER)}>
                        <Image source={Cancer} style={styles.img} />
                        <Text style={{ marginLeft: 5, marginTop: 10 }}>CANCER</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.DIABETES)}>
                        <Image source={Diabetes} style={styles.img} />
                        <Text style={{ marginLeft: 0, marginTop: 10 }}>DIABETES</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.AIDS)}>
                        <Image source={HIV} style={styles.img} />
                        <Text style={{ marginLeft: 5, marginTop: 10 }}>HIV/AIDS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate(ROUTES.COVID)}>
                        <Image source={Covid} style={styles.img} />
                        <Text style={{ marginLeft: 10, marginTop: 10 }}>COVID</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.chat}>
                    <TouchableOpacity style={styles.chatCategories} onPress={() => navigation.navigate(ROUTES.CANCER)}>
                        <View style={styles.containerCancer}>
                            <Image source={Cancer} style={{ height: 15, width: 15, borderRadius: '50%', margin: 2.5 }} />
                            <Text style={{ marginTop: 1, marginLeft: 10, color: 'white' }}>Cancer</Text>
                        </View>
                        <Text style={{ margin: 25, lineHeight: 22 }}>
                            We can help you find your community. {"\n"}
                            We consider that the community is more powerful than cancer.{"\n"}
                            Come join us and discover what community means to you.
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatCategories} onPress={() => navigation.navigate(ROUTES.DIABETES)}>
                        <View style={styles.containerDiabetes}>
                            <Image source={Diabetes} style={{ height: 15, width: 15, borderRadius: '50%', margin: 2.5 }} />
                            <Text style={{ marginTop: 1, marginLeft: 10, color: 'white' }}>Diabetes</Text>
                        </View>
                        <Text style={{ margin: 25, lineHeight: 22 }}>
                            With us, locate your community. {"\n"}
                            We think that a strong community can defeat diabetes. {"\n"}
                            Please come along.
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatCategories} onPress={() => navigation.navigate(ROUTES.AIDS)}>
                        <View style={styles.containerAIDS}>
                            <Image source={HIV} style={{ height: 15, width: 15, borderRadius: '50%', margin: 2.5 }} />
                            <Text style={{ marginTop: 1, marginLeft: 10, color: 'white' }}>HIV/AIDS</Text>
                        </View>
                        <Text style={{ margin: 25, lineHeight: 22 }}>
                            Use us to locate your community. {"\n"}
                            HIV/AIDS is stong but it cannot defeat the community. {"\n"}
                            Join us .
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.chatCategories} onPress={() => navigation.navigate(ROUTES.COVID)}>
                        <View style={styles.containerCovid}>
                            <Image source={Covid} style={{ height: 15, width: 15, borderRadius: '50%', margin: 2.5 }} />
                            <Text style={{ marginTop: 1, marginLeft: 10, color: 'white' }}>Covid19</Text>
                        </View>
                        <Text style={{ margin: 25, lineHeight: 22 }}>
                            With us, find your community. {"\n"}
                            We think the community is more powerful than COVID-19. {"\n"}
                            Join us to learn what community is all about.
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    );
};

export default Community;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85)",
        justifyContent: "space-between",
    },
    body: {
        height: "100%",
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 20,

    },
    features: {
        flexDirection: "row",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    img: {
        width: 70,
        height: 70,
        borderRadius: "50%",
        marginRight: 30,
    },
    categories: {
        flexDirection: "column",
    },
    chat: {
        flexDirection: "column",
        marginTop: 20,
        marginLeft: 20,
    },
    chatCategories: {
        backgroundColor: "#F4EDE4",
        width: 370,
        height: 185,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    containerCancer: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: "#cb6ce6",
        width: 90,
        height: 20,
        borderRadius: 10,
    },
    containerDiabetes: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: "#5271FF",
        width: 95,
        height: 20,
        borderRadius: 10,
    },
    containerAIDS: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: "#890E0E",
        width: 95,
        height: 20,
        borderRadius: 10,
    },
    containerCovid: {
        flexDirection: "row",
        marginTop: 10,
        marginLeft: 20,
        backgroundColor: "#f7b500",
        width: 90,
        height: 20,
        borderRadius: 10,
    },
});