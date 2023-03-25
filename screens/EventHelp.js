
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const imageUrl = "https://www.asliceofsweet.com/wp-content/uploads/2019/01/CAKE-DECORATING-CLASSES-1.png";

const EventHelp = () => {

  const navigation = useNavigation();
  return (
   
    
    <View style={styles.container}>
        <ScrollView>
      <Image  style={styles.image} source={{uri: imageUrl}} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EventsList')}>
          <Text style={styles.buttonText}>Continue !!</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
   
   
  )

}

const styles = StyleSheet.create({
image:{
  width: "90%",
  height: 640,
  marginLeft: 20,
  marginRight: 20,
  marginTop: 50,
  marginBottom: 50,

},

button: {
  height: 50,
  borderRadius: 5,
  backgroundColor: "#633974",
  width: 300,
  alignItems: "center",
  justifyContent: "center",
  marginHorizontal: 50,
  marginVertical: 10,
  color: "#ffffff",
  fontSize: 20,

},

buttonText: {
  color: "white",
  fontSize: 20,
},

 container: {
      backgroundColor: "#edeae6",
      flex:1,
    },
    image:{
        width: "80%",
        height: 640,
        marginLeft: 30,
        marginRight: 20,
        marginTop: 50,
        marginBottom: 50,
      
      },

});


export default EventHelp