import React, { useEffect, useState } from 'react';

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'


import Navigation from './src/infrastructure/navigation/index';
import AuthenticationContextProvider from './src/services/authentication/authenticationContext';

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
      <AuthenticationContextProvider>
        <Navigation />
      </AuthenticationContextProvider>
    </>
  );
};

