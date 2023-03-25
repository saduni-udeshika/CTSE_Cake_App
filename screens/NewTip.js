import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text, Image,
  ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config"
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const MAX_LENGTH = 250;
const imageUrl = "https://res.cloudinary.com/dorcq99nr/image/upload/v1679492698/startup_xbr2mu.png";
//source={{uri: imageUrl}}
const NewTip = ({ route }) => {
    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    


  
    useEffect(() => {
      if (route.params?.id) {
        firebase.firestore().collection("tips").doc(route.params.id)
          .get()
          .then(doc => {
            const tip = doc.data();
            setTitle(tip.title);
            setDescription(tip.description);
          });
      }
    }, [route.params?.id]);
  
    const saveTip = () => {
      if (route.params?.id) {
        firebase.firestore().collection("tips").doc(route.params.id).update({
          title,
          description,
        });
      } else {
        firebase.firestore().collection("tips").add({
          title,
          description,
        });
      }
      navigation.goBack();
    };
  
    return (
      <View style={styles.header}>
         <ScrollView>

        <Text style={styles.pageTitle}>New Tips</Text>
        <Image  style={styles.image}  source={require("../assets/newIdea.gif")}  />
       <View style={styles.body} >
      <View style={styles.container}>
        <TextInput
          placeholder="Title"
          value={title}
          onChangeText={(text) => setTitle(text)}
          maxLength={MAX_LENGTH}
          style={styles.input}
          multiline={true}
        //numberOfLines={100}
        />
        </View >
        <View style={styles.container}>

        <AutoGrowingTextInput
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={{...styles.inputDescription, minHeight: 50, maxHeight: 500 }}
          enableScrollToCaret ={true}
        
        />
       </View>
       <View >
       <TouchableOpacity style={styles.button} onPress={saveTip}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
       </View>
       </View>
        </ScrollView>
      </View>
    );
  };


  const styles = StyleSheet.create({
    tipTitle: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      tipDescription: {
        marginTop: 5,
      },
      deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 5,
      },
      deleteButtonText: {
        color: 'white',
      },
      container: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
      },
       

      innerContainer: {
        alignItems: "center",
        flexDirection: "column",
        marginLeft: 45,
        
      },
      itemHeading: {
        fontWeight: "bold",
        fontSize: 18,
        marginRight: 22,
      },
      formContainer: {
        flexDirection: "row",
        height: 80,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 100,
        
      },
      input: {
        height: 48,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        paddingLeft: 16,
        
        flex: 1,
        marginRight: 5,
    
      },
      button: {
        height: 50,
        borderRadius: 5,
        backgroundColor: "#633974",
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 60,
        marginVertical: 50,
    
      },
      buttonText: {
        color: "white",
        fontSize: 20,
      },
      tipIcon: {
        marginTop: 5,
        fontSize: 20,
        marginLeft: 14,
      },
    
      text: {
        fontSize: 18,
        lineHeight: 33,
        color: "#333333",
        padding: 16,
        paddingTop: 16,
        minHeight: 170,
        borderTopWidth: 1,
        borderColor: "rgba(212,211,211, 0.3)",
        backgroundColor: "white",
        width:"100%",
    
    
    
    },
    pageTitle:{
      fontSize: 35,
      paddingTop: 50, 
      paddingLeft:120, 
      color: "#633974",
      fontWeight: 'bold',
       
    },
    
    title: {
      fontSize: 20,
      lineHeight: 22,
      fontFamily: 'Helvetica Neue',
      height: 80,
      padding: 16,
      backgroundColor: 'white',
    },
    
    image:{
      width: "75%",
      height: 249,
      marginLeft: 50,
      marginRight: 40,
      marginTop: 30,
    
    },
    

    header:{
     flex:1,
    },

    body:{
      marginTop: 50,
    },

    inputDescription:{
      height: 100,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: "white",
      paddingLeft: 16,
      flex: 1,
      marginRight: 5,

    },

    });
    
  
  export default NewTip
