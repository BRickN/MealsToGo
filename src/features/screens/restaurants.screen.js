import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native';

import SearchBar from '../components/searchBar';
import RestaurantList from '../components/restaurantList';
import SafeContainer from '../components/safeContainer';


export default function RestaurantsScreen() {
  return (
    <>
      <SafeContainer>
        <SearchBar />
        <RestaurantList />
      </SafeContainer>
    </>
  )
}

const styles = StyleSheet.create({
  restaurantsContainer: {
    flex: 1,
  },
});
