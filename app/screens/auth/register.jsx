import { View, Text, StyleSheet, ImageBackground, Pressable, TextInput, Alert } from 'react-native';
import { useRouter } from "expo-router";
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function Register() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert("Fout", "Alle velden zijn verplicht.");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Fout", "Wachtwoorden komen niet overeen.");
      return;
    }

    Alert.alert("Succes", "Account succesvol aangemaakt!");
    router.replace("/screens/auth/login");
  };

  return (
    <View style={styles.container}>
      <LinearGradient 
        colors={['#FF4B2B', '#FF416C']} 
        style={styles.gradientBackground}
      >
        <Text style={styles.title}>Registreren</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
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

        <TextInput
          style={styles.input}
          placeholder="Bevestig Wachtwoord"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Pressable style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Account Aanmaken</Text>
        </Pressable>

        <Pressable style={styles.linkButton} onPress={() => router.push("/screens/auth/login")}>
          <Text style={styles.linkText}>Heb je al een account? Inloggen</Text>
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
  },
  button: {
    backgroundColor: "#FF416C",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  linkButton: {
    marginTop: 15,
  },
  linkText: {
    color: "#FF4B2B",
    fontSize: 16,
  },
});

