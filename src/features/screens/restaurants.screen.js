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
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
        <View style={styles.restaurantsContainer}>
          <RestaurantList />
        </View>
      </SafeContainer>
    </>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {

  },
  restaurantsContainer: {
    flex: 1,
  },
});
