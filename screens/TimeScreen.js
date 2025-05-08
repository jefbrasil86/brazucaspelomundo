import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function TimeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/over40.jpg')}
        style={styles.background}
        resizeMode="contain" // <<<<< aqui está o ajuste importante
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Times Disponíveis</Text>

          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('BrazucasOver40')}
          >
            <Text style={styles.cardText}>⚽ Brazucas Over 40</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // para evitar espaço vazio fora da imagem
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffffcc',
    padding: 16,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
});