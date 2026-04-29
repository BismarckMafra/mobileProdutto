import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Excluir from '../componentes/excluir';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function ExcluirScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Excluir Usuário" subtitle="Remove um usuário do sistema" />
      <ScrollView style={styles.container}>
        <Excluir />
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
