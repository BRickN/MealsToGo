import { ImageBackground, StyleSheet } from 'react-native'
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

import { spacing } from '../../../utils/sizes';
import { colors } from '../../../utils/colors';
export const AccountImageBackground = ({ children }) => {
    return (
        <>
            <View style={styles.imageBackgroundContainer}>
                <ImageBackground
                    source={require('../../../../assets/home_bg.jpg')}
                    resizeMode="cover"
                    style={styles.image}>
                    <View style={styles.imageCover} />
                    {children}
                </ImageBackground >
            </View>
        </>
    )
}

export const AccountContainer = ({ children }) => {
    return (
        <>
            <View style={styles.accountContainer}>
                {children}
            </View>
        </>
    )
}

export const AuthButton = ({ title, icon, action }) => {
    return (
        <>
            <Button
                icon={icon}
                mode="contained"
                buttonColor={colors.primary}
                style={styles.button}
                onPress={() => {
                    action()
                }}>
                {title}
            </Button>
        </>
    )
}

const styles = StyleSheet.create({
    imageBackgroundContainer: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageCover: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255,255,255,0.3)'
    },
    accountContainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: spacing.md,
        width: '75%',
    },
    button: {
        padding: 6,
        marginTop: 15,
    }
})


