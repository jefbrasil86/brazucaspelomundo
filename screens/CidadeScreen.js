import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

export default function CidadeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../assets/italia.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Roma')}
        >
          <ImageBackground
            source={require('../assets/roma.jpg')}
            style={styles.image}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>🇮🇹 Roma</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Milao')}
        >
          <ImageBackground
            source={require('../assets/milao.jpg')}
            style={styles.image}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>🇮🇹 Milão</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('Bergamo')}
        >
          <ImageBackground
            source={require('../assets/bergamo.jpg')}
            style={styles.image}
            imageStyle={{ borderRadius: 12 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.text}>🇮🇹 Bergamo</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
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
  container: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  card: {
    marginBottom: 16,
    width: '80%',
    height: 100, // 🔽 menor altura para mostrar mais fundo
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});