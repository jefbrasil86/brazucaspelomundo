import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventosMilaoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos em Milão</Text>
      <Text style={styles.text}>Veja aqui os próximos encontros e atrações culturais de Milão.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});