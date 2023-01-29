import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Pressable, TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import Group1 from '../assets/Group1.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconCam from 'react-native-vector-icons/Ionicons'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Camera, CameraType } from 'expo-camera';
// import { Input, ListItem, Avatar } from "@rneui/themed";
import { ROUTES } from '../constants'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

 
const Registration = ({ navigation }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date, setDate] = useState(new Date());
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [startCamera, setStartCamera] = useState(false)

  const openCamera = async () => {
    const cameraStatus = await Camera.requestCameraPermissionsAsync();
    // setHasCameraPermission(cameraStatus.status === 'granted');
    if (cameraStatus.status === 'granted') {
      setStartCamera(true)
      // console.warn('cameraStatus',cameraStatus)
    } else {
      Alert.alert('Access denied')
    }
  }
  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null)
      setImage(data.uri);
      // setStartCamera(false)
      console.warn('data', data)
    }

  }
  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }
  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

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
    // console.warn("A date has been picked: ", Fulldate);
    hideDatePicker();
  };
  return (

    <View style={styles.container}>
      <View style={{ backgroundColor: "white" }}>
        {startCamera && (
          <Camera
            ref={ref => setCamera(ref)}
            style={styles.fixedRatio}
            type={type}
            ratio={'4:3'}
            zoom={0}
          >
            <View style={styles.camHeader}>
              <TouchableOpacity onPress={() => { setStartCamera(false) }}>
                <Text style={{ paddingTop: 50, paddingLeft: 20, color: "#FFF", fontSize: 35 }}>X</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.camInside}>
              <TouchableOpacity style={styles.camTakePict} onPress={takePicture}></TouchableOpacity>
              <TouchableOpacity onPress={toggleCameraType}>
                <IconCam name="camera-reverse" size={45} color="#fff" style={{ marginTop: 50 }}></IconCam>
              </TouchableOpacity>
            </View>
          </Camera>
        )}
      </View>
      <KeyboardAwareScrollView style={{ backgroundColor: '#0E6C94' }}>
        <Image
          source={Group1}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.cameraContainer} onPress={openCamera}>
            <Icon name="camera" size={30} color="#606060" style={styles.camera} onPress={openCamera} />
          </TouchableOpacity>
          <View style={styles.keyboardView}>
            <TextInput placeholder='Full Name' style={styles.textInput} autoCorrect={true} textContentType='name' autoFocus={true}/>
          </View>
          <View>
            <TextInput placeholder='Email' style={styles.textInput2} textContentType='emailAddress' autoCorrect={false} keyboardType="email-address" autoCapitalize="none"  />
          </View>
          <View >
            <TextInput placeholder='Date Of Birth' style={styles.textInput2} value={date} editable={false} />
            <Icon name="calendar" size={30} color="#606060" style={styles.calendar} onPress={showDatePicker} />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              display="inline"
            />
          </View>
          <View>
            <TextInput placeholder='Password' style={styles.textInput1} secureTextEntry={true} autoCorrect={false} />
          </View>
          <View>
            <TextInput placeholder='Confirm Password' style={styles.textInput2} secureTextEntry={true} autoCorrect={false} />
          </View>
          <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate(ROUTES.LOGIN) }}>
            <Text style={styles.btnText}>REGISTER</Text>
          </TouchableOpacity>
          <View style={{ display: 'flex', flexDirection: "row", justifyContent: "center" }}>
            <Text style={{ textAlign: 'center', marginTop: 20, color: 'rgba(14, 108, 148, 0.69);', fontSize: '18' }}>Already have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate(ROUTES.LOGIN) }}>
              <Text style={{ marginTop: 20, color: '#000', fontSize: '18', marginLeft: 0 }}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView >
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E6C94',
  },
  fixedRatio: {
    // flex: 1,
    // aspectRatio: 1,
    width: '100%',
    height: '100%',
    // marginTop: 70,
    marginBottom: 50,

  },
  camInside: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 620,
    backgroundColor: '#000000a0',
  },
  camHeader: {
    flexDirection: 'row',
    backgroundColor: '#000000a0',
    height: 120,
  },
  camTakePict: {
    backgroundColor: 'white',
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 40,
    marginBottom: 50,
    marginLeft: 180,
    marginRight: 100,
  },
  image: {
    marginTop: 70,
    marginLeft: 130,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    height: '100%',
    marginTop: 80,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 150,
  },
  cameraContainer: {
    position: 'absolute',
    width: 91,
    height: 91,
    left: 165,
    top: -40,
    backgroundColor: '#D9D9D9',
    borderRadius: 50,
  },
  camera: {
    marginTop: 25,
    marginLeft: 30,
  },
  textInput: {
    backgroundColor: '#D9D9D9',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 100,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    alignSelf: 'center',
    paddingLeft: 20,
  },
  textInput2: {
    backgroundColor: '#D9D9D9',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    alignSelf: 'center',
    paddingLeft: 20,
  },
  textInput1: {
    backgroundColor: '#D9D9D9',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 29,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    alignSelf: 'center',
    paddingLeft: 20,
  },
  btn: {
    backgroundColor: '#841584',
    width: 300,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#841584',
    alignSelf: 'center',
    textAlign: "center",
    paddingTop: 5,
    marginTop: 30,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    paddingTop: 5,

  },
  calendar: {
    marginTop: -40,
    marginLeft: 315,
  },
})
export default Registration;




