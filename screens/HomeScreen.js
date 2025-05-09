import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/home-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Agenda')}
        >
          <Text style={styles.texto}>📅 Agenda de Jogos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EventosBergamo')}
        >
          <Text style={styles.texto}>🎉 Eventos em Bergamo</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EventosMilao')}
        >
          <Text style={styles.texto}>🧍 Eventos em Milão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('EventosRoma')}
        >
          <Text style={styles.texto}>🎨 Eventos em Roma</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Torneios')}
        >
          <Text style={styles.texto}>🏆 Torneios</Text>
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
    padding: 20,
    paddingTop: 80,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.6)', // Preto translúcido
    padding: 20,
    marginBottom: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});