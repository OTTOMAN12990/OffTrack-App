import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

const trips = [
  { id: 1, title: 'Barcelona', description: '', image:require("../../../assets/images/barcelona.png") },
  { id: 2, title: 'New York', description: '', image:require("../../../assets/images/newyork.png") },
  { id: 3, title: 'Tokyo', description: '', image:require("../../../assets/images/tokyo.png") }

];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, textAlign: "center", marginBottom: 20 }}>🏠 Trips Pagina</Text>
      
      <FlatList
        data={trips}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.tripItem}
            onPress={() => router.push(`/detail?id=${item.id}`)}
          >
            <Text style={styles.tripTitle}>{item.title}</Text>
            <Image source={item.image} style={{ width: 100, height: 100 }} />

                <Text style={styles.tripDesc}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tripItem: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  tripTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tripDesc: {
    marginTop: 5,
    color: "gray",
  },
});