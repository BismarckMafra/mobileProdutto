import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Cadastro from '../componentes/cadastro';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function CadastroScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Cadastro de Usuário" subtitle="Adicione um novo usuário" />
      <ScrollView style={styles.container}>
        <Cadastro />
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