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
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5, MaterialIcons, Entypo } from '@expo/vector-icons';

export default function RomaScreen() {
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
    <ImageBackground source={require('../../assets/roma.jpg')} style={styles.container} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>🇮🇹 <Text style={{ color: '#FFD700' }}>Roma</Text></Text>

        <Text style={styles.subtitle}>Lugares para visitar:</Text>

        <TouchableOpacity style={styles.lugarBotao}>
          <Text style={styles.lugarTexto}><FontAwesome5 name="landmark" size={16} /> Coliseu</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lugarBotao}>
          <Text style={styles.lugarTexto}><MaterialIcons name="location-city" size={16} /> Vaticano</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lugarBotao}>
          <Text style={styles.lugarTexto}><Entypo name="water" size={16} /> Fontana di Trevi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.lugarBotao}>
          <Text style={styles.lugarTexto}><Entypo name="map" size={16} /> Piazza di Spagna</Text>
        </TouchableOpacity>

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
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  lugarBotao: {
    backgroundColor: '#ffffffcc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
  },
  lugarTexto: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    color: '#000',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  foto: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
});