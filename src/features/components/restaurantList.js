import { View, Text, FlatList, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurantInfoCard';
import { colors } from '../../utils/colors';
import { FadeInView } from './fadeAnimation';

export default function RestaurantList({ navigation, restaurants, isLoading }) {
    const renderCard = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(
                "RestaurantDetail", {
                restaurant: item
            })
            }>
                <FadeInView>
                    <RestaurantInfoCard restaurant={item} />
                </FadeInView>
            </TouchableOpacity>
        )
    }

    if (isLoading) {
        return (
            <>
                <View style={styles.restaurantsContainer}>
                    <ActivityIndicator
                        animating={true}
                        color={colors.tomato}
                        style={styles.loader} />
                </View>
            </>
        )
    } else {
        return (
            <>
                <View style={styles.restaurantsContainer}>
                    <FlatList
                        data={restaurants}
                        renderItem={renderCard}
                        keyExtractor={(item) => item.name}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    restaurantsContainer: {
        flex: 1,
    },
})