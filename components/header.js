import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={{ height: 200, backgroundColor: "#0E6C94", borderBottomLeftRadius: 75, borderBottomRightRadius: 75 }}>
            <Text style={{ fontSize: 35, marginTop: 90, textAlign: "center", fontWeight: "800", color: "white" }}>{props.headerText}</Text>
        </View>
    );
}

export default Header;