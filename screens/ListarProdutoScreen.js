import { View, ScrollView, RefreshControl, TouchableOpacity, Text } from 'react-native';
import { useEffect, useState } from 'react';
import ListarProdutos from '../componentes/listarProduto';
import styles from '../estilos/estilos';
import Header from '../componentes/header';
import { apiService } from '../services/api';

export default function ListarProdutoScreen({ navigation }) {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchProdutos = async () => {
    try {
      const data = await apiService.getProdutos();
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchProdutos();
    const unsubscribe = navigation.addListener('focus', fetchProdutos);
    return unsubscribe;
  }, [navigation]);

  const onRefresh = () => {
    setRefreshing(true);
    fetchProdutos();
  };

  const excluirProduto = async (id) => {
    try {
      await apiService.deletarProduto(id);
      setProdutos(produtos.filter(p => p.id !== id));
    } catch (error) {
      console.error('Erro ao deletar:', error);
    }
  };

  const editarProduto = (id) => {
    navigation.navigate('AlterarProduto', { id });
  };

  return (
    <View style={{ flex: 1 }}>
      <Header title="Produtos" subtitle={`Total: ${produtos.length} registros`} />

    <View style={{ flex: 1 }}>
      <ListarProdutos
        db={produtos}
        onDelete={excluirProduto}
        onEdit={editarProduto}
        loading={loading}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>

    <TouchableOpacity
      style={[
        styles.button,
        { position: 'absolute', bottom: 20, left: 16, right: 16 }
      ]}
      onPress={() => navigation.goBack()}
    >
      <Text style={styles.buttonText}>← Voltar</Text>
    </TouchableOpacity>
  </View>
);
}