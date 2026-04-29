import Alterar from "./alterar";
import Cadastro from "./cadastro";
import { View, Text } from "react-native";
import styles from "../estilos/estilos";

export default function Header() {
    return (
        <View style={styles.header}>

            <Text style={styles.headerTitle}>Gestão de Dados</Text>
            <Text style={styles.headerSubtitle}>Usuários e Produtos</Text>

        </View>
    );
}