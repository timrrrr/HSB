import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         View, 
         StatusBar,
         TouchableOpacity
      } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component<{}> {

  render() {
    return (
      <View style = {styles.container}>
        <Logo/>
        <Form type="Signup"/>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Already have an account?</Text>
           <TouchableOpacity ><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#333043',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    fontSize: 16,
    color: '#8f8e94'
  },

  signupButton: {
    fontSize: 16,
    color: '#080808',
    fontWeight: '500'
  },

  signupTextCont: {
    flexGrow: 0.1,
    alignItems: "flex-end",
    justifyContent: 'flex-end',
    flexDirection: 'row',
  }
});

