
import { View, Text, TextInput, Image, StyleSheet,TouchableOpacity, ScrollView ,AutoGrowingTextInput} from 'react-native'
import React, {useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

import { firebase } from "../config"

const Tip = ({ route }) => {

    const navigation = useNavigation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (route.params?.id) {
          firebase.firestore().collection("tips").doc(route.params.id)
            .get()
            .then(doc => {
              const tip = doc.data();
              setTitle(tip.title);
              setDescription(tip.description);
            });
        }
      }, [route.params?.id]);
  
      const editTip = (id) => {
        navigation.navigate('NewTip', { id });
      };
    
      const getTip = (id) => {
        navigation.navigate('Tip', { id });
      }

      

  return (

    <View style={styles.container}>
        <ScrollView>
       
        <Image  style={styles.image}  source={require("../assets/newIdea.gif")}  />
        <Text style={styles.tipTitle}>{title}</Text>
        <Text style={styles.tipDescription}>{description}</Text>
        </ScrollView>
         
    </View>
  );
  

}


const styles = StyleSheet.create({
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
        flex:1,
      },
      tipTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 50,
        
      },
      tipDescription: {
        marginTop: 5,
      },

      image:{
        width: "100%",
        height: 250,
        marginLeft: 10,
        marginRight: 20,
        marginTop: 5,
        marginTop: 30,
      
      },

})


export default Tip