import { StyleSheet, View, Text } from 'react-native'
import React, { useContext } from 'react'
import { List, Avatar } from 'react-native-paper';

import SafeContainer from '../../components/safeContainer';
import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

import { fontSizes } from '../../../utils/fonts';

export default function SettingsScreen({ navigation }) {
    const { onLogout, user } = useContext(AuthenticationContext);

    return (
        <>
            <SafeContainer>
                <View style={styles.avatarContainer}>
                    <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                    <Text style={styles.emailText}>{user.email}</Text>
                </View>
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
            </SafeContainer>
        </>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 16,
    },
    avatarContainer: {
        alignItems: 'center',
        margin:15,
    },
    emailText: {
        padding: 10,
        marginTop: 10,
        fontSize: fontSizes.body
    }
})