import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AlterarProduto from '../componentes/alterarProduto.js';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function AlterarProdutoScreen({ navigation }) {
  const route = useRoute();
  const { id } = route.params || {};

  return (
    <View style={styles.screenWrapper}>
      <Header title="Alterar Produto" subtitle="Edite os dados de um produto" />

      <AlterarProduto initialId={id} />

      <TouchableOpacity
        style={[styles.button, { position: 'absolute', bottom: 20, left: 16, right: 16, zIndex: 10 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}