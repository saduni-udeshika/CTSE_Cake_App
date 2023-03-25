import { View, Text, ScrollView,Image,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons"
import ShopHelp from './ShopHelp';

const imageUrl = "https://i.pinimg.com/originals/0e/ce/b0/0eceb037854c13e9dbcd61385461bc26.png";

const Shop = () => {

  const navigation = useNavigation();
  return (
   
    
    <View style={styles.container}>
      <ScrollView>
      <TouchableOpacity style={styles.help} >
             
             <FontAwesome
               name="help"
               color="green"
               onPress={() => navigation.navigate('ShopHelp')}
               style={styles.help}
             />
           </TouchableOpacity>

      <Image  style={styles.image} source={{uri: imageUrl}} />
     
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShopList')}>
          <Text style={styles.buttonText}>Welcome to Shops !!</Text>
        </TouchableOpacity>
    
        </ScrollView>
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
help:{
  marginTop:  5,
  marginLeft: 10,
  fontSize: 40,
}

});


export default Shop