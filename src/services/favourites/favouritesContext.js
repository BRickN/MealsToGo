import React, { createContext, useState, useEffect } from 'react'
import { } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        loadFavourites();
    }, [])

    useEffect(() => {
        saveFavourites(favourites)
    }, [favourites])


    const saveFavourites = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem("@favourites", jsonValue)
        } catch (error) {
            console.log("Error saving", error);
        }
    }

    const loadFavourites = async () => {
        try {
            const value = await AsyncStorage.getItem("@favourites")
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
