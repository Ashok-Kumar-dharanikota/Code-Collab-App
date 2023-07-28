import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../Components/CustomButton';
import InputField from '../Components/InputField';

import Banner from '../assets/Social-icons/register-banner.png';
import Colors from '../Constants/Colors';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { firebaseConfig } from '../FirebaseOperations/firebaseConfig';

export default function LoginScreen({ navigation }) {

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const LoginUser = async () => {
    try { 
      if(email != null && password != null ) {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response)
        Alert.alert('User account login in!');  
      }
      // If there's an error creating the user or signing them in...
      else{
        Alert.alert('Enter valid credentials!');  
      }
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        Alert.alert('That email address is invalid!');
      }

      console.error(error);
    }

  };


  return (
    <SafeAreaView style={styles.safeareaview}>
      <View style={styles.view1}>
        <View style={styles.bannerview}>
        <Image source={Banner} style={styles.bannerimage} />
        </View>

        <Text
          style={styles.Login}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          text={email}
          keyboardType="email-address"
          fieldButtonFunction={text => setEmail(text)}
        />

        <InputField
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          text={password}
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={text => setPassword(text)}
        />
        
        <CustomButton label={"Login"} onPress={() => {LoginUser}} colorcode={Colors.primary} />

        {/* <Text style={styles.logorsign}>
          Or, login with ...
        </Text>

        <View
          style={styles.view2}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.signinoptions}>
              <Image source={require("../assets/Social-icons/Google.png")} style= {{width: 32, height:32}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.signinoptions}>
          <FontAwesome5 name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.signinoptions}>
          <Entypo name="twitter-with-circle" size={24} color="#00acee" />          
          </TouchableOpacity>
        </View> */}

        <View
          style={styles.view3}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.Register}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeareaview: {
    flex: 1, 
    justifyContent: 'center'
  },
  view1: {
    paddingHorizontal: 25
  },
  bannerview: {
    alignItems: 'center'
  },
  bannerimage: {
    width:"100%", 
    height:200, 
    marginTop: 30
  }, 
  Login: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },
  logorsign: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  signinoptions: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  view3: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  Register: {
    color: '#AD40AF', 
    fontWeight: '700'
  }


})