import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CadastroProduto from '../componentes/cadastroProduto';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function CadastroProdutoScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Cadastro de Produto" subtitle="Adicione um novo produto" />
      <ScrollView style={styles.container}>
        <CadastroProduto />
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, { position: 'absolute', bottom: 20, left: 16, right: 16, zIndex: 10 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}