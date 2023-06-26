import camelize from "camelize";

export const locationRequest = (searchTerm) => {
    return fetch(`https://4608-87-208-179-226.ngrok-free.app/mealstogo-55c16/us-central1/geocode?city=${searchTerm}`)
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