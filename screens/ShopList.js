import React, { useState, useEffect } from 'react';
import { View, Image, Button, FlatList, StyleSheet, TouchableOpacity, Text, Alert,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontAwesome } from "@expo/vector-icons"
let colours = ["#ff8e42", "#ffffff"];

const imageUrl = "https://i.pinimg.com/originals/0e/ce/b0/0eceb037854c13e9dbcd61385461bc26.png";

const ShopList = ({index}) => {
  const navigation = useNavigation();
  const [Shops, setShops] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection("shop")
      .onSnapshot(querySnapshot => {
        const newShops = [];
        querySnapshot.forEach(doc => {
          const shop = doc.data();
          shop.id = doc.id;
          newShops.push(shop);
        });
        setShops(newShops);
      });
    return unsubscribe;
  }, []);

  const editShop = (id) => {
    navigation.navigate('NewShop', { id });
  };

  const shopDelete = (id) => {
    Alert.alert('Delete Shop', 'Do you want to delete this Shop?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {deleteShop(id)}},
    ]);
  };  

  const deleteShop = (id) => {
    firebase.firestore().collection("shop").doc(id).delete()
    .then(() => {
      alert("Shop Deleted successfully")
    })
    .catch((error) => {
      alert(error)
    })
  };


 

   //Returns a colour based on the index
   function random() {
    if (index % 2 === 0) { //check if its an even number
        return colours[0];
    }else{
        return colours[1];
    }
}



  return (
    <View  style={styles.body}  >
          <ScrollView>
          <Image  style={styles.image} source={{uri: imageUrl}} />
         <Text style={styles.pageTitle}>Shop List</Text>

         <TouchableOpacity   style={styles.addBtn} onPress={() => navigation.navigate('NewShop')}>
          <Image  style={styles.addIconImage} source={require("../assets/addIcon.png")} onPress={() => navigation.navigate('NewShop')}/>
          </TouchableOpacity>
       
    <View style={styles.row}>
      
      <FlatList
        data={Shops}
      
        renderItem={({ item }) => (

          
          <View style={[styles.container, {backgroundColor: random()}]}>
         
          <TouchableOpacity style={styles.tipItem} >
            <Text style={styles.tipTitle}>{item.shopName}</Text>
            <Text style={styles.address}>{item.Address}</Text>
            <Text style={styles.number}>{item.ContactNo}</Text>
            <Text style={styles.tipDescription}>{item.Description}</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity >
            
              <FontAwesome
                name="trash-o"
                color="red"
                onPress={() =>  shopDelete(item.id)}
                style={styles.tipIcon}
              />
              
            </TouchableOpacity>
            <TouchableOpacity >
             
              <FontAwesome
                name="pencil"
                color="green"
                onPress={() => editShop(item.id)}
                style={styles.tipIcon}
              />
            </TouchableOpacity>
            </View>
          </TouchableOpacity>
          </View>
         
        )}
        keyExtractor={(item) => item.id}
      />
      
     
    </View>
    </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    tipTitle: {
        paddingLeft: 75,
        fontSize: 20,
        fontWeight: 'bold',
      },
      address: {
        paddingTop: 15,
        fontSize: 15,
        paddingLeft: 15,
       
      },

      number: {
        paddingTop: 5,
        fontSize: 15,
        paddingLeft: 15,
        fontWeight: 'bold',
       
      },
      tipDescription: {
        fontSize: 15,
        marginTop: 5,
        paddingLeft: 15,
        fontFamily: 'Ariel',
      },
      deleteButton: {
        backgroundColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 5,
      },


      editButton: {
        backgroundColor: 'green',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginTop: 5,
      },
      deleteButtonText: {
        color: 'white',
      },
      container: {
        padding: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
      },

      containers: {
        position: 'absolute',
        top: 0,
        right: 20,
      },
      addBtn: {
        backgroundColor: '#ffffff',
        borderRadius: 40,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addBtnIcon: {
        color: '#fff',
        fontSize: 24,
      },


      container: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius: 15,
        margin: 5,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        borderColor: '#D8BFD8', 
        borderWidth: 2,
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
        marginTop:  30,
        fontSize: 25,
        marginLeft: 14,
        marginHorizontal: 30,
        
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
     backgroundColor: '#ffffff'
    },
    

    editAction: {
      backgroundColor: '#497AFC'
  },

  deleteAction: {
      backgroundColor: '#dd2c00'
  },

  actionText: {
      color: '#fff',
      fontWeight: '600',
      padding: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },

  pageTitle:{
    fontSize: 35,
    paddingTop: 50, 
    paddingLeft:130, 
    color: "#633974",
    fontWeight: 'bold',
  },
  addIconImage:{
    width:"75%" ,
    height: 65,
    marginLeft: 650,
    marginRight: 10,
   
},

    });
    
export default ShopList
