import { View, Text, Button, StyleSheet, Platform, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen( {navigation}) {
  return (
    <SafeAreaView style={styles.container}>

      <View>

      <View style={styles.Banner}>
        <Text style={{fontSize:22, fontWeight: '400', color:"#004d99"}}>Explore <Text style={{color:"#0066cc"}}>Together!</Text></Text>
        <Text style={{color:'#808080'}}>Connect, collaborate, and create the future.</Text>
      </View>



        <View style={styles.PostCard}>
            <Image source={require('../assets/post.png')} style={styles.postImage}/>
            <Text style={styles.postText}>Hello World ! Hi I am Olivia , new to Code Collab. Really excited about collbaration and learning together... <Text style={{color: '#0084B4', fontWeight: '500'}}>#BuildingInpublic #CodeCollab</Text></Text>
                <View style={styles.postULCSData}>

                    <View style={{flexDirection: 'row'}}> 
                        <Image source={require('../assets/profilepic.png')} style={styles.ProfilePicPost}/>

                            <View style={{marginLeft:5}}>
                              <Text style={styles.UserName}>Olivia</Text>
                              <Text style={{color: '#808080'}}>Following</Text>
                            </View>
                </View>

              <View>


                <View style={{flexDirection: 'row', marginRight:20}}>
                <EvilIcons name="heart" size={28} color="black" style={{marginLeft:20}} />
                <Text>12</Text>
                <EvilIcons name="comment" size={28} color="black" style={{marginLeft:20}}/>
                <Text>7</Text>
                <EvilIcons name="share-google" size={28} color="black" style={{marginLeft:20}}/>
                <Text></Text>
                </View>
              </View>

              
            </View>
        </View>
      </View>



      <View>
        <View style={styles.PostCard}>
            <Image source={require('../assets/social-posts/post_2.png')} style={styles.postImage}/>
            <Text style={styles.postText}>Hello World ! Hi I am Olivia , new to Code Collab. Really excited about collbaration and learning together... <Text style={{color: '#0084B4', fontWeight: '500'}}>#BuildingInpublic #CodeCollab</Text></Text>
                <View style={styles.postULCSData}>

                    <View style={{flexDirection: 'row'}}> 
                        <Image source={require('../assets/profilepic.png')} style={styles.ProfilePicPost}/>

                            <View style={{marginLeft:5}}>
                              <Text style={styles.UserName}>Olivia</Text>
                              <Text style={{color: '#808080'}}>Following</Text>
                            </View>
                </View>

              <View>


                <View style={{flexDirection: 'row', marginRight:20}}>
                <EvilIcons name="heart" size={28} color="black" style={{marginLeft:20}} />
                <Text>12</Text>
                <EvilIcons name="comment" size={28} color="black" style={{marginLeft:20}}/>
                <Text>7</Text>
                <EvilIcons name="share-google" size={28} color="black" style={{marginLeft:20}}/>
                <Text></Text>
                </View>
              </View>

              
            </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
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
  ProfilePic: {
    resizeMode: "cover",
    width: 40,
    height: 40,
    borderRadius: 10,
    margin: 10
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
    padding:10,
    marginBottom: 10    
  },

  postImage: {
    width:"100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },

  postText: {
    fontSize: 14,
    padding: 10,
    fontWeight: '400',
    lineHeight: 20
  },

  postULCSData: {
    width: "auto",
    marginTop:10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius:10,
    padding:10,
    marginBottom: 10    
  },
  ProfilePicPost: {
    resizeMode: "cover",
    width: 40,
    height: 40,
    borderRadius: 10,
    margin: 1,
  },

  UserName: {
    color:'#5B7C9E',
    fontSize: 18,
    fontWeight: '500'
  }
})