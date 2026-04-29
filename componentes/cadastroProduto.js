import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Alert } from "react-native";
import styles from "../estilos/estilos";
import { useState } from "react";
import { apiService } from "../services/api";

export default function CadastroProduto() {
    const [produto, setProduto] = useState({ nome: '', categoria: '', preco: '' });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!produto.nome.trim()) newErrors.nome = 'Nome é obrigatório';
        if (!produto.categoria.trim()) newErrors.categoria = 'Categoria é obrigatória';
        if (!produto.preco.trim()) {
            newErrors.preco = 'Preço é obrigatório';
        } else if (isNaN(parseFloat(produto.preco)) || parseFloat(produto.preco) <= 0) {
            newErrors.preco = 'Preço deve ser um número maior que zero';
        }
        return newErrors;
    };

    const adicionarProduto = async () => {
        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setLoading(true);
        try {
            await apiService.criarProduto({
                nome: produto.nome,
                categoria: produto.categoria,
                preco: parseFloat(produto.preco)
            });
            Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
            setProduto({ nome: '', categoria: '', preco: '' });
        } catch (error) {
            Alert.alert('Erro', 'Falha ao cadastrar produto');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>🛍️ Novo Produto</Text>

            <Text style={styles.cardLabel}>Nome do Produto</Text>
            <TextInput
                style={[styles.input, errors.nome && styles.inputError]}
                placeholder="Ex: Notebook, Mouse..."
                value={produto.nome}
                onChangeText={(text) => {
                    setProduto({ ...produto, nome: text });
                    if (errors.nome) setErrors({ ...errors, nome: '' });
                }}
                editable={!loading}
            />
            {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

            <Text style={styles.cardLabel}>Categoria</Text>
            <TextInput
                style={[styles.input, errors.categoria && styles.inputError]}
                placeholder="Ex: Eletrônicos, Alimentos..."
                value={produto.categoria}
                onChangeText={(text) => {
                    setProduto({ ...produto, categoria: text });
                    if (errors.categoria) setErrors({ ...errors, categoria: '' });
                }}
                editable={!loading}
            />
            {errors.categoria && <Text style={styles.errorText}>{errors.categoria}</Text>}

            <Text style={styles.cardLabel}>Preço (R$)</Text>
            <TextInput
                style={[styles.input, errors.preco && styles.inputError]}
                placeholder="0.00"
                value={produto.preco}
                onChangeText={(text) => {
                    setProduto({ ...produto, preco: text });
                    if (errors.preco) setErrors({ ...errors, preco: '' });
                }}
                keyboardType="decimal-pad"
                editable={!loading}
            />
            {errors.preco && <Text style={styles.errorText}>{errors.preco}</Text>}

            <TouchableOpacity
                style={[styles.button, loading && { opacity: 0.6 }]}
                onPress={adicionarProduto}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={styles.buttonText}>✓ Gravar Produto</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}