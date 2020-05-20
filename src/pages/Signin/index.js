import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {signIn} from '../../services/auth';
import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = (React.FC = () => {
  const {signed} = useContext(AuthContext);
  console.log('signed..', signed);
  async function handleSignIn() {
    const response = await signIn();
    console.log('response..', response);
  }
  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
    </View>
  );
});

export default SignIn;
