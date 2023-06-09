import React, { useState, useEffect, createContext } from 'react';

import { locationRequest, locationTransform } from './locationService';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('Antwerp');
    const [location, setLocation] = useState(null);
    const [isLoadingLocation, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    }

    useEffect(() => {
        if (!keyword.length) {
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setLocation(result);
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setIsLoading(false);
            })
    }, [keyword]);

    return (
        <>
            <LocationContext.Provider
                value={{
                    isLoadingLocation,
                    error,
                    location,
                    search: onSearch,
                    keyword
                }}
            >
                {children}
            </LocationContext.Provider>
        </>
    )
}