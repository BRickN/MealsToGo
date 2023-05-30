import React from 'react'
import {
  StyleSheet,
  View
} from 'react-native';

import SearchBar from '../components/searchBar';
import RestaurantList from '../components/restaurantList';
import SafeContainer from '../components/safeContainer';


export default function RestaurantsScreen({ navigation }) {
  return (
    <>
      <SafeContainer>
        <SearchBar />
        <RestaurantList navigation={navigation} />
      </SafeContainer>
    </>
  )
}
