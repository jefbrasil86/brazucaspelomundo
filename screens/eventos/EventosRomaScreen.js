import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EventosRomaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos em Roma</Text>
      <Text style={styles.text}>Acompanhe os eventos culturais e sociais em Roma.</Text>
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