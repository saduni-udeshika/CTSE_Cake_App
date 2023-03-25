 import React, { useState, useEffect } from 'react';
  import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text, Image,
    ScrollView } from 'react-native';
  import { useNavigation } from '@react-navigation/native';
  import { firebase } from "../config"
  import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';
  
  const MAX_LENGTH = 250;
  const imageUrl = "https://res.cloudinary.com/dodvzeoxr/image/upload/v1679673499/abc/giphy_1_mrxkcf.gif";
  const NewEvent = ({ route }) => {
      const navigation = useNavigation();
      const [name, setName] = useState('');
      const [address, setAddress] = useState('');
      const [email, setEmail] = useState('');
      const [phone, setPhone] = useState('');
      const [description, setDescription] = useState('');

      useEffect(() => {
        if (route.params?.id) {
          firebase.firestore().collection("events").doc(route.params.id)
            .get()
            .then(doc => {
              const event = doc.data();
              setName(event.name);
              setAddress(event.address);
              setEmail(event.email);
              setPhone(event.phone);
              setDescription(event.description);

            });
        }
      }, [route.params?.id]);
    
      const saveEvent = () => {
        if (route.params?.id) {
          firebase.firestore().collection("events").doc(route.params.id).update({
            name,
            address,
            email,
            phone,
           description,
          });
        } else {
          firebase.firestore().collection("events").add({
            name,
            address,
            email,
            phone,
            description,
          });
        }
        navigation.goBack();
       
      };
    
      return (
        <View  style={styles.body} >
           <ScrollView>
          <Image  style={styles.image} source={{uri: imageUrl}} />
        <View style={styles.container}>
          <TextInput
            placeholder="Name / Organization"
            value={name}
            onChangeText={(name) => setName(name)}
            maxLength={MAX_LENGTH}
            style={styles.input}
            multiline={true}
          //numberOfLines={100}
          />
          </View >
          <View style={styles.container}>
          <TextInput
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
            maxLength={MAX_LENGTH}
            style={styles.input}
            multiline={true}
          //numberOfLines={100}
          />
          </View >

          <View style={styles.container}>
          <TextInput
            placeholder="Contact Number"
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            keyboardType="numeric"
            maxLength={10}
            style={styles.input}
            multiline={true}
          //numberOfLines={100}
          />
          </View >

          <View style={styles.container}>
          <TextInput
            placeholder="Address"
            value={address}
            onChangeText={(address) => setAddress(address)}
            maxLength={MAX_LENGTH}
            style={styles.input}
            multiline={true}
          //numberOfLines={100}
          />
          </View >
          <View style={styles.container}>
  
          <AutoGrowingTextInput
            placeholder="Description (If any)"
            value={description}
            keyboardType="email-address"
            onChangeText={(description) => setDescription(description)}
            style={{...styles.inputDescription, minHeight: 50, maxHeight: 500 }}
            enableScrollToCaret ={true}
          
          />
         </View>
     
         <View >
         <TouchableOpacity style={styles.button} onPress={saveEvent}>
            <Text style={styles.buttonText}>ADD EVENT</Text>
          </TouchableOpacity>
          <View>
          <TouchableOpacity style={styles.cancel}
       onPress={() => navigation.navigate('EventsList')}>
          <Text style={styles.buttonText}>CANCEL</Text>
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
          backgroundColor: "#000000",
          width: 300,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 60,
          marginVertical: 50,
      
        },
        cancel: {
          height: 50,
          borderRadius: 5,
          backgroundColor: "#444444",
          width: 300,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 60,
          marginVertical: -40,
      
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
          fontFamily: 'Helvetica Neue',
          color: "#333333",
          padding: 16,
          paddingTop: 16,
          minHeight: 170,
          borderTopWidth: 1,
          borderColor: "rgba(212,211,211, 0.3)",
          backgroundColor: "white",
          width:"100%",
      
      
      
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
        height: 239,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 10,
      
      },
      
      body:{
       flex:1,
      
      
      },
  
      inputDescription:{
        height: 100,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: "white",
        paddingLeft: 16,
        flex: 1,
        marginRight: 5,
  
      }
  
      });
      
    
    export default NewEvent
  