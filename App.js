import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

import firebase from 'firebase';

import Header from './src/components/common/Header';
import LgoinForm from './src/components/LoginForm';

export default class App extends React.Component {

  componentWillMount() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCaZSNaivtkMJFVYjlxrBh20R6ho4EyEaQ",
      authDomain: "authentication-f7f56.firebaseapp.com",
      databaseURL: "https://authentication-f7f56.firebaseio.com",
      projectId: "authentication-f7f56",
      storageBucket: "authentication-f7f56.appspot.com",
      messagingSenderId: "135816361791"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
      <Header headerText="hhhhh"/>
      <LgoinForm/>
      <Text>ddddd</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width
  }
});
