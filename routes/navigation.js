import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Registration from '../screens/Registration';
import Slides from '../screens/Slides';
import Pills from '../screens/Pills';
import Appointment from '../screens/Appointment';
import MedInfo from '../screens/MedInfo';
import AccountInfo from '../screens/AccountInfo';
import ChangePassword from '../screens/changePassword';
import MedicalHistory from '../screens/MedicalHistory';
import Symptoms from '../screens/Symptoms';
import Privacy from '../screens/privacy';
import Notification from '../screens/Notification';
import BottomNav from './BottomNav';
import { ROUTES } from '../constants'
import { Image, View, Text, TouchableOpacity } from 'react-native';
import Cancer from '../screens/Cancer';
import Diabetes from '../screens/Diabetes';
import Covid from '../screens/Covid';
import Aids from '../screens/Aids';
import { useState, useEffect } from 'react';
import OnboardingScreen from '../screens/OnBoarding';

const Stack = createStackNavigator();

function MyStack() {
  const [date, setDate] = useState('');
  useEffect(() => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    var day = weekday[new Date().getDay()]; //Current Day
    setDate(
      day + ', ' + date + '/' + month + '/' + year
    );
  }, []);
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false,
        }
      }
      initialRouteName={ROUTES.SLIDES}
    >
      <Stack.Screen name={ROUTES.SLIDES} component={OnboardingScreen} />
      <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{
        gestureEnabled: false,
      }} />
      <Stack.Screen name={ROUTES.REGISTER} component={Registration} options={{
        gestureEnabled: false,
      }} />
      <Stack.Screen name={ROUTES.HOME} component={BottomNav} options={{
        gestureEnabled: false,
      }} />
      <Stack.Screen name={ROUTES.PILLS} component={Pills} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTitle: "Pills",

      }} />
      <Stack.Screen name={ROUTES.APPOINTMENT} component={Appointment} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTitle: "Appointment Reminder"

      }} />
      <Stack.Screen name={ROUTES.MEDINFO} component={MedInfo} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTitle: "Medical Information",

      }} />
      <Stack.Screen name={ROUTES.ACCOUNTINFORMATION} component={AccountInfo} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        // headerBackground: () => <View style={{ width: '100%', height: '100%', backgroundColor:'rgba(14, 108, 148, 0.85)' }} />,
        headerTintColor: 'rgba(14, 108, 148, 0.85)',
        // headerTitle: "Account Information",
      }} />
      <Stack.Screen name={ROUTES.CHANGEPASSWORD} component={ChangePassword} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',

      }} />
      <Stack.Screen name={ROUTES.MEDICALHISTORY} component={MedicalHistory} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',

      }} />
      <Stack.Screen name={ROUTES.SYMPTOMS} component={Symptoms} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',

      }} />
      <Stack.Screen name={ROUTES.PRIVACY} component={Privacy} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',

      }} />
      <Stack.Screen name={ROUTES.NOTIFICATION} component={Notification} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',

      }} />
      <Stack.Screen name={ROUTES.CANCER} component={Cancer} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',
        headerStyle: {
          height: 100,
        },
        headerTitle: () => (
          <View style={{ flexDirection: 'row', justifyContent: "space-between", alignContent: 'center' }}>
            <Image source={require('../images/Cancer.jpg')} style={{ width: 40, height: 40, marginRight: 15, borderRadius: 50, marginLeft: 30 }} />
            <Text style={{ marginRight: 0, fontSize: 20, width: 200, marginTop: 8, fontWeight: "500" }}>CANCER</Text>
            <Text style={{ marginLeft: -70, fontSize: 15, width: 200, marginTop: 13, fontWeight: "500" }}>{date}</Text>
          </View>

        ),
        headerBackTitleVisible: false,
      }} />
      <Stack.Screen name={ROUTES.DIABETES} component={Diabetes} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',
        headerStyle: {
          height: 100,
        },
        headerTitle: () => (
          <View style={{ flexDirection: 'row', marginLeft: 0 }}>
            <Image source={require('../images/diabetes.png')} style={{ width: 40, height: 40, marginRight: 15, borderRadius: 50, marginLeft: 30 }} />
            <Text style={{ marginRight: 0, fontSize: 20, width: 200, marginTop: 8, fontWeight: "500" }}>DIABETES</Text>
            <Text style={{ marginLeft: -70, fontSize: 15, width: 200, marginTop: 13, fontWeight: "500" }}>{date}</Text>
          </View>

        ),
        headerBackTitleVisible: false,
      }} />
      <Stack.Screen name={ROUTES.COVID} component={Covid} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',
        headerStyle: {
          height: 100,
        },
        headerTitle: () => (
          <View style={{ flexDirection: 'row', marginLeft: 0 }}>
            <Image source={require('../images/covid19.jpg')} style={{ width: 40, height: 40, marginRight: 15, borderRadius: 50, marginLeft: 30 }} />
            <Text style={{ marginRight: 0, fontSize: 20, width: 200, marginTop: 8, fontWeight: "500" }}>COVID</Text>
            <Text style={{ marginLeft: -70, fontSize: 15, width: 200, marginTop: 13, fontWeight: "500" }}>{date}</Text>
          </View>

        ),
        headerBackTitleVisible: false,
      }} />
      <Stack.Screen name={ROUTES.AIDS} component={Aids} options={{
        headerShown: true,
        headerBackTitle: 'Back',
        headerTintColor: 'rgba(14, 108, 148, 0.85)',
        headerStyle: {
          height: 100,
        },
        headerTitle: () => (
          <View style={{ flexDirection: 'row', marginLeft: 0 }}>
            <Image source={require('../images/HIV.jpg')} style={{ width: 40, height: 40, marginRight: 15, borderRadius: 50, marginLeft: 30 }} />
            <Text style={{ marginRight: 0, fontSize: 20, width: 200, marginTop: 8, fontWeight: "500" }}>HIV/AIDS</Text>
            <Text style={{ marginLeft: -70, fontSize: 15, width: 200, marginTop: 13, fontWeight: "500" }}>{date}</Text>
          </View>

        ),
        headerBackTitleVisible: false,
      }} />

    </Stack.Navigator>
  );
}
export default MyStack;