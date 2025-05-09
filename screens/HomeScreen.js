import React, { useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {
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
      source={require('../assets/home-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <Animatable.View ref={fadeRef} style={styles.container}>
        <Text style={styles.title}>Tabs</Text>

        {[
          { label: '📅 Agenda de Jogos', screen: 'Agenda' },
          { label: '🎉 Eventos em Bergamo', screen: 'EventosBergamo' },
          { label: '🗽 Eventos em Milão', screen: 'EventosMilao' },
          { label: '🎨 Eventos em Roma', screen: 'EventosRoma' },
          { label: '🏆 Torneios', screen: 'Torneios' },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.texto}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </Animatable.View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 30,
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    width: 300,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
  },
  texto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});