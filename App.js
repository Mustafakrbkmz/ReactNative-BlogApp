import React, { Component } from 'react';
import Login from './src/pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/HomePage';
import Article from './src/screens/Article';

import {
  StyleSheet,
  
} from 'react-native';

const Stack = createStackNavigator();

class App extends Component{
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Article" component={Article} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}
}





const styles = StyleSheet.create({

});
export default App;
