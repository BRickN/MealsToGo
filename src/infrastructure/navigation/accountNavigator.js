import React from 'react'
import { Text, View } from 'react-native';
import { createStackNavigator, TransitionPresets, CardStyleInterpolators } from '@react-navigation/stack'
import AccountScreen from '../../features/account/screens/accountScreen';
import RegisterScreen from '../../features/account/screens/registerScreen';
import LoginScreen from '../../features/account/screens/loginScreen';

const Stack = createStackNavigator();

export default function AccountNavigator() {
    return (
        <>
            <Stack.Navigator screenOptions={() => ({
                headerShown: false,
                cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            })}
            >
                <Stack.Screen
                    name="Main"
                    component={AccountScreen}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                />
                <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                />
            </Stack.Navigator>
        </>
    )
}