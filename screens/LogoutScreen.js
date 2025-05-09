import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LogoutScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    // Função que simula logout após 1 segundo
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/logo.png')} // ou qualquer imagem que você queira usar
      style={styles.background}
      resizeMode="contain" // evita cortes e deixa a imagem ajustada
    >
      <View style={styles.overlay}>
        <Text style={styles.text}>Você saiu com sucesso.</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 20,
    borderRadius: 12,
  },
  text: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});