import React, { useState } from 'react';
import {
  View,
    TextInput,
  Button,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import { BlurView } from 'expo-blur';
import { CommonActions, useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function LoginScreen() {
    const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
const navigation = useNavigation();

  const fazerLogin = () => {
    if (email && senha) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Tabs' }],
        })
      );
    } else {
      alert('Preencha e-mail e senha');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
      resizeMode="contain"
    />

      <BlurView intensity={40} tint="light" style={styles.container}>
          <Text style={styles.title}>Login</Text>
          <TextInput
placeholder="Email"
          placeholderTextColor="#555"
            style={styles.input}
                        onChangeText={setEmail}
value={email}
          />
          <TextInput
                        placeholder="Senha"
            placeholderTextColor="#555"
            secureTextEntry
            style={styles.input}
            onChangeText={setSenha}
value={senha}
          />
          <Button title="Entrar" onPress={fazerLogin} />
          </BlurView>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  paddingVertical: 40,
  },
  logo: {
    width: width * 0.9,
    height: width * 1.3,
    marginBottom: -120,
  },
  container: {
    padding: 16,
    borderRadius: 12,
width: width * 0.68,
    alignItems: 'stretch',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // mais translúcido
    borderWidth: 1,
    borderColor: '#ffffff33',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
fontWeight: '600',
  },
  input: {
        borderWidth: 1,
    borderColor: '#ccc',
        borderRadius: 8,
  padding: 10,
    marginBottom: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    color: '#000',
  },
});