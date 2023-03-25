import React, { useState, useEffect } from "react"
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
  Image,
} from "react-native"
import { firebase } from "../config"
import { FontAwesome } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import * as ImagePicker from "expo-image-picker"

const Recipe = () => {
  const [recipies, setRecipies] = useState([])
  const [addData, setAddData] = useState("")
  const [addDescription, setDescription] = useState("")
  const [image, setImage] = useState(null)
  const [uploading, setUploading] = useState(false)
  const recipieReference = firebase.firestore().collection("recipies")
  const navigation = useNavigation()

  //fetch the data from firestore
  useEffect(() => {
    recipieReference
      .orderBy("createdAt", "desc")
      .onSnapshot((querySnapshot) => {
        const recipies = []
        querySnapshot.forEach((doc) => {
          const { heading, description } = doc.data()
          recipies.push({
            id: doc.id,
            heading,
            description,
          })
        })
        setRecipies(recipies)
      })
  }, [])

  //alert box
  const deleteRecipie = (recipe) => {
    Alert.alert("Delete Recipe", "Do you want to delete this Recipe?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          recipeDelete(recipe)
        },
      },
    ])
  }

  //delete a recipie from firestore database
  const recipeDelete = (recipe) => {
    recipieReference
      .doc(recipe.id)
      .delete()
      .then(() => {
        alert("Deleted recipe successfully")
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
        description: addDescription,
        createdAt: timestamp,
      }
      recipieReference
        .add(data)
        .then(() => {
          setAddData("")
          setDescription("")
          //release keyboard
          Keyboard.dismiss()
        })
        .catch((error) => {
          alert(error)
        })
    }
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quantity: 1,
    });
    const source = {uri: result.uri}
    console.log(source)
    setImage(source)
  };

  const uploadImage = async () => {
    setUploading(true);
    try {
      const response = await fetch(image.uri);
      const blob = await response.blob();
      const filename = image.uri.substring(image.uri.lastIndexOf("/") + 1);
      var ref = firebase.storage().ref().child(filename);
      await ref.put(blob);
      Alert.alert("Photo uploaded...");
      setImage(null);
    } catch (error) {
      console.error(error);
    } finally {
      setUploading(false);
    }
  };
  

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={styles.recipeContainer}>
        <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
          <Text style={styles.buttonText}>Pick an Image</Text>
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          {image && 
            <Image
              source={{ uri: image.uri }}
              style={{ width: 100, height: 100 }}
            />
          }
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add your cake name"
          placeholderTextColor="#aaaaaa"
          onChangeText={(heading) => setAddData(heading)}
          value={addData}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.textAreaView}>
      <TextInput
      multiline={true}
      style={styles.textAreacontainer}
      placeholder="Add your cake recipie"
      placeholderTextColor="#aaaaaa"
      onChangeText={(description) => setDescription(description)}
      value={addDescription}
      underlineColorAndroid="transparent"
      autoCapitalize="none"
    />
    </View>
      <TouchableOpacity style={styles.button} onPress={addRecipie}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <FlatList
        data={recipies}
        numColumns={1}
        renderItem={({ item }) => (
          <View>
            <Pressable
              style={styles.container}
              onPress={() => navigation.navigate("updateRecipe", { item })}
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
  recipeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  textAreacontainer: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    height: 48,
    overflow: "hidden",
    paddingLeft: 16,
    flex: 1,
    marginRight: 5,
  },
  textAreaView: {
    backgroundColor: "#e5e5e5",
    borderRadius: 15,
    margin: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
    flexDirection: "column",
    marginLeft: 100,
  },
  itemHeading: {
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 30,
  },
  formContainer: {
    flexDirection: "row",
    height: 80,
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
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 100
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
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 30,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 30,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  imageContainer: {
    marginTop: 2,
    marginBottom: 100,
    alignItems: "center",
  },
})
