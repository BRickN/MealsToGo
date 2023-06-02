import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function MapCalloutComponent({ restaurant }) {
    return (
        <>
            {Platform.OS === 'android' ?
                <View style={styles.androidWrapper}>
                    <WebView
                        style={styles.androidImg}
                        source={{ uri: restaurant.photos[0] }}
                    />
                    <Text> {restaurant.name}</Text>
                </View>
                :
                <>
                    <Text>
                        <Image
                            style={styles.iosImg}
                            source={{ uri: restaurant.photos[0] }}
                            resizeMode="cover" />
                        {restaurant.name}
                    </Text>
                </>
            }
        </>
    )
}

const styles = StyleSheet.create({
    androidWrapper: {
        padding: 10,
        maxWidth: 120,
        alignItems: 'center',
    },
    iosImg: {
        height: 100,
        width: 120,
        borderRadius: 10,
    },
    androidImg: {
        height: 100,
        width: 120,
        borderRadius: 10,
    }
})