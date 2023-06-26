const liveHost = 'https://us-central1-mealstogo-55c16.cloudfunctions.net';
const localHost = 'https://804b-87-208-179-226.ngrok-free.app/mealstogo-55c16/us-central1';

export const isDevelopment = process.env.NODE_ENV === 'development'
export const host = isDevelopment ? localHost : liveHost;
