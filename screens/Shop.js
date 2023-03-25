
import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Shop = () => {

  const navigation = useNavigation();
  return (
   
    
    <View >
     <Button
       title="Go to next screen"
       onPress={() => navigation.navigate('ShopList')}
     />
    </View>
   
   
  )

}





export default Shop