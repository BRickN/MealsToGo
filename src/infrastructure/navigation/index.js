import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AppNavigator from './appNavigator';
import { AuthenticationContext } from '../../services/authentication/authenticationContext';
import AccountNavigator from './accountNavigator';

export default function Navigation() {
  const { isAuthenticated } = useContext(AuthenticationContext)

  return (
    <NavigationContainer>
      {
        isAuthenticated ? <AppNavigator /> : <AccountNavigator />
      }
    </NavigationContainer>

  )
}
