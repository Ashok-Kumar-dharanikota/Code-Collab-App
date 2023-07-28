import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';

export default function DailyCode() {
  return (
    <View style={styles.PostCard}>
      <Text style={{color:'#5B7C9E', fontSize:30}}>Disclaimer</Text>
      <Text style={{marginLeft:20, marginRight:20, margin:20}}>We are currently crafting your personalized learning plan. 
        The time needed for this varies, and we appreciate your patience. 
        We'll inform you once it's ready. Please note that while we aim for excellence, 
        actual outcomes depend on factors like your engagement and consistency. 
        Thank you for your understanding.</Text>

        <Entypo name="tools" size={50} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    PostCard: {
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
    }
})