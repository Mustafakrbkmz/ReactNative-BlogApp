import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import PropTypes from 'prop-types';



class MyButton extends Component {
	render() {
  const {color, backgroundColor} = this.props;
  
	  return (
  
		
		<TouchableOpacity
		style={[styles.button, {backgroundColor}]}
		
		>
		  <Text style={[styles.text, {color}]}>{this.props.text}</Text> 
		</TouchableOpacity>
	  );
	}
  }
  export default MyButton;







MyButton.propTypes = {
	text: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
	color: PropTypes.string
  };
  
  const styles = StyleSheet.create({
	button: {
	  paddingVertical: 15,
	  paddingHorizontal: 10,
	  borderRadius: 3,
	  alignItems: 'center'
	},
	text: {
	  fontSize: 14,
	}
  });
