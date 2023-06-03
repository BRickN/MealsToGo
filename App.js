import React, { useEffect, useState } from 'react';

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'

import { RestaurantsContextProvider } from './src/services/restaurants/restaurantsContext';
import { LocationContextProvider } from './src/services/location/locationContext';
import { FavouritesContextProvider } from './src/services/favourites/favouritesContext';

import Navigation from './src/infrastructure/navigation/index';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBY1Rmg7yRcrvbT1S0MwjdxQfnpNRGpolU",
  authDomain: "mealstogo-55c16.firebaseapp.com",
  projectId: "mealstogo-55c16",
  storageBucket: "mealstogo-55c16.appspot.com",
  messagingSenderId: "30916240113",
  appId: "1:30916240113:web:3273beafbbd0b01294ff50"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    signInWithEmailAndPassword(auth, 'email', 'password')
      .then((user) => {
        console.log(user);
        setIsAuthenticated(true);
      }).catch((error) => {
        console.log(error);
      })
  }, [])

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

