import { FlatList, View, Text, ActivityIndicator } from "react-native";
import CardUsuario from "./cardUsuario";
import styles from "../estilos/estilos";
import { ScrollView } from "react-native-web";

export default function ListarUsuarios({ db, loading, onDelete, onEdit }) {
 
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366F1" />
        <Text style={styles.loadingText}>Carregando usuários...</Text>
      </View>
    );
  }

  if (!db || db.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={{ fontSize: 48, marginBottom: 12 }}>👥</Text>
        <Text style={styles.emptyText}>Nenhum usuário cadastrado</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={db}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardUsuario
          props={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      )}
      scrollEnabled={true}
    />
  );
}