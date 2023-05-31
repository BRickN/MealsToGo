import { StyleSheet } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps';

import SearchBar from '../components/searchBar';
import SafeContainer from '../../components/safeContainer';

export default function MapScreen() {
    return (
        <>
            <SearchBar />
            <MapView style={styles.map} />
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        zIndex: -1,
    }
})
