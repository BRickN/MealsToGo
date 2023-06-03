import { View, Text } from 'react-native'
import React from 'react'

import { AccountImageBackground, AccountContainer, AuthButton } from '../components/accountStyledComponents'

export default function LoginScreen({navigation}) {
  return (
    <AccountImageBackground>
      <AccountContainer>
        <Text>Login Screen hello</Text>
        <AuthButton title="Login" icon="lock-open-outline" action={() => navigation.navigate('Login')} />
        <AuthButton title="Register" icon="lock-open-outline" action={() => navigation.navigate('Register')} />
      </AccountContainer>
    </AccountImageBackground >
  )
}