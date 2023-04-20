import { View, StyleSheet, TouchableOpacity, ScrollView, Text, TextInput, Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useState } from "react";
import Modal from "react-native-modal";
import RNPickerSelect from 'react-native-picker-select/src/index.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const MedInfo = () => {
    const [Weight, setWeight] = useState("");
    const [Height, setHeight] = useState("");
    const [BloodType, setBloodType] = useState("");
    const [sex, setSex] = useState("");
    const [wheelchair, setWheelchair] = useState("");
    const [conditions, setConditions] = useState("");
    const [allergies, setAllergies] = useState('')
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [datas, setData] = useState([])
    const [isModalVisible, setModalVisible] = useState(false);
    const [disabled, setDisabled] = useState(false)

    function handleGameClick() {
        setDisabled(true);
        setColor("blue")
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const Submit = () => {
        setData([{ Weight, Height, BloodType, sex, wheelchair, conditions, allergies, name, number }, ...datas])
        setModalVisible(!isModalVisible);

    }
    return (
        <View style={styles.page}>
            <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, paddingLeft: 30, color: "white" }} >Health Details</Text>
                    <TouchableOpacity onPress={toggleModal} >
                        <Text style={{ fontSize: 18, fontWeight: '600', paddingTop: 30, paddingRight: 30, color: "white" }} >Edit</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ backgroundColor: 'white', margin: 15, borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Weight</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={Weight} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Height</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={Height} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Sex</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={sex} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>BloodType</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={BloodType} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Wheelchair</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={wheelchair} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 45 }}>
                        <Text style={{ fontSize: 16 }}>Allergies</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={allergies} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 45 }}>
                        <Text style={{ fontSize: 16 }}>Medical Conditions</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={conditions} />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, paddingLeft: 30, color: "white" }} >Emergency Contacts</Text>
                </View>
                <View style={{ backgroundColor: 'white', margin: 15, borderRadius: 10 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Name</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={name} />
                    </View>
                    <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: 16 }}>Cellphone Number</Text>
                        <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} editable={disabled} value={number} />
                    </View>
                </View>


                {/* Modal To Edit */}


                <Modal
                    isVisible={isModalVisible}
                    style={{ flex: 1, backgroundColor: '#0E6C94', borderRadius: 20, marginTop: 95, width: '100%', marginLeft: 0,marginBottom: -50, }}
                    onBackdropPress={toggleModal}
                >
                    <View style={styles.infoCardHeader}>
                        <TouchableOpacity onPress={toggleModal}>
                            <Text style={styles.btnClose} >Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={Submit}>
                            <Text style={styles.btnEdit} >Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <KeyboardAwareScrollView>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, color: "white", }} >Health Details</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', margin: 15, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Weight</Text>
                                <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} autoCorrect={false} textContentType='' onChangeText={(e) => setWeight(e)} value={Weight} />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Height</Text>
                                <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} autoCorrect={false} textContentType='' onChangeText={(e) => setHeight(e)} value={Height} />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Sex</Text>
                                <RNPickerSelect
                                    onValueChange={(sex) => setSex(sex)}
                                    value={sex}
                                    items={[
                                        { label: 'Male', value: 'Male' },
                                        { label: 'Female', value: 'Female' },
                                    ]}
                                    placeholder={{ label: 'Not Set', value: null }}
                                    style={{
                                        inputIOS: {
                                            fontSize: 16,
                                            marginRight: 15,
                                            color: 'black',
                                        },
                                    }}
                                />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Blood Type</Text>
                                <RNPickerSelect
                                    onValueChange={(BloodType) => setBloodType(BloodType)}
                                    value={BloodType}
                                    items={[
                                        { label: 'A+', value: 'A+' },
                                        { label: 'A-', value: 'A-' },
                                        { label: 'AB+', value: 'AB+' },
                                        { label: 'AB-', value: 'AB-' },
                                        { label: 'B+', value: 'B+' },
                                        { label: 'B-', value: 'B-' },
                                        { label: 'O+', value: 'O+' },
                                        { label: 'O-', value: 'O-' },
                                    ]}
                                    placeholder={{ label: 'Not Set', value: null }}
                                    style={{
                                        inputIOS: {
                                            fontSize: 16,
                                            marginRight: 15,
                                            color: 'black',
                                        },
                                    }}
                                />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Wheelchair</Text>
                                <RNPickerSelect
                                    onValueChange={(wheelchair) => setWheelchair(wheelchair)}
                                    value={wheelchair}
                                    items={[
                                        { label: 'Yes', value: 'Yes' },
                                        { label: 'No', value: 'No' },
                                    ]}
                                    placeholder={{ label: 'Not Set', value: null }}
                                    style={{
                                        inputIOS: {
                                            fontSize: 16,
                                            marginRight: 15,
                                            color: 'black',
                                        },
                                    }}
                                />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 45 }}>
                                <Text style={{ fontSize: 16 }}>Allergies</Text>
                                <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} autoCorrect={false} textContentType='' onChangeText={(e) => setAllergies(e)} value={allergies} />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 45 }}>
                                <Text style={{ fontSize: 16 }}>Medical Conditions</Text>
                                <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} autoCorrect={false} textContentType='' onChangeText={(e) => setConditions(e)} value={conditions} />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 30, fontWeight: '600', paddingTop: 20, paddingLeft: 30, color: "white" }} >Emergency Contacts</Text>
                        </View>
                        <View style={{ backgroundColor: 'white', margin: 15, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Name</Text>
                                <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} autoCorrect={false} textContentType='' onChangeText={(e) => setName(e)} value={name} />
                            </View>
                            <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                <Text style={{ fontSize: 16 }}>Cellphone Number</Text>
                                <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15 }} autoCorrect={false} textContentType='' onChangeText={(e) => setNumber(e)} value={number} />
                            </View>
                        </View>
                    </KeyboardAwareScrollView>
                </Modal>
            </View >
        </View >
    )
}
export default MedInfo;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    infoCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: 0,
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
})