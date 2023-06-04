import React, { useState, createContext, useEffect } from 'react'

import { loginRequest, registerRequest, onAuthStateChange, mapError, signOutRequest } from './authenticationService';

export const AuthenticationContext = createContext();

export default function AuthenticationContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState([]);

    useEffect(() => {
        const authUnsubscribe = onAuthStateChange(user => {
            console.log(user?.email)
            if (user) {
                setUser(user);
                setIsLoading(false);
            } else {
                setIsLoading(false);
            }
        })

        return authUnsubscribe;
    }, [])

    const onLogout = () => {
        signOutRequest()
            .then(() => {
                setUser(null);
                setError([]);
                console.log("signed out");
            }).catch((error) => {
                console.log('error logging out', error);
            })
    }

    const onLogin = (email, password) => {
        setIsLoading(true);
        loginRequest(email, password)
            .then((u) => {
                setUser(u);
            })
            .catch((error) => {
                setError(mapError(error.message));
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    const onRegister = (email, password, repeatedPassword) => {
        setIsLoading(true);

        if (password !== repeatedPassword) {
            setError("Error: Passwords do not match");
            return;
        }

        registerRequest(email, password)
            .then((u) => {
                setUser(u);
            })
            .catch((error) => {
                setError(mapError(error.message));
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    return (
        <>
            <AuthenticationContext.Provider
                value={{
                    isAuthenticated: !!user,
                    user,
                    isLoading,
                    error,
                    onLogin,
                    onRegister,
                    onLogout
                }}

            >
                {children}
            </AuthenticationContext.Provider>
        </>
    )
}