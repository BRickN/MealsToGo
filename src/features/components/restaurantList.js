import { View, Text, FlatList } from 'react-native'
import React from 'react'
import RestaurantInfoCard from '../components/restaurantInfoCard';
export default function RestaurantList() {

    const renderCard = ({ item }) => {
        return <RestaurantInfoCard />
    }

    return (
        <>
            <FlatList
                data={[
                    { name: 1 },
                    { name: 2 },
                    { name: 2 },
                    { name: 2 },
                    { name: 2 },
                    { name: 2 },
                    { name: 2 },
                    { name: 2 },
                    { name: 2 }
                ]}
                renderItem={renderCard}
            />
        </>
    )
}