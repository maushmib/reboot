import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const API_URL = 'http://192.168.126.1:5000'; // Replace with your actual local IP

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Error', 'Please enter both username and password');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', 'logged in successfully!');  // small 'l'
        router.push('/home'); // Navigate to home screen after login
      } else {
        Alert.alert('login failed', data.message || 'Invalid credentials');  // small 'l'
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to login. Please try again later.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>login</Text>  {/* small 'l' */}
      
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>login</Text>  {/* small 'l' */}
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/signup')}>
        <Text style={styles.linkText}>don't have an account? sign up</Text>  {/* small 's' */}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding: 20 },
  title: { fontSize: 32, marginBottom: 20 },
  input: { width: '30%', borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 15 },
  button: { backgroundColor: '#007bff', padding: 15, borderRadius: 8, width: '30%', alignItems: 'center' },
  buttonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  linkText: { marginTop: 15, color: '#007bff' },
});
