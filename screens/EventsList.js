import React, { useState, useEffect } from 'react';
import { Alert, View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontAwesome } from "@expo/vector-icons"
import { ScrollView } from 'react-native-gesture-handler';
let colours = ["#ff8e42", "#4F6384"];

const EventsList = ({index}) => {
  const navigation = useNavigation();
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
    const unsubscribe = firebase.firestore().collection("events")
      .onSnapshot(querySnapshot => {
        const newEvents = [];
        querySnapshot.forEach(doc => {
          const event = doc.data();
          event.id = doc.id;
          newEvents.push(event);
        });
        setEvents(newEvents);
      });
    return unsubscribe;
  }, []);

  const editEvent = (id) => {
    navigation.navigate('NewEvent', { id });
  };
  const deleteEventAlert = (id) => {
    Alert.alert('Delete Event', 'Do you want to delete this one?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {deleteEvent(id)}},
    ]);
  };  

  const deleteEvent = (id) => {
    firebase.firestore().collection("events").doc(id).delete().then(() => {
      alert("Deleted Event Successfully").catch((error) => {
        alert(error)
      })
    })
  };


  // const deleteEvent = (id) => {
  //   firebase.firestore().collection("events").doc(id).delete();
  // };
// //  const deleteEvent = (id) => {
// //     const dbRef = firebase.firestore().collection("events").doc(id).delete();
// //       dbRef.delete().then((res) => {
// //           console.log('Item removed from database')
        
// //       })
// //   }
//  const openTwoButtonAlert=(id)=>{
//     Alert.alert(
//       'Delete Event',
//       'Are you sure?',
//       [
//         {text: 'Yes', onPress: () =>deleteEvent()},
//         {text: 'No', onPress: () => console.log('No item was removed'), style: 'cancel'},
//       ],
//       { 
//         cancelable: true 
//       }
//     );
//   }


   //Returns a colour based on the index
   function random() {
    if (index % 2 === 0) { //check if its an even number
        return colours[0];
    }else{
        return colours[1];
    }
}



  return (
    <View  >
        <ScrollView>
    <View style={styles.row}>
    <Text style={styles.pageTitle}>EVENTS LIST</Text>
      <FlatList
        data={events}
      
        renderItem={({ item }) => (

          
          <View style={[styles.container, {backgroundColor: "#EDE3FF"}]}>
         
          <TouchableOpacity style={styles.eventItem} >
            <Text style={styles.eventTitle}>{item.name}</Text>
            <Text style={styles.eventEmail}>{item.email}</Text>
            <Text style={styles.eventPhone}>{item.phone}</Text>
            <Text style={styles.eventAddress}>{item.address}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
            <View style={styles.iconContainer}>
           
            <TouchableOpacity >
             
              <FontAwesome
                name="pencil"
                color="green"
                onPress={() => editEvent(item.id)}
                style={styles.tipIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity >
            
            <FontAwesome
              name="trash-o"
              color="red"
              // onPress={() =>  deleteEvent(item.id)}
              onPress={()=>deleteEventAlert(item.id)}
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
    <TouchableOpacity  style={styles.addBtn} onPress={() => navigation.navigate('NewEvent')}>
    <FontAwesome
              name="plus"
              style={styles.addBtnIcon}
            />
          </TouchableOpacity>
          </ScrollView>
    </View>
  );
};



const styles = StyleSheet.create({
    eventTitle: {
        fontSize: 25,
        fontWeight: 'bold',
      },
      eventEmail: {
        fontSize: 15,
      },
      eventPhone: {
        fontSize: 15,
     
      },
      eventDescription: {
        marginTop: 5,
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
      pageTitle:{
        fontSize: 35,
        paddingTop: 50, 
        paddingLeft:100, 
        color: "#633974",
        fontWeight: 'bold',
      },
      containers: {
        position: 'absolute',
        top: 0,
        right: 20,
      },
      addBtn: {
        backgroundColor: '#633974',
        borderRadius: 40,
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
      },
      addBtnIcon: {
        color: '#fff',
        fontSize: 30,
      },


      container: {
        backgroundColor: "#e5e5e5",
        padding: 15,
        borderRadius: 15,
        borderColor: '#D8BFD8',
        margin: 5,
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
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
        fontSize: 30,
        marginLeft: 14,
        marginHorizontal: 30,
        
      },

      email:{
        marginTop:  30,
        fontSize: 0,
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
    });
    
export default EventsList
