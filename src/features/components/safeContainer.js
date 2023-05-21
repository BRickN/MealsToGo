import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform,
} from 'react-native'
import React from 'react'

import { spacing } from '../../utils/sizes';

export default function SafeContainer({children}) {
    return (
        <>
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingLeft: spacing.sm,
        paddingRight: spacing.sm,
    }
});
