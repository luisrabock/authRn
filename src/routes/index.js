import React, {useContext} from 'react';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import AuthContext from '../contexts/auth';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

const Routes = (React.FC = () => {
  const {signed, loading} = useContext(AuthContext);
  console.log('loading..', loading);
  console.log('signed..', signed);
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return signed ? <AppRoutes /> : <AuthRoutes />;
});

export default Routes;
