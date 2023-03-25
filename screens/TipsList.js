/*import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config"

const TipsList = () => {
  const navigation = useNavigation();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection("tips")
      .onSnapshot(querySnapshot => {
        const newTips = [];
        querySnapshot.forEach(doc => {
          const tip = doc.data();
          tip.id = doc.id;
          newTips.push(tip);
        });
        setTips(newTips);
      });
    return unsubscribe;
  }, []);

  const editTip = (id) => {
    navigation.navigate('NewTip', { id });
  };

  const deleteTip = (id) => {
    firebase.firestore().collection("tips").doc(id).delete();
  };

  return (
    <View>
      <FlatList
        data={tips}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.tipItem} onPress={() => editTip(item.id)}>
            <Text style={styles.tipTitle}>{item.title}</Text>
            <Text style={styles.tipDescription}>{item.description}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTip(item.id)}>
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button title="Add Tip" onPress={() => navigation.navigate('NewTip')} />
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
        padding: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 20,
      },
    });
    
export default TipsList
*/




/*
import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontAwesome } from "@expo/vector-icons"
let colours = ["#ff8e42", "#4F6384"];

const TipsList = ({index}) => {
  const navigation = useNavigation();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection("tips")
      .onSnapshot(querySnapshot => {
        const newTips = [];
        querySnapshot.forEach(doc => {
          const tip = doc.data();
          tip.id = doc.id;
          newTips.push(tip);
        });
        setTips(newTips);
      });
    return unsubscribe;
  }, []);

  const editTip = (id) => {
    navigation.navigate('NewTip', { id });
  };

  const deleteTip = (id) => {
    firebase.firestore().collection("tips").doc(id).delete();
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
    <View  >
          <TouchableOpacity  style={styles.addBtn} onPress={() => navigation.navigate('NewTip')}>
          <Button title="Add Tip" onPress={() => navigation.navigate('NewTip')} />
           
          </TouchableOpacity>
       
    <View style={styles.row}>
      
      <FlatList
        data={tips}
      
        renderItem={({ item }) => (
          <View style={[styles.container, {backgroundColor: random()}]}>
         
          <TouchableOpacity style={styles.tipItem} >
            <Text style={styles.tipTitle}>{item.title}</Text>
            <Text style={styles.tipDescription}>{item.description}</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity >
            
              <FontAwesome
                name="trash-o"
                color="red"
                onPress={() =>  deleteTip(item.id)}
                style={styles.tipIcon}
              />
              
            </TouchableOpacity>
            <TouchableOpacity >
             
              <FontAwesome
                name="trash-o"
                color="green"
                onPress={() => editTip(item.id)}
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
        backgroundColor: '#007aff',
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
        fontSize: 40,
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
    
export default TipsList
*/






import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity, Text, Animated, ScrollView, Alert,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { firebase } from "../config"
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { FontAwesome } from "@expo/vector-icons"
let colours = ["#ff8e42", "white"];

const TipsList = ({index}) => {
  const navigation = useNavigation();
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection("tips")
      .onSnapshot(querySnapshot => {
        const newTips = [];
        querySnapshot.forEach(doc => {
          const tip = doc.data();
          tip.id = doc.id;
          newTips.push(tip);
        });
        setTips(newTips);
      });
    return unsubscribe;
  }, []);

  const editTip = (id) => {
    navigation.navigate('NewTip', { id });
  };

  const getTip = (id) => {
    navigation.navigate('Tip', { id });
  }

  //alert box
  const deleteTipAlert = (id) => {
    Alert.alert('Delete Tip', 'Do you want to delete this Idea?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {deleteTip(id)}},
    ]);
  };  

  const deleteTip = (id) => {
    firebase.firestore().collection("tips").doc(id).delete().then(() => {
      alert("Deleted tip Successfully").catch((error) => {
        alert(error)
      })
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
    <View  >
         
      <View style={styles.header}>
         <ScrollView>
          <Text style={styles.pageTitle}>Startup Tips</Text>
          <TouchableOpacity   style={styles.addBtn} onPress={() => navigation.navigate('NewTip')}>
          <Image  style={styles.addIconImage} source={require("../assets/addIcon.png")} onPress={() => navigation.navigate('NewTip')}/>
          </TouchableOpacity>
          <Image  style={styles.image}  source={require("../assets/idea.gif")}  />
     <View style={styles.body}>
    <View style={styles.row}>
      
      <FlatList
        data={tips}
    
        renderItem={({ item }) => (
         
          <View style={[styles.container, {backgroundColor: random()}]}>
         
          <TouchableOpacity style={styles.tipItem}  onPress={() =>  getTip(item.id)}>
            <Text style={styles.tipTitle}>{item.title}</Text>
            <View style={styles.iconContainer}>
            <TouchableOpacity >
            
              <FontAwesome
                name="trash-o"
                color="red"
                onPress={() =>  deleteTipAlert(item.id)}
                style={styles.tipIcon}
              />
              
            </TouchableOpacity>
            <TouchableOpacity >
             
              <FontAwesome
                name="pencil"
                color="green"
                onPress={() => editTip(item.id)}
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
    </View>  
    </ScrollView>
    </View>
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
        paddingTop: 50,
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
        fontSize: 30,
        marginLeft: 14,
        marginHorizontal: 30,
        
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
    
    title: {
      fontSize: 20,
      lineHeight: 22,
      height: 80,
      padding: 16,
      backgroundColor: 'white',
    },
    
    image:{
      width: "75%",
      height: 150,
      marginLeft: 40,
      marginRight: 40,
      marginTop: 10,
    
    },
    
    body:{
     flex:1,
     paddingTop:50,
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
     fontSize: 30,
     paddingTop: 50, 
     paddingLeft:100, 
     color: "#633974",
     fontWeight: 'bold',
     
      
   },
   header:{
    backgroundColor:'white'
  },
  addIconImage:{
      width:"75%" ,
      height: 65,
      marginLeft: 650,
      marginRight: 10,
     
  },
    });

   
    
export default TipsList
