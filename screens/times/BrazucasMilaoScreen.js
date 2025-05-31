import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import jogadoresOriginais from '../../data/jogadores';

const { width } = Dimensions.get('window');

export default function BrazucasMilaoScreen() {
  const [jogadores, setJogadores] = useState(jogadoresOriginais);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = (jogador) => {
    setJogadorSelecionado(jogador);
    setModalVisible(true);
  };

  const salvarAlteracoes = () => {
    const novosJogadores = jogadores.map((j) =>
      j.id === jogadorSelecionado.id ? jogadorSelecionado : j
    );
    setJogadores(novosJogadores);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Brazucas Milão</Text>

      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.foto }} style={styles.foto} />
            <View style={styles.info}>
              <Text style={styles.nome}>{item.nome} {item.sobrenome}</Text>
              <Text style={styles.texto}>Posição: {item.posicao}</Text>
              <Text style={styles.texto}>Idade: {item.idade} • Nota: {item.nota}</Text>
              <Text style={styles.texto}>Cidade: {item.cidade} • {item.nacionalidade}</Text>
              <TouchableOpacity
                style={styles.editarBotao}
                onPress={() => abrirModal(item)}
              >
                <Text style={styles.editarTexto}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalFundo}>
          <View style={styles.modal}>
            <Text style={styles.modalTitulo}>Editar Jogador</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={jogadorSelecionado?.nome}
              onChangeText={(text) =>
                setJogadorSelecionado({ ...jogadorSelecionado, nome: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Idade"
              keyboardType="numeric"
              value={jogadorSelecionado?.idade.toString()}
              onChangeText={(text) =>
                setJogadorSelecionado({ ...jogadorSelecionado, idade: parseInt(text) || 0 })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Posição"
              value={jogadorSelecionado?.posicao}
              onChangeText={(text) =>
                setJogadorSelecionado({ ...jogadorSelecionado, posicao: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Cidade"
              value={jogadorSelecionado?.cidade}
              onChangeText={(text) =>
                setJogadorSelecionado({ ...jogadorSelecionado, cidade: text })
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Nota"
              keyboardType="numeric"
              value={jogadorSelecionado?.nota.toString()}
              onChangeText={(text) =>
                setJogadorSelecionado({ ...jogadorSelecionado, nota: parseFloat(text) || 0 })
              }
            />

            <TouchableOpacity style={styles.botaoSalvar} onPress={salvarAlteracoes}>
              <Text style={styles.textoBotao}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelar}>Cancelar</Text>
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
    fontSize: 26,
    color: '#FFD700',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    paddingHorizontal: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#1a1a1a',
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#FFD700',
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 2,
  },
  editarBotao: {
    marginTop: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#FFD700',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  editarTexto: {
    color: '#000',
    fontWeight: 'bold',
  },
  modalFundo: {
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
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
  },
  botaoSalvar: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelar: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
});