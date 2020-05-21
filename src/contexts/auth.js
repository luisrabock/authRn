import React, {createContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-community/async-storage';
import * as auth from '../services/auth';

const AuthContext = createContext({signed: true, token: '', user: {}});

AuthContext.Provider.propTypes = {
  signed: PropTypes.bool,
  token: PropTypes.string,
  user: PropTypes.object,
};

export const AuthProvider = (React.FC = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setLoading(false);
      }
      if (!storagedUser && !storagedUser) {
        setLoading(false);
      }
    }
    loadStorageData();
  }, []);

  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
    console.log('response..', response);
  }
  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  return (
    <AuthContext.Provider
      value={{signed: !!user, token: '', user, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
});

export default AuthContext;
