import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput, Button, Image } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal";
import { useEffect, useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Unorderedlist from 'react-native-unordered-list';
import AboutPills from '../images/AboutPills.gif';
import RNPickerSelect from 'react-native-picker-select/src/index.js';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';



const Pills = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalEditVisible, setModalEditVisible] = useState(false);
    const [isAboutPillsVisible, setAboutPillsVisible] = useState(false);
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false)
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date())
    const [pills, setPills] = useState("");
    const [postData, setPostData] = useState([])
    const [medType, setMedType] = useState("");
    const [medUnit, setMedUnit] = useState("");
    const [strength, setStrength] = useState("");



    const toggleModal = () => {
        setModalVisible(!isModalVisible);
        setPills("");
        setDate("");
        setTime("");
        setMedType("");
        setMedUnit("");
        setStrength("")
    };
    const toggleModalEdit = () => {
        setModalEditVisible(!isModalEditVisible);
        setPills(pills);
        setDate(date);
        setTime(time);
        setMedType(medType);
        setMedUnit(medUnit);
        setStrength(strength)
    };
    const toggleAboutPills = () => {
        setAboutPillsVisible(!isAboutPillsVisible);
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
            date.getFullYear() + "/" + addZero(date.getMonth() + 1) + "/" + addZero(date.getDate());
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
    const addPills = () => {
        const data = {
            pills: pills,
            date: date,
            time: time,
            strength: strength,
            medType: medType,
            medUnit: medUnit,
        }
        setPostData([...postData, data])
        toggleModal()
    }
    const editPills = () => {
        const data = {
            pills: pills,
            date: date,
            time: time,
            strength: strength,
            medType: medType,
            medUnit: medUnit,
        }
        setPostData([data])
        toggleModalEdit()
    }
    const deletePills = () => {
        setPostData([])

    }
    return (
        <View style={styles.page}>
            <View style={styles.header} >
                <ScrollView>
                    <Text style={{ fontSize: 30, marginTop: 10, marginLeft: 20, fontWeight: "700", color: "white" }}>Your Pills</Text>
                    {postData && postData.map((item, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity style={styles.cardPills}  >
                                    <View style={{ flexDirection: 'row', justifyContent: "space-between", }} >
                                        <View style={{ backgroundColor: 'lightgray', width: 140, height: 120, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                                            <Text style={styles.cardPillsHeaderText}>{item.time}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', margin: 20 }}>
                                            <Text style={styles.cardPillsText}>{item.pills}</Text>
                                            <Text style={{ marginTop: 5 }}>{item.medType}</Text>
                                            <Text style={{ marginTop: 5 }}>{item.strength} {item.medUnit}</Text>
                                            <Text style={{ marginTop: 5 }}><Icon name="calendar" size={17} color="#606060" /> {item.date}</Text>
                                        </View>
                                        <TouchableOpacity onPress={toggleModalEdit}>
                                            <Ionicons name="chevron-forward" size={20} color="#606060" style={{ marginTop: 5, marginLeft: 80 }} />
                                        </TouchableOpacity>
                                    </View>
                                </TouchableOpacity>


                                <Modal
                                    isVisible={isModalEditVisible}
                                    style={{ flex: 1, backgroundColor: '#0E6C94', borderRadius: 20, marginTop: 80 }}
                                    onBackdropPress={toggleModalEdit}
                                    animationOutTiming={1000}
                                    onSwipeComplete={toggleModalEdit}
                                    // swipeDirection={['down']}
                                    swipeThreshold={100}
                                    animationInTiming={1000}
                                // animationIn="slideInUp"
                                // animationOut="slideOutDown"
                                >
                                    <View style={styles.infoCardHeaderEdit}>
                                        <TouchableOpacity onPress={toggleModalEdit}>
                                            <Button title='Close' onPress={toggleModalEdit} />
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Text>{pills}</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Button title='Submit' onPress={toggleModalEdit} />
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                                            <Text style={{ fontSize: 25, marginTop: 15, marginLeft: 30, fontWeight: "700", color: "white" }}>Edit Details</Text>
                                        </View>
                                        <View>
                                            <View style={styles.edit}>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                                    <Text style={{ fontSize: 16 }}>Pills Name</Text>
                                                    <TextInput style={{ fontSize: 16, marginRight: 15 }} editable={true} onChangeText={(e) => setPills(e)} placeholder={pills} />
                                                </View>
                                                <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                                    <Text style={{ fontSize: 16 }}>Pills Type</Text>
                                                    <RNPickerSelect
                                                        onValueChange={(medType) => setMedType(medType)}
                                                        value={medType}
                                                        items={[
                                                            { label: 'Capsule', value: 'Capsule' },
                                                            { label: 'Tablet', value: 'Tablet' },
                                                            { label: 'Liquid', value: 'Liquid' },
                                                            { label: 'Spray', value: 'Spray' },

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
                                                    <Text style={{ fontSize: 16 }}>Strength</Text>
                                                    <TextInput placeholder="Add Strength" style={{ fontSize: 16, marginRight: 15 }} editable={true} onChangeText={(e) => setStrength(e)} />
                                                </View>
                                                <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                                    <Text style={{ fontSize: 16 }}>Choose Unit</Text>
                                                    <RNPickerSelect
                                                        onValueChange={(medUnit) => setMedUnit(medUnit)}
                                                        value={medUnit}
                                                        items={[
                                                            { label: 'mg', value: 'mg' },
                                                            { label: 'mcg', value: 'mcg' },
                                                            { label: 'g', value: 'g' },
                                                            { label: 'ml', value: 'ml' },
                                                            { label: '%', value: '%' },

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
                                                    <Text style={{ fontSize: 16 }}>Time</Text>
                                                    <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15, }} editable={false} value={time} onChange={(e) => setTime(e.target.value)} />
                                                    <Icon name="clock-o" size={20} color="#606060" style={styles.calendar} onPress={showTimePicker} />
                                                    <DateTimePickerModal
                                                        isVisible={isTimePickerVisible}
                                                        mode="time"
                                                        onConfirm={handleConfirmTime}
                                                        onCancel={hideTimePicker}
                                                        display="inline"
                                                    />
                                                </View>
                                                <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                                                    <Text style={{ fontSize: 16 }}>Date</Text>
                                                    <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15, }} editable={false} value={date} onChange={(e) => setDate(e.target.value)} />
                                                    <Icon name="calendar" size={20} color="#606060" style={styles.calendar} onPress={showDatePicker} />
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
                                        <TouchableOpacity style={styles.btnContainer2} onPress={toggleModalEdit}>
                                            <Button title="Delete Pills" onPress={toggleModalEdit} color="red" />
                                        </TouchableOpacity>
                                    </View>
                                </Modal>
                            </View>
                        )
                    })}

                    <TouchableOpacity style={styles.btnContainer} onPress={toggleModal}>
                        <Button title="Add Pills" onPress={toggleModal} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 30, marginTop: 10, marginLeft: 20, fontWeight: "700", color: "white" }}>About Pills</Text>
                    <TouchableOpacity onPress={toggleAboutPills}>
                        <View
                            style={{  flexDirection: "column", backgroundColor: "white", borderRadius: 10, marginTop: 20, marginLeft: 20, marginRight: 10,marginBottom:30 }}>
                            <Image source={AboutPills} style={{ flex: 1, height: 200, marginTop: 0, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
                            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black", marginTop: 20, marginLeft: 15, }}>
                                Tracking Your Pills
                            </Text>
                            <Text style={{ fontSize: 15, color: "black", marginTop: 10, marginLeft: 15, marginBottom: 10 }}>
                                Why is that so important to track your pills and medications?
                            </Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>


            {/* Modal About Pills  */}

            <Modal
                isVisible={isAboutPillsVisible}
                style={{ flex: 1, backgroundColor: '#fff', borderRadius: 20, marginTop: 105, width: '100%', marginLeft: 0, marginBottom: -50, height: "100%", }}
                onBackdropPress={toggleAboutPills}
                onBackButtonPress={toggleAboutPills}
            >
                <View style={styles.headerAboutpills}>
                    <Text style={{ fontWeight: "bold", color: "black", fontSize: 18, marginLeft: 150, }}>
                        About Pills
                    </Text>
                    <TouchableOpacity onPress={toggleAboutPills}>
                        <Button title='Done' style={{ fontWeight: 'bold' }} onPress={toggleAboutPills} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View
                        style={{ flexDirection: "column", borderRadius: 0, marginTop: 0, marginLeft: 0, marginRight: 0, marginBottom: 80, textAlign: 'center', justifyContent: 'center' }}>
                        <Image source={AboutPills} style={{ width: '100%', height: 250, marginTop: 0, }} />
                        <Text style={{ fontSize: 22, fontWeight: "bold", color: "black", marginTop: 20, marginLeft: 15, }}>
                            Why Pills Tracking is Important
                        </Text>
                        <Text style={{ fontSize: 15, color: "black", marginTop: 15, marginLeft: 15, marginBottom: 10, marginRight: 15, }}>
                            Tracking your pills and medications is important because it helps you to remember when to take your pills and medications. It also helps you to keep track of your pills and medications so that you can see if you are taking them on time and if you are taking the right amount of pills and medications.
                        </Text>
                        <Text style={{ fontSize: 15, color: "black", marginTop: 10, marginLeft: 15, marginBottom: 10, marginRight: 15, }}>
                            Tracking your pills and medications is important because it helps you to remember when to take your pills and medications. It also helps you to keep track of your pills and medications so that you can see if you are taking them on time and if you are taking the right amount of pills and medications.
                        </Text>
                        <Text style={{ fontSize: 15, color: "black", marginTop: 10, marginLeft: 15, marginBottom: 10, marginRight: 15, }}>
                            Tracking your pills and medications is important because it helps you to remember when to take your pills and medications. It also helps you to keep track of your pills and medications so that you can see if you are taking them on time and if you are taking the right amount of pills and medications.
                        </Text>
                        <Text style={{ fontSize: 15, color: "black", marginTop: 10, marginLeft: 15, marginBottom: 10, marginRight: 15, }}>
                            Tracking your pills and medications is important because it helps you to remember when to take your pills and medications. It also helps you to keep track of your pills and medications so that you can see if you are taking them on time and if you are taking the right amount of pills and medications.
                        </Text>
                    </View>
                </ScrollView>
            </Modal>




            {/* // Modal Add Pills */}

            <Modal
                isVisible={isModalVisible}
                style={{ flex: 1, backgroundColor: '#0E6C94', borderRadius: 20, marginTop: 105, marginBottom: 350, }}
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
                    <TouchableOpacity >
                        <Text style={styles.btnEdit} onPress={addPills}>Submit</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <View style={styles.edit}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>Pills Name</Text>
                            <TextInput placeholder="Add Pills Name" style={{ fontSize: 16, marginRight: 15 }} editable={true} onChangeText={(e) => setPills(e)} />
                        </View>
                        <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>Pills Type</Text>
                            <RNPickerSelect
                                onValueChange={(medType) => setMedType(medType)}
                                value={medType}
                                items={[
                                    { label: 'Capsule', value: 'Capsule' },
                                    { label: 'Tablet', value: 'Tablet' },
                                    { label: 'Liquid', value: 'Liquid' },
                                    { label: 'Spray', value: 'Spray' },

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
                            <Text style={{ fontSize: 16 }}>Strength</Text>
                            <TextInput placeholder="Add Strength" style={{ fontSize: 16, marginRight: 15 }} editable={true} onChangeText={(e) => setStrength(e)} />
                        </View>
                        <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>Choose Unit</Text>
                            <RNPickerSelect
                                onValueChange={(medUnit) => setMedUnit(medUnit)}
                                value={medUnit}
                                items={[
                                    { label: 'mg', value: 'mg' },
                                    { label: 'mcg', value: 'mcg' },
                                    { label: 'g', value: 'g' },
                                    { label: 'ml', value: 'ml' },
                                    { label: '%', value: '%' },

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
                            <Text style={{ fontSize: 16 }}>Time</Text>
                            <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15, }} editable={false} value={time} onChange={(e) => setTime(e.target.value)} />
                            <Icon name="clock-o" size={20} color="#606060" style={styles.calendar} onPress={showTimePicker} />
                            <DateTimePickerModal
                                isVisible={isTimePickerVisible}
                                mode="time"
                                onConfirm={handleConfirmTime}
                                onCancel={hideTimePicker}
                                display="inline"
                            />
                        </View>
                        <View style={{ borderWidth: 0.5, opacity: 0.3, marginLeft: 25, }} />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 25, marginBottom: 15, marginTop: 15 }}>
                            <Text style={{ fontSize: 16 }}>Date</Text>
                            <TextInput placeholder="Not Set" style={{ fontSize: 16, marginRight: 15, }} editable={false} value={date} onChange={(e) => setDate(e.target.value)} />
                            <Icon name="calendar" size={20} color="#606060" style={styles.calendar} onPress={showDatePicker} />
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
        </View >
    )
}
export default Pills;
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "rgba(14, 108, 148, 0.85);",
    },
    header: {
        height: "100%",
    },
    btnContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 20,
        marginRight: 10,
        marginBottom: 10,
        paddingRight: 255,
        paddingLeft: 20,

    },
    btnContainer2: {
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        paddingRight: 200,
    },
    modal: {
        width: '100%',
        height: 0,
        backgroundColor: '#fff',
        margin: 0,
        marginBottom: 300,
        marginTop: 200,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
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
    },
    btnEdit: {
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
        color: 'black',
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
    cardPills: {
        // width: 350,
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginLeft: 20,
        marginTop: 10,
        marginRight: 10,
        shadowColor: '#171717',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
    },
    cardPillsHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    cardPillsHeaderText: {
        fontSize: 42,
        fontWeight: "800",
        textAlign: "center",
        paddingTop: 32,
    },
    cardPillsHeaderDate: {
        fontSize: 15,
        paddingLeft: 20,
        paddingTop: 10,
    },
    cardPillsText: {
        fontSize: 16,
        fontWeight: "600",
        // paddingBottom: 5,
        // paddingRight: 20,
        // paddingTop: 40,
    },
    cardPillsBody: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
    },
    edit: {
        backgroundColor: '#D9D9D9',
        margin: 25,
        marginTop: 10,
        borderRadius: 10
    },
    infoCardHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 20,
        marginTop: -75,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    infoCardHeaderEdit: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginTop: -300,
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
    headerAboutpills: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginTop: 0,
        borderBottomWidth: 0.5,
        borderColor: 'lightgray',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
})