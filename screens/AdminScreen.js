import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function AdminScreen() {
  return (
    <ImageBackground
      source={require('../assets/administracao.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Área de Administração</Text>
        <Text style={styles.subtitle}>Gerencie pagamentos, prêmios e mais</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // escurece o fundo para melhor leitura
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: '#FFD700', // dourado
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});