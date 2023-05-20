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
                    { name: 3 },
                    { name: 4 },
                    { name: 5 },
                    { name: 6 },
                    { name: 7 },
                    { name: 8 },
                    { name: 9 }
                ]}
                renderItem={renderCard}
                keyExtractor={(item) => item.name}
            />
        </>
    )
}