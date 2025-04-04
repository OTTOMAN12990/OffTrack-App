import { StyleSheet, Text, View, Pressable, TextInput,Alert } from 'react-native'
import {useState} from 'react'
import { useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert("Fout", "Alle velden zijn verplicht.");
      return;
    }

    router.replace("/screens/tabs/home");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24 }}> Inloggen</Text>

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

      <Pressable style={styles.buttonA} onPress={handleLogin}>
        <Text style={styles.Text}>Inloggen</Text>
      </Pressable>

      <Pressable style={styles.buttonA} onPress={() => router.push("/screens/auth/register")}>
        <Text style={styles.Text}>Nog geen account? Regist</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 24,
    marginBottom: 20
  },

  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10
  },

  button: {
    backgroundColor: "#007BFF",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontSize: 16
  },

  linkText: {
    color: "#007BFF",
    marginTop: 10
  },

});