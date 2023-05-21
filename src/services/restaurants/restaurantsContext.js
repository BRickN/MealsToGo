import { View, Text } from 'react-native'
import React, { useState, createContext, useEffect, useMemo } from 'react'

import { restaurantsRequest, restaurantsTransform } from './restaurantsService'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setIsLoading(true);
        setTimeout(() => {
            restaurantsRequest()
                .then(restaurantsTransform)
                .then((transformedRestaurants) => {
                    setRestaurants(transformedRestaurants);
                })
                .catch(err => {
                    setError(err);
                })
                .finally(() => {
                    setIsLoading(false);
                })
        }, 2000)
    }

    //useEffect, empty array to perform only on init of component
    useEffect(() => {
        retrieveRestaurants();
    }, [])

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants: restaurants,
                isLoading: isLoading,
                error: error
            }}>
            {children}
        </RestaurantsContext.Provider>
    )
}
