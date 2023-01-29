import React from 'react'
import { Text, View, Image, Pressable, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import MedicalWatch from '../images/medWatch.gif'
import MedicalReport from '../images/medReport.gif'
import MedicalAmbulance from '../images/medical-ambulance.gif'
import { ROUTES } from '../constants'


var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E6C94'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E6C94'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0E6C94'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 50,
    width: 320,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 300,
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
    marginTop: 120,
  },
  btnText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: 'white',
    paddingTop: 5,

  }
}

export default function Slides({ navigation }) {
  return (
    <Swiper
      style={styles.wrapper}
      loop={false}
      autoplay={true}
      dot={<View style={{ backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
      activeDot={<View style={{ backgroundColor: '#841584', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }} />}
    >
      <View testID="Hello" style={styles.slide1}>
        <Text style={styles.text}>Medical Reminder <Text style={{ color: "#841584" }}>Assistance</Text></Text>
        <Image source={MedicalWatch} style={styles.image} />
      </View>
      <View testID="Beautiful" style={styles.slide2}>
        <Text style={styles.text}>Medical History <Text style={{ color: "#841584" }}>Report</Text></Text>
        <Image source={MedicalReport} style={styles.image} />
      </View>
      <View testID="Simple" style={styles.slide3}>
        <Text style={styles.text}>Localisation of Near <Text style={{ color: "#841584" }}>Hospital</Text></Text>
        <Image source={MedicalAmbulance} style={styles.image} />
        <TouchableOpacity style={styles.btn} onPress={() => { navigation.navigate(ROUTES.LOGIN) }}>
          <Text style={styles.btnText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </Swiper>
  )
}