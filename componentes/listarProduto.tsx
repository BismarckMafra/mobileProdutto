"Use client";

import { FlatList, View, Text, ActivityIndicator } from "react-native";
import CardProduto from "./cardProduto";
import styles from "../estilos/estilos";
import { Produto } from ".././lib/produtoService";
import { useState } from "react";

interface ListaProdutosProps {
  produtos: Produto[];
  onRefresh: () => void;
}

export default function ListarProdutos({ produtos, onRefresh }: ListaProdutosProps) {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Carregando produtos...</Text>
      </View>
    );
  }

  if (!produtos || produtos.length === 0) {
    return (

      <View style={styles.emptyContainer}>
        <Text style={{ fontSize: 48, marginBottom: 12 }}>🛍️</Text>
        <Text style={styles.emptyText}>Nenhum produto cadastrado</Text>
      </View>

    );
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: 16 }}>

      {produtos.map((produto) => (
        <div key={produto.id} className="rounded-xl bg-white p-4 shadow">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{produto.nome}</h3>
            <span className="text-sm text-gray-600">ID: {produto.id}</span>
          </div>
          <p className="mb-2 text-gray-700">
            <strong>Marca:</strong> {produto.categoria}
          </p>
          <p className="text-lg font-bold text-green-600">
            R$ {Number(produto.preco).toFixed(2)}
          </p>
        </div>
      ))};
    </View>
  );
}


