import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function ProfileScreen() {
  return (
    <LinearGradient
      colors={['#191970', '#8B0000']} // Midnight blue naar donkerrood
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Profielfoto */}
        <Image
          source={require('../../../assets/images/icon.png')}
          // <-- jouw foto-link hier invullen!
          style={styles.profileImage}
        />

        {/* Naam */}
        <Text style={styles.profileName}>Jason pussydestroyer</Text>

        {/* Korte Bio */}
        <Text style={styles.profileBio}>Reiziger | Avonturier | Levensgenieter 🌍</Text>

        {/* Reisverhalen Cards */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Barcelona</Text>
          <Text style={styles.cardDescription}>Zon, strand en Gaudí 🌞🏖️</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>New York</Text>
          <Text style={styles.cardDescription}>De stad die nooit slaapt 🏙️✨</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Rome</Text>
          <Text style={styles.cardDescription}>Eeuwenoude geschiedenis en pasta 🍝🏛️</Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 15,
  },
  profileName: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  profileBio: {
    fontSize: 16,
    color: "#ddd",
    marginBottom: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparant wit
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5, // voor Android schaduw
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 16,
    color: "#ccc",
  },
});
