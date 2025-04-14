import { StyleSheet, Text, View, Pressable, TextInput, Alert } from 'react-native';
import { useState } from 'react';
import { useRouter } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Fout", "Alle velden zijn verplicht.");
      return;
    }

    // Check with AsyncStorage or hardcoded data for demo
    router.replace("/screens/tabs/home");
  };

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#3a7bd5', '#3a3a3a']} 
        style={styles.gradientBackground}
      >
        <Text style={styles.title}>Inloggen</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Wachtwoord"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Inloggen</Text>
        </Pressable>

        <Pressable style={styles.linkButton} onPress={() => router.push("/screens/auth/register")}>
          <Text style={styles.linkText}>Nog geen account? Registreer</Text>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  gradientBackground: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    padding: 30,
  },
  title: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: "white",
    fontSize: 16,
    // Adding shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
    // Adding shadow effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5, // Android shadow
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    color: "#007BFF",
    fontSize: 16,
  },
});

