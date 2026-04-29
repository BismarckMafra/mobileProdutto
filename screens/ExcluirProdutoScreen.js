import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import ExcluirProduto from '../componentes/excluirProduto';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function ExcluirProdutoScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Excluir Produto" subtitle="Remove um produto do sistema" />
      <ScrollView style={styles.container}>
        <ExcluirProduto />
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