import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef, useContext } from 'react'
import { Camera, CameraType } from 'expo-camera'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthenticationContext } from '../../../services/authentication/authenticationContext';

export default function CameraScreen({ navigation }) {
    const [type, setType] = useState(CameraType.front);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const cameraRef = useRef();
    const { user } = useContext(AuthenticationContext);

    if (!permission) {
        // Camera permissions are still loading
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }

    const snap = async () => {
        if (cameraRef) {
            const photo = await cameraRef.current.takePictureAsync();
            await AsyncStorage.setItem(`photos-${user?.uid}`, photo.uri)
            navigation.goBack();
        }
    }

    return (
        <View style={styles.container}>
            <Camera
                style={styles.camera}
                type={type}
                ratio={"16:9"}
                ref={camera => (cameraRef.current = camera)}>
                <View style={styles.flipButtonContainer}>
                    <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
                        <Text style={styles.text}>Flip Camera</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pictureButtonContainer}>
                    <TouchableOpacity
                        onPress={snap}
                        style={styles.snapButton}>
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    flipButtonContainer: {
        position: 'absolute',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    pictureButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'row',
        paddingBottom: 55,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    snapButton: {
        borderColor: '#fff',
        borderStyle: 'solid',
        borderRadius: 50,
        borderWidth: 4,
        width: 75,
        height: 75,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});