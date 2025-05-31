import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

export default function MilanoScreen() {
  const [comentario, setComentario] = useState('');
  const [fotoUri, setFotoUri] = useState(null);
  const [curtidas, setCurtidas] = useState(0);

  const escolherFoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });
    if (!result.canceled) {
      setFotoUri(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={require('../../assets/milao.jpg')} style={styles.container} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>🇮🇹 Milão</Text>
        <Text style={styles.subtitle}>Lugares para visitar:</Text>

        <TouchableOpacity style={styles.attractionButton}>
          <Ionicons name="business" size={20} color="#000" style={styles.icon} />
          <Text style={styles.attractionText}>Duomo di Milano</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.attractionButton}>
          <Ionicons name="storefront" size={20} color="#000" style={styles.icon} />
          <Text style={styles.attractionText}>Galleria Vittorio Emanuele II</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.attractionButton}>
          <Ionicons name="shield-checkmark" size={20} color="#000" style={styles.icon} />
          <Text style={styles.attractionText}>Castello Sforzesco</Text>
        </TouchableOpacity>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 45.4642,
            longitude: 9.19,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          <Marker coordinate={{ latitude: 45.4642, longitude: 9.19 }} title="Duomo di Milano" />
          <Marker coordinate={{ latitude: 45.467, longitude: 9.189 }} title="Galleria Vittorio Emanuele II" />
          <Marker coordinate={{ latitude: 45.4705, longitude: 9.1795 }} title="Castello Sforzesco" />
        </MapView>

        <TouchableOpacity style={styles.button} onPress={escolherFoto}>
          <Text style={styles.buttonText}>Adicionar Foto</Text>
        </TouchableOpacity>
        {fotoUri && <Image source={{ uri: fotoUri }} style={styles.foto} />}

        <TouchableOpacity style={styles.button} onPress={() => setCurtidas(curtidas + 1)}>
          <Text style={styles.buttonText}>Curtir ({curtidas})</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Adicionar comentário"
          placeholderTextColor="#000"
          value={comentario}
          onChangeText={setComentario}
          style={styles.input}
        />

        <TouchableOpacity style={styles.button} onPress={() => alert('Comentário enviado!')}>
          <Text style={styles.buttonText}>Enviar Comentário</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFD700',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10,
    fontWeight: 'bold',
  },
  attractionButton: {
    backgroundColor: '#ffffffcc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  attractionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    marginRight: 10,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#ffffffcc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: '#000',
  },
  foto: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
});