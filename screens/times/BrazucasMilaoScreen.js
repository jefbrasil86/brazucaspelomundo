import React, { useState } from 'react';
import {
  View, Text, FlatList, TextInput,
  Modal, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

export default function BrazucasMilaoScreen() {
  const [jogadores, setJogadores] = useState([
    { id: 1, nome: 'Jogador1', sobrenome: 'Milao', idade: 27, cidade: 'Milão', posicao: 'Zagueiro', nota: 7.0 },
    { id: 2, nome: 'Jogador2', sobrenome: 'Milao', idade: 24, cidade: 'Milão', posicao: 'Atacante', nota: 7.5 },
    // ... até 22 jogadores fictícios se desejar
  ]);
  const [selecionado, setSelecionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const editar = (jogador) => {
    setSelecionado(jogador);
    setModalVisible(true);
  };

  const salvar = () => {
    const atualizados = jogadores.map((j) =>
      j.id === selecionado.id ? selecionado : j
    );
    setJogadores(atualizados);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Time Brazucas Milão</Text>
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 100 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome} {item.sobrenome}</Text>
            <Text style={styles.info}>Posição: {item.posicao}</Text>
            <Text style={styles.info}>Idade: {item.idade} • Nota: {item.nota}</Text>
            <Text style={styles.info}>Cidade: {item.cidade}</Text>
            <TouchableOpacity style={styles.botao} onPress={() => editar(item)}>
              <Text style={styles.botaoTexto}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Editar Jogador</Text>
            <TextInput style={styles.input} value={selecionado?.nome} onChangeText={(t) => setSelecionado({ ...selecionado, nome: t })} placeholder="Nome" />
            <TextInput style={styles.input} value={selecionado?.idade.toString()} onChangeText={(t) => setSelecionado({ ...selecionado, idade: parseInt(t) || 0 })} placeholder="Idade" keyboardType="numeric" />
            <TextInput style={styles.input} value={selecionado?.posicao} onChangeText={(t) => setSelecionado({ ...selecionado, posicao: t })} placeholder="Posição" />
            <TextInput style={styles.input} value={selecionado?.cidade} onChangeText={(t) => setSelecionado({ ...selecionado, cidade: t })} placeholder="Cidade" />
            <TextInput style={styles.input} value={selecionado?.nota.toString()} onChangeText={(t) => setSelecionado({ ...selecionado, nota: parseFloat(t) || 0 })} placeholder="Nota" keyboardType="numeric" />
            <TouchableOpacity style={styles.botaoSalvar} onPress={salvar}>
              <Text style={styles.botaoTexto}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{ textAlign: 'center', marginTop: 10, color: 'red' }}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#111',
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  info: {
    color: '#ccc',
    fontSize: 14,
  },
  botao: {
    marginTop: 5,
    backgroundColor: '#FFD700',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  botaoTexto: {
    fontWeight: 'bold',
    color: '#000',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    width: width * 0.8,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  botaoSalvar: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
  },
});