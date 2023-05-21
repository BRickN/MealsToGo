import React from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import Spacer from '../components/spacer';

import { star, open } from '../../utils/icons';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { fonts, fontSizes } from '../../utils/fonts';

export default function RestaurantInfoCard({ restaurant }) {
    const {
        name,
        icon,
        photos,
        vicinity,
        isOpenNow,
        rating,
        isClosedTemp
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <>
            <Card
                mode='elevated'
                elevation={2}
                style={styles.card}>
                <Card.Cover
                    source={{ uri: photos[0] }}
                    style={styles.image} />
                <Card.Content>
                    <Text variant="titleLarge" style={styles.textTitle}>{name}</Text>
                    <View style={styles.ratingWrapper}>
                        <View style={styles.starWrapper}>
                            {ratingArray.map(() => {
                                return <SvgXml style={styles.icon} xml={star} />
                            })}
                        </View>
                        <View style={styles.openClosedInfoWrapper}>
                            {isClosedTemp && <Text style={styles.closedText}>Closed temporarily</Text>}
                            <Spacer size={spacing.sm} />
                            {isOpenNow && <SvgXml style={[styles.icon]} xml={open} />}
                            <Spacer horizontal={true} size={spacing.sm} />
                            <Image style={styles.icon} source={{ uri: icon }} />
                        </View>
                    </View>
                    <Text variant="titleLarge" style={styles.textHeading}>{vicinity}</Text>
                </Card.Content>
            </Card>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 3,
        backgroundColor: colors.white,
        marginBottom: spacing.sm,
        marginTop: spacing.sm,
        marginLeft: spacing.sm,
        marginRight: spacing.sm,
    },
    imageWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: spacing.md,
        marginLeft: spacing.md,
        marginRight: spacing.md,
        borderRadius: 3,
    },
    textTitle: {
        fontFamily: fonts.body,
        fontSize: fontSizes.body
    },
    textHeading: {
        fontFamily: fonts.body,
        fontSize: fontSizes.caption
    },
    ratingWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: spacing.sm,
        paddingBottom: spacing.sm,
    },
    starWrapper: {
        flexDirection: 'row',
    },
    openClosedInfoWrapper: {
        flexDirection: 'row'
    },
    closedText: {
        color: colors.red,
    },
    icon: {
        width: 20,
        height: 20,
    }
})