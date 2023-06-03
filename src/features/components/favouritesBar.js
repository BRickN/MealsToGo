import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import CompactRestaurantInfo from './compactRestaurantInfo';
import { fonts, fontSizes } from '../../utils/fonts';

export default function FavouritesBar({ favourites, navigation }) {
    if (!favourites.length) {
        return null;
    }
    return (
        <>
            <View style={styles.favouritesWrapper}>
                <View style={styles.favouritesTitleSpacer}>
                    <Text style={styles.favouritesTitle}>Favourites</Text>
                </View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    {favourites.map((restaurant) => {
                        const key = restaurant.name.split(" ").join("");
                        return (
                            <View key={key} style={styles.compactRestaurantInfoWrapper}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("RestaurantDetail", {
                                        restaurant: restaurant
                                    })}>
                                    <CompactRestaurantInfo restaurant={restaurant} />
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    favouritesWrapper: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    compactRestaurantInfoWrapper: {
        marginRight: 10,
    },
    favouritesTitleSpacer: {
        marginBottom: 5,
    },
    favouritesTitle: {
        fontFamily: fonts.body,
        fontSize: fontSizes.body
    },
})