// import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Slides from './screens/Slides';
import MyStack from './routes/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;