import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MapScreen from '../../features/screens/map.screen';
import SettingsScreen from '../../features/screens/settings.screen';
import RestaurantNavigator from './restaurantNavigator';

import { colors } from '../../utils/colors';

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
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={createScreenOptions}
            >
                <Tab.Screen
                    name={NAV_SCREENS.Restaurants}
                    component={RestaurantNavigator} />
                <Tab.Screen
                    name={NAV_SCREENS.Map}
                    component={MapScreen} />
                <Tab.Screen
                    name={NAV_SCREENS.Settings}
                    component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}
