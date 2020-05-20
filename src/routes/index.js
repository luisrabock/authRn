import React, {useContext} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';

const Routes = (React.FC = () => {
  const {signed} = useContext(AuthContext);
  console.log('signedRoutes..', signed);
  return signed ? <AppRoutes /> : <AuthRoutes />;
});

export default Routes;
