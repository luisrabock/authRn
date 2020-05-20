import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = (React.FC = () => {
  const {signed, signIn, user} = useContext(AuthContext);
  console.log('signed..', signed);
  console.log('user..', user);
  function handleSignIn() {
    signIn();
  }
  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
});

export default SignIn;
