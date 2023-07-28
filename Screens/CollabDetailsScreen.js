import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustemButtonForCollab from '../Components/CustemButtonForCollab';
import description from '../Constants/description';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import StepIndicator from 'react-native-step-indicator';

const labels = ["Join","proposal sent","Application seen","Discussion","Accepted"];
const customStyles = {
  stepIndicatorSize: 25,
  currentStepIndicatorSize:30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: '#297FFF',
  stepStrokeWidth: 3,
  stepStrokeFinishedColor: '#96be25',
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: '#96be25',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#96be25',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#297FFF',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#fff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 12,
  currentStepLabelColor: '#297FFF'
}
 



export default function CollabDetailsScreen() {

  const [currentPosition, setcurrentPosition] = useState(0);

  const Btn = () => {
    setcurrentPosition(currentPosition + 1)
  }

    const project = {
        name: 'Sample Freelance Project',
        description: 'This is a sample project description. We need a talented freelancer to help build a mobile app.',
        techStack: ['React Native', 'Node.js', 'MongoDB'],
        supportingDocuments: 'Link to supporting documents goes here',
      };
    

  return (
<SafeAreaView style={styles.container}>
    <GestureHandlerRootView>
    <ScrollView>

    <View>
 <View style={projectCardStyles.container}>
  
  <View style={{flexDirection:'row'}}>
      <Image source={require("../assets/profile.jpg")} style={{width:50,height:50, borderRadius:15}} />

      <View style={{flexDirection:'column',marginLeft:10}}>
      <Text style={{fontSize:20, color:"#6941C6", fontWeight: 'bold', marginTop:3 , }}>Olivia Smith</Text>
      <Text style={{color:"#808080", fontWeight:'600'}}>12 June 2023</Text>
      </View>
  </View>
      <Text style={{fontSize:16, color: "#808080", padding:3, marginTop:30}}>Project Name</Text>
      <Text style={{fontSize:24, fontWeight:500}}>E-Commerce Website</Text>
      <Text style={{fontSize:16, color: "#808080", padding:3, marginTop:10}}>project descriptioon :</Text>
      <Text style={{ fontWeight:400, fontSize:18}}>
      Hello Everyone, I am a student working on a personal project to improve my coding & Development skills. Interested people can join!</Text>

      <Text style={{color:"#808080", marginTop:10 }}>Tech Stack required</Text>

      <View style={{flexDirection: 'row', marginTop:5}}>
          <Image source={require("../assets/tech-stack-icons/html.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/css3.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/javascript.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/react.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/tailwind.png")} style={{width:35, height:35}}/>
      </View>

      <Text style={{color:"#808080", marginTop:5 }}>Relevant Documents</Text>




      <CustemButtonForCollab label={"Join to Collabarate"} onPress={() => Btn()} />


    <View style={{marginTop:30}}>

      <Text style={{marginBottom:30}}>Collab Application process</Text>
    <StepIndicator
         customStyles={customStyles}
         currentPosition={currentPosition}
         labels={labels}
         direction='horizontal'
    />

    </View>

      </View>
      </View>
      </ScrollView>
      </GestureHandlerRootView>

    </SafeAreaView>
  )
}



const headerStyles = StyleSheet.create({
    container: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    logo: {
      width: 40,
      height: 40,
      resizeMode: 'contain',
    },
  });
  

  const projectCardStyles = StyleSheet.create({
    container: {
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      marginTop:20,
      backgroundColor: 'white',
      padding: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    description: {
      fontSize: 16,
      marginBottom: 8,
      color: '#555',
    },
    techStack: {
      fontSize: 14,
      color: '#888',
    },
    supportingDocs: {
      fontSize: 14,
      color: '#888',
    },
  });
  

  const joinButtonStyles = StyleSheet.create({
    container: {
      alignSelf: 'center',
      backgroundColor: '#2e59a9',
      borderRadius: 25,
      paddingVertical: 12,
      paddingHorizontal: 20,
      marginVertical: 16,
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  