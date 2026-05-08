import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CadastroProduto from '../componentes/cadastroProduto';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function CadastroProdutoScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Cadastro de Produto" subtitle="Adicione um novo produto" />
      <ScrollView style={[styles.container, { paddingHorizontal: 16 }]} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <CadastroProduto />
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