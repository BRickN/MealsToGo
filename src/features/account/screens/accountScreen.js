import { ImageBackground, View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { AccountImageBackground, AccountContainer, AuthButton, AccountTitle } from '../components/accountStyledComponents'

export default function AccountScreen({ navigation }) {
    return (
        <>
            <AccountImageBackground>
                <AccountTitle />
                <AccountContainer>
                    <AuthButton title="Login" icon="lock-open-outline" action={() => navigation.navigate('Login')} />
                    <AuthButton title="Register" icon="email" action={() => navigation.navigate('Register')} />
                </AccountContainer>
            </AccountImageBackground >

        </>
    )
}

