import { View, Text } from 'react-native'
import React from 'react'
import camelize from "camelize";

import { locations } from './locationMock';

export const    locationRequest = (searchTerm) => {
    return new Promise((resolve, reject) => {
        const locationMock = locations[searchTerm];
        if (!locationMock) {
            reject('not found');
        }
        resolve(locationMock);
    })
}

export const locationTransform = ({ results = [] }) => {
    const formattedResults = camelize(results);
    const { geometry = {} } = formattedResults[0];
    const { lat, lng } = geometry.location;

    return { lat, lng };
}