import React from 'react';
import MapScreen from '../../features/map/screens/map.screen';

export default function MapNavigator({ navigation }) {
    return (
        <>
            <MapScreen navigation={navigation} />
        </>
    )
}
