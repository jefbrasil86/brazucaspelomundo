import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const initialJogadores = [
  { id: '1', nome: 'Jeferson Arnaldo Pavore', nascimento: '29-03-1983', foto: require('../../assets/jeferson.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '2', nome: 'Matheus Fernandes', nascimento: '02-11-1995', foto: require('../../assets/fernandesnatheus.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '3', nome: 'Rodolfo Fernando Lirio', nascimento: '14-03-1988', foto: require('../../assets/rodolfo.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '4', nome: 'Alexsander Almeida Monteiro', nascimento: '27-03-1995', foto: null, posicao: '', cidade: '', video: '' },
  { id: '5', nome: 'Marcos Vinícius da Silva Pereira', nascimento: '27-11-1991', foto: require('../../assets/marcosvinicius.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '6', nome: 'Ryan Carlos Costa e Silva', nascimento: '11-11-2001', foto: null, posicao: '', cidade: '', video: '' },
  { id: '7', nome: 'Fabio Gama', nascimento: '19-04-1982', foto: null, posicao: '', cidade: '', video: '' },
  { id: '8', nome: 'Lucas Ceron', nascimento: '16-02-1998', foto: null, posicao: '', cidade: '', video: '' },
  { id: '9', nome: 'Mateus Casotti', nascimento: '25-08-1996', foto: null, posicao: '', cidade: '', video: '' },
  { id: '10', nome: 'Pedro Bordin', nascimento: '08-01-1985', foto: null, posicao: '', cidade: '', video: '' },
  { id: '11', nome: 'Adrian Ricardo Villarreal Figueroa', nascimento: '02-08-1988', foto: null, posicao: '', cidade: '', video: '' },
  { id: '12', nome: 'Ruan Carvalho', nascimento: '27-07-2000', foto: require('../../assets/ruan.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '13', nome: 'Yago Matheus Rocha', nascimento: '12-01-1992', foto: require('../../assets/yago.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '14', nome: 'David Willian Mendonça', nascimento: '04-03-1990', foto: null, posicao: '', cidade: '', video: '' },
  { id: '15', nome: 'Adam Carvalho Rosas', nascimento: '25-12-2005', foto: require('../../assets/adan.jpeg'), posicao: '', cidade: '', video: '' },
  { id: '16', nome: 'Rafael Barbosa', nascimento: '14-03-1989', foto: require('../../assets/rafael.jpeg'), posicao: '', cidade: '', video: '' },
];

export default function BrazucasFutebolAlegriaBergamoScreen() {
  const [jogadores, setJogadores] = useState(initialJogadores);
  const [modalVisible, setModalVisible] = useState(false);
  const [jogadorSelecionado, setJogadorSelecionado] = useState(null);

  const editarJogador = (jogador) => {
    setJogadorSelecionado(jogador);
    setModalVisible(true);
  };

  const salvarEdicao = () => {
    setJogadores((prev) =>
      prev.map((j) => (j.id === jogadorSelecionado.id ? jogadorSelecionado : j))
    );
    setModalVisible(false);
  };

  const escolherFoto = async () => {
    let resultado = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!resultado.canceled) {
      setJogadorSelecionado({ ...jogadorSelecionado, foto: { uri: resultado.assets[0].uri } });
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => editarJogador(item)}>
      {item.foto && <Image source={item.foto} style={styles.foto} />}
      <View>
        <Text style={styles.nome}>{item.nome}</Text>
        <Text style={styles.nascimento}>Nascimento: {item.nascimento}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/alegria-bg.jpg')}
      style={styles.background}
      resizeMode="cover"
      imageStyle={{ opacity: 0.15 }}
    >
      <FlatList
        data={jogadores}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.lista}
      />

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.input}
            value={jogadorSelecionado?.posicao}
            placeholder="Posição"
            onChangeText={(text) => setJogadorSelecionado({ ...jogadorSelecionado, posicao: text })}
          />
          <TextInput
            style={styles.input}
            value={jogadorSelecionado?.cidade}
            placeholder="Cidade"
            onChangeText={(text) => setJogadorSelecionado({ ...jogadorSelecionado, cidade: text })}
          />
          <TextInput
            style={styles.input}
            value={jogadorSelecionado?.video}
            placeholder="Link do vídeo"
            onChangeText={(text) => setJogadorSelecionado({ ...jogadorSelecionado, video: text })}
          />
          <TouchableOpacity style={styles.botaoFoto} onPress={escolherFoto}>
            <Text style={styles.textoBotao}>Selecionar Foto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoSalvar} onPress={salvarEdicao}>
            <Text style={styles.textoBotao}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  lista: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    padding: 12,
    marginBottom: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  foto: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  nascimento: {
    fontSize: 14,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  botaoFoto: {
    backgroundColor: '#666',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  botaoSalvar: {
    backgroundColor: '#000',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
