// screens/cidades/BergamoScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';

export default function BergamoScreen({ navigation }) {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [photos, setPhotos] = useState([]);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.canceled) {
      setPhotos([...photos, result.assets[0].uri]);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/bergamo.jpg')}
      style={styles.container}
    >
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>◀ Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>🏰 Bergamo</Text>
      <Text style={styles.subtitle}>Locais para visitar:</Text>
      <Text style={styles.text}>• Città Alta</Text>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 45.7031,
          longitude: 9.6682,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: 45.7031, longitude: 9.6682 }}
          title="Città Alta"
        />
      </MapView>

      <TouchableOpacity style={styles.button} onPress={handlePickImage}>
        <Text style={styles.buttonText}>Adicionar Foto</Text>
      </TouchableOpacity>

      <FlatList
        horizontal
        data={photos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.photo} />
        )}
      />

      <TouchableOpacity style={styles.button} onPress={handleLike}>
        <Text style={styles.buttonText}>Curtir ({likes})</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Deixe um comentário"
        placeholderTextColor="#999"
        value={newComment}
        onChangeText={setNewComment}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddComment}>
        <Text style={styles.buttonText}>Comentar</Text>
      </TouchableOpacity>

      <FlatList
        data={comments}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.comment}>• {item}</Text>}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, resizeMode: 'cover', padding: 16 },
  backButton: { marginBottom: 10 },
  backText: { color: '#fff', fontSize: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginBottom: 5 },
  subtitle: { fontSize: 18, color: '#fff', marginBottom: 10 },
  text: { fontSize: 16, color: '#fff' },
  map: { width: '100%', height: 150, marginVertical: 10 },
  button: {
    backgroundColor: '#000000aa',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff' },
  photo: { width: 100, height: 100, margin: 5, borderRadius: 8 },
  input: {
    backgroundColor: '#ffffffcc',
    padding: 8,
    borderRadius: 6,
    marginTop: 10,
    color: '#000',
  },
  comment: { color: '#fff', marginTop: 4 },
});