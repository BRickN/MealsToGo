import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { ActivityIndicator } from 'react-native-paper';

import RestaurantInfoCard from '../components/restaurantInfoCard';
import { RestaurantsContext } from '../../services/restaurants/restaurantsContext';

import { colors } from '../../utils/colors';

export default function RestaurantList() {
    const restaurantContext = useContext(RestaurantsContext);
    const {
        restaurants,
        isLoading,
        error } = restaurantContext;

    const renderCard = ({ item }) => {
        return <RestaurantInfoCard restaurant={item} />
    }
    if (isLoading) {
        return (
            <>
                <ActivityIndicator
                    animating={true}
                    color={colors.tomato}
                    style={styles.loader} />
            </>
        )
    } else {
        return (
            <>
                <FlatList
                    data={restaurants}
                    renderItem={renderCard}
                    keyExtractor={(item) => item.name}
                />
            </>
        )
    }
}

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})