import { View, Text, StyleSheet, TextInput, Pressable, Image } from "react-native"
import { React, useState } from "react"
import { firebase } from "../config"
import { useNavigation } from "@react-navigation/native"

const UpdateRecipe = ({ route }) => {
  //Reference to fetch data from documents called recipie
  const recipieReference = firebase.firestore().collection("recipies")
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name)
  const navigation = useNavigation()
  const imageUrl = "https://i.pinimg.com/originals/5b/14/f8/5b14f821cb2f2a5cd29695742dd26866.jpg";

  const updateRecipie = () => {
    if (textHeading && textHeading.length > 0) {
      recipieReference
        .doc(route.params.item.id)
        .update({
          heading: textHeading,
        })
        .then(() => {
          navigation.navigate("Recipe")
        })
        .catch((error) => {
          alert(error.message)
        })
    }
  }
  return (
    <View style={[styles.container, {marginTop: 40}]}>
    <Image  style={styles.image} source={{uri: imageUrl}} />
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Update your Recipie..."
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {
          updateRecipie()
        }}
      >
        <Text style={styles.buttonText}> Update Recipie</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 15,
  },
  textField: {
    padding: 10,
    fontSize: 15,
    color: "#000000",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
  },
  buttonUpdate: {
    marginTop: 25,
    marginItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 10,
    backgroundColor: "#0de065",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center'
  },
  image:{
    width: "75%",
    height: 239,
    marginLeft: 40,
    marginRight: 40,
    margin: 10,
  },
})

export default UpdateRecipe
