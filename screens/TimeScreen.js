import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TimeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/over40.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Times Disponíveis</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasOver40')}
        >
          <Text style={styles.textoBotao}>⚽ Brazucas Over 40</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasMundialOver40')}
        >
          <Text style={styles.textoBotao}>🌍 Brazucas Mundial Over 40</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasMilao')}
        >
          <Text style={styles.textoBotao}>🇮🇹 Brazucas Milão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasFutebolAlegriaBergamo')}
        >
          <Text style={styles.textoBotao}>🥳 Futebol Alegria Bergamo</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  botao: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});