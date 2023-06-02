import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { AntDesign } from '@expo/vector-icons';

import { FavouritesContext } from '../../services/favourites/favouritesContext'

export default function Favourite({ restaurant }) {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)
    const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId)
    return (
        <>
            <TouchableOpacity
                style={styles.icon}
                onPress={() => {
                    !isFavourite
                        ? addToFavourites(restaurant)
                        : removeFromFavourites(restaurant)
                }}>
                <AntDesign
                    name={
                        isFavourite
                            ? 'heart'
                            : 'hearto'}
                    size={30}
                    color={
                        isFavourite
                            ? 'red'
                            : 'white'}
                />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        top: 25,
        right: 25,
        zIndex: 9,
    },
})