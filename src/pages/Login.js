import React from 'react';import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
  Text,
} from 'react-native';
import LoginForm from './LoginForm';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';



  const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
        <View style={styles.headBackground} />
      <KeyboardAvoidingView behavior={"position"}>
        <View>
          <Text style={styles.logo}>EMK</Text>
          <Text style={styles.logoDescription}>
            Dijital hayat, dijital dönüşüm
          </Text>
        </View>
        <ScrollView>
          <View style={styles.loginArea}>
            <Text style={styles.loginAreaTitle}>Giriş Yap</Text>


            <LoginForm />

            
          </View>
        </ScrollView>
        
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    paddingVertical: 90,
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 280,
    width: '100%',
    backgroundColor: '#e63849',
  },
  logo: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  loginArea: {
    marginHorizontal: 40,
    marginVertical: 40,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,

    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation:4
  },
  loginAreaTitle: {
    fontSize: 20,
    textAlign: 'center'
  },
	signUpDescription: {
		color: '#999'
	}
});
export default App;
