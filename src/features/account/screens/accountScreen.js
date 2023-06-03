import { ImageBackground, View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { AccountImageBackground, AccountContainer, AuthButton } from '../components/accountStyledComponents'

export default function AccountScreen({ navigation }) {
    console.log(navigation);
    return (
        <>
            <AccountImageBackground>
                <AccountContainer>
                    <Text>AccountScreen hello</Text>
                    <AuthButton title="Login" icon="lock-open-outline" action={() => navigation.navigate('Login')}/>
                    <AuthButton title="Register" icon="lock-open-outline" action={() => navigation.navigate('Register')}/>
                </AccountContainer>
            </AccountImageBackground >
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

