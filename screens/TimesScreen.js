import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TimesScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Times Disponíveis</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BrazucasOver40")}>
        <Text style={styles.buttonText}>⚽ Brazucas Over 40</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BrazucasMundialOver40")}>
        <Text style={styles.buttonText}>🌍 Brazucas Mundial Over 40</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BrazucasMilao")}>
        <Text style={styles.buttonText}>🇮🇹 Brazucas Milão</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("FutebolAlegriaBergamo")}>
        <Text style={styles.buttonText}>🎉 Futebol Alegria Bergamo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});
