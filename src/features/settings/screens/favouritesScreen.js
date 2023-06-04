import { View, Text, StyleSheet } from 'react-native'
import React, { useContext } from 'react'

import { FavouritesContext } from '../../../services/favourites/favouritesContext'
import RestaurantList from '../../components/restaurantList';
import SafeContainer from '../../components/safeContainer';

export default function FavouritesScreen({ navigation }) {
    const { favourites } = useContext(FavouritesContext);

    return favourites?.length
        ?
        (
            <>
                <RestaurantList
                    navigation={navigation}
                    restaurants={favourites}
                    isLoading={false}
                />
            </>
        )
        :
        (
            <>
                <SafeContainer>
                    <Text style={styles.noFavouritesText}>No favourites yet</Text>
                </SafeContainer>
            </>
        )
}


const styles = StyleSheet.create({
    noFavouritesText: {
        textAlign: 'center',
    }
})