import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor,
                borderRadius: 5

            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip To Login</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            DoneButtonComponent={Done}
            DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../images/medWatch.gif')} style={styles.image} />,
                    title: 'Medical Reminder',
                    subtitle: 'A New Way To Take Your Pills And Stay Healthy',
                    titleStyles: {
                        color: 'black',
                    },
                    subTitleStyles: {
                        color: 'black',
                    },
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../images/medReport.gif')} style={styles.image} />,
                    title: 'Medical Information',
                    subtitle: 'Get Your Medical Information Anytime Anywhere',
                    titleStyles: {
                        color: 'black',
                    },
                    subTitleStyles: {
                        color: 'black',
                    },

                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../images/medAmbulance.gif')} style={styles.image} />,
                    title: 'Localisation of Near Hospital',
                    subtitle: "Find The Nearest Hospital To You",
                    titleStyles: {
                        color: 'black',
                    },
                    subTitleStyles: {
                        color: 'black',
                    },
                },
                // {
                //     backgroundColor: '#0e6c94d9',
                //     image: <Image source={require('../images/medCommunity.gif')} style={styles.image} />,
                //     title: 'Community Forum',
                //     subtitle: "Share Your Experience With Other Users",
                //     titleStyles: {
                //         color: 'black',
                //     },
                //     subTitleStyles: {
                //         color: 'black',
                //     },
                // },
            ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 300,
        height: 300,
    },
});