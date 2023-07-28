import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'


export default function LoadingScreen() {



  // firebase.auth().onAuthStateChanged(user => {
  //     this.props.navigation.navigate( user ? "Home" : "Login");
  // })



  return (
    <View>
      <Text>Loading... </Text>
      <ActivityIndicator size="large" color="#00ff00"/>
    </View>
    
  )
}