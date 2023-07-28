import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import LoadingScreen from './Screens/LoadingScreen';
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen';
import DashBoard from './Screens/DashBoard';
import HomeScreen from './Screens/HomeScreen';
import DailyTaskScreen from './Screens/DailyTaskScreen';
import CollaborationScreen from './Screens/CollaborationScreen';
import HackathonsScreen from './Screens/HackathonsScreen';
import CommunityScreen from './Screens/CommunityScreen';
import NewCollabCardScreen from './Screens/NewCollabCardScreen';
import OnBoardCollabScreen from './Screens/OnBoardCollabScreen';
import CollabDetailsScreen from './Screens/CollabDetailsScreen';
import SideNavigation from './Screens/SideNavigation';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AllNavigationScreen from './Screens/AllNavigationScreen';

const Stack = createNativeStackNavigator();


export default function App({ navigation }) {
  return (

    <View style={styles.container}>


    <NavigationContainer >



      <Stack.Navigator initialRouteName={ LoadingScreen } screenOptions = {{ headerShown: false }}>

      {/* <Stack.Screen name='Dashboard' component={LoadingScreen} /> */}
      {/* <Stack.Screen name='Login' component={LoginScreen} /> */}
      {/* <Stack.Screen name='Register' component={RegisterScreen} /> */}
      {/* <Stack.Screen name='Home' component={HomeScreen} /> */}

      <Stack.Screen name='AllNav' component={AllNavigationScreen} />

      
      </Stack.Navigator>

    </NavigationContainer>


    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
})