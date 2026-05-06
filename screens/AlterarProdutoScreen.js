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
      <ScrollView style={[styles.container, { paddingHorizontal: 16 }]} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <AlterarProduto initialId={id} />
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