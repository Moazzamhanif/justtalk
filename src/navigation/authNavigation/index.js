import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../../../src/screens/authFlow/Splash/SplashScreen';
import HomeScreen from '../../../src/screens/authFlow/Splash/HomeScreen';
import Login from '../../../src/screens/authFlow/Login/login';
import Login1 from '../../../src/screens/authFlow/Login/login1';
import Signup from '../../screens/authFlow/Signup';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="splash" component={SplashScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="login1" component={Login1} />
      <Stack.Screen name="signup" component={Signup} />  
    </Stack.Navigator>
  );
};

export default AuthNavigation;
