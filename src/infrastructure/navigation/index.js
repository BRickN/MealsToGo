import React, { useContext } from 'react'
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native-paper';

import AppNavigator from './appNavigator';
import { AuthenticationContext } from '../../services/authentication/authenticationContext';
import AccountNavigator from './accountNavigator';
import { colors } from '../../utils/colors';

export default function Navigation() {
  const { isAuthenticated, isLoading } = useContext(AuthenticationContext)

  return (
    <NavigationContainer>
      {isLoading
        ? (
          <ActivityIndicator
            animating={true}
            color={colors.tomato}
            style={styles.loader} />
        )
        : (
          isAuthenticated ? <AppNavigator /> : <AccountNavigator />
        )
      }
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})