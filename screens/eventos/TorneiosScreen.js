import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function TorneiosScreen() {
  return (
    <ImageBackground
      source={require('../../assets/torneios.jpg')} // Caminho atualizado corretamente
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>🏆 Torneios</Text>

        <View style={styles.card}>
          <Text style={styles.nome}>Torneio: Alegria e Ousadia</Text>
          <Text style={styles.detalhes}>📅 Início: 26/05/2025</Text>
          <Text style={styles.detalhes}>⚽ Time: Brazucas Alegria</Text>
          <Text style={styles.detalhes}>🔀 Sorteio dos jogos: a definir</Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 8,
  },
  card: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 10,
  },
  nome: {
    fontSize: 18,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detalhes: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 4,
  },
});