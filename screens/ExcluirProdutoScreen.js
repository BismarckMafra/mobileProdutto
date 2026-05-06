import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import ExcluirProduto from '../componentes/excluirProduto';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function ExcluirProdutoScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Excluir Produto" subtitle="Remove um produto do sistema" />
      <ScrollView style={[styles.container, { paddingHorizontal: 16 }]} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <ExcluirProduto />
      </ScrollView>
      <TouchableOpacity
        style={[styles.button, { marginHorizontal: 16, marginBottom: 16 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>← Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}