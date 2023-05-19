import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { spacing } from '../utils/sizes';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const onChangeSearch = function (query) {
        setSearchQuery(query);
    }

    return (
        <>
            <Searchbar
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={(query) => setSeachQuery(query)}
                value={searchQuery}
                mode="bar"
            />
        </>
    )
}

const styles = StyleSheet.create({
    searchbar: {
        margin: spacing.sm,
    },
})