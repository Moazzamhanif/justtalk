import { View, Text, StyleSheet, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';


import CheckBox from '@react-native-community/checkbox';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const login1 = ({ navigation }) => {
  const handleSignupPress = () => {
    navigation.navigate('signup');
  };

  const handleForgetPassword = () => {
    navigation.navigate('App', { screen: 'resetpassword'});
  };
  const handleLoginPress = () => {
    navigation.navigate('App', { screen: 'mainhomescreen' });
  };

  const [isSelected, setSelection] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <View style={styles.pic}>
        <Image source={require('../../../../src/assets/images/Group4.png')} />
        <View>
          <Text style={styles.text}>Welcome to Login!</Text>
          <View style={styles.separator} />
        </View>
      </View>
     <View style={{ flex: 1 }}>
        <View style={styles.emailView}>
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} keyboardType='email-address' />
        </View>

        <View style={styles.passwordView}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              secureTextEntry={!passwordVisible}
              style={styles.input}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image source={require('../../../../src/assets/images/MaskGroup19.png')} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
        </View>
      
        <View style={styles.rowContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <Text style={styles.rememberMeText}>Remember me</Text>
          <TouchableOpacity onPress={handleForgetPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginButtonContainer}>
          <TouchableOpacity onPress={handleLoginPress}>
            <Text style={styles.loginButtonText}>
              LOG IN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 0.5, justifyContent: 'center' }}>
        <View style={styles.createAccountContainer}>
          <Text style={styles.createAccountText}>Don't have an account?</Text>
        </View>
        <View style={styles.createAccountButtonContainer}>
          <TouchableOpacity onPress={handleSignupPress}>
            <Text style={styles.createAccountButtonText}>CREATE AN ACCOUNT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  pic: {
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 50,
    flex: 0.7,
  },
  text: {
    fontFamily: 'Oxygen',
    marginTop: responsiveHeight(3.5),
    fontWeight: 'bold',
    color: '#111820',
    fontSize: responsiveFontSize(2.8),
  },
  separator: {
    width: responsiveWidth(30),
    height: responsiveHeight(0.3),
    backgroundColor: '#F6CD5B',
  },
  label: {
    fontSize: responsiveFontSize(1.5),
    height: responsiveHeight(2.1),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#444444',
    marginStart: responsiveWidth(2.8),
    textAlign: 'left',
  },
  input: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    marginStart: responsiveWidth(2),
    color: '#222222',
  },
  emailView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    marginBottom: responsiveHeight(1.7),
    alignSelf: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius:12 ,
  },
  passwordView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    backgroundColor: '#F7F7F7',
    borderRadius:12,
    alignSelf: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
  },
  eyeIcon: {
    width: responsiveWidth(4),
    height: responsiveWidth(4),
    marginTop: responsiveHeight(1),
    
   
  },
  checkbox: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
    borderColor: 'black',
    
  },
  rowContainer: {
    flexDirection: 'row',
  },
  rememberMeText: {
    fontSize: responsiveFontSize(1.5),
    color: '#000000',
    fontFamily: 'Roboto',
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveWidth(1),
    fontWeight: 'normal',
  },
  forgotPasswordText: {
    color: '#111820',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(1.5),
    marginLeft: responsiveWidth(33),
    marginTop: responsiveHeight(1.5),
  },
  loginButtonContainer: {
    alignSelf: 'center',
    marginTop: responsiveHeight(3.5),
    backgroundColor: '#363333',
    width: responsiveWidth(75),
    height: responsiveHeight(6),
    borderRadius: 24,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.2),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.3),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  createAccountContainer: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    height: responsiveHeight(3),
  },
  createAccountText: {
    color: '#222222',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
  },
  createAccountButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    backgroundColor: '#EEEEEE',
    width: responsiveWidth(75),
    height: responsiveHeight(6),
    borderRadius:24 
  },
  createAccountButtonText: {
    marginTop: responsiveHeight(1.5),
    color: '#222222',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
});

export default login1;
