import {useState} from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AddDiaryEntry() {
    const [selectedImage, setSelectedImage] = useState(null);
    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
    });
    if (!result.canceled) {
    setSelectedImage(result.assets[0].uri);
    }
    };
  return (
    <LinearGradient
      colors={['#191970', '#000000']} // Midnight blue naar zwart
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>📚 New diary entry</Text>

        <Text style={styles.label}>Location of vacation</Text>
        <TextInput style={styles.input} placeholder="e.g. Paris" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Banner image</Text>
        <Button title='Kies een afbeelding' onPress={pickImage} style={styles.input} />
        {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
        )}

        <Text style={styles.label}>Duration</Text>
        <TextInput style={styles.input} placeholder="e.g. 5 days" placeholderTextColor="#aaa" />

        <Text style={styles.label}>Diary entry</Text>
        <TextInput
          style={[styles.input, styles.multiline]}
          multiline
          numberOfLines={4}
          placeholder="Write about your trip..."
          placeholderTextColor="#aaa"
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 12,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    color: '#000',
  },
  multiline: {
    height: 120,
    textAlignVertical: 'top',
  },
  imagePlaceholder: {
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontSize: 40,
    color: '#aaa',
  },
  submitButton: {
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
