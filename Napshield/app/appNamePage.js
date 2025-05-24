import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function AppNamePage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Napshield</Text>
      <Pressable style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#282c34' },
  title: { fontSize: 48, fontWeight: 'bold', color: '#61dafb', marginBottom: 40 },
  button: { backgroundColor: '#61dafb', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 10 },
  buttonText: { fontSize: 18, color: '#282c34', fontWeight: 'bold' },
});
