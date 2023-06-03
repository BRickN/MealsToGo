import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { fonts, fontSizes } from '../../utils/fonts';
export default function CompactRestaurantInfo({ restaurant }) {
    return (
        <View style={styles.compactRestaurantInfoWrapper}>
            <Image
                style={styles.img}
                source={{ uri: restaurant.photos[0] }}
                resizeMode="cover" />
            <Text style={styles.text}>{restaurant.name}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    compactRestaurantInfoWrapper: {
        maxWidth: 120,
    },
    img: {
        height: 100,
        width: 120,
        borderRadius: 10,
    },
    text: {
        fontFamily: fonts.body,
        fontSize: fontSizes.caption,
    }
})