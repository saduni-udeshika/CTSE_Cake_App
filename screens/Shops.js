import { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text, Image,
  ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { firebase } from "../config"
import {AutoGrowingTextInput} from 'react-native-autogrow-textinput';

const MAX_LENGTH = 250;
const imageUrl = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F59a6d145197aea7e662f1d63%2F1575408891818-Y5AH2JBJUHK771H6RFHO%2FTheShop_gray.png&tbnid=GJHmaK6mYVMwDM&vet=12ahUKEwiYjoDJkvb9AhWHzqACHS2FAOYQMyhPegUIARCTAQ..i&imgrefurl=https%3A%2F%2Fcreativetemplateshop.com%2F&docid=KFzu-fzW_f_GjM&w=1500&h=613&q=shop%20creative&ved=2ahUKEwiYjoDJkvb9AhWHzqACHS2FAOYQMyhPegUIARCTAQ";

const Shops = ({ route }) => {
    const navigation = useNavigation();
    const [shopName, setshopName] = useState('');
    const [Address, setAddress] = useState('');
    const [ContactNo, setContactNo] = useState('');
    


    useEffect(() => {
      if (route.params?.id) {
        firebase.firestore().collection("shop").doc(route.params.id)
          .get()
          .then(doc => {
            const shop = doc.data();
            setshopName(shop.shopName);
            setAddress(shop.Address);
            setContactNo(shop.ContactNo);
          });
      }
    }, [route.params?.id]);

    const AddShop = () => {
      if (route.params?.id) {
        firebase.firestore().collection("shop").doc(route.params.id).update({
          shopName,
          Address,
          ContactNo,
        });
      } else {
        firebase.firestore().collection("shop").add({
          shopName,
          Address,
          ContactNo,
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
          placeholder="Shop Name"
          value={shopName}
          onChangeText={(text) => setshopName(text)}
          maxLength={MAX_LENGTH}
          style={styles.input}
          multiline={true}
        //numberOfLines={100}
        />
        </View >
        <View style={styles.container}>

        <AutoGrowingTextInput
          placeholder="Address"
          value={Address}
          onChangeText={(text) => setAddress(text)}
          style={{...styles.inputDescription, minHeight: 50, maxHeight: 500 }}
          enableScrollToCaret ={true}
        
        />
       </View>
       <View style={styles.container}>
        <TextInput
          placeholder="Contact Number"
          value={ContactNo}
          onChangeText={(text) => setshopName(text)}
          keyboardType= "numeric"
          style={styles.input}
          multiline={true}
          required
        //numberOfLines={100}
        />
        </View >
       <View >
       <TouchableOpacity style={styles.button} onPress={AddShop}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
       </View>
       
        </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
  tipshopName: {
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
  
  shopName: {
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

export default Shops