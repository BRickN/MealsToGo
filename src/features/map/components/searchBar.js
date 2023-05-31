import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { spacing } from '../../../utils/sizes';
import { LocationContext } from '../../../services/location/locationContext';

export default function SearchBar() {
    const locationContext = useContext(LocationContext);
    const {
        isLoading,
        error,
        location,
        search,
        keyword
    } = locationContext;
    const [searchQuery, setSearchQuery] = useState(keyword);

    useEffect(() => {
        setSearchQuery(keyword)
    }, [keyword])

    return (
        <>
            <View style={styles.searchBarContainer}>
                <Searchbar
                    style={styles.searchbar}
                    icon="map"
                    placeholder="Search"
                    onChangeText={(query) => setSearchQuery(query)}
                    onSubmitEditing={() => search(searchQuery)}
                    value={searchQuery}
                    mode="bar"
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    searchBarContainer: {
    },
    searchbar: {
        position: 'absolute',
        margin: spacing.sm,
        top: 45,
    },
})