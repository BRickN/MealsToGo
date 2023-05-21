import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurantsContext';
import { LocationContextProvider } from './src/services/location/locationContext';

import RestaurantsScreen from './src/features/screens/restaurants.screen';
import MapScreen from './src/features/screens/map.screen';
import SettingsScreen from './src/features/screens/settings.screen';

import { colors } from './src/utils/colors';

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

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [latoLoaded] = useLato({
    Lato_400Regular,
    Lato_700Bold
  })

  if (!oswaldLoaded || !latoLoaded) { return null; }

  return (
    <>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <NavigationContainer>
            <Tab.Navigator
              screenOptions={createScreenOptions}
            >
              <Tab.Screen
                name={NAV_SCREENS.Restaurants}
                component={RestaurantsScreen} />
              <Tab.Screen
                name={NAV_SCREENS.Map}
                component={MapScreen} />
              <Tab.Screen
                name={NAV_SCREENS.Settings}
                component={SettingsScreen} />
            </Tab.Navigator>
          </NavigationContainer >
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </>
  );
};

