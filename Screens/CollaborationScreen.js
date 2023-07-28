import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Button
} from 'react-native';

import { FloatingAction } from 'react-native-floating-action';

import CustemButtonForCollab from '../Components/CustemButtonForCollab';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];





const Item = ({title}) => (
  <View style={styles.item}>
    <Image source={require("../assets/profile.jpg")} style={{width:30,height:30, borderRadius:15}} />
    <Text style={{fontSize:14, color:"#6941C6", fontWeight: 'bold', marginTop:3}}>Olivia Smith</Text>
    <Text style={{fontSize:24, fontWeight:500, marginTop:7}}>E-Commerce Website</Text>
    <Text numberOfLines={3} style={{marginTop:5, fontWeight:300}}>
      Hello Everyone, I am a student working on a personal project to improve my coding & Development skills. Interested people can join!</Text>
    {/* <Text style={styles.title}>{title}</Text> */}

    <Text style={{color:"#808080", marginTop:5 }}>Tech Stack required</Text>

    <View style={{flexDirection: 'row', marginTop:5}}>
          <Image source={require("../assets/tech-stack-icons/html.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/css3.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/javascript.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/react.png")} style={{width:35, height:35}}/>
          <Image source={require("../assets/tech-stack-icons/tailwind.png")} style={{width:35, height:35}}/>

    </View>

    <View style={{flexDirection:'row', flex: 1, justifyContent: 'space-between'}}>
    <CustemButtonForCollab label={"Join to Collabarate"} onPress={() => {}} />
    <Text style={{ fontSize: 16, marginLeft:'auto', marginRight:'auto' , textAlign: 'center' , textAlignVertical:'center' , marginTop:20, fontWeight: '700', color: "#808080"}}>
      Details</Text>
    </View>

  </View>
);


export default function CollaborationScreen() {
  return (
    <SafeAreaView style={styles.container}>

<View style={styles.Banner}>
        <Text style={{fontSize:22, fontWeight: '400', color:"#004d99"}}>Build bridges <Text style={{color:"#0066cc"}}>with TeamTech!</Text></Text>
        <Text style={{color:'#808080'}}>Post, connect, create.</Text>
      </View>

      <View>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />


    {/* <TouchableOpacity style={{ backgroundColor: "#000", width:50, height:50, borderRadius:25, alignSelf: 'flex-end', position: 'absolute'}}>
      <Image source={require("../assets/Social-icons/Google.png")} style={{width:50, height:50}} />
    </TouchableOpacity> */}
    
    </View>



    </SafeAreaView>
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
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 25,
    borderRadius:24,
    marginTop:5
  },
  title: {
    fontSize: 32,
  },

  collabCardPost: {
      width: "auto",
      height: 300,

      backgroundColor:'#fff',
      marginLeft: 10,
      marginRight: 10,
      borderRadius: 24
  },

  titleStyle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  
})