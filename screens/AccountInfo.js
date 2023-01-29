import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { ROUTES } from '../constants';
import { useState } from 'react';
import Modal from "react-native-modal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from 'react-native-vector-icons/FontAwesome';
const AccountInfo = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const Submit = () => {
        setModalVisible(!isModalVisible);
    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        var Fulldate =
            date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        setDate(Fulldate)
        hideDatePicker();
    };

    return (
        <View style={styles.page}>
            <View style={styles.profile}>
                <View style={styles.pictures} />
                <Text style={styles.name}>NAME SURNAME</Text>
            </View>
            <View style={{ borderRadius: 50, backgroundColor: "white", height: '100%' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, paddingLeft: 30, color: "white" }} ></Text>
                    <TouchableOpacity onPress={toggleModal} >
                        <Text style={{ fontSize: 18, fontWeight: '600', paddingTop: 30, paddingRight: 30, color: "rgba(14, 108, 148, 0.85);" }} >Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.edit}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>FullName</Text>
                        <TextInput placeholder="FullName" style={{ fontSize: 16, marginRight: 15 }} editable={false} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Email</Text>
                        <TextInput placeholder="Email" style={{ fontSize: 16, marginRight: 15 }} editable={false} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Date Of Birth</Text>
                        <TextInput placeholder="Date Of Birth" style={{ fontSize: 16, marginRight: 15 }} editable={false} />
                    </View>
                </View>


                {/* Log out Button */}

                <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate(ROUTES.SLIDES)}>
                    <Text style={styles.btnLogout}>Log Out</Text>
                </TouchableOpacity>
            </View>


            {/* Modal */}


            <Modal
                isVisible={isModalVisible}
                style={{ flex: 1, backgroundColor: '#0E6C94', borderRadius: 20, marginTop: 95, marginBottom: 450, }}
                onBackdropPress={toggleModal}
                animationOutTiming={1000}
                onSwipeComplete={toggleModal}
                swipeDirection={['down']}
                swipeThreshold={100}
                animationInTiming={1000}
                animationIn="slideInUp"
                animationOut="slideOutDown"
            >
                <View style={styles.infoCardHeader}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.btnClose} >Close</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={Submit}>
                        <Text style={styles.btnEdit} >Submit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.edit}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>FullName</Text>
                            <TextInput placeholder="FullName" style={{ fontSize: 16, marginRight: 15 }} editable={true} />
                        </View>
                        <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>Email</Text>
                            <TextInput placeholder="Email" style={{ fontSize: 16, marginRight: 15 }} editable={true} />
                        </View>
                        <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>Date Of Birth</Text>
                            <TextInput placeholder="DoB" style={{ fontSize: 16, marginRight: 15 }} editable={false} value={date} />
                            <Icon name="calendar" size={20} color="#606060" style={styles.calendar} onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                                display="inline"
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>
    );
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    profile: {
        height: 250,
    },
    pictures: {
        backgroundColor: "#D9D9D9",
        height: 100,
        width: 100,
        borderRadius: 100,
        alignSelf: "center",
        marginTop: 50,
    },
    name: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        marginTop: 25,
    },
    edit: {
        backgroundColor: '#D9D9D9',
        margin: 25,
        borderRadius: 10
    },
    btnEditLeft: {
        color: 'rgba(14, 108, 148, 0.85)',
        fontSize: 17,
    },
    btnEditRight: {
        color: 'rgba(14, 108, 148, 0.85)',
        fontSize: 17,
    },
    btnContainer: {
        backgroundColor: "#841584",
        width: 260,
        height: 50,
        borderRadius: 10,
        marginTop: 80,
        alignItems: "center",
        marginLeft: 75,
    },
    btnLogout: {
        color: "#FFFFFF",
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    infoCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: -100,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    btnClose: {
        color: '#0E6C94',
        fontSize: 17,
    },
    btnEdit: {
        fontSize: 17,
        paddingLeft: 70,
        color: '#0E6C94'
    },
    calendar: {
        marginRight: 15,
    },

})
export default AccountInfo