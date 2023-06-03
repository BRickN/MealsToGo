import React, { useContext, useState } from 'react'
import { StyleSheet, View } from 'react-native';

import SearchBar from '../../components/searchBar';
import RestaurantList from '../../components/restaurantList';
import SafeContainer from '../../components/safeContainer';

import { FavouritesContext } from '../../../services/favourites/favouritesContext';
import FavouritesBar from '../../components/favouritesBar';
export default function RestaurantsScreen({ navigation }) {
  const favouritesContext = useContext(FavouritesContext);
  const { favourites } = favouritesContext;
  const [isFavouritesToggled, setIsFavouritesToggled] = useState(false);

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
        <RestaurantList navigation={navigation} />
      </SafeContainer>
    </>
  )
}
