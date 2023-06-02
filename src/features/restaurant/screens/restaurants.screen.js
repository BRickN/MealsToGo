import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native';

import SearchBar from '../../components/searchBar';
import RestaurantList from '../../components/restaurantList';
import SafeContainer from '../../components/safeContainer';

import { FavouritesContext } from '../../../services/favourites/favouritesContext';

export default function RestaurantsScreen({ navigation }) {
  const favouritesContext = useContext(FavouritesContext);
  const { favourites } = favouritesContext;

  return (
    <>
      <SafeContainer>
        <SearchBar />
        <RestaurantList navigation={navigation} />
      </SafeContainer>
    </>
  )
}
