import React, { useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function TimeScreen() {
  const navigation = useNavigation();
  const fadeRef = useRef(null);

  useFocusEffect(
    React.useCallback(() => {
      if (fadeRef.current) {
        fadeRef.current.fadeInUp(800);
      }
    }, [])
  );

  return (
    <ImageBackground
      source={require('../assets/over40.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Animatable.View ref={fadeRef} style={styles.inner}>
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
        </Animatable.View>
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
    justifyContent: 'center',
    padding: 20,
  },
  inner: {
    alignItems: 'center',
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