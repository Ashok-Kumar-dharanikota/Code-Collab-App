import { View, Text, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import InputField from "../Components/InputField"; 
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function OnBoardCollabScreen() {

  const [projectTitle, setProjectTitle] = useState('');



  return (
    <SafeAreaView>
    <View style={styles.container}>

      <Text style={styles.title}>Let's start with a name of your project...</Text>

      <GestureHandlerRootView>
        <TextInput
        placeholder="Project Title"
        value={projectTitle}
        onChangeText={setProjectTitle}
        style={styles.titlefield}
        />

      </GestureHandlerRootView>
    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "#fff"
  },

  title: {
    fontSize: 26,
    fontWeight:'400',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:50
  },

  titlefield: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:24,
    fontSize:20,
    marginTop:30
  }
})