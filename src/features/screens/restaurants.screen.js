import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

import SearchBar from '../components/searchBar';
import RestaurantList from '../components/restaurantList';

import { spacing } from '../../utils/sizes';

export default function RestaurantsScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
        <View style={styles.restaurantsContainer}>
          <RestaurantList />
        </View>
      </SafeAreaView>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  searchBarContainer: {

  },
  restaurantsContainer: {
    flex: 1,
    padding: spacing.md,
  },
});
