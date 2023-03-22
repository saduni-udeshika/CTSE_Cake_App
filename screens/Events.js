import React, { Component } from 'react';
import { Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import { firebase } from "../config"

class Events extends Component {
  constructor() {
    
    super();
    this.dbRef = firebase.firestore().collection('events');
    this.state = {
      name: '',
      email: '',
      mobile: '',
      address: '',
      date:'',
      time:'',
      description:'',
      isLoading: false
    };
  }
  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }
  storeEvent() {
    if(this.state.name === '' || this.state.email === '' || this.state.mobile === '' ){
     alert('Please Fill these fields !')
    } else {
      this.setState({
        isLoading: true,
      });      
      this.dbRef.add({
        name: this.state.name,
        email: this.state.email,
        mobile: this.state.mobile,
        address: this.state.address,
        date: this.state.date,
        time: this.state.time,
        description: this.state.description,
      }).then((res) => {
        this.setState({
          name: '',
          email: '',
          mobile: '',
          address:'',
          date:'',
          time:'',
          description:'',
          isLoading: false,
        });
        this.props.navigation.navigate('Home')
      })
      .catch((err) => {
        console.error("Error found: ", err);
        this.setState({
          isLoading: false,
        });
      });
    }
  }
  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }
    return (
      <ScrollView style={styles.container}>
           <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={2}
              placeholder={'Organization'}
              value={this.state.name}
              onChangeText={(val) => this.inputValueUpdate(val, 'name')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              multiline={true}
              numberOfLines={2}
              placeholder={'Email'}
              keyboardType="email-address"
              value={this.state.email}
              onChangeText={(val) => this.inputValueUpdate(val, 'email')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Contact Number'}
              keyboardType="numeric"
              numberOfLines={2}
              maxLength={10}
              value={this.state.mobile}
              onChangeText={(val) => this.inputValueUpdate(val, 'mobile')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Address'}
              numberOfLines={2}
              value={this.state.address}
              onChangeText={(val) => this.inputValueUpdate(val, 'address')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Date (dd/mm/yy)'}
              // keyboardType="numeric"
              numberOfLines={2}
              value={this.state.date}
              onChangeText={(val) => this.inputValueUpdate(val, 'date')}
          />
        
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Time'}
              // keyboardType="numeric"
              numberOfLines={2}
              value={this.state.time}
              onChangeText={(val) => this.inputValueUpdate(val, 'time')}
          />
        </View>
        <View style={styles.inputGroup}>
          <TextInput
              placeholder={'Description (Optional)'}
              numberOfLines={4}
              value={this.state.description}
              onChangeText={(val) => this.inputValueUpdate(val, 'description')}
          />
        </View>
        <View style={styles.button}>
          <Button
            title='Add Event'
            onPress={() => this.storeEvent()} 
            color="#454545"
          
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 4,
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default Events;