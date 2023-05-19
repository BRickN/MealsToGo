import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-paper';

import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { fonts, fontSizes } from '../../utils/fonts';
export default function RestaurantInfoCard({ restaurant = {} }) {
    const {
        name = 'Some Restaurant',
        icon,
        photos = ['https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg'],
        address = '100 Random Street',
        isOpenNow = true,
        rating = 3,
        isClosedTemp = false
    } = restaurant;

    return (
        <>
            <Card
                mode='elevated'
                elevation={5}
                style={styles.card}>
                <Card.Cover
                    source={{ uri: photos[0] }}
                    style={styles.image} />
                <Card.Content>
                    <Text variant="titleLarge" style={styles.textTitle}>{name}</Text>
                    <Text variant="titleLarge" style={styles.textHeading}>{address}</Text>
                </Card.Content>
            </Card>
        </>
    )
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: colors.white
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        margin: spacing.md,
        borderRadius: 3,
    },
    textTitle: {
        fontFamily: fonts.body,
        fontSize: fontSizes.body
    },
    textHeading: {
        fontFamily: fonts.body,
        fontSize: fontSizes.caption
    }
})