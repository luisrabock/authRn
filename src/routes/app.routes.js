import React from 'react';
import Dashboard from '../pages/Dashboard/index';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const DashboardRoutes = (React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.screen name="Dashboard" component={Dashboard} />
  </AuthStack.Navigator>
));

export default DashboardRoutes;
