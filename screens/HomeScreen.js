import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import styles, { colors } from '../estilos/estilos.js';
import Header from '../componentes/header';

export default function HomeScreen({ navigation }) {
  const usuarioOptions = [
    { title: 'Cadastrar', screen: 'Cadastro', icon: '➕' },
    { title: 'Listar', screen: 'Listar', icon: '📋' },
    { title: 'Alterar', screen: 'Alterar', icon: '✏️' },
    { title: 'Excluir', screen: 'Excluir', icon: '🗑️' },
  ];

  const produtoOptions = [
    { title: 'Cadastrar', screen: 'CadastroProduto', icon: '➕' },
    { title: 'Listar', screen: 'ListarProduto', icon: '📋' },
    { title: 'Alterar', screen: 'AlterarProduto', icon: '✏️' },
    { title: 'Excluir', screen: 'ExcluirProduto', icon: '🗑️' },
  ];

  const renderMenuGrid = (options) => (
    <View style={styles.navGrid}>
      {options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.navCard, { backgroundColor: colors.white }]}
          onPress={() => navigation.navigate(option.screen)}
          activeOpacity={0.7}
        >
          <Text style={{ fontSize: 32, marginBottom: 8 }}>{option.icon}</Text>
          <Text style={styles.navCardText}>{option.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.screenWrapper}>
      <Header title="Gestão de Dados" subtitle="Usuários e Produtos" />
      
      <ScrollView style={styles.container} showsVerticalScrollIndicator={true}>
        {/* Seção de Usuários */}
        <View style={[styles.formContainer, { marginTop: 8 }]}>
          <Text style={styles.formTitle}>👥 Gerenciar Usuários</Text>
          {renderMenuGrid(usuarioOptions)}
        </View>

        {/* Seção de Produtos */}
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>🛍️ Gerenciar Produtos</Text>
          {renderMenuGrid(produtoOptions)}
        </View>
      </ScrollView>
    </View>
  );
}