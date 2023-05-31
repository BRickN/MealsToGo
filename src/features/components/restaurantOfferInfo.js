import React from 'react'
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';

export default function RestaurantOfferInfo({ restaurant }) {
    return (
        <>
            <ScrollView>
                <List.AccordionGroup>
                    <List.Accordion
                        title="Breakfast"
                        id="Breakfast"
                        left={props => <List.Icon {...props} icon="food-croissant" />}>
                        <List.Item title="Eggs" />
                        <List.Item title="Classic Breakfast" />
                    </List.Accordion>
                    <List.Accordion
                        title="Lunch"
                        id="Lunch"
                        left={props => <List.Icon {...props} icon="food-hot-dog" />}>
                        <List.Item title="Burger" />
                        <List.Item title="Fries" />
                        <List.Item title="Sandwich" />
                    </List.Accordion>
                    <List.Accordion
                        title="Diner"
                        id="Diner"
                        left={props => <List.Icon {...props} icon="food" />}>
                        <List.Item title="Steak" />
                        <List.Item title="Lasagne" />
                    </List.Accordion>
                    <List.Accordion
                        title="Drinks"
                        id="Drinks"
                        left={props => <List.Icon {...props} icon="cup" />}>
                        <List.Item title="Coke" />
                        <List.Item title="Fanta" />
                    </List.Accordion>
                </List.AccordionGroup>
            </ScrollView>
        </>
    )
}
