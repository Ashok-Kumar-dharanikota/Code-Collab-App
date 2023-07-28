import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { StatusBar } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import DailyCode from './DailyCode';
import DailyDev from './DailyDev';

const Tab = createMaterialTopTabNavigator();


export default function DailyTaskScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.Banner}>
        <Text style={{fontSize:22, fontWeight: '400', color:"#004d99"}}>Daily Dev <Text style={{color:"#0066cc"}}>Code!</Text></Text>
        <Text style={{color:'#808080'}}>A New Day, A New Code.</Text>
      </View>

      <Tab.Navigator>
      <Tab.Screen name="Daily Code" component={DailyCode} />
      <Tab.Screen name="Daily Dev" component={DailyDev} />
    </Tab.Navigator>

      

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex:1
  },
  Banner: {
    width: "auto",
    alignContent: 'space-between',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    padding:20,
    marginBottom: 10,
  },

})