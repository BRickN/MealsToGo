import { View, Text } from 'react-native'
import React, { useState, useContext, createContext } from 'react'

import { loginRequest } from './authenticationService';

export const AuthenticationContext = createContext();

export default function AuthenticationContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <>
            <AuthenticationContext.Provider
                value={{
                    user,
                    isLoading,
                    error,
                    onLogin,
                }}

            >
                {children}
            </AuthenticationContext.Provider>
        </>
    )
}