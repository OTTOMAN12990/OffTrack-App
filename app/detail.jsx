import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import axios from "axios";

const DATA = [
  { id: 1, title: 'Barcelona', description: '', image:require("../assets/images/barcelona.png") },
  { id: 2, title: 'New York', description: '', image:require("../assets/images/newyork.png") },
  { id: 3, title: 'Tokyo', description: '', image:require("../assets/images/tokyo.png") }

];

export default function DetailScreen() {
  const { id } = useLocalSearchParams(); // Haalt de 'id' uit de URL
  const navigation = useNavigation();
  const [weather, setWeather] = useState(null); // Houdt de weerdata bij
  const [loading, setLoading] = useState(true); // Houdt de laadstatus bij
  const [error, setError] = useState(null); // Houdt foutmeldingen bij

 const item = DATA.find((trip) => trip.id === parseInt(id))
  useEffect(() => {
    if (item) {
      navigation.setOptions({ title: item.title });

      // Haal de weerdata op met Axios
      const fetchWeather = async () => {
        const city = item.title; // Haalt de stad uit de data
        const apiKey = "f107fc7740653e1d6daab069d3186c0f"; // Voeg hier je OpenWeatherMap API sleutel in
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=nl`;

        try {
          const response = await axios.get(url);
          setWeather(response.data);
        } catch (err) {
          setError("Er is een fout opgetreden bij het ophalen van het weer.");
        } finally {
          setLoading(false);
        }
      };

      fetchWeather();
    }
  }, [item]);

  // Als de trip niet gevonden wordt, toon een foutmelding
  if (!item) {
    return (
      <View style={styles.container}>
        <Text>Stad niet gevonden.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {item.image && <Image source={item.image} style={styles.image} />}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>

      {/* Toon weerinformatie als deze beschikbaar is */}
      {loading ? (
        <Text>Het weer wordt geladen...</Text>
      ) : error ? (
        <Text>{error}</Text>
      ) : weather ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText}>{Math.round(weather.main.temp)}°C</Text>
          <Text style={styles.weatherText}>{weather.weather[0].description}</Text>
        </View>
      ) : (
        <Text>Geen weerinformatie beschikbaar.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#f2f2f2',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: '#555',
  },
  weatherContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  weatherText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
});

