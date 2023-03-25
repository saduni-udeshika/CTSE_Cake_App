import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
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
  const { navigate } = this.props.navigation;
      return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Publish Your Events Here</Text>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={400}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
        />

              
  <View >
  <TouchableOpacity style={styles.button} onPress={() => navigate('EventsList')}>
          <Text style={styles.buttonText}>Continue !</Text>
        </TouchableOpacity>
      </View>
      </View>

      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    height: 50,
    borderRadius: 5,
    backgroundColor: "#633974",
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 50,
    marginVertical: 10,

  },
  buttonText: {
    color: "white",
    fontSize: 20,
  },
  pageTitle:{
    fontSize: 25,
    paddingTop: 30, 
    paddingLeft:50, 
    color: "#633974",
    fontWeight: 'bold',
  },
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
//        onPress={() => navigation.navigate('EventsList')}
//      />
//     </View>
   
   
//   )

// }





// export default Events