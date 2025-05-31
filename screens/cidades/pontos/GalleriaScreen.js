import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function GalleriaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Galleria Vittorio Emanuele II</Text>
      <Image source={require('../../../assets/galleria.jpg')} style={styles.imagem} />
      <Text style={styles.texto}>
        Um dos centros comerciais mais antigos do mundo, com lojas de luxo e arquitetura histórica.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});