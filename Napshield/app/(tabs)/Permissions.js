import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function PermissionsScreen() {
  const [cameraPermission, setCameraPermission] = useState('Unknown');
  const [mediaPermission, setMediaPermission] = useState('Unknown');

  // Request permissions automatically when component mounts
  useEffect(() => {
    requestPermissions();
  }, []);

  const requestPermissions = async () => {
    const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync();
    const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync();

    setCameraPermission(cameraStatus);
    setMediaPermission(mediaStatus);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Camera Permission: {cameraPermission}</Text>
      <Text style={styles.title}>Media Permission: {mediaPermission}</Text>
      <Button title="Request Permissions" onPress={requestPermissions} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    marginBottom: 12,
  },
});
