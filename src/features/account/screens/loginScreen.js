import { StyleSheet, Text } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';

import { AuthenticationContext } from '../../../services/authentication/authenticationContext';
import { AccountImageBackground, AccountContainer, AuthButton, AccountTitle, BackButton } from '../components/accountStyledComponents'
import { colors } from '../../../utils/colors';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <>
      <AccountImageBackground>
        <AccountTitle />
        {
          isLoading
            ?
            (
              <ActivityIndicator
                animating={true}
                color={colors.tomato}
                style={styles.loader} />
            )
            :
            (
              <>
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
                    style={styles.mt}
                  />
                  {error.length > 0 &&
                    <Text style={[styles.mt, styles.textRed]}>{error}</Text>
                  }
                  <AuthButton
                    title="Login"
                    icon="lock-open-outline"
                    action={() => onLogin(email, password)} />
                </AccountContainer>
                <BackButton action={navigation.goBack} />
              </>
            )
        }
      </AccountImageBackground >
    </>
  )
}

const styles = StyleSheet.create({
  mt: {
    marginTop: 15
  },
  textRed: {
    color: 'red',
    textAlign: 'center',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

