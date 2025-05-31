import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function CastelloScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Castello Sforzesco</Text>
      <Image source={require('../../../assets/castello.jpg')} style={styles.imagem} />
      <Text style={styles.texto}>
        Castelo histórico que abriga vários museus e obras de arte em Milão.
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
