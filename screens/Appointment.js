import { View, StyleSheet, TouchableOpacity, ScrollView, Text, TextInput } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/FontAwesome';
import React, { useState } from 'react';
import Modal from "react-native-modal";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Appointment = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalEditVisible, setModalEditVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const [data, setData] = useState([]);


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        // setPills("");
        setDate("");
        setTime("");
    };
    const toggleModalEdit = () => {
        setModalEditVisible(!isModalEditVisible);
        // setPills(pills);
        setDate(date);
        setTime(time);
    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true)
    }
    const hideTimePicker = () => {
        setTimePickerVisibility(false)
    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirmDate = (date) => {
        var Fulldate =
            date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
        setDate(Fulldate)
        hideDatePicker();
    };
    function addZero(i) {
        if (i < 10) { i = "0" + i }
        return i;
    }
    const handleConfirmTime = (time) => {
        var Fulltime =
            addZero(time.getHours()) + ":" + addZero(time.getMinutes());
        setTime(Fulltime)
        hideTimePicker();
    }
    const addAppointment = (e) => {
        e.preventDefault();
        setData([...data, { name, job, date, time }]);
        toggleModal();
    };
    const editAppointment = (e) => {
        e.preventDefault();
        setData([{ name, job, date, time }]);
        toggleModalEdit();
    };
    const deleteAppointment = (e) => {
        e.preventDefault();
        setData([]);
    };

    return (
        <View style={styles.page}>
            <View  >
                <View style={styles.cardAppointment}>
                    <ScrollView>
                        {data.map((item, index) => {
                            return (
                                <View style={styles.card} key={index}>
                                    <Text style={styles.doctorName}>{item.name}</Text>
                                    <View style={styles.cardBody}>
                                        <Text style={styles.doctorWork}>{item.job}</Text>
                                        <Icon name="edit" size={30} color="#ffd534" style={styles.edit} onPress={toggleModalEdit} />
                                        <Icon name="trash-o" size={30} color="red" style={styles.delete} onPress={deleteAppointment} />
                                    </View>
                                    <View style={styles.dateTime}>
                                        <Ionicons name="ios-watch" size={32} color='#0E6C94' style={{ paddingTop: 20, paddingLeft: 15 }} />
                                        <Text style={{ paddingTop: 30, paddingLeft: 10, color: '#0E6C94' }}>  {item.time}</Text>
                                        <Ionicons name="calendar" size={32} color='#0E6C94' style={{ paddingTop: 20, paddingLeft: 70 }} />
                                        <Text style={{ paddingTop: 30, paddingLeft: 10, color: '#0E6C94' }}> {item.date}</Text>
                                    </View>

                                </View>
                            );
                        })}
                    </ScrollView>
                </View>

            </View>

            <TouchableOpacity style={styles.btnContainer} onPress={toggleModal}>
                <Ionicons name="add" size={32} color='white' style={{ textAlign: "center", padding: 15 }} />
            </TouchableOpacity>


            {/* Modal to set an appointment */}

            <Modal isVisible={isModalVisible} style={styles.modal} animationType="slide" >
                <View style={styles.infoCardHeader3}>
                    <TouchableOpacity onPress={toggleModal}>
                        <Text style={styles.btnEditLeft} >Close</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>APPOINTMENT</Text>
                    <TouchableOpacity onPress={addAppointment}>
                        <Text style={styles.btnEdit} >Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard3}>
                    <View >
                        <View >
                            <Text style={styles.infoCardLabel}>Doctor Name</Text>
                            <TextInput placeholder='Type here' style={styles.textInput} autoCorrect={false} textContentType='' value={name} onChangeText={e => setName(e)} />
                        </View>
                        <View >
                            <Text style={styles.infoCardLabel}>Doctor Profession</Text>
                            <TextInput placeholder='Type here' style={styles.textInput} autoCorrect={false} textContentType='' value={job} onChangeText={e => setJob(e)} />
                        </View>
                        <View >
                            <Text style={styles.infoCardLabel}>Time</Text>
                            <TextInput placeholder='' style={styles.textInput} autoCorrect={false} textContentType='' editable={false} value={time} onChange={(e) => setTime(e.target.value)} />
                            <Icon name="clock-o" size={30} color="#606060" style={styles.calendar} onPress={showTimePicker} />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleConfirmTime}
                                onCancel={hideTimePicker}
                                display="inline"
                            />
                        </View>
                        <View >
                            <Text style={styles.infoCardLabel}>Date</Text>
                            <TextInput placeholder='' style={styles.textInput} autoCorrect={false} textContentType='' value={date} editable={false} onChange={(e) => setDate(e.target.value)} />
                            <Icon name="calendar" size={30} color="#606060" style={styles.calendar} onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirmDate}
                                onCancel={hideDatePicker}
                                display="inline"
                            />
                        </View>
                    </View>
                </View>
            </Modal>

            {/* Modal to Edit Appointment */}

            <Modal isVisible={isModalEditVisible} style={styles.modal} animationType="slide" >
                <View style={styles.infoCardHeader3}>
                    <TouchableOpacity onPress={toggleModalEdit}>
                        <Text style={styles.btnEditLeft} >Close</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>APPOINTMENT</Text>
                    <TouchableOpacity onPress={editAppointment}>
                        <Text style={styles.btnEdit} >Submit</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.infoCard3}>
                    <View >
                        <View >
                            <Text style={styles.infoCardLabel}>Doctor Name</Text>
                            <TextInput placeholder='Type here' style={styles.textInput} autoCorrect={false} textContentType='' value={name} onChangeText={e => setName(e)} />
                        </View>
                        <View >
                            <Text style={styles.infoCardLabel}>Doctor Profession</Text>
                            <TextInput placeholder='Type here' style={styles.textInput} autoCorrect={false} textContentType='' value={job} onChangeText={e => setJob(e)} />
                        </View>
                        <View >
                            <Text style={styles.infoCardLabel}>Time</Text>
                            <TextInput placeholder='' style={styles.textInput} autoCorrect={false} textContentType='' editable={false} value={time} onChange={(e) => setTime(e.target.value)} />
                            <Icon name="clock-o" size={30} color="#606060" style={styles.calendar} onPress={showTimePicker} />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleConfirmTime}
                                onCancel={hideTimePicker}
                                display="inline"
                            />
                        </View>
                        <View >
                            <Text style={styles.infoCardLabel}>Date</Text>
                            <TextInput placeholder='' style={styles.textInput} autoCorrect={false} textContentType='' value={date} editable={false} onChange={(e) => setDate(e.target.value)} />
                            <Icon name="calendar" size={30} color="#606060" style={styles.calendar} onPress={showDatePicker} />
                            <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="date"
                                onConfirm={handleConfirmDate}
                                onCancel={hideDatePicker}
                                display="inline"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default Appointment;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    btnContainer: {
        position: "absolute",
        backgroundColor: "#841584",
        width: 60,
        height: 60,
        borderRadius: 50,
        marginTop: 680,
        marginLeft: 320,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
    },
    cardAppointment: {
        height: '100%',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        height: 220,
        backgroundColor: "white",
        margin: 20,
        borderRadius: 10,

    },
    doctorName: {
        fontSize: 40,
        fontWeight: "700",
        marginLeft: 20,
        marginTop: 20,
        color: "#A70808B0"
    },
    cardBody: {
        display: 'flex',
        flexDirection: 'row',
    },
    doctorWork: {
        fontSize: 20,
        fontWeight: "400",
        color: "#A70808B0",
        marginLeft: 20,
        marginTop: 10,
    },
    dateTime: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: "#D9D9D9",
        height: 78,
        borderRadius: 10,
        margin: 20,
    },
    edit: {
        marginLeft: 120,
        marginTop: 10,
    },
    delete: {
        marginLeft: 20,
        marginTop: 10,
    },
    modal: {
        width: '100%',
        height: 0,
        backgroundColor: '#fff',
        margin: 0,
        marginBottom: 300,
        marginTop: 200,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
    },
    infoCardHeader3: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: 20,
        backgroundColor: '#0E6C94',
        marginTop: -90,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
    btnEditLeft: {
        color: 'white',
        fontSize: 17,
    }, btnEdit: {
        fontSize: 17,
        paddingLeft: 70,
        color: 'white'
    },
    headerTitle: {
        fontSize: 20,
        paddingLeft: 75,
        fontWeight: 'bold',
        color: "white"
    },
    infoCard3: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: 0,
        width: '100%',
        margin: 0,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,

    }, textInput: {
        height: 30,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(14, 108, 148, 0.85)',
        paddingLeft: 10,
    },
    infoCardLabel: {
        fontSize: 17,
        paddingLeft: 40,
        paddingTop: 20,
    },
    calendar: {
        marginTop: -35,
        marginLeft: 315,
    },
})