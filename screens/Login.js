import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, StyleSheet, Text, TextInput, View, Image, Pressable } from 'react-native';
import Group1 from '../assets/Group1.png'
import Google from '../assets/Google.png'
import Facebook from '../assets/Facebook.png'
import { ROUTES } from '../constants'


const styles = StyleSheet.create({
  image: {
    marginTop: 100,
    marginLeft: 130,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    opacity: 0.5,
    height: 313,
    borderBottomRightRadius: 120,
    borderBottomLeftRadius: 60,
  },
  logo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 150,
  },
  or: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    marginLeft: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#0E6C94',
  },
  textInside: {
    color: 'white',
    textAlign: "center",
    fontSize: 60,
    fontWeight: "900",
    marginTop: 30,
  },
  textInput: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#d4d4d4',
    alignSelf: 'center',
    paddingLeft: 20,
    marginTop: 30,
  },
  text: {
    color: '#841584',
    paddingTop: 25,
    paddingRight: 60,
    textAlign: "right",
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

  }
});

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          source={Group1}
          style={styles.image}
        />
      </View>
      <Text style={styles.textInside}>LOG IN </Text>
      <View>
        <TextInput placeholder='Enter your Email' style={styles.textInput} autoCorrect={false} textContentType='emailAddress' keyboardType="email-address" autoCapitalize="none" autoFocus={true}/>
      </View>
      <View>
        <TextInput placeholder='Enter your Password' style={styles.textInput} secureTextEntry={true} autoCorrect={false} autoCapitalize="none"/>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={styles.text} >Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(ROUTES.HOME)}>
        <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ paddingTop: 20, paddingLeft: 102, fontSize: 17 }} > Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
          <Text style={{ color: '#841584', fontSize: 17, marginTop: -20, marginLeft: 290 }}> Register</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.or}>
        <View style={{ width: 97, borderWidth: 1 }} />
        <Text style={{ paddingLeft: 10, paddingRight: 10 }}>Or Login with</Text>
        <View style={{ width: 97, borderWidth: 1 }} />
      </View>
      <View style={styles.logo}>
        <TouchableOpacity>
          <Image
            source={Google}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={Facebook}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
