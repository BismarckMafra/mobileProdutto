import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Cadastro from '../componentes/cadastro';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Cadastro de Usuário" subtitle="Adicione um novo usuário" />
      <ScrollView style={[styles.container, { paddingHorizontal: 16 }]} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <Cadastro />
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