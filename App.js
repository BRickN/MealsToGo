import React from 'react';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurantsContext';
import { LocationContextProvider } from './src/services/location/locationContext';
import { FavouritesContextProvider } from './src/services/favourites/favouritesContext';

import Navigation from './src/infrastructure/navigation/index';

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
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantsContextProvider>
            <Navigation />
          </RestaurantsContextProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
    </>
  );
};

