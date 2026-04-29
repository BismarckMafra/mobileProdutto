import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Alterar from '../componentes/alterar';
import styles from '../estilos/estilos';
import Header from '../componentes/header';

export default function AlterarScreen({ navigation }) {
  return (
    <View style={styles.screenWrapper}>
      <Header title="Alterar Usuário" subtitle="Edite os dados de um usuário" />
      <ScrollView style={styles.container}>
        <Alterar />
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