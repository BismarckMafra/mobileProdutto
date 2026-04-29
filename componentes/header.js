import Alterar from "./alterar";
import Cadastro from "./cadastro";
import { View, Text } from "react-native";
import styles from "../estilos/estilos";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> We Win</Text>
            <Text style={styles.headerSubtitle}>Cadastre-se e Gerencie seus Produtos</Text>
        </View>
    );
}