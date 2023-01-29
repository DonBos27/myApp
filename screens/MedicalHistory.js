import { View, Text, StyleSheet } from 'react-native'
import Header from '../components/header';
const MedicalHistory = () => {
    return (
        <View style={styles.page}>
            {/* <Header headerText='LOCALISATION' /> */}
        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    }
})
export default MedicalHistory