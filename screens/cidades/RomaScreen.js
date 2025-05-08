// RomaScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function RomaScreen() {
  const [comentario, setComentario] = useState('');
  const [fotoUri, setFotoUri] = useState(null);
  const [curtidas, setCurtidas] = useState(0);

  const escolherFoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, allowsEditing: true });
    if (!result.canceled) {
      setFotoUri(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={require('../../assets/roma.jpg')} style={styles.container} resizeMode="cover">
      <ScrollView contentContainerStyle={styles.overlay}>
        <Text style={styles.title}>🌽 Roma</Text>
        <Text style={styles.subtitle}>Lugares para visitar:</Text>
        <Text style={styles.text}>• Coliseu</Text>
        <Text style={styles.text}>• Vaticano</Text>
        <Text style={styles.text}>• Fontana di Trevi</Text>
        <Text style={styles.text}>• Piazza di Spagna</Text>

        <TouchableOpacity style={styles.button} onPress={escolherFoto}>
          <Text style={styles.buttonText}>Adicionar Foto</Text>
        </TouchableOpacity>
        {fotoUri && <Image source={{ uri: fotoUri }} style={styles.foto} />}

        <TouchableOpacity style={styles.button} onPress={() => setCurtidas(curtidas + 1)}>
          <Text style={styles.buttonText}>Curtir ({curtidas})</Text>
        </TouchableOpacity>

        <TextInput
          placeholder="Adicionar comentário"
          placeholderTextColor="#ccc"
          value={comentario}
          onChangeText={setComentario}
          style={styles.input}
        />
        <Button title="Enviar comentário" onPress={() => alert('Comentário enviado!')} />
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
    color: 'white',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 4,
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
