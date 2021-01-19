
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { color } from 'react-native-reanimated';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Input from '../components/Input';
import MyButton from '../components/MyButton';





export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signInText}>Kullanıcı Bilgileri :</Text>

        <Input
          autoCapitalize="none"
          returnKeyType={'next'}
          placeholder="Kullanıcı Adı"
          onSubmitEditing={() => this.passwordInput.focus()}
        />

        <Input
          returnKeyType={'go'}
          secureTextEntry={true}
          placeholder="Parola"
          inputRef={(input) => (this.passwordInput = input)}
        />


        <MyButton onPress={() => navigation.navigate('Notifications')}
          color={'#f1f1f1'}
          backgroundColor={'#e63849'}
          text={'Giriş'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 14,
    color: '#333',
  },
});
