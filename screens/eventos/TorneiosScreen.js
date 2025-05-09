import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function TorneiosScreen() {
  return (
    <ImageBackground
      source={require('../../assets/torneios.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Torneios</Text>

        <View style={styles.card}>
          <Text style={styles.nome}>🏆 Brazucas Alegria e Ousadia</Text>
          <Text style={styles.info}>📅 Início: 26/05/2025</Text>
          <Text style={styles.info}>🎲 Sorteio dos jogos: a definir</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 28,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 20,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000',
  },
  info: {
    fontSize: 16,
    color: '#333',
  },
});