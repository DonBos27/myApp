import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
// import Header from '../components/header';
const ChangePassword = () => {
    return (
        <View style={styles.page}>
            <View style={styles.edit}>
                <View style={styles.infoCardHeader}>
                    <Text style={styles.headerTitle}>Health Details</Text>
                    <TouchableOpacity >
                        <Text style={styles.btnEdit} >Done</Text>
                    </TouchableOpacity>
                </View>
                <View >
                    <Text style={styles.infoCardLabel}>Current Password</Text>
                    <TextInput placeholder='' style={styles.textInput} autoCorrect={false} secureTextEntry={true} textContentType='' />
                </View>
                <View >
                    <Text style={styles.infoCardLabel}>New Password</Text>
                    <TextInput placeholder='' style={styles.textInput} autoCorrect={false} secureTextEntry={true} textContentType='' />
                </View>
                <View >
                    <Text style={styles.infoCardLabel}>Confirm Password</Text>
                    <TextInput placeholder='' style={styles.textInput} autoCorrect={false} secureTextEntry={true} textContentType='' />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    edit: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        height: 400,
        width: 365,
        margin: 25,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    infoCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    headerTitle: {
        fontSize: 20,
        paddingLeft: 75,
        fontWeight: 'bold',
    },
    btnEditLeft: {
        color: 'rgba(14, 108, 148, 0.85)',
        fontSize: 17,
    },
    btnEdit: {
        fontSize: 17,
        paddingLeft: 70,
        color: 'rgba(14, 108, 148, 0.85)'
    },
    textInput: {
        height: 50,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 0,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(14, 108, 148, 0.85)',
        paddingLeft: 10,
    },
    infoCardLabel: {
        fontSize: 17,
        paddingLeft: 40,
        paddingTop: 20,
        color: 'rgba(255, 255, 255, 0.5)'
    },
})
export default ChangePassword