import React, { useEffect } from 'react'
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Alert
} from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


// import DatePicker from 'react-native-date-picker';

import InputField from '../Components/InputField';
import CustomButton from '../Components/CustomButton';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Constants/Colors';
// import { firebaseConfig } from '../FirebaseOperations/firebaseConfig';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { User } from 'firebase/auth';

export default function RegisterScreen({navigation}) {

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setconPassword] = useState('');



  const RegisterUser = async () => {
    try {
      if(password === conpassword && username != null && email != null && password != null & conpassword != null) {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response)
        Alert.alert('User account created & signed in!');  
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
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image source={require("../assets/Social-icons/register-banner.png")} style={styles.Banner} />
        </View>

        <Text
          style={styles.Register}>
          Register
        </Text>

        {/* <View
          style={styles.OtherSignOptionView}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.OtherSigninOpacity}>
              <Image source={require("./assets/Social-icons/Google.png")} style= {{width: 32, height:32}}/>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.OtherSigninOpacity}>
          <FontAwesome5 name="facebook" size={24} color="#3b5998" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.OtherSigninOpacity}>
          <Entypo name="twitter-with-circle" size={24} color="#00acee" />          
          </TouchableOpacity>
        </View>

        <Text style={styles.OrRegister}>
          Or, register with email ...
        </Text> */}

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          text={username}
          fieldButtonFunction={text => setUserName(text)}
        />

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
          fieldButtonFunction={text => setPassword(text)}
        />

        <InputField
          label={'Confirm Password'}
          icon={
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          text={conpassword}
          inputType="password"
          fieldButtonFunction={text => setconPassword(text)}
        />

        <CustomButton label={'Register'} colorcode={Colors.primary} onPress={RegisterUser} />

        <View
          style={styles.ToLogin}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Banner: {
    width:"100%", 
    height:200, 
    marginTop: 30
  },

  Register: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
  },

  OtherSignOptionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },

  OtherSigninOpacity: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },

  OrRegister: {
    textAlign: 'center', 
    color: '#666', 
    marginBottom: 30
  },

  InputField: {

  },

  RegisterButton: {

  },

  ToLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  }
})