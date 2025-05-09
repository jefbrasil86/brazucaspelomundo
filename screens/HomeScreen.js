// 1. Atualize HomeScreen.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/home-bg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Agenda')}
      >
        <Text style={styles.texto}>📅 Agenda de Jogos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('EventosBergamo')}
      >
        <Text style={styles.texto}>🎉 Eventos em Bergamo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('EventosMilao')}
      >
        <Text style={styles.texto}>🧑‍🎤 Eventos em Milão</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('EventosRoma')}
      >
        <Text style={styles.texto}>🎨 Eventos em Roma</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Torneios')}
      >
        <Text style={styles.texto}>🏆 Torneios</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    elevation: 5,
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
