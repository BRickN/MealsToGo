import React from 'react'
import RestaurantInfoCard from '../../components/restaurantInfoCard'
import RestaurantOfferInfo from '../../components/restaurantOfferInfo';


export default function RestaurantDetailScreen({ route }) {
  const restaurant = route.params["restaurant"];
  return (
    <>
        <RestaurantInfoCard restaurant={restaurant} />
        <RestaurantOfferInfo restaurant={restaurant} />
    </>
  )
}
