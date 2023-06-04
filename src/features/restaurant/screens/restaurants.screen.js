import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native';

import SearchBar from '../../components/searchBar';
import RestaurantList from '../../components/restaurantList';
import SafeContainer from '../../components/safeContainer';

import { FavouritesContext } from '../../../services/favourites/favouritesContext';
import { RestaurantsContext } from '../../../services/restaurants/restaurantsContext';
import FavouritesBar from '../../components/favouritesBar';

export default function RestaurantsScreen({ navigation }) {
  const favouritesContext = useContext(FavouritesContext);
  const { favourites } = favouritesContext;
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

  const restaurantContext = useContext(RestaurantsContext);

  const {
    restaurants,
    isLoading,
    error } = restaurantContext;

  return (
    <>
      <SafeContainer>
        <SearchBar
          isFavouritesToggled={isFavouritesToggled}
          onFavouritesToggle={() => setIsFavouritesToggled(!isFavouritesToggled)} />
        {isFavouritesToggled &&
          <FavouritesBar
            favourites={favourites}
            navigation={navigation} />}
        <RestaurantList
          navigation={navigation}
          restaurants={restaurants}
          isLoading={isLoading} />
      </SafeContainer>
    </>
  )
}
