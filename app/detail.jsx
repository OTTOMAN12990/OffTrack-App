import { useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";

const DATA = {
  1: { title: "Barcelona", description: "Zon, strand en Gaudí", image:require("../assets/images/barcelona.png") },
  2: { title: "New York", description: "De stad die nooit slaapt", image: "../assets/images/newyok.png" },
  3: { title: "Rome", description: "Eeuwenoude geschiedenis en pasta", image: "../assets/images/tokyo.png" },
};

export default function DetailScreen() {
  const { id } = useLocalSearchParams(); // Haalt de 'id' uit de URL
  const navigation = useNavigation();
  
  // Zoeken naar de juiste trip op basis van de id
  const item = DATA[id];

  // Zet de titel van de navigatiebalk naar de titel van de trip
  useEffect(() => {
    if (item) {
      navigation.setOptions({ title: item.title });
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
      <Image source ={item.image}/>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: '#555',
  },
});
