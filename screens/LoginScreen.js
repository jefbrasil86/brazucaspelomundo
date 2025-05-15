import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/logo.png')} // Substitua por sua imagem ou background
      style={styles.background}
    >
      <BlurView intensity={50} tint="dark" style={styles.blur}>
        <Text style={styles.titulo}>Brazucas Pelo Mundo</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home')} // CORRIGIDO AQUI
        >
          <Ionicons name="enter-outline" size={24} color="#fff" style={{ marginRight: 8 }} />
          <Text style={styles.textoBotao}>Entrar</Text>
        </TouchableOpacity>
      </BlurView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  blur: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 50,
    textAlign: 'center',
  },
  botao: {
    flexDirection: 'row',
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});