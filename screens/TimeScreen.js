import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function TimeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/times.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.titulo}>Times Disponíveis</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasOver40')}
        >
          <Ionicons name="people-outline" size={20} color="#000" style={styles.icone} />
          <Text style={styles.texto}>Brazucas Over 40</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasMundialOver40')}
        >
          <Ionicons name="globe-outline" size={20} color="#000" style={styles.icone} />
          <Text style={styles.texto}>Brazucas Mundial Over 40</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('BrazucasMilao')}
        >
          <Ionicons name="flag-outline" size={20} color="#000" style={styles.icone} />
          <Text style={styles.texto}>🇮🇹 Brazucas Milão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('AlegriaBergamo')}
        >
          <Ionicons name="happy-outline" size={20} color="#000" style={styles.icone} />
          <Text style={styles.texto}>🥳 Futebol Alegria Bergamo</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  botao: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 3,
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  icone: {
    marginRight: 10,
  },
});