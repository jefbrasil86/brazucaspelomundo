import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';

const imagemFundo = require('../../assets/agenda.jpg');

export default function AgendaScreen() {
  const [agenda, setAgenda] = useState([
    {
      id: 1,
      tipo: 'Amistoso',
      data: 'Terça-feira, 13/05/2025',
      times: 'Brazucas Alegria vs Ousadia',
      local: 'A definir',
    },
  ]);

  const [eventoSelecionado, setEventoSelecionado] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const abrirModal = (evento) => {
    setEventoSelecionado({ ...evento });
    setModalVisible(true);
  };

  const salvarAlteracoes = () => {
    const novaAgenda = agenda.map((item) =>
      item.id === eventoSelecionado.id ? eventoSelecionado : item
    );
    setAgenda(novaAgenda);
    setModalVisible(false);
  };

  const excluirEvento = () => {
    Alert.alert('Confirmar exclusão', 'Tem certeza que deseja excluir este jogo?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => {
          setAgenda(agenda.filter((item) => item.id !== eventoSelecionado.id));
          setModalVisible(false);
        },
      },
    ]);
  };

  return (
    <ImageBackground source={imagemFundo} style={styles.background} resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.titulo}>Agenda de Jogos</Text>
        <FlatList
          data={agenda}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card} onPress={() => abrirModal(item)}>
              <Text style={styles.tipo}>{item.tipo}</Text>
              <Text style={styles.detalhe}>{item.data}</Text>
              <Text style={styles.detalhe}>{item.times}</Text>
              <Text style={styles.detalhe}>{item.local}</Text>
            </TouchableOpacity>
          )}
        />

        <Modal visible={modalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modal}>
              <Text style={styles.modalTitulo}>Editar Jogo</Text>
              <TextInput
                style={styles.input}
                placeholder="Tipo"
                value={eventoSelecionado?.tipo}
                onChangeText={(text) =>
                  setEventoSelecionado({ ...eventoSelecionado, tipo: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Data"
                value={eventoSelecionado?.data}
                onChangeText={(text) =>
                  setEventoSelecionado({ ...eventoSelecionado, data: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Times"
                value={eventoSelecionado?.times}
                onChangeText={(text) =>
                  setEventoSelecionado({ ...eventoSelecionado, times: text })
                }
              />
              <TextInput
                style={styles.input}
                placeholder="Local"
                value={eventoSelecionado?.local}
                onChangeText={(text) =>
                  setEventoSelecionado({ ...eventoSelecionado, local: text })
                }
              />
              <TouchableOpacity style={styles.botaoSalvar} onPress={salvarAlteracoes}>
                <Text style={styles.botaoTexto}>Salvar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botaoExcluir} onPress={excluirEvento}>
                <Text style={styles.botaoTexto}>Excluir</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelar}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1 },
  overlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 20,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#ffffffcc',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  tipo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  detalhe: {
    fontSize: 14,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    padding: 20,
  },
  modal: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
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
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
  },
  botaoSalvar: {
    backgroundColor: '#28a745',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  botaoExcluir: {
    backgroundColor: '#dc3545',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
  },
  botaoTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cancelar: {
    marginTop: 10,
    textAlign: 'center',
    color: 'red',
  },
});