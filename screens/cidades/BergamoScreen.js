// BergamoScreen.js
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

export default function BergamoScreen() {
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
    <ImageBackground source={require('../../assets/bergamo.jpg')} style={styles.container} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>🇮🇹 <Text style={styles.titleYellow}>Bergamo</Text></Text>
        <Text style={styles.subtitle}>Lugares para visitar:</Text>

        <TouchableOpacity style={styles.localBtn}>
          <Ionicons name="business" size={18} color="black" style={styles.icon} />
          <Text style={styles.localText}>Città Alta</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.localBtn}>
          <Ionicons name="map" size={18} color="black" style={styles.icon} />
          <Text style={styles.localText}>Piazza Vecchia</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.localBtn}>
          <Ionicons name="church" size={18} color="black" style={styles.icon} />
          <Text style={styles.localText}>Basílica di Santa Maria Maggiore</Text>
        </TouchableOpacity>

        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 45.7046,
            longitude: 9.6626,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: 45.7046, longitude: 9.6626 }}
            title="Città Alta"
          />
          <Marker
            coordinate={{ latitude: 45.7033, longitude: 9.6625 }}
            title="Piazza Vecchia"
          />
          <Marker
            coordinate={{ latitude: 45.7038, longitude: 9.6619 }}
            title="Basílica di Santa Maria Maggiore"
          />
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
          placeholderTextColor="#333"
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
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  titleYellow: {
    color: '#FFD700',
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    marginVertical: 10,
    fontWeight: 'bold'
  },
  localBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffffcc',
    padding: 10,
    marginVertical: 4,
    borderRadius: 8,
  },
  localText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold'
  },
  icon: {
    marginRight: 8,
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
    marginVertical: 8,
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