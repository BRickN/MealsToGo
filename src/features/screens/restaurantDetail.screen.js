import React from 'react'
import RestaurantInfoCard from '../components/restaurantInfoCard'

export default function RestaurantDetailScreen({route}) {
    const restaurant = route.params["restaurant"];
    console.log(restaurant);
    return (
        <RestaurantInfoCard restaurant={restaurant}></RestaurantInfoCard>
  )
}
