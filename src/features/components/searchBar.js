import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { spacing } from '../../utils/sizes';
import { LocationContext } from '../../services/location/locationContext';

export default function SearchBar({ isFavouritesToggled, onFavouritesToggle }) {
    const locationContext = useContext(LocationContext);
    const {
        isLoadingLocation,
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
                    icon={isFavouritesToggled ? "heart" : "heart-outline"}
                    onIconPress={onFavouritesToggle}
                    style={styles.searchbar}
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
    searchbar: {
        margin: spacing.sm,
    },
})