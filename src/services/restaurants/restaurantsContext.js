import { View, Text } from 'react-native'
import React, { useState, useContext, createContext, useEffect, useMemo } from 'react'

import { restaurantsRequest, restaurantsTransform } from './restaurantsService'
import { LocationContext } from '../location/locationContext';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (location) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(location)
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
        }, 500)
    }

    //useEffect, empty array to perform only on init of component
    useEffect(() => {
        if(location){
            const locationFormatted = `${location.lat},${location.lng}`;
            retrieveRestaurants(locationFormatted);
        }
    }, [location])

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
