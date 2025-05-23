import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Napshield Dashboard</Text>
      <Pressable style={styles.button} onPress={() => router.push('/(tabs)/Permissions')}>
        <Text style={styles.buttonText}>Check Permissions</Text>
      </Pressable>
      {/* Add app list UI here later */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#eef2f7' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  button: { backgroundColor: '#282c34', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', fontSize: 16 },
});
