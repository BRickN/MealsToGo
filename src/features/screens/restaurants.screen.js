import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';

import SearchBar from '../SearchBar';
import RestaurantInfoCard from '../components/restaurantInfoCard';

import { spacing } from '../../utils/sizes';

export default function RestaurantsScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <SearchBar />
        <View style={styles.listView}>
          <RestaurantInfoCard />
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
  listView: {
    flex: 1,
    padding: spacing.md,
  },
});
