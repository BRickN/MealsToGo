import { mocks, mockImages } from "./mock/index"
import camelize from "camelize";

export const restaurantsRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject('not found');
        }
        resolve(mock);
    })
}

export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map((restaurant) => {
        restaurant.photos = restaurant.photos.map((photo) => {
            return mockImages[Math.floor(Math.random() * mockImages.length)]
        });
        return {
            //spread operator, spreads the object in its different properties.
            //So
            //...restaurant ===
            //prop1: "value1",
            //prop2: "value2",
            //prop3: "value3",
            ...restaurant,
            isOpenNow: ((restaurant.opening_hours) && restaurant.opening_hours?.open_now),
            isClosedTemp: restaurant.business_status === "CLOSED_TEMPORARILY",
        };
    });
    return camelize(mappedResults);
}
