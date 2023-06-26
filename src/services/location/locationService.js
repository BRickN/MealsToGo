import camelize from "camelize";
import { host } from '../../utils/env'

export const locationRequest = (searchTerm) => {
    console.log(host)

    return fetch(`${host}/geocode?city=${searchTerm}&mock=false`)
    // return fetch(`https://4608-87-208-179-226.ngrok-free.app/mealstogo-55c16/us-central1/geocode?city=${searchTerm}`)
        .then((response) => {
            return response.json()
        })
        .catch((err) => {
            console.log(err)
        })
}

export const locationTransform = ({ results = [] }) => {
    const formattedResults = camelize(results);
    const { geometry = {} } = formattedResults[0];
    const { lat, lng } = geometry.location;

    return { lat, lng, viewport: geometry.viewport };
}