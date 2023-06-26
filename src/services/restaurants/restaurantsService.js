import camelize from "camelize";
import { host } from '../../utils/env'

export const restaurantsRequest = (location) => {
    return fetch(`${host}/placesNearby?location=${location}`)
    // return fetch(`https://4608-87-208-179-226.ngrok-free.app/mealstogo-55c16/us-central1/placesNearby?location=${location}`)
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err)
        })
}

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        return {
            //spread operator, spreads the object in its different properties.
            //So
            //...restaurant ===
            //prop1: "value1",
            //prop2: "value2",
            //prop3: "value3",
            ...restaurant,
            address: restaurant.vicinity,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });

    return camelize(mappedResults);
};
