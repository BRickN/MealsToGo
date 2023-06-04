import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import SafeContainer from '../../components/safeContainer';

import { AuthenticationContext } from '../../../services/authentication/authenticationContext';
export default function SettingsScreen() {
    const { onLogout } = useContext(AuthenticationContext);

    return (
        <>
            <SafeContainer>
                <View>
                    <Button title='logout' onPress={() => onLogout()}></Button>
                    <Text>SettingsScreen</Text>
                </View>
            </SafeContainer>
        </>
    )
}
