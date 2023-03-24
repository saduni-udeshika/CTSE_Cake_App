
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