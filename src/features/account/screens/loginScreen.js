import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authenticationContext';
import { AccountImageBackground, AccountContainer, AuthButton } from '../components/accountStyledComponents'
import { loginRequest } from '../../../services/authentication/authenticationService'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLogin } = useContext(AuthenticationContext);

  return (
    <>
      <AccountImageBackground>
        <AccountContainer>
          <TextInput
            placeholder="E-mail"
            label="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            placeholder="Password"
            label="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            style={styles.textinput}
          />
          <AuthButton
            title="Login"
            icon="lock-open-outline"
            action={() => onLogin(email, password)} />
        </AccountContainer>
      </AccountImageBackground >
    </>
  )
}


const styles = StyleSheet.create({
  textinput: {
    marginTop: 15
  }
})