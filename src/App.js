import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/index';
import AuthContext from './contexts/auth';

const App = (React.FC = () => {
  return (
    <NavigationContainer>
      <AuthContext.Provider value={{signed: false}}>
        <Routes />
      </AuthContext.Provider>
    </NavigationContainer>
  );
});

export default App;
