import { StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';


export default function MapScreen() {
    return (
        <>
            <MapView style={styles.map} />
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%'
    }
})
