import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { SliderBox } from "react-native-image-slider-box";

export default class Events extends Component {

  
  constructor(props) {
 
    super(props);
    this.state = {
      images: [
        "https://res.cloudinary.com/dodvzeoxr/image/upload/v1679673214/abc/giphy_q6eckj.gif",
        "https://res.cloudinary.com/dodvzeoxr/image/upload/v1679685818/OIP_zbljsr.jpg",
        "https://res.cloudinary.com/dodvzeoxr/image/upload/v1679686049/abc/SVl_vgyv4u.gif",
        "https://res.cloudinary.com/dodvzeoxr/image/upload/v1679685968/abc/Call-for-entries-for-Cake-International-s-cake-decorating-competition_ohakev.jpg",
        
      ]
    };
  }

  render() {
    // const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={400}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />

              
  <View >
        <Button
         title="Publish Your Events Here !"
        //  onPress={() => navigation.navigate('TipsList')}
       />
      </View>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});


// import { View, Text, Button } from 'react-native'
// import React from 'react'
// import { useNavigation } from '@react-navigation/native';

// const Events = () => {

//   const navigation = useNavigation();
//   return (
   
    
//     <View >
//      <Button
//        title="Go to next screen"
//        onPress={() => navigation.navigate('TipsList')}
//      />
//     </View>
   
   
//   )

// }





// export default Events