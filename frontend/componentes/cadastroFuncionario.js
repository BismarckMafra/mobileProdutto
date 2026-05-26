import { View, TextInput, TouchableOpacity, Text, ActivityIndicator, Alert } from "react-native";
import styles from "../estilos/estilos";
import { useState } from "react";
import { firebaseUsuariosService as usuariosService } from "../../services/firebase/firebaseUsuariosService";

export default function CadastroFuncionario() {
    const [user, setUser] = useState({ nome: '', email: '', senha: '', cargo: '' });
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        if (!user.nome.trim()) newErrors.nome = 'Nome é obrigatório';
        if (!user.email.trim()) newErrors.email = 'Email é obrigatório';
        if (user.email.trim() && !user.email.includes('@')) newErrors.email = 'Email inválido';
        if (!user.senha.trim()) newErrors.senha = 'Senha é obrigatória';
        if (!user.cargo.trim()) newErrors.cargo = 'Cargo é obrigatório';
        return newErrors;
    };

    const adicionarUsuario = async () => {
        const newErrors = validateForm();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return;

        setLoading(true);
        try {
            const response = await usuariosService.criar({ nome: user.nome, email: user.email, senha: user.senha, cargo: user.cargo });
            Alert.alert(
                '✅ Sucesso',
                `Usuário "${user.nome}" cadastrado com sucesso!`,
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            setUser({ nome: '', email: '', senha: '', cargo: '' });
                        }
                    }
                ]
            );
        } catch (error) {
            Alert.alert(
                '❌ Erro ao Cadastrar',
                `Motivo: ${error.message || 'Falha ao cadastrar usuário. Verifique sua conexão.'}`,
                [{ text: 'OK' }]
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.formContainer}>
            <Text style={styles.formTitle}>📝 Novo Funcionário</Text>

            <Text style={styles.cardLabel}>Nome</Text>
            <TextInput
                style={[styles.input, errors.nome && styles.inputError]}
                placeholder="Digite seu nome completo"
                value={user.nome}
                onChangeText={(text) => {
                    setUser({ ...user, nome: text });
                    if (errors.nome) setErrors({ ...errors, nome: '' });
                }}
                editable={!loading}
            />
            {errors.nome && <Text style={styles.errorText}>{errors.nome}</Text>}

            <Text style={styles.cardLabel}>Email</Text>
            <TextInput
                style={[styles.input, errors.email && styles.inputError]}
                placeholder="seu.email@exemplo.com"
                value={user.email}
                onChangeText={(text) => {
                    setUser({ ...user, email: text });
                    if (errors.email) setErrors({ ...errors, email: '' });
                }}
                keyboardType="email-address"
                editable={!loading}
            />
            {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <Text style={styles.cardLabel}>Senha</Text>
            <TextInput
                style={[styles.input, errors.senha && styles.inputError]}
                placeholder="Digite sua senha"
                value={user.senha}
                onChangeText={(text) => {
                    setUser({ ...user, senha: text });
                    if (errors.senha) setErrors({ ...errors, senha: '' });
                }}
                secureTextEntry
                editable={!loading}
            />
            {errors.senha && <Text style={styles.errorText}>{errors.senha}</Text>}

            <Text style={styles.cardLabel}>Cargo</Text>
            <TextInput
                style={[styles.input, errors.cargo && styles.inputError]}
                placeholder="Digite o cargo do funcionário"
                value={user.cargo}
                onChangeText={(text) => {
                    setUser({ ...user, cargo: text });
                    if (errors.cargo) setErrors({ ...errors, cargo: '' });
                }}
                editable={!loading}
            />
            {errors.cargo && <Text style={styles.errorText}>{errors.cargo}</Text>}

            <TouchableOpacity
                style={[styles.button, loading && { opacity: 0.6 }]}
                onPress={adicionarUsuario}
                disabled={loading}
            >
                {loading ? (
                    <ActivityIndicator color="white" />
                ) : (
                    <Text style={styles.buttonText}>✓ Gravar Funcionário</Text>
                )}
            </TouchableOpacity>
        </View>
    );
}