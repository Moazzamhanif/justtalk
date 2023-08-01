import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ResetPassword from '../../../src/screens/appFlow/Reset Password';
import Mainhomescreen from '../../../src/screens/appFlow/Home';
import Messages from '../../screens/appFlow/Chat Room';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="resetpassword"
        component={ResetPassword}
        options={{
          headerShown: true,
          title: 'Reset Your Password',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#FFFFFF',
            borderBottomColor: '#EEEEEE',
            borderBottomWidth: 1
          },
          headerTintColor: '#222222',
          headerTitleStyle: {
            fontFamily: 'Roboto',
            fontSize: 18,
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen name="mainhomescreen" component={Mainhomescreen} />
      <Stack.Screen name="messages" component={Messages} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
