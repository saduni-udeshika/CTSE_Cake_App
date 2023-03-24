/*import { View, Text } from 'react-native'
import React from 'react'

const Tips = () => {
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
              onPress={() => navigation.navigate("TipsList", { item })}
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

export default Tips

*/


import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Tips = () => {

  const navigation = useNavigation();
  return (
   
    
    <View >
     <Button
       title="Go to next screen"
       onPress={() => navigation.navigate('TipsList')}
     />
    </View>
  )
}

export default Tips