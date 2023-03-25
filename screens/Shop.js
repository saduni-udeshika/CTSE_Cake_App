
import { View, Text, Button,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const imageUrl = "https://i.pinimg.com/originals/0e/ce/b0/0eceb037854c13e9dbcd61385461bc26.png";

const Shop = () => {

  const navigation = useNavigation();
  return (
   
    
    <View style={styles.container}>
      <Image  style={styles.image} source={{uri: imageUrl}} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShopList')}>
          <Text style={styles.buttonText}>Welcome to Shops !!</Text>
        </TouchableOpacity>
    
    </View>
   
   
  )

}

const styles = StyleSheet.create({
image:{
  width: "75%",
  height: 500,
  marginLeft: 50,
  marginRight: 60,
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
      backgroundColor: "#ffffff",
      flex:1,
    },


});


export default Shop