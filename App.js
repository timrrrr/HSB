import React, { Component } from 'react';
import { StyleSheet, 
         View,
         StatusBar
       } from 'react-native';

import Signup from './src/pages/Signup';

export default class App extends Component<{}> {
  render() {
    return (
      <View style = {styles.container}>
        <StatusBar
          backgroundColor = '#333043'
          barStyle = 'light-content'
        />
        <Signup/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333043',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
