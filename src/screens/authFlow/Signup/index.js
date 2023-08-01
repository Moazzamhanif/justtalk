import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, StatusBar, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Signup = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('login1');
  };

  const handleSignupPress = () => {
    navigation.navigate('login1');
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
          <Text style={styles.text}>Welcome to SignUp!</Text>
          <View style={styles.separator} />
        </View>
      </View>
<View style={styles.secondcontainer}>
      <View style={styles.userView}>
        <Text style={styles.label}>Username</Text>

        <View style={styles.passwordInputContainer}>
          <TextInput
            style={styles.input}
          />
          <TouchableOpacity >
            <Image source={require('../../../../src/assets/images/check-circle.png')} style={styles.eyeIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.passwordView}>
        <Text style={[styles.label, styles.boldFont]}>Password</Text>
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

      <View style={styles.confirmPasswordView}>
        <Text style={styles.label2}>Confirm Password</Text>
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
        <Text style={styles.acceptText}>Accept</Text>
        <Text style={styles.boldText}>T&C,</Text>
        <Text style={styles.boldText}>Privacy Policy</Text>
      </View>

      <View style={styles.signupButtonContainer}>
        <TouchableOpacity onPress={handleSignupPress}>
          <Text style={styles.signupButtonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
</View>
<View style={styles.thirdcontainer}>
      <View style={styles.alreadyHaveAccountContainer}>
        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
      </View>

      <View style={styles.loginButtonContainer}>
        <TouchableOpacity onPress={handleLoginPress}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:0.7,
  
    // marginTop: responsiveHeight(6),
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
  secondcontainer:{
    flex:1,
    
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
  label2: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: '#444444',
    marginStart: responsiveWidth(2.8)
  },
  input: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    marginStart: responsiveWidth(2),
    color: '#222222',
  },
  userView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
  
    marginBottom: responsiveHeight(1.7),
    alignSelf: 'center',
    backgroundColor: '#F7F7F7',
    borderRadius:12
  },
  passwordView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    backgroundColor: '#F7F7F7',
    borderRadius: 12,
    alignSelf: 'center',
  },
  confirmPasswordView: {
    height: responsiveHeight(8),
    width: responsiveWidth(90),
    backgroundColor: '#F7F7F7',
    borderRadius:12,
    alignSelf: 'center',
    marginTop: responsiveHeight(1.7),
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
    // marginLeft: responsiveWidth(3),
    marginTop: responsiveHeight(1),
    borderColor: 'black',
  },
  rowContainer: {
    flexDirection: 'row',
    // marginLeft:responsiveWidth()
  },
  acceptText: {
    fontSize: responsiveFontSize(1.5),
    color: '#000000',
    fontFamily: 'Roboto',
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveWidth(1),
    fontWeight: 'normal',
  },
  boldText: {
    fontSize: responsiveFontSize(1.5),
    color: '#000000',
    fontFamily: 'Roboto',
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveWidth(2),
    fontWeight: 'bold',
  },
  signupButtonContainer: {
    alignSelf: 'center',
    marginTop: responsiveHeight(3.5),
    backgroundColor: '#363333',
    width: responsiveWidth(75),
    height: responsiveHeight(6),
    borderRadius:24
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: responsiveFontSize(2.2),
    alignSelf: 'center',
    marginTop: responsiveHeight(1.3),
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  thirdcontainer:{
flex:0.5,
justifyContent:"center",


  },
  alreadyHaveAccountContainer: {
    alignSelf: 'center',
    width: '100%',
    alignItems: 'center',
    height: responsiveHeight(3),
     marginTop:responsiveHeight(3)
  },
  alreadyHaveAccountText: {
    color: '#222222',
    fontSize: responsiveFontSize(1.5),
    fontFamily: 'Roboto',
    fontWeight: 'normal',
  },
  loginButtonContainer: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
    backgroundColor: '#EEEEEE',
    width: responsiveWidth(75),
    height: responsiveHeight(6),
    borderRadius: 24,
  },
  loginButtonText: {
    marginTop: responsiveHeight(1.5),
    color: '#222222',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(2),
  },
  boldFont:{
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  }
});

export default Signup;
