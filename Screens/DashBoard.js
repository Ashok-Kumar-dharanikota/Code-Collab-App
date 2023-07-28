import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as Animatable from 'react-native-animatable';
import Icon, { Icons } from '../Components/Icons';
import { useEffect, useRef } from 'react'
import { StyleSheet } from 'react-native';
import Colors from '../Constants/Colors';

import HomeScreen from './HomeScreen';
import DailyTaskScreen from './DailyTaskScreen';
import CollaborationScreen from './CollaborationScreen';
import HackathonsScreen from './HackathonsScreen';
import CommunityScreen from './CommunityScreen';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -34 }, 1: { scale: 1.2, translateY: -24 } }
const animate2 = { 0: { scale: 1.2, translateY: -24 }, 1: { scale: 1, translateY: 7 } }

const circle1 = { 0: { scale: 0 }, 0.3: { scale: .9 }, 0.5: { scale: .2 }, 0.8: { scale: .7 }, 1: { scale: 1 } }
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }


const TabArr = [
    { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: HomeScreen },
    { route: 'DailyTask', label: 'Daily Code', type: Icons.FontAwesome5, icon: 'tasks', component: DailyTaskScreen },
    { route: 'Collab', label: 'Collab', type: Icons.MaterialCommunityIcons, icon: 'handshake', component: CollaborationScreen },
    { route: 'Hackathons', label: 'Hackathons', type: Icons.MaterialIcons, icon: 'leaderboard', component: HackathonsScreen },
    { route: 'Community', label: 'Community', type: Icons.MaterialIcons, icon: 'groups', component: CommunityScreen },
  ];
  
  const TabButton = (props) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef(null);
    const circleRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      if (focused) {
        viewRef.current.animate(animate1);
        circleRef.current.animate(circle1);
        textRef.current.transitionTo({ scale: 1 });
      } else {
        viewRef.current.animate(animate2);
        circleRef.current.animate(circle2);
        textRef.current.transitionTo({ scale: 0 });
      }
    }, [focused])
  
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={styles.container}>
        <Animatable.View
          ref={viewRef}
          duration={200}
          style={styles.container}>
          <View style={styles.btn}>
            <Animatable.View
              ref={circleRef}
              style={styles.circle} />
            <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
          </View>
          <Animatable.Text
            ref={textRef}
            style={styles.text}>
            {item.label}
          </Animatable.Text>
        </Animatable.View>
      </TouchableOpacity>
    )
  }
  

export default function DashBoard({ navigation }) {
  return (
    <View style={{flex:1}}>


    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    {TabArr.map((item, index) => {
      return (
        <Tab.Screen key={index} name={item.route} component={item.component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => <TabButton {...props} item={item} />
          }}
        />
      )
    })}
  </Tab.Navigator>

  </View>

  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    tabBar: {
      height: 70,
      position: 'absolute',
      bottom: 16,
      right: 16,
      left: 16,
      borderRadius: 16,
    },
    btn: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 4,
      borderColor: Colors.white,
      backgroundColor: Colors.white,
      justifyContent: 'center',
      alignItems: 'center'
    },
    circle: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
      borderRadius: 25,
    },
    text: {
      fontSize: 10,
      textAlign: 'center',
      color: Colors.primary,
    }
  })