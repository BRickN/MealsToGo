import { View, Text } from 'react-native'
import React from 'react'

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';


export const loginRequest = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
}

// export default function AuthenticationService() {

//     const [isAuthenticated, setIsAuthenticated] = useState(false);

//     useEffect(() => {
//         signInWithEmailAndPassword(auth, 'email', 'password')
//             .then((user) => {
//                 console.log(user);
//                 setIsAuthenticated(true);
//             }).catch((error) => {
//                 console.log(error);
//             })
//     }, [])


//     return (
//         <View>
//             <Text>AuthenticationService</Text>
//         </View>
//     )
// }