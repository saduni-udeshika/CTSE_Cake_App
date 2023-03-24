import { View, Text, StyleSheet, TextInput, Pressable } from "react-native"
import { React, useState } from "react"
import { firebase } from "../config"
import { useNavigation } from "@react-navigation/native"

const UpdateRecipe = ({ route }) => {
  //Reference to fetch data from documents called recipie
  const recipieReference = firebase.firestore().collection("recipies")
  const [textHeading, onChangeHeadingText] = useState(route.params.item.name)
  const navigation = useNavigation()

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
    <View style={[styles.container, {marginTop: 20}]}>
      <TextInput
        style={styles.textField}
        onChangeText={onChangeHeadingText}
        value={textHeading}
        placeholder="Update Recipie"
      />
      <Pressable
        style={styles.buttonUpdate}
        onPress={() => {
          updateRecipie()
        }}
      >
        <Text> Update Recipie</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 80,
    marginRight: 15,
  },
  textField: {
    margin: 10,
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
})

export default UpdateRecipe
