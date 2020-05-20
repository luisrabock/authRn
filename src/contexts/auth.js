import React, {createContext, useState} from 'react';
import PropTypes from 'prop-types';
import * as auth from '../services/auth';

const AuthContext = createContext({signed: true, token: '', user: {}});

AuthContext.Provider.propTypes = {
  signed: PropTypes.bool,
  token: PropTypes.string,
  user: PropTypes.object,
};

export const AuthProvider = (React.FC = ({children}) => {
  const [user, setUser] = useState(null);
  async function signIn() {
    const response = await auth.signIn();

    setUser(response.user);
    console.log('response..', response);
  }
  return (
    <AuthContext.Provider value={{signed: !!user, token: '', user, signIn}}>
      {children}
    </AuthContext.Provider>
  );
});

export default AuthContext;
