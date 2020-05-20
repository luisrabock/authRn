import React from 'react';
import SignIn from '../pages/Signin/index';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = (React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        title: 'SignIn',
        headerTitleStyle: {textAlign: 'center', alignSelf: 'center'},
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
      }}
    />
  </AuthStack.Navigator>
));

export default AuthRoutes;
