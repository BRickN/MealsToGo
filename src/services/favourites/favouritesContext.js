import React, { createContext, useState, useEffect, useContext } from 'react'
import { } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../authentication/authenticationContext';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);
    const { user } = useContext(AuthenticationContext);

    useEffect(() => {
        if (user && user.uid) {
            loadFavourites(user.uid);
        }
    }, [user])

    useEffect(() => {
        if (user && user.uid && favourites.length) {
            saveFavourites(favourites, user.uid)
        }
    }, [favourites, user])

    const saveFavourites = async (value, uid) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue)
        } catch (error) {
            console.log("Error saving", error);
        }
    }

    const loadFavourites = async (uid) => {
        try {
            const value = await AsyncStorage.getItem(`@favourites-${uid}`)
            if (value !== null) {
                setFavourites(JSON.parse(value))
            }
        } catch (error) {
            console.log("Error loading", error);
        }
    }

    const add = (restaurant) => {
        setFavourites([...favourites, restaurant]);
    };

    const remove = (restaurant) => {
        const newFavourites = favourites.filter((x) => {
            return x.placeId !== restaurant.placeId
        });
        setFavourites(newFavourites);
    }

    return (
        <>
            <FavouritesContext.Provider value={{
                favourites,
                addToFavourites: add,
                removeFromFavourites: remove
            }}>
                {children}
            </FavouritesContext.Provider>
        </>
    )
}
