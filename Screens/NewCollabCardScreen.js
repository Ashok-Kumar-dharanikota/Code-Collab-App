
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Picker,
  Image,
  FlatList,
} from 'react-native';

import { MultipleSelectList } from 'react-native-dropdown-select-list'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import CustemButtonForCollab from '../Components/CustemButtonForCollab';
import CustomButton from '../Components/CustomButton';
import Colors from '../Constants/Colors';

// Sample list of images (You can replace it with actual images)
const imagesList = [
  { id: '1', source: require('../assets/tech-stack-icons/html.png') },
  { id: '2', source: require('../assets/tech-stack-icons/html.png') },
  { id: '3', source: require('../assets/tech-stack-icons/html.png') },
  // Add more images as needed
];

const data = [
  {key:'1', value:'React Native'},
  {key:'2', value:'React'},
  {key:'3', value:'Html'},
  {key:'4', value:'CSS'},
  {key:'5', value:'JavaScript'},
  {key:'6', value:'Python'},
  {key:'7', value:'Java'},
]


export default function NewCollabCardScreen() {
    const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadedDocuments, setUploadedDocuments] = useState([]);

  const [selected, setSelected] = React.useState([]);


  const handleImageSelect = (imageId) => {
    // Check if the image is already selected and toggle its selection
    const index = selectedImages.findIndex((item) => item === imageId);
    if (index >= 0) {
      setSelectedImages((prevSelected) => prevSelected.filter((id) => id !== imageId));
    } else {
      setSelectedImages((prevSelected) => [...prevSelected, imageId]);
    }
  };

  const handleDocumentUpload = (document) => {
    // Implement the logic to handle document upload here
    setUploadedDocuments((prevDocuments) => [...prevDocuments, document]);
  };

  return (
    <SafeAreaView>
    <ScrollView style={{ padding: 20 }}>

    <Image source={require("../assets/Social-icons/register-banner.png")} style={{width:"100%", height:200}} />

      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Create a New Collab Project</Text>

      <TextInput
        placeholder="Project Title"
        value={projectTitle}
        onChangeText={setProjectTitle}
        style={styles.titlefield}
        />

      <TextInput
        placeholder="Project Description"
        value={projectDescription}
        onChangeText={setProjectDescription}
        multiline
        style={styles.projectDescription}

      />

      <MultipleSelectList
        setSelected={(val) => setSelected(val)} 
        data={data} 
        save="value"
        label="Tech Stack"
      />


      {/* <Text style={{ marginTop: 20, fontSize: 16, fontWeight: 'bold' }}>Select Images:</Text>
      <FlatList
        data={imagesList}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handleImageSelect(item.id)}
            style={{
              margin: 10,
              borderWidth: 2,
              borderColor: selectedImages.includes(item.id) ? 'blue' : 'gray',
              borderRadius: 5,
            }}
          >
            <Image source={item.source} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
        )}
      /> */}

      <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom:20 }}>
        Upload Relevant Documents:
      </Text>

      {/* Implement file upload logic and UI here */}
      {/* For simplicity, let's just show a button to upload a document */}
      <TouchableOpacity
        onPress={() => handleDocumentUpload('example_document.pdf')}
        // style={{
        //   marginTop: 10,
        //   backgroundColor: 'blue',
        //   padding: 10,
        //   alignItems: 'center',
        //   borderRadius: 5,
        // }}
      >
        {/* <Text style={{ color: 'white', fontSize: 16 }}>Upload Document</Text> */}
        <CustomButton label={"Upload Document"} onPress={() =>  handleDocumentUpload('example_document.pdf')} colorcode={Colors.green2} />

      </TouchableOpacity>

      {/* Display the list of uploaded documents */}
      {uploadedDocuments.map((doc, index) => (
        <Text key={index} style={{ marginTop: 5 }}>
          {doc}
        </Text>
      ))}

      {/* Add a button to submit the form */}
      {/* Implement the logic to submit the data to the server */}
      <TouchableOpacity
        // onPress={() => {
        //   // Implement the logic to submit the form data here
        //   console.log({
        //     projectTitle,
        //     projectDescription,
        //     selectedImages,
        //     uploadedDocuments,
        //   });
        // }}
        // style={{
        //   marginTop: 20,
        //   backgroundColor: 'green',
        //   padding: 10,
        //   alignItems: 'center',
        //   borderRadius: 5,
        // }}
      >
        <CustomButton label={"Submit"} onPress={() =>  handleDocumentUpload('example_document.pdf')} colorcode={Colors.primary} />
      </TouchableOpacity>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  titlefield: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 7,
    borderRadius:10,
    fontSize:20,
    marginTop:30
  }
  ,

  projectDescription: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 7,
    borderRadius:10,
    fontSize:16,
    marginTop:10,
    color: "#808080",
    marginBottom:20,
    paddingBottom: 100
  }
  


})