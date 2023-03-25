
import { View, Text, Button,Image,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const imageUrl = "https://i.pinimg.com/originals/db/83/c6/db83c601c6f41900d930faee1b246a9e.gif";

const ShopHelp = () => {

  const navigation = useNavigation();
  return (
   
    
    <View style={styles.container}>
        <ScrollView>
      <Image  style={styles.image} source={{uri: imageUrl}} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShopList')}>
          <Text style={styles.buttonText}>Continue Shopping !!</Text>
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


});


export default ShopHelp