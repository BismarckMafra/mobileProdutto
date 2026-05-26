import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import LoginFuncionario from '../componentes/loginFuncionario';
import styles from '../estilos/estilos';
import Header from '../componentes/header';
import { useEffect } from 'react';
import { useAuth } from '../contexto/useAuth';

export default function LoginScreen({ navigation }) {
  const { usuarioLogado } = useAuth();

  useEffect(() => {
    // Se já está logado, redirecionar para home
    if (usuarioLogado) {
      navigation.replace('Home');
    }
  }, [usuarioLogado, navigation]);

  return (
    <View style={styles.screenWrapper}>
      <Header title="Login de Funcionário" subtitle="Acesse o sistema com suas credenciais" />
      <ScrollView style={[styles.container, { paddingHorizontal: 16 }]} contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}>
        <LoginFuncionario />
      </ScrollView>
    </View>
  );
}
