import { View, Text, StyleSheet, Image, StatusBar, Animated } from 'react-native';
import React, { useEffect } from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const Login = ({ navigation }) => {
  const separatorAnimatedValue = new Animated.Value(-responsiveWidth(35)); // Initial position off the screen

  useEffect(() => {
    const slideInAnimation = () => {
      Animated.timing(separatorAnimatedValue, {
        toValue: 0, // Final position on the screen
        duration: 300, // Animation duration in milliseconds
        useNativeDriver: false, // You need to set this to false when animating layout properties
      }).start();
    };

    slideInAnimation(); // Start the animation when the component mounts

    setTimeout(() => {
      navigation.navigate('login1');
    }, 500);
  }, [navigation, separatorAnimatedValue]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFFFFF' barStyle='dark-content' />
      <View style={styles.pic}>
      <Image source={require('../../../../src/assets/images/Group4.png')} />
       
        <View>
          <Text style={styles.text}>
            Welcome to Login!
          </Text>
          {/* Animated separator */}
          <Animated.View style={[styles.separator, { transform: [{ translateX: separatorAnimatedValue }] }]} />
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
    marginTop: responsiveHeight(6),
  },
  text: {
    fontFamily: 'Oxygen',
    marginTop: responsiveHeight(4),
    fontWeight: 'bold',
    color: '#111820',
    fontSize: responsiveFontSize(2.8),
  },
  separator: {
    width: responsiveWidth(30),
    height: responsiveHeight(0.3),
    backgroundColor: '#F6CD5B',
  },
});

export default Login;
