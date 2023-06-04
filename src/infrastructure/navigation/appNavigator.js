import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { RestaurantsContextProvider } from '../../services/restaurants/restaurantsContext';
import { LocationContextProvider } from '../../services/location/locationContext';
import { FavouritesContextProvider } from '../../services/favourites/favouritesContext';

import RestaurantNavigator from './restaurantNavigator';
import MapNavigator from './mapNavigator';
import { colors } from '../../utils/colors';
import { SettingsNavigator } from './settingsNavigator';

const Tab = createBottomTabNavigator();

const NAV_SCREENS = {
    Restaurants: 'Restaurants',
    Map: 'Map',
    Settings: 'Settings'
};

const TAB_ICONS = {
    Restaurants: 'restaurant',
    Map: 'map',
    Settings: 'settings'
};

export default function AppNavigator() {
    const createScreenOptions = ({ route }) => {
        const iconName = TAB_ICONS[route.name];
        return ({
            tabBarIcon: ({ size, color }) => {
                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: colors.tomato,
            tabBarInactiveTintColor: colors.gray,
            headerShown: false
        })
    }

    return (
        <>
            <FavouritesContextProvider>
                <LocationContextProvider>
                    <RestaurantsContextProvider>
                        <Tab.Navigator
                            screenOptions={createScreenOptions}
                        >
                            <Tab.Screen
                                name={NAV_SCREENS.Restaurants}
                                component={RestaurantNavigator} />
                            <Tab.Screen
                                name={NAV_SCREENS.Map}
                                component={MapNavigator} />
                            <Tab.Screen
                                name={NAV_SCREENS.Settings}
                                component={SettingsNavigator} />
                        </Tab.Navigator>
                    </RestaurantsContextProvider>
                </LocationContextProvider>
            </FavouritesContextProvider >
        </>
    )
}
