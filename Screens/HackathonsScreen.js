import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors';

export default function HackathonsScreen() {
  return (
    <View>
<View style={styles.Banner}>
        <Text style={{fontSize:22, fontWeight: '400', color:"#004d99"}}>Hack<Text style={{color:"#0066cc"}}>World!</Text></Text>
        <Text style={{color:'#808080'}}>Worldwide hackathons at your fingertips.</Text>
      </View>

    <View style={styles.PostCard}>
    <Image source={require('../assets/hashnode.jpg')} style={styles.postImage}/>
    
    <View style={{flexDirection:'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{color: Colors.primary, paddingLeft:10, paddingTop:10, fontWeight: '500', fontSize: 20}}>AWS Amplify Hackathon</Text>
      <Text style={{padding: 10, fontWeight: '500'}}>Hashnode</Text>
      </View>

      <Text style={{padding:12, backgroundColor: Colors.primary, color: "#fff", borderRadius:15, marginRight:20, fontSize:16, fontWeight: '500'}}>Register</Text>
    </View>
    </View>

    <View style={styles.PostCard}>
    <Image source={require('../assets/thirdAi.jpg')} style={styles.postImage}/>
    
    <View style={{flexDirection:'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{color: Colors.primary, paddingLeft:10, paddingTop:10, fontWeight: '500', fontSize: 20}}>ThirdAI Hackathon</Text>
      <Text style={{padding: 10, fontWeight: '500'}}>ThirdAI</Text>
      </View>

      <Text style={{padding:12, backgroundColor: Colors.primary, color: "#fff", borderRadius:15, marginRight:20, fontSize:16, fontWeight: '500'}}>Register</Text>
    </View>
    </View>


    <View style={styles.PostCard}>
    <Image source={require('../assets/microbit.jpg')} style={styles.postImage}/>
    
    <View style={{flexDirection:'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{color: Colors.primary, paddingLeft:10, paddingTop:10, fontWeight: '500', fontSize: 20}}>MicroBit Hackathon</Text>
      <Text style={{padding: 10, fontWeight: '500'}}>Hashnode</Text>
      </View>

      <Text style={{padding:12, backgroundColor: Colors.primary, color: "#fff", borderRadius:15, marginRight:20, fontSize:16, fontWeight: '500'}}>Register</Text>
    </View>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
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

  PostCard: {
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
    marginBottom: 10,
    overflow: 'hidden' 
  },

  postImage: {
    width:"100%",
    height: 150,
    resizeMode: "cover",
  },

});