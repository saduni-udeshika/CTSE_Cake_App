import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Pressable,
  Alert,
} from "react-native"
import { React, useState, useEffect } from "react"
import { firebase } from "../config"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const Recipe = () => {
  const [recipies, setrecipies] = useState([])
  //Reference to fetch data from documents called recipies
  const recipieReference = firebase.firestore().collection("recipies")
  const [addData, setAddData] = useState("")
  // const navigation = useNavigation()

  //fetch the data from firestore
  useEffect(() => {
    recipieReference.orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const recipies = []
      querySnapshot.forEach((doc) => {
        const { heading } = doc.data()
        recipies.push({
          id: doc.id,
          heading,
        })
      })
      setrecipies(recipies)
    })
  }, [])

  //alert box
  const deleteRecipie = (recipe) => {
    Alert.alert('Delete Recipe', 'Do you want to delete this Recipe?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {recipeDelete(recipe)}},
    ]);
  };  

  //delete a recipie from firestore dtabase
  const recipeDelete = (recipe) => {
    recipieReference
      .doc(recipe.id)
      .delete()
      .then(() => {
        console.log("Deleted recipe successfully")
      })
      .catch((error) => {
        alert(error)
      })
  }
  

  //add a recipie item
  const addRecipie = () => {
    //check if we have a recipie item
    if (addData && addData.length > 0) {
      //get the timestamp
      const timestamp = firebase.firestore.FieldValue.serverTimestamp()
      const data = {
        heading: addData,
        createdAt: timestamp,
      }
      recipieReference
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
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add your cake recipie"
          placeholderTextColor="#aaaaaa"
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={addRecipie}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recipies}
        numColumns={1}
        renderItem={({ item }) => (
          <View>
            <Pressable
              style={styles.container}
              // onPress={() => navigation.navigate("Details", { item })}
            >
              <FontAwesome
                name="trash-o"
                color="red"
                onPress={() => deleteRecipie(item)}
                style={styles.recipieIcon}
              />
              <View style={styles.innerContainer}>
                <Text style={styles.itemHeading}>
                  {item.heading[0].toUpperCase() + item.heading.slice(1)}
                </Text>
              </View>
            </Pressable>
          </View>
        )}
      />
    </View>
  )
}

export default Recipe

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
    height: 47,
    borderRadius: 5,
    backgroundColor: "#633974",
    width: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  recipieIcon: {
    marginTop: 5,
    fontSize: 20,
    marginLeft: 14,
  },
})
