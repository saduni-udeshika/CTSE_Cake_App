import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  Image,
  ScrollView
} from "react-native"
import { React, useState, useEffect } from "react"
import { firebase } from "../config"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const MAX_LENGTH = 250;
const imageUrl = "https://res.cloudinary.com/dorcq99nr/image/upload/v1679492698/startup_xbr2mu.png";

const Tips = () => {

 const [tips, setTips] = useState([])
  //Reference to fetch data from documents called tips
  const tipReference = firebase.firestore().collection("tips")
  const [addData, setAddData] = useState("")
  const [text, setText] = useState("")
  const navigation = useNavigation()

  //fetch the data from firestore
  useEffect(() => {
    tipReference.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const tips = []
      querySnapshot.forEach((doc) => {
        const { heading,text} = doc.data()
        tips.push({
          id: doc.id,
          heading,
          text,
        })
      })
      setTips(tips)
    })
  }, [])

  //delete a tip from firestore dtabase
  const deleteTip = (tips) => {
   
  }

  //add a tip item
  const addTip = () => {
    //check if we have a tip item
    if (addData && addData.length > 0) {
      //get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp()
      const data = {
        heading: addData,
        text:text,
        createdAt: timestamp,
      }
      tipReference
        .add(data)
        .then(() => {
          setAddData("")
          //release keyboard
          Keyboard.dismiss()
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  return (
   
    
    <View  style={styles.body} >
      <ScrollView>
        <Image  style={styles.image} source={{uri: imageUrl}} />
      <View style={styles.container}>

      
     
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#aaaaaa"
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
       
       
      </View >
      <View style={styles.container}>
      <TextInput
             multiline={true}
             onChangeText={(text) => setText(text)}
             placeholder={"Enter Tip"}
             style={[styles.text]}
             maxLength={MAX_LENGTH}
             value={text}/>  

        
      </View>
      <View >
      <TouchableOpacity style={styles.button} onPress={addTip}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tips}
        numColumns={1}
        renderItem={({ item }) => (
          <View>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate("TipsListItem", { item })}
            >
              <FontAwesome
                name="trash-o"
                color="red"
                onPress={() => deleteTip(item)}
                style={styles.tipIcon}
              />
              <View style={styles.innerContainer}>
                <Text style={styles.itemHeading}>
                  {item.heading[0].toUpperCase() + item.heading.slice(1)}
                </Text>
                <Text>
                  {item.text}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
      </ScrollView>
    </View>
   
   
  )

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
 

}

})

export default Tips