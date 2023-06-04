import { StyleSheet, View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import { ActivityIndicator } from 'react-native-paper';

import SearchBar from '../components/searchBar';
import SafeContainer from '../../components/safeContainer';
import { LocationContext } from '../../../services/location/locationContext';
import { RestaurantsContext } from '../../../services/restaurants/restaurantsContext';
import { colors } from '../../../utils/colors';
import MapCalloutComponent from '../../components/mapCalloutComponent';

export default function MapScreen({ navigation }) {
    const { location } = useContext(LocationContext)
    const { restaurants = [], isLoading } = useContext(RestaurantsContext);

    const [latDelta, setLatDelta] = useState(0);
    const [region, setRegion] = useState(null);
    const { lat, lng, viewport } = location;

    useEffect(() => {
        const northEastLat = viewport.northeast.lat;
        const southWestLat = viewport.southwest.lat;

        const latDelta = northEastLat - southWestLat;

        const region = {
            latitude: lat,
            longitude: lng,
            latitudeDelta: latDelta,
            longitudeDelta: 0.02
        }
        setRegion(region);
    }, [location])

    return (
        <>
            <SearchBar />
            {isLoading &&
                <ActivityIndicator
                    animating={true}
                    color={colors.tomato}
                    style={styles.loader} />
            }
            <MapView
                region={region}
                style={styles.map}>

                {restaurants.map((restaurant) => {
                    const coordinate = {
                        latitude: restaurant.geometry.location.lat,
                        longitude: restaurant.geometry.location.lng,
                    }
                    return (
                        <Marker
                            key={restaurant.name}
                            title={restaurant.name}
                            coordinate={coordinate}
                        >
                            <Callout
                                style={styles.callout}
                                onPress={() => navigation.navigate("RestaurantDetail", { restaurant })}>
                                <MapCalloutComponent restaurant={restaurant} />
                            </Callout>
                        </Marker>
                    );
                })}

            </MapView>
        </>
    )
}

const styles = StyleSheet.create({
    map: {
        flex: 1,
        zIndex: -1,
    },
    loader: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        textAlign: 'center',
    }
})
