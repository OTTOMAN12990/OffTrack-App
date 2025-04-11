import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'; // Vergeet deze niet te installeren!

export default function Notification() {
  return (
    <LinearGradient
      // Meerdere kleuren voor een dynamische overgang
      colors={['#0c0f1e', '#2c3e50', '#8e44ad']} // Donkerblauw naar paars
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Titel */}
        <Text style={styles.title}>🔔 Meldingen</Text>

        {/* Notificatie Kaarten */}
        <View style={styles.card}>
          <Image
            source={{ uri: 'https://your-photo-link-here.com/photo1.jpg' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Nieuwe reis toegevoegd!</Text>
            <Text style={styles.cardDescription}>Je avontuur naar Bali is live 🌴✈️</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://your-photo-link-here.com/photo2.jpg' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Vrienden update</Text>
            <Text style={styles.cardDescription}>Sam is net terug uit Tokyo 🗼🍣</Text>
          </View>
        </View>

        <View style={styles.card}>
          <Image
            source={{ uri: 'https://your-photo-link-here.com/photo3.jpg' }}
            style={styles.cardImage}
          />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Nieuwe badge verdiend!</Text>
            <Text style={styles.cardDescription}>🏅 Explorer Badge: 10 reizen gemaakt!</Text>
          </View>
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
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  cardContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#ddd',
  },
});
