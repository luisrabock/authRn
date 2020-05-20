import React from 'react';
import SignIn from '../pages/Signin/index';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes = (React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.screen name="SignIn" component={SignIn} />
  </AuthStack.Navigator>
));

export default AuthRoutes;
