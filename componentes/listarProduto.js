import { FlatList, View, Text, ActivityIndicator } from "react-native";
import CardProduto from "./cardProduto";
import styles from "../estilos/estilos";


export default function ListarProdutos({ db, onDelete, onEdit, loading, refreshing, onRefresh }) {
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Carregando produtos...</Text>
      </View>
    );
  }

  if (!db || db.length === 0) {
    return (

      <View style={styles.emptyContainer}>
        <Text style={{ fontSize: 48, marginBottom: 12 }}>🛍️</Text>
        <Text style={styles.emptyText}>Nenhum produto cadastrado</Text>
      </View>

    );
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 20 }}
        data={db}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardProduto
            props={item}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        )}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>

  );
}