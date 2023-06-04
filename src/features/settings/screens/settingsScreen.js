import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { List, Avatar } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import SafeContainer from '../../components/safeContainer';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

import { fontSizes } from '../../../utils/fonts';

export default function SettingsScreen({ navigation }) {
    const { onLogout, user } = useContext(AuthenticationContext);
    const [photo, setPhoto] = useState('');

    const getProfilePicture = async (currentUser) => {
        const photoUri = await AsyncStorage.getItem(`photos-${currentUser?.uid}`);
        if (photoUri !== null) {
            setPhoto(photoUri);
        }
    };

    useFocusEffect(
        React.useCallback(() => {
            getProfilePicture(user);
        }, [user])
    );

    return (
        <>
            <SafeContainer>
                <TouchableOpacity onPress={() => navigation.navigate('Camera')}>
                    <View style={styles.avatarContainer}>
                        {!photo
                            ? <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                            : <Avatar.Image size={180} source={{ uri: photo }} backgroundColor="#2182BD" />}
                        <Text style={styles.emailText}>{user.email}</Text>
                    </View>
                </TouchableOpacity >
                <List.Section>
                    <List.Item
                        style={styles.listItem}
                        title="Favourites"
                        description="View your favourites"
                        left={(props) => <List.Icon {...props} color="black" icon="heart" />}
                        onPress={() => navigation.navigate("Favourites")}
                    />
                    <List.Item
                        style={styles.listItem}
                        title="Logout"
                        left={(props) => <List.Icon {...props} color="black" icon="door" />}
                        onPress={onLogout}
                    />
                </List.Section>
            </SafeContainer >
        </>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 16,
    },
    avatarContainer: {
        alignItems: 'center',
        margin: 15,
    },
    emailText: {
        padding: 10,
        marginTop: 10,
        fontSize: fontSizes.body
    }
})