import { View, Text,StyleSheet, Image } from 'react-native'
import React from 'react'
import Colors from '../Constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function CommunityScreen() {
  return (
    <View>
<View style={styles.Banner}>
        <Text style={{fontSize:22, fontWeight: '400', color:"#004d99"}}>Communi<Text style={{color:"#0066cc"}}>Tech!</Text></Text>
        <Text style={{color:'#808080'}}>Uncover Digital Bonds. Explore. Join.</Text>
      </View>



      <View style={styles.PostCard}>
    <Image source={require('../assets/GrowInComm.jpg')} style={styles.postImage}/>
    
    <View style={{flexDirection:'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{color: Colors.primary, padding:15, fontWeight: '500', fontSize: 20}}>GrowInCommunity</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <AntDesign name="twitter" size={24} color="#1D9BF0"  style={{marginRight:10}}/>
      <FontAwesome5 name="discord" size={24} color="#5865F2" style={{marginRight:20}}/>
      </View>

    </View>
    </View>


    <View style={styles.PostCard}>
    <Image source={require('../assets/wemakedev.jpg')} style={styles.postImage}/>
    
    <View style={{flexDirection:'row', alignContent: 'center', justifyContent: 'space-between', alignItems: 'center'}}>
      <View>
      <Text style={{color: Colors.primary, padding:15, fontWeight: '500', fontSize: 20}}>We Make Devs</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <AntDesign name="twitter" size={24} color="#1D9BF0"  style={{marginRight:10}}/>
      <FontAwesome5 name="discord" size={24} color="#5865F2" style={{marginRight:20}}/>
      </View>

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