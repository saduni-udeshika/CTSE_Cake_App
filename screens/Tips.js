
import { View, Text, Button, Image, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const Tips = () => {

  const navigation = useNavigation();
  return (
   
    
    <View style={styles.container} >
      <ScrollView>
      <Image source={require("../assets/tips.gif")} resizeMode="cover" style={styles.image} />  

      <View>
       

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TipsList')}>
          <Text style={styles.buttonText}>Move With Startup</Text>
        </TouchableOpacity>

        
    
     
    </View>
    </ScrollView>
    </View>
    
   
   
  )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
   
  },
  image:{
    width: "100%",
    height: 500,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  
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

  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },

})


export default Tips