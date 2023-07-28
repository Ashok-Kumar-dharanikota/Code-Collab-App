import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import DashBoard from './DashBoard';
import SideNavigation from './SideNavigation';
import { useNavigation } from '@react-navigation/native';

export default function AllNavigationScreen() {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View  style={{flexDirection:'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
      {/* <Image source={require('../assets/profile.jpg')} style={styles.ProfilePic}/> */}
      
      <TouchableOpacity >
      <Ionicons name="menu-outline" size={24} color="black" />
        </TouchableOpacity>


      <Text style={{fontSize: 20, fontWeight: '500'}}>Code <Text style={{color: "#5B7C9E"}}>Collab <FontAwesome name="code" size={24} color="black" /> </Text></Text>
      <Ionicons name="ios-chatbubble-ellipses-outline" size={24} color="black" style={{marginRight:10}}/>
    </View>

    {/* <View style={styles.Banner}>
        <Text>Connect Creatively!</Text>
    </View> */}

    <BottomNavBar/>

    </View>
  )
}


function BottomNavBar() {
    return (
        <DashBoard/>
    );
}


function SideNavBar() {
    return (
        <SideNavigation/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#fff",
    },
    Banner: {
      width: "auto",
      marginLeft:20,
      marginRight:20,
      marginTop:10,
      alignContent: 'space-between',
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 3,
      backgroundColor: 'white',
      borderRadius:10,
      padding:10,
      marginBottom: 10    
    }
})