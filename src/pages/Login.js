import React, { Component } from 'react';
import { StyleSheet, 
         Text, 
         View, 
         TouchableOpacity,
         StatusBar
       } from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Login extends Component<{}> {

  render() {
    return (
      <View style = {styles.container}>
        <Logo/>
        <Form type="Login"/>
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet?</Text>
          <TouchableOpacity><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
        </View>
      </View>
    )
  }
}

const validate = (values) => {
    const errors = {};
    if(!values.name) {
        errors.name = "Name is required"
    }
    if(!values.email) {
        errors.email = "Email is required"
    }
    if(!values.password) {
        errors.password = "Name is required"
    }
    return errors;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f1f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupText: {
    fontSize: 16,
    color: '#8f8e94'
  },

  signupButton: {
    fontSize: 16,
    color: '#080808'
    fontWeight:'500',
  },

  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 15,
  }
   signupText: {
    color:'rgba(255,255,255,0.6)',
    fontSize:16
  },
});

