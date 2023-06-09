import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import RestaurantsScreen from '../../features/restaurant/screens/restaurants.screen';
import RestaurantDetailScreen from '../../features/restaurant/screens/restaurantDetail.screen';

const RestaurantStack = createStackNavigator();

export default function RestaurantNavigator() {
    return (
        <RestaurantStack.Navigator screenOptions={() => ({
            headerShown: false,
            ...TransitionPresets.ModalPresentationIOS
        })}>
            <RestaurantStack.Screen
                name="RestaurantsStack"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    )
}
