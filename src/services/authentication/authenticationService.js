import { View, Text } from 'react-native'
import React from 'react'

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut  } from 'firebase/auth';
import { auth } from '../firebase/firebase';

export const loginRequest = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

export const registerRequest = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChange = (user) => {
    return onAuthStateChanged(auth, user);
}

export const signOutRequest = () => {
    return signOut(auth);
}

export const mapError = (errorMessage) => {
    switch (errorMessage) {
        case errorMessage.includes('auth/invalid-password'):
            return "Invalid password";
        case errorMessage.includes('auth/invalid-email'):
            return 'Invalid email';
        default:
            return errorMessage;
    }
}
